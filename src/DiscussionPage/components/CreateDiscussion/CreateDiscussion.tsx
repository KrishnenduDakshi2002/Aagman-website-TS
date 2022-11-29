import React, { useState, useRef, useReducer } from "react";
import { GrFormClose } from "react-icons/gr";
import ReactMarkdown from "react-markdown";
import MDEditor from "@uiw/react-md-editor";
import {
  CreateQuestionFetch,
  Test,
} from "../../../service/CreateQuestionService";
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
  const [value, setValue] = React.useState("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([]);
  const tagRef = useRef<HTMLInputElement>(null);
  const QuestionRef = useRef<HTMLTextAreaElement>(null);

  const HandleSubmit = async () => {
    console.log("submit clicked");
    //  non-null assertion !
    const question = QuestionRef.current!.value;
    console.log("called fetch  for->", question, description);
    const statusCode = await CreateQuestionFetch({
      question,
      description,
      tags,
    }).then((res) => res.statusCode);
    if (statusCode === 201) {
      // resetting the values
      QuestionRef.current!.value = "";
      setDescription("");
      setTags([]);

      // create window pop up
      alert("Question has been posted");
    } else {
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
    <div className="createDiscussion__container">
      <div className="createDiscussion__wrapper">
        <div>
          <label>Question</label>
          <textarea ref={QuestionRef} placeholder="Enter Question" />
          {/* <textarea ref={DescriptionRef} placeholder="Enter Description" /> */}
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
            {tags.map((tag,index) => (
              <EditTag key={index} tagName={tag} HandleDelete={HandleDeleteTag} />
            ))}
          </div>
        </div>

        <div className="markdown__editor__container">
          <label>Description</label>
          <MDEditor
            height={300}
            autoFocus
            className="markdown__editor"
            data-color-mode="light"
            value={description}
            onChange={(text) => {
              if (text != undefined) setDescription(text);
            }}
          />
        </div>
        <div>
          <button
            className="createDiscussion__submit_btn"
            onClick={() => HandleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
