import React from "react";
import backgroundImage from "../assets/image/Untitle.png";

interface StartScreemProps {
  onStartGame: () => void;
  help: () => void;
  highScore: number;
}
const StartScreen: React.FC<StartScreemProps> = ({
  onStartGame,
  help,
  highScore,
}) => {
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
          <div className="flex flex-col justify-center items-center ">
            {/* Title  */}
            <h1 className="text-center p-9 m-9">
              <div className="text-6xl font-serif font-bold text-white">
                Trivia
              </div>
              <div className="text-6xl font-serif font-bold text-white">
                Music
              </div>
            </h1>

            {/* Buttons  */}

            <div className="start-screen flex flex-col items-center space-y-2 pb-10">
              <button
                onClick={onStartGame}
                className="start-button w-score-wide p-2 m-2 text-white border border-gray-800 bg-white bg-opacity-25 rounded-3xl hover:bg-gray-400 transition"
              >
                Start Playing
              </button>
              <button
                onClick={help}
                className="help-button w-score-wide p-2 m-2 text-white border border-gray-800 bg-white bg-opacity-25 rounded-3xl hover:bg-gray-400 transition"
              >
                Help Playing
              </button>
              <p className="text-center w-score-wide p-2 m-2 text-white border border-gray-800 bg-white bg-opacity-55 rounded-3xl  transition">
                High Score: {highScore}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StartScreen;
