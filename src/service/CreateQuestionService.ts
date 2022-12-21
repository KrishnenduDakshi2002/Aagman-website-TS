
import { HOST } from "../../AppConfig/host";

export const CreateQuestionFetch = async ({
  question,
  description,
  tags,
}: {
  question: string;
  description: string;
  tags: Array<string>;
}) => {
  const token = localStorage.getItem("authToken");
    if(token){
        return await fetch(`${HOST}/api/v1/discussion/question/post`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(token),
          },
          body: JSON.stringify({
            question,
            description,
            tags,
          }),
        }).then((res) => res.json());
      };
};

export const Test = async() => {
    return await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    ).then((res) => res.json());

};
