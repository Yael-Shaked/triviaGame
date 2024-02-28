import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import GameScreen from "./GameScreen";
import backgroundImage from "../assets/image/Untitle.png";
import StartScreen from "./StartScreen";
import HelpPage from "./HelpPage";
import FinalScoreScreen from "./FinalScoreScreen";

export interface QuestionType {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

const TriviaGame: React.FC = () => {
  const [questions, setquestions] = useState<QuestionType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [score, setScore] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/questions")
      .then((response) => {
        setquestions(response.data);
      })
      .catch((error) => console.error("Error fetching questions:", error));
    const savedScore = localStorage.getItem("score");
    if (savedScore !== null) {
      setScore(parseInt(savedScore, 10)); 
    }
  }, []);

  const handleStartGame = () => {
    setStartGame(true);
  };

  const handleResetGame = () => {
    setStartGame(false);
    setCurrentQuestion(0);
    setHasAnswered(false);
    setScore(0);
    setShowFinalScore(false);
    localStorage.removeItem("score");
  };

  const handleBackToStartFromHelp = () => {
    setShowHelp(false);
  };
  if (showHelp) {
    return <HelpPage onBackToStart={handleBackToStartFromHelp} />;
  }

  const highScore = localStorage.getItem('highScore') || '0';
  if (!startGame) {
    return (
      <StartScreen
        onStartGame={handleStartGame}
        help={() => setShowHelp(true)}
        highScore={parseInt(highScore, 10)}
      />
    );
  }
  if (showFinalScore) {
    return <FinalScoreScreen score={score} onBackToStart={handleResetGame} />;
  }

  const handleAnswerSelect = (selectedAnswer: string) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    let finalScoreUpdate = score;
    if (selectedAnswer === correctAnswer) {
      finalScoreUpdate = score + 1;
      setScore(finalScoreUpdate);
    }
    setTimeout(() => {
    if (currentQuestion < questions.length - 1) {

       setHasAnswered(true);
    
      setCurrentQuestion(prevIndex => prevIndex + 1); 
      setHasAnswered(false);
   
  } else {
    const highScore = parseInt(localStorage.getItem("highScore") || "0", 10);
    if (finalScoreUpdate > highScore) {
      localStorage.setItem("highScore", finalScoreUpdate.toString()); 
    }
    setShowFinalScore(true); 
  }
}, 1000);
};

  const isLastQuestion = currentQuestion === questions.length - 1;
  if (questions.length === 0) return <div>Loading questions...</div>;
  const question = questions[currentQuestion];
  const gameDone = isLastQuestion && hasAnswered;
  const background = { backgroundImage: `url(${backgroundImage})` };


  return (
    <div className="flex justify-center items-center bg-sky-100 min-h-screen">
    <div className="relative w-custom h-screen rounded shadow-lg my-6" style={background}>
    <div className="relative p-6">
          <Header  onBackToStart={handleResetGame} 
          currentQuestionIndex={currentQuestion}
          totalQuestions={questions.length}
          />
          <GameScreen
            questionText={question.question}
            answers={question.answers}
            onSelectAnswer={handleAnswerSelect}
            disabled={gameDone}
            score={score}
          />
          {gameDone && (
            <div className="mt-4 text-3xl text-white text-center font-bold">
              Game Over
            </div>
          )}
        </div>
      </div>
      </div>

  );
};

export default TriviaGame;
