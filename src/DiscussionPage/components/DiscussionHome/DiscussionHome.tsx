import React, { useEffect, useState } from "react";
import { SearchBar } from "../../../components/searchBar/searchBar.component";
import { GetAllQuestionsFetch } from "../../../service/AllQuestionsService";
import { QuestionComponent } from "./components/QuestionComponent";
import { QuestionTile } from "./components/questionTile";
import "./DiscussionHome.css";



export const DiscussionHome = () => {
  const [Questions, setQuestions] = useState([]);
  const [questionId, setQuestionId] = useState("");
  useEffect(() => {
    (async () =>
      await GetAllQuestionsFetch().then((data) => setQuestions(data)))(); // calling the function
  }, []);

  return (
    <div className="discussion__home__parent__container">
      <div>
        <SearchBar placeholder="Search Questions" />
      </div>
      <div>
        <div className="discussion__home__quesions__wrapper">
          <div className="discussion__home__quesions__container">
            {Questions.length > 0 ? (
              Questions.map((data, index) => {
                return <QuestionTile key={index} data={data} setId={(val:string)=> setQuestionId(val)}/>;
              })
            ) : (
              // loading component
              <></>
            )}
          </div>
        </div>
        <div className="discussion__home__side__container">
          <QuestionComponent id={questionId}/>
        </div>
      </div>
    </div>
  );
};
