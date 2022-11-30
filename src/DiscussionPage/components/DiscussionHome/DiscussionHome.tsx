import axios from "axios";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { HOST } from "../../../../config/default";
import { SearchBar } from "../../../components/searchBar/searchBar.component";
import { QuestionComponent } from "./components/QuestionComponent";
import { Question, QuestionTile } from "./components/questionTile";
import "./DiscussionHome.css";

export const DiscussionHome = () => {
  const [questionId, setQuestionId] = useState("");
  const [searchedText, setSearchedText] = useState("");
  const [page, setPage] = useState(1);

  // custom hook for getting all questions
  const Questions = useGetQuestions();

  // custom hook for getting searched questions
  const { searchedQuestion, loading, error, hasMore } = useDiscussionSearch(
    searchedText,
    page
  );

  const observer = useRef<IntersectionObserver | null>(null);
  const lastQuestionRef = useCallback(
    (node: Element) => {
      if(loading) return;

      // disconnecting the observer from previous last question div
      if(observer) observer.current?.disconnect();
      observer.current = new IntersectionObserver(entries =>{
          if(entries[0].isIntersecting && hasMore){
            setPage(previousPageNumber => previousPageNumber+1);
          }
      });

      if(node) observer.current.observe(node);
    },
    [loading,hasMore]
  );
  /*

    https://dmitripavlutin.com/react-usecallback/

    when passing this set function to child component, it will not disturb the memoized state of 
    child component, as every time it useCallback will return the same function object(same reference)

    so, React.memo will not render child which is questionList,(as the props(questions and set function) are same as before)
  
  */

  const HandleSetQuestionId = useCallback(
    (val: string) => setQuestionId(val),
    []
  );

  return (
    <div className="discussion__home__parent__container">
      <div>
        <SearchBar
          placeholder="Search Questions"
          onChange={(val) => setSearchedText(val)}
        />
      </div>
      <div>
        <div className="discussion__home__quesions__wrapper">
          <div className="discussion__home__quesions__container">
            <QuestionList
              Questions={
                searchedQuestion.length > 0 ? searchedQuestion : Questions
              }
              setQuestionId={HandleSetQuestionId}
              setLastQuestionRef={lastQuestionRef}
            />
            <div>{loading && 'Loading...'}</div>
          </div>
        </div>
        <div className="discussion__home__side__container">
          <QuestionComponent id={questionId} />
        </div>
      </div>
    </div>
  );
};

//  used react memo
// it will only check for props, if props changes then re-render
// else it will use the previous rendered
const QuestionList: React.FC<{
  Questions: Array<Question>;
  setQuestionId: (val: string) => void;
  setLastQuestionRef: (node: Element ) => void;
}> = React.memo(({ Questions, setQuestionId, setLastQuestionRef }) => {
  return (
    <>
      {Questions.length > 0 ? (
        Questions.map((data, index) => {
          if (Questions.length == index + 1) {
            return (
              <QuestionTile
                ref={setLastQuestionRef}
                key={index}
                data={data}
                setId={(val: string) => setQuestionId(val)}
              />
            );
          } else {
            return (
              <QuestionTile
                key={index}
                data={data}
                setId={(val: string) => setQuestionId(val)}
              />
            );
          }
        })
      ) : (
        // loading component
        <></>
      )}
    </>
  );
});

// custom hook for getall questions
const useGetQuestions = () => {
  const [questions, setQuestions] = useState<Array<Question>>([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `${HOST}/api/v1/discussion/question/getAll`,
    }).then((res) => setQuestions(res.data));
  }, []);
  return questions;
};

// custom hook for fetching search query

// applied debouncer

const useDiscussionSearch = (query: string, page: number) => {
  const q = query.split(" ").join("+");
  const limit = 5;
  const queryString = `query=${q}&page=${page}&limit=${limit}`;
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Array<Question>>([]);

  //   erasing previous results for new query
  useEffect(() => {
    setData([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    //https://www.freecodecamp.org/news/debouncing-explained/#:~:text=Suppose%20we%20have%20an%20API,t%20get%20fired%20so%20often.
    const debounce = setTimeout(() => {
      axios({
        method: "GET",
        url: `${HOST}/api/v1/discussion/question/search?`.concat(queryString),
      })
        .then((res) => {
          setData((previous) => [...previous, ...res.data.results]);
          setHasMore(res.data.results.length > 0);
          setLoading(false);
        })
        .catch((error) => {
          setError(true);
          console.log(error);
        });
    }, 1500);
    return () => clearTimeout(debounce);
  }, [query, page]);
  return { searchedQuestion: data, loading, error, hasMore };
};
