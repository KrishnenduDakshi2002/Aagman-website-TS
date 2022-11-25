import React from "react";
import "./questionTile.css";
import { AiOutlineLike } from "react-icons/ai";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import { Tag } from "./Tag";

export const QuestionTile = () => {
  return (
    <div className="discussionHome__question_tile">
      <div>
        <AiOutlineLike size={25} />
        <BiCommentDots size={25} />
        <BsReverseLayoutSidebarReverse size={22} />
      </div>
      <div className="discussionHome__question_body">
        <div>
          On Waiting Android Studio Waiting for the text optional module to be
          downloaded. Please wait.
        </div>
        <div>
          I need to render multi vertex polygons using OpenGL. Each frame I
          should get polygons from some source and render them. I need to render
          multi vertex polygons using OpenGL. Each frame I should get polygons
          from some source and render them.
        </div>
        <div>
          posted by <span>admin</span>
        </div>
        <div>a day ago</div>
        <div className="discussionHome__question_tags_wrapper">
          <Tag tag="array" />
          <Tag tag="java" />
          <Tag tag="Javascript" />
          <Tag tag="python" />
          <Tag tag="object" />
          <Tag tag="Array" />
          <Tag tag="Array" />
          <Tag tag="Array" />
          <Tag tag="Array" />
          <Tag tag="Array" />
        </div>
      </div>
    </div>
  );
};
