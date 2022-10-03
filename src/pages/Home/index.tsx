import { useState } from "react";
import AboveGame from "./AboveGame";
import Game from "./Game";
import { useEffect } from "react";
import Header from "./Header";
import { getLocalItem, setLocalItem } from "utils/storage";
import "scss/app.scss";
import "scss/pages/Home/index.scss";

export default function Home() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    getLocalItem<number>("bestScore") || 0
  );

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
      setLocalItem<number>("bestScore", score);
    }
  }, [bestScore, score]);

  return (
    <div className="home">
      <div className="home__container">
        <Header score={score} bestScore={bestScore} />
        <AboveGame />
        <Game setScore={setScore} />
      </div>
    </div>
  );
}
