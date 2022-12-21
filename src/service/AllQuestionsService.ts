
import { HOST } from "../../AppConfig/host";

export const GetAllQuestionsFetch = async()=>{
    return await fetch(`${HOST}/api/v1/discussion/question/getAll`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      }).then((res) => res.json());
}