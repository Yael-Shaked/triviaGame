import React, { useState } from "react";
import backgroundImage from "../assets/image/Untitle.png";

interface GameScreenProps {
  answers: string[];
  onSelectAnswer: (answer: string) => void;
  disabled?: boolean;
  questionText: string;
  score: number;
}


const GameScreen: React.FC<GameScreenProps> = ({
  answers,
  onSelectAnswer,
  disabled = false,
  questionText,
  score
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const pressedClasses = isPressed ? 'translate-y-1 scale-90' : '';

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const background = { backgroundImage: `url(${backgroundImage})` };

  return (
          <div className="flex justify-center items-center h-full">

  <div className="flex flex-col justify-center items-center text-center p-4 ">

  <div className="text-3xl p-4 font-bold w-custom-wide text-center text-white mb-2 border border-gray-800 bg-white bg-opacity-55 rounded-lg  ">

      {questionText}
      </div>

      <div>
        {answers.map((answer, index) => (
          <button
            key={index}
            onMouseDown={() => handleMouseDown()}
            onMouseUp={() =>  handleMouseUp() }
            onMouseLeave={handleMouseUp}
            disabled={disabled}
            onClick={() =>onSelectAnswer(answer)}
            className={` text-2xl p-4 font-bold w-custom-wide text-center text-white mb-2 hover:bg-gray-100 transition border border-gray-800 bg-white bg-opacity-25 rounded-3xl ${isPressed ? pressedClasses : ''} ${score}`}
          >
            {answer}
          </button>
          
        ))}
        <div className="w-score-wide p-2 m-2 text-white  border border-gray-800 bg-white bg-opacity-55 rounded-3xl">
          Current Score: {score}
          </div>
      </div>

    </div>
    </div>


  );
};

export default GameScreen;
