
import React from "react";
import backgroundImage from "../assets/image/Untitle.png";
import Header from "./Header";

interface HelpPageProps {
  onBackToStart: () => void; 
}

const HelpPage: React.FC<HelpPageProps> = ({ onBackToStart }) => {
  const background = { backgroundImage: `url(${backgroundImage})` };

  return (
    <div className="flex flex-col justify-center items-center bg-sky-100 min-h-screen">
    <div className="relative w-custom h-screen  rounded shadow-lg my-6 " style={background}>
    <div className="relative p-6">

    <Header  onBackToStart={onBackToStart} /> 
    
    </div>

    <div>
       <div className=" text-black p-8 m-8 rounded-lg shadow-xl  border border-gray-800 bg-white bg-opacity-55 rounded-3xl ">
      <h1 className="text-2xl font-bold mb-4">How to Play Trivia Music Game</h1>
      <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Click on "Start Playing" to begin the game.</li>
        <li>Select your answers by clicking on the choices provided.</li>
        <li>Earn points for each correct answer and aim for a high score!</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Tips for Success</h2>
      <p className="mb-4">Read each question and answer choice carefully, trust your instincts, and use mistakes as learning opportunities.</p>
      <h2 className="text-xl font-semibold mb-2">Game Rules</h2>
      <p className="mb-4">There are no penalties for incorrect answers, and high scores are recorded.</p>
      <p className="mt-4 italic">Thank you for playing Trivia Music!</p>
    </div>
      
    </div>
    </div>
    </div>


  );
};

export default HelpPage;
