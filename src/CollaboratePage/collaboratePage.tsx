import React, { useState,useCallback } from "react";
import ReactMarkdown from "react-markdown";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";

export const CollaboratePage = () => {
  const [content, setContent] = React.useState("");
  const [id, setId] = useState<number>();
  const inpRef = React.useRef<HTMLInputElement>(null);
  const data = useGetItem();

  const HandleClick = () => {
    const text = (inpRef.current as HTMLInputElement).value;
    console.log(text);
    setContent(text);
  };

  const HandleSetId = useCallback((val:number)=>{
    setId(val);
  },[])

  console.log('Id ->',id)

  return (
    <div>
      <input ref={inpRef} type={"text"} />
      <button onClick={HandleClick}>change</button>
      <p>{content}</p>
      <br></br>
      <br></br>
      <Child items={data} setId = {HandleSetId}/>
      {/* <List items={data}/> */}
    </div>
  );
};

const useGetItem = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/todos",
    }).then((res) => {
      setData(res.data);
    });
  }, []);
  return data;
};

interface Item {
  id: number;
  title: string;
}

const Child = React.memo(
  ({ items, setId }: { items: Array<Item>; setId: (val: number) => void }) => {
    console.log("rendering child");
    return (
      <div>
        {items.length > 0 ? (
          items.map((item, i) => {
            return (
              <div>
                <div key={i} onClick={()=> setId(item.id)}>{item.title}</div>
                <br></br>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    );
  }
);

const List = React.memo(
  ({ items}: { items: Array<Item>;}) => {
    console.log("rendering list");
    return (
      <div>
        {items.length > 0 ? (
          items.map((item, i) => {
            return (
              <div>
                <div key={i}>{item.title}</div>
                <br></br>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    );
  }
);
