import React, { useEffect } from "react";
import { useCallback } from "react";
import { TileList } from "types/tile";
import { moveTile } from "utils/tile";

interface Props {
  setTileList: React.Dispatch<React.SetStateAction<TileList>>;
}

export default function useMoveTile({ setTileList }: Props) {
  const moveAndAdd = useCallback(
    (x: number, y: number) => {
      const newTileList = moveTile(x, y);
      setTileList(newTileList);
    },
    [setTileList]
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
