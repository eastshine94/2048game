import React, { useState } from "react";
import times from "lodash/times";
import cn from "classnames";
import useMoveTile from "hooks/useMoveTile";
import { getInitialTileList } from "utils/tile";
import { MAX_POS } from "constants/tile";
import { TileList } from "types/tile";
import "scss/pages/Home/Game.scss";

interface Props {
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const initTileList = getInitialTileList();

export default function Game({ setScore }: Props) {
  const [tileList, setTileList] = useState<TileList>(initTileList);
  useMoveTile({ setTileList, setScore });

  return (
    <div className="home__game">
      <div className="home__game-grid-container">
        {times(MAX_POS * MAX_POS, (idx) => (
          <div className="home__game-grid-cell" key={idx} />
        ))}
      </div>
      <div className="home__game-tile-container">
        {tileList.map(
          (item) =>
            item && (
              <div
                className={cn(
                  `home__game-tile-cell home__game-tile-val-${
                    item.value
                  } home__game-tile-${item.x + 1}-${item.y + 1}`,
                  { "home__tile-new": item.isNew },
                  { "home__tile-merged": item.isMerged }
                )}
                key={item.id}
              >
                <div className="home__tile-inner">{item.value}</div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
