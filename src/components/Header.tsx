import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface HeaderProps {
  onBackToStart?: () => void;
  currentQuestionIndex?: number;
  totalQuestions?: number;
}

const Header: React.FC<HeaderProps> = ({
  onBackToStart,
  currentQuestionIndex,
  totalQuestions,
}) => {
  return (
    <header className="flex flex justify-between">
      <div>
        {onBackToStart && (
          <button
            aria-label="Back to Start"
            onClick={onBackToStart}
            className="rounded-full text-white  border border-gray-800 bg-white bg-opacity-25 rounded-3xl"
          >
            <ArrowLeftIcon className="h-icon-large w-icon-large  hover:bg-gray-400 transition " />
          </button>
        )}
      </div>

      {typeof currentQuestionIndex === "number" &&
        typeof totalQuestions === "number" && (
          <div className="text-center w-counter-wide p-2 mt-1 m-4 text-white  border border-gray-800 bg-white bg-opacity-55 rounded-3xl ">
            {currentQuestionIndex + 1}/{totalQuestions}
          </div>
        )}
    </header>
  );
};

export default Header;
