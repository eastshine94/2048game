import { useState, useEffect } from "react";
import useMoveTile from "hooks/useMoveTile";
import { getInitialTileList, resetTileList } from "utils/tile";
import { getLocalItem, setLocalItem } from "utils/storage";
import { TileList } from "types/tile";

import AboveGame from "./AboveGame";
import Game from "./Game";
import Header from "./Header";

import "scss/app.scss";
import "scss/pages/Home/index.scss";

const initTileList = getInitialTileList();

export default function Home() {
  const [tileList, setTileList] = useState<TileList>(initTileList);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    getLocalItem<number>("bestScore") || 0
  );
  const [isFinish, setIsFinish] = useState(false);

  useMoveTile({ setTileList, setScore, setIsFinish });

  const handleRestartClick = () => {
    const newTileList = resetTileList();
    setTileList(newTileList);
    setScore(0);
    setIsFinish(false);
  };

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
        <AboveGame handleRestartClick={handleRestartClick} />
        <Game
          tileList={tileList}
          isFinish={isFinish}
          handleRestartClick={handleRestartClick}
        />
      </div>
    </div>
  );
}
