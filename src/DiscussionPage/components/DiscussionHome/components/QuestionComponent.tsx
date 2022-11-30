import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import MDEditor from "@uiw/react-md-editor";
import { useParams, Link } from "react-router-dom";
import { getQuestionFetch } from "../../../../service/GetQuestionService";
import { AnswerTile } from "./AnswerTile";
import "./QuestionComponent.css";
import { Tag } from "./Tag";
import { CreateAnswerFetch } from "../../../../service/CreateAnswerService";

export interface AnswerInterface {
  _id: string;
  answer: string;
  likes : number;
  author: {
    userName: string;
  };
  comments: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Question {
  _id: string;
  question: string;
  description: string;
  author: {
    userName: string;
  };
  likes: number;
  tags: Array<string>;
  answers: Array<AnswerInterface>;
  createdAt: Date;
  updatedAt: Date;
}

export const QuestionComponent: React.FC<{ id?: string }> = ({ id }) => {
  const { questionId } = useParams();
  const [data, setData] = useState<Question | null>(null);
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    if (questionId) {
      (async () => getQuestionFetch(questionId).then((res) => setData(res)))();
      console.log("rendering questionComponent using questionId");
    } else if (id) {
      (async () =>
        getQuestionFetch(id).then((res) => {
          setData(res);
        }))();
      console.log("rendering questionComponent using id");
    }
  }, [id]);

  const HandleSubmit = async () => {
    const token = localStorage.getItem("authToken");
    const qid = questionId || id;
    if (token && qid) {
      const statusCode = await CreateAnswerFetch(answer, qid).then(
        (res) => res.statusCode
      );
      if (statusCode === 201) {
        // resetting the values
        setAnswer("");

        // create window pop up
        alert("Answer has been posted");
      } else {
        alert("Error while posting your query");
      }
    }
  };
  return (
    <div className="questionComponent__parent__wrapper">
      <div className="questionComponent__parent__container">
        <div className="questionComponent__container">
          <div>{data?.question}</div>
          <div data-color-mode="light">
            <MDEditor.Markdown
              source={data?.description}
              style={{ whiteSpace: "pre-wrap" }}
            />
          </div>
          <div>
            posted by <span>{data?.author.userName}</span>
          </div>
          <div>a day ago</div>
          <div className="tags">
            <div>
              {data?.tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
              ))}
            </div>
          </div>
          <div>
              <AiFillCaretUp size={50} color="lightgrey" />
            <p>{data?.likes}</p>
              <AiFillCaretDown size={50} color="lightgrey" />
          </div>
        </div>

        <div className="questionComponent__answers__wrapper">
          <div>{data?.answers.length} Answers</div>
          {data?.answers ?? length > 0 ? (
            data?.answers.map((answer, index) => <AnswerTile key={index} data={answer} />)
          ) : (
            <></>
          )}
        </div>
        <div>
          <MDEditor
            height={300}
            autoFocus
            className="markdown__editor"
            data-color-mode="light"
            value={answer}
            onChange={(text) => {
              if (text != undefined) setAnswer(text);
            }}
          />
        </div>
        <button onClick={HandleSubmit}>Post Answer</button>
      </div>
    </div>
  );
};
