import React from "react";
import backgroundImage from "../assets/image/Untitle.png";
import Header from "./Header";

interface FinalScoreScreenProps {
  score: number;
  onBackToStart: () => void; 
}

const FinalScoreScreen: React.FC<FinalScoreScreenProps> = ({score,onBackToStart,}) => {
    const background = { backgroundImage: `url(${backgroundImage})` };

  return (
    
      <div className="flex flex-col justify-center items-center bg-sky-100 min-h-screen">
    <div className="relative w-custom h-screen  rounded shadow-lg my-6 " style={background}>
    
    <div>
        <div className="flex justify-center items-center text-center p-8 m-8">
      <div className=" text-black font-bold p-8 m-8 rounded-lg shadow-xl  border border-gray-800 bg-white bg-opacity-55 rounded-3xl ">
      <p className="text-4xl m-6 " >Game Over</p>

      <p className="text-2xl m-4" >You earned : {score} points</p>
      <p className="text-xl m-4" >You can play again</p>
      <button
            onClick={onBackToStart} 
            className="mt-4 border border-gray-800 bg-white bg-opacity-75 rounded-3xl font-bold py-2 px-4 rounded hover:bg-gray-100 transition"
          >
            Start New Game
            </button>

    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default FinalScoreScreen;
