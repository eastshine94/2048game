import { useState } from "react";
import AboveGame from "./AboveGame";
import Game from "./Game";
import Header from "./Header";
import "scss/app.scss";
import "scss/pages/Home/index.scss";

export default function Home() {
  const [score, setScore] = useState(0);
  return (
    <div className="home">
      <div className="home__container">
        <Header score={score} />
        <AboveGame />
        <Game setScore={setScore} />
      </div>
    </div>
  );
}
