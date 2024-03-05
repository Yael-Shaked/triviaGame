import { types, flow, applySnapshot } from "mobx-state-tree";
import { QuestionModel } from "./QuestionModel";
import { fetchQuestions } from "../Service";
import { QuestionType } from "../Interfaces/QuestionType";

export interface IRootStore {
  gameDone: boolean | undefined;
  toggleShowHelp(): void;
  questions: QuestionType[];
  currentQuestionIndex: number;
  hasAnswered: boolean;
  startGame: boolean;
  showHelp: boolean;
  score: number;
  showFinalScore: boolean;
  fetchQuestions: () => Promise<void>;
  handleStartGame: () => void;
  handleResetGame: () => void;
  handleBackToStartFromHelp: () => void;
  handleAnswerSelect: (selectedAnswer: string) => void;
  hendleNextQuestion: () => void;
}
const RootStore = types
  .model("RootStore", {
    questions: types.array(QuestionModel),
    currentQuestionIndex: types.optional(types.number, 0),
    hasAnswered: types.optional(types.boolean, false),
    startGame: types.optional(types.boolean, false),
    showHelp: types.optional(types.boolean, false),
    score: types.optional(types.number, 0),
    showFinalScore: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    fetchQuestions: flow(function* () {
      self.questions.clear();
      try {
        const questions: QuestionType[] = yield fetchQuestions();
        applySnapshot(self.questions, questions);
      } catch (error) {
        console.error("Failed to fetch questions", error);
      }
    }),
    handleStartGame() {
      self.startGame = true;
    },

    handleResetGame() {
      self.startGame = false;
      self.currentQuestionIndex = 0;
      self.hasAnswered = false;
      self.score = 0;
      self.showFinalScore = false;
      localStorage.removeItem("score");
    },
    handleBackToStartFromHelp() {
      self.showHelp = false;
    },

    handleAnswerSelect(selectedAnswer: string) {
      const correctAnswer =
        self.questions[self.currentQuestionIndex].correctAnswer;
      if (selectedAnswer === correctAnswer) {
        self.score += 1;
      }
      if (self.currentQuestionIndex < self.questions.length - 1) {
        self.currentQuestionIndex += 1;
        self.hasAnswered = false;
      } else {
        self.showFinalScore = true;
      }
    },

    toggleShowHelp() {
      self.showHelp = !self.showHelp;
    },
  }))
  .views((self) => ({
    get isLastQuestion() {
      return self.currentQuestionIndex === self.questions.length - 1;
    },
    get currentQuestion() {
      return self.questions.length > self.currentQuestionIndex
        ? self.questions[self.currentQuestionIndex]
        : null;
    },
  }));

export const rootStore = RootStore.create();
