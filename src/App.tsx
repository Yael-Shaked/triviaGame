import React from "react";
// import Trivia from './components/Trivia'; // Adjusted to match the exported component name
import TriviaGame from "./components/TriviaGame";
const App: React.FC = () => {
  return (
    <div className="App">
      <TriviaGame />
    </div>
  );
};

export default App;
