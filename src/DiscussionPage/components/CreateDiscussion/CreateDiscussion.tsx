import React, { useState, useRef } from "react";
import { GrFormClose } from "react-icons/gr";
import { Tag } from "../DiscussionHome/components/Tag";
import "./createDiscussion.css";

const EditTag: React.FC<{
  tagName: string;
  HandleDelete: (tagName: string) => void;
}> = ({ tagName,HandleDelete }) => (
  <div style={{ display: "flex", alignItems: "center", margin: "0.5rem" }}>
    <Tag tag={tagName} />
    <div onClick={()=>HandleDelete(tagName)}>
      <GrFormClose size={25} />
    </div>
  </div>
);

export const CreateDiscussion = () => {
  const [tags, setTags] = useState<Array<string>>([]);
  const tagRef = useRef<HTMLInputElement>(null);
  const HandleAddTag = () => {
    const tag = tagRef.current?.value;
    if (typeof tag == "string" && tag != "") {
      setTags([...tags, tag]);
    }
    if (tagRef.current) tagRef.current.value = "";
  };
  const HandleDeleteTag = (tagName: string) => {
    setTags(tags.filter((tag) => tag.toLowerCase() !== tagName.toLowerCase()));
  };
  return (
    <div className="createDiscussion__wrapper">
      <div>
        <label>Question</label>
        <textarea placeholder="Enter Question" />
        <label>Description</label>
        <textarea placeholder="Enter Description" />
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
            <EditTag tagName={tag} HandleDelete={HandleDeleteTag}/>
          ))}
        </div>
      </div>
    </div>
  );
};
