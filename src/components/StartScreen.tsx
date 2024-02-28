import React from "react";
import HelpPage from "./Helppage";
import backgroundImage from "../assets/image/Untitle.png";

interface StartScreemProps {
  onStartGame: () => void;
  help: () => void;
  highScore: number
}
const StartScreen: React.FC<StartScreemProps> = ({ onStartGame, help, highScore }) => {
  const background = { backgroundImage: `url(${backgroundImage})` };

    
  return (
    <div className="flex justify-center bg-sky-100 min-h-screen">
      <div className="relative w-custom rounded shadow-lg my-6" style={background}>
        <div className="flex flex-col justify-center items-center h-screen">
          {/* Title section */}
          <h1 className="text-center p-9 m-9">
            <div className="text-6xl font-serif font-bold text-white">Trivia</div>
            <div className="text-6xl font-serif font-bold text-white">Music</div>
          </h1>
          
          {/* Buttons section */}
          <div className="start-screen flex flex-col items-center space-y-2 pb-10">
            <button onClick={onStartGame} className="start-button w-score-wide p-2 m-2 text-white border border-gray-800 bg-white bg-opacity-25 rounded-3xl hover:bg-gray-100 transition">
              Start Playing
            </button>
            <button onClick={help} className="help-button w-score-wide p-2 m-2 text-white border border-gray-800 bg-white bg-opacity-25 rounded-3xl hover:bg-gray-100 transition">
              Help Playing
            </button>
            <p className="text-center w-score-wide p-2 m-2 text-white border border-gray-800 bg-white bg-opacity-55 rounded-3xl  transition">
              High Score: {highScore}
            </p>
          </div>
        </div>
      </div>
      </div>

    );
};
export default StartScreen;
