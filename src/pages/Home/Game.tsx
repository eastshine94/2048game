import React, { useState } from "react";
import times from "lodash/times";
import useMoveTile from "hooks/useMoveTile";
import { getInitialTileList } from "utils/tile";
import { MAX_POS } from "constants/tile";
import { TileList } from "types/tile";
import "scss/pages/Home/Game.scss";

const initTileList = getInitialTileList();
export default function Game() {
  const [tileList, setTileList] = useState<TileList>(initTileList);
  useMoveTile({ tileList, setTileList });

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
                className={`home__game-tile-cell home__game-tile-${
                  item.x + 1
                }-${item.y + 1}`}
                key={`tile_${item.id}`}
              >
                {item.value}
              </div>
            )
        )}
      </div>
    </div>
  );
}
