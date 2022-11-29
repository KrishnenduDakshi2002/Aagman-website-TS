import MDEditor from "@uiw/react-md-editor";
import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import "./AnswerTile.css";
import { AnswerInterface } from "./QuestionComponent";
interface AnswerProps {
  data: AnswerInterface;
}
export const AnswerTile: React.FC<AnswerProps> = ({ data }) => {
  return (
    <div className="answerTile__container">
      <div data-color-mode="light">
        <MDEditor.Markdown
          source={data.answer}
          style={{ whiteSpace: "pre-wrap", backgroundColor: "transparent" }}
        />
      </div>
      <p>
        posted by <span>{data.author.userName}</span>
      </p>
      <div>
        <AiFillCaretUp size={50} color="lightgrey" />
        <p>{data.likes}</p>
        <AiFillCaretDown size={50} color="lightgrey" />
      </div>
    </div>
  );
};
