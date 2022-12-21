
import { HOST } from "../../AppConfig/host";

export const CreateAnswerFetch = async(answer:string,questionId:string) => {
  const token = localStorage.getItem("authToken") as string;
  return await fetch(`${HOST}/api/v1/discussion/answer/post`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization":"Bearer ".concat(token)
    },
    body: JSON.stringify({
        answer,
        questionId
    }),
  }).then(res => res.json());
};
