import { useState } from "react";
import times from "lodash/times";
import { MAX_POS } from "constants/tile";
import { TileList } from "types/tile";
import "scss/pages/Home/Game.scss";
import { getInitialTileList } from "utils/tile";

export default function Game() {
  const [tileList, setTileList] = useState<TileList>(getInitialTileList());

  return (
    <div className="home__game">
      <div className="home__game-grid-container">
        {times(MAX_POS, (y) =>
          times(MAX_POS, (x) => (
            <div className="home__game-grid-cell" key={y * 100 + x} />
          ))
        )}
      </div>
      <div className="home__game-tile-container">
        {tileList.map((tiles) =>
          tiles.map(
            (item) =>
              item && (
                <div
                  className={`home__game-tile-cell home__game-tile-${
                    item.x + 1
                  }-${item.y + 1}`}
                  key={item.y * 100 + item.x}
                >
                  {item.x + 1}-{item.y + 1}
                </div>
              )
          )
        )}
      </div>
    </div>
  );
}
