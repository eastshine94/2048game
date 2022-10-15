import React, { useEffect } from "react";
import { useCallback } from "react";
import { TileList } from "types/tile";
import { getIsFinishGame, moveTile } from "utils/tile";

interface Props {
  setTileList: React.Dispatch<React.SetStateAction<TileList>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setPlusScore: React.Dispatch<React.SetStateAction<number>>;
  setIsFinish: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function useMoveTile({
  setTileList,
  setScore,
  setPlusScore,
  setIsFinish,
}: Props) {
  const moveAndAdd = useCallback(
    (x: number, y: number) => {
      const newTileList = moveTile(x, y);
      setTileList(newTileList);
      const score = newTileList.reduce((acc, curr) => {
        return curr?.isMerged ? acc + curr.value : acc;
      }, 0);
      setPlusScore(score);
      setScore((v) => v + score);
      const isFinish = getIsFinishGame();
      setIsFinish(isFinish);
    },
    [setIsFinish, setPlusScore, setScore, setTileList]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key;
      switch (key) {
        case "ArrowRight":
          event.preventDefault();
          moveAndAdd(1, 0);
          break;
        case "ArrowLeft":
          event.preventDefault();
          moveAndAdd(-1, 0);
          break;
        case "ArrowUp":
          event.preventDefault();
          moveAndAdd(0, -1);
          break;
        case "ArrowDown":
          event.preventDefault();
          moveAndAdd(0, 1);
          break;
        default:
      }
    },
    [moveAndAdd]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
}
