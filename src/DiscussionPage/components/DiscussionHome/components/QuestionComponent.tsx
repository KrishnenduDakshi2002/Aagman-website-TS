import React from "react";
import { AnswerTile } from "./AnswerTile";
import "./QuestionComponent.css";
import { Tag } from "./Tag";
export const QuestionComponent = () => {
  return (
    <div className="questionComponent__parent__wrapper">
      <div className="questionComponent__parent__container">
        <div className="questionComponent__container">
          <div>Question Title</div>
          <div>Question description</div>
          <div>
            posted by <span>admin</span>
          </div>
          <div>a day ago</div>
          <div className="tags">
            <div>
                <Tag tag="array" />
                <Tag tag="java" />
                <Tag tag="Javascript" />
                <Tag tag="python" />
                <Tag tag="object" />
                <Tag tag="Array" />
            </div>
          </div>
        </div>
        
        <div className="questionComponent__answers__wrapper">
          <div>4 Answers</div>
          <AnswerTile/>
          <AnswerTile/>
          <AnswerTile/>
        </div>
      </div>
    </div>
  );
};
