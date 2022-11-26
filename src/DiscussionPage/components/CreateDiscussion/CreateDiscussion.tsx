import React, { useState, useRef, useReducer } from "react";
import { GrFormClose } from "react-icons/gr";
import { CreateQuestionFetch, Test } from "../../../service/CreateQuestionService";
import { Tag } from "../DiscussionHome/components/Tag";
import "./createDiscussion.css";

const EditTag: React.FC<{
  tagName: string;
  HandleDelete: (tagName: string) => void;
}> = ({ tagName, HandleDelete }) => (
  <div style={{ display: "flex", alignItems: "center", margin: "0.5rem" }}>
    <Tag tag={tagName} />
    <div onClick={() => HandleDelete(tagName)}>
      <GrFormClose size={25} />
    </div>
  </div>
);

export const CreateDiscussion = () => {
  const [tags, setTags] = useState<Array<string>>([]);
  const tagRef = useRef<HTMLInputElement>(null);
  const QuestionRef = useRef<HTMLTextAreaElement>(null);
  const DescriptionRef = useRef<HTMLTextAreaElement>(null);

  const HandleSubmit = async() => {
    console.log("submit clicked");
    //  non-null assertion !
    const question = QuestionRef.current!.value;
    const description = DescriptionRef.current!.value;
    console.log("called fetch  for->",question,description);
    const statusCode = await CreateQuestionFetch({
      question,
      description,
      tags,
    }).then(res => res.statusCode);
    if (statusCode === 201) {
      // resetting the values
      QuestionRef.current!.value = "";
      DescriptionRef.current!.value = "";
      setTags([]);

      // create window pop up
      alert("Question has been posted");
    }
    else{
      alert("Error while posting your query");
    }
  };

  const HandleAddTag = () => {
    const tag = tagRef.current!.value;
    if (typeof tag == "string" && tag != "") {
      setTags([...tags, tag]);
    }
    tagRef.current!.value = "";
  };
  const HandleDeleteTag = (tagName: string) => {
    setTags(tags.filter((tag) => tag.toLowerCase() !== tagName.toLowerCase()));
  };
  return (
    <div className="createDiscussion__wrapper">
      <div>
        <label>Question</label>
        <textarea ref={QuestionRef} placeholder="Enter Question" />
        <label>Description</label>
        <textarea ref={DescriptionRef} placeholder="Enter Description" />
        <button onClick={() => HandleSubmit()}>Submit</button>
      </div>
      <div>
        <label>Add Tags</label>
        <div className="createDiscussion__tag__form">
          <input ref={tagRef} placeholder="Tag" />
          <button
            onClick={() => {
              HandleAddTag();
            }}
          >
            Add tag
          </button>
        </div>
        <div className="createDiscussion__tags">
          {tags.map((tag) => (
            <EditTag tagName={tag} HandleDelete={HandleDeleteTag} />
          ))}
        </div>
      </div>
    </div>
  );
};
