import { types } from "mobx-state-tree";

const QuestionModel = types.model("Question", {
  id: types.string,
  question: types.string,
  answers: types.array(types.string),
  correctAnswer: types.string,
});
export { QuestionModel };
