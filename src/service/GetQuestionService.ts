import { HOST } from "../../config/default";


export const getQuestionFetch = async (id:string)=>{
    return await fetch(`${HOST}/api/v1/discussion/question/?questionId=`.concat(id), {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      }).then((res) => res.json());
}