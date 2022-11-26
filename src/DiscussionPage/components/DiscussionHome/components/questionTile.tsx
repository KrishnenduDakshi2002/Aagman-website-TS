import React from "react";
import "./questionTile.css";
import { AiOutlineLike } from "react-icons/ai";
import { BsReverseLayoutSidebarReverse, BsTags } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import { Tag } from "./Tag";

interface Question {
  question : string;
  description : string;
  author : {
    userName : string;
  }
  likes : number;
  tags : Array<string>;
  answers : Array<string>;
  createdAt : Date;
  updatedAt : Date;
}
interface Props{
  data: Question;
}

export const QuestionTile:React.FC<Props> = ({data}) => {
  const {question,description,author,tags,likes,answers,createdAt,updatedAt} = data;

  return (
    <div className="discussionHome__question_tile">
      <div>
        <div><AiOutlineLike size={25} /><p>{likes}</p></div>
        <div><BiCommentDots size={25} /><p>{answers.length}</p></div>
        <BsReverseLayoutSidebarReverse size={22} />
      </div>
      <div className="discussionHome__question_body">
        <div>
          {question}
        </div>
        <div>
          {description}
        </div>
        <div>
          posted by <span>{author.userName}</span>
        </div>
        <div>a day ago</div>
        <div className="discussionHome__question_tags_wrapper">
          {
            tags.map((tag,index)=> <Tag key={index} tag={tag}/>)
          }
        </div>
      </div>
    </div>
  );
};
