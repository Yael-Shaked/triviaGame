import axios from "axios";
import { QuestionType } from "./Interfaces/QuestionType";

const fetchQuestions = (): Promise<QuestionType[]> => {
  return axios
    .get<QuestionType[]>("http://localhost:3001/questions")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching questions:", error);
      throw error;
    });
};

export { fetchQuestions };
