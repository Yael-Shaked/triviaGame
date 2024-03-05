import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { StoreContext } from "../Models/StoreContex";
import Header from "./Header";
import GameScreen from "./GameScreen";
import backgroundImage from "../assets/image/Untitle.png";
import StartScreen from "./StartScreen";
import HelpPage from "./HelpPage";
import FinalScoreScreen from "./FinalScoreScreen";

const TriviaGame = observer(() => {
  const store = useContext(StoreContext);

  useEffect(() => {
    store!.fetchQuestions();
  }, [store]);

  if (store!.showHelp) {
    return (
      <HelpPage onBackToStart={() => store!.handleBackToStartFromHelp()} />
    );
  }

  if (!store!.startGame) {
    return (
      <StartScreen
        onStartGame={() => store!.handleStartGame()}
        help={() => store!.toggleShowHelp()}
        highScore={parseInt(localStorage.getItem("highScore") || "0", 10)}
      />
    );
  }
  if (store!.showFinalScore) {
    return (
      <FinalScoreScreen
        score={store!.score}
        onBackToStart={store!.handleResetGame}
      />
    );
  }

  if (!store!.questions.length) {
    return <div>Loading questions...</div>;
  }
  const question = store!.questions[store!.currentQuestionIndex];

  return (
    <div className="flex justify-center items-center bg-sky-100 min-h-screen ">
      <div
        className="relative w-custom rounded shadow-lg "
        style={{
          height: "calc(100vh - 1rem)",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-20"></div>

        <div className="relative p-6">
          <Header
            onBackToStart={store!.handleResetGame}
            currentQuestionIndex={store!.currentQuestionIndex}
            totalQuestions={store!.questions.length}
          />

          <GameScreen
            questionText={question.question}
            answers={question.answers}
            onSelectAnswer={(selectedAnswer) =>
              store!.handleAnswerSelect(selectedAnswer)
            }
            disabled={store!.gameDone}
            score={store!.score}
          />
        </div>
      </div>
    </div>
  );
});

export default TriviaGame;
