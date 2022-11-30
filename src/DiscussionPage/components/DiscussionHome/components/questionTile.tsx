import React from "react";
import "./questionTile.css";
import { Link } from "react-router-dom";
import {AiOutlineLike } from "react-icons/ai";
import { BsReverseLayoutSidebarReverse, BsTags } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import { Tag } from "./Tag";

export interface Question {
  _id: string;
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
  setId: (val:string)=>void
}
//https://reactjs.org/docs/forwarding-refs.html
//https://stackoverflow.com/questions/60052450/in-react-using-typescript-how-do-i-pass-a-ref-to-a-custom-component-using-reff
export const QuestionTile = React.forwardRef<any, Props>(({data,setId},ref) => {
  const {_id,question,description,author,tags,likes,answers,createdAt,updatedAt} = data;

  return (
    <div ref={ref} className="discussionHome__question_tile">
      <div>
        <div><AiOutlineLike size={25} /><p>{likes}</p></div>
        <div><BiCommentDots size={25} /><p>{answers.length}</p></div>
        <div onClick={()=>setId(_id)}> <BsReverseLayoutSidebarReverse size={22} /></div>
       
      </div>
      <div className="discussionHome__question_body">
        <div>
          <Link to={'/discussion/question/'.concat(_id)}>
              {question}
          </Link>
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
});
