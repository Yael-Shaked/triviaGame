import React from "react";
import backgroundImage from "../assets/image/Untitle.png";
import Header from "./Header";

interface FinalScoreScreenProps {
  score: number;
  onBackToStart: () => void;
}

const FinalScoreScreen: React.FC<FinalScoreScreenProps> = ({
  score,
  onBackToStart,
}) => {
  const background = { backgroundImage: `url(${backgroundImage})` };

  return (
    <div className="flex flex-col justify-center items-center bg-sky-100 min-h-screen">
      <div
        className="relative w-custom   rounded shadow-lg "
        style={{
          height: "calc(100vh - 1rem)",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-20"></div>

        <div className="relative p-6">
          <div>
            <div className="flex justify-center items-center text-center p-8 m-8">
              <div className=" text-black font-bold p-8 m-8 rounded-lg shadow-xl  border border-gray-800 bg-white bg-opacity-55 rounded-3xl ">
                <p className="text-4xl m-6 ">Game Over</p>

                <p className="text-2xl m-4">You earned : {score} points</p>
                <p className="text-xl m-4">You can play again</p>
                <button
                  onClick={onBackToStart}
                  className="mt-4 border border-gray-800 bg-white bg-opacity-75 rounded-3xl font-bold py-2 px-4 rounded hover:bg-gray-400 transition"
                >
                  Start New Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalScoreScreen;
