import times from "lodash/times";
import { MAX_POS } from "constants/tile";
import "scss/pages/Home/Game.scss";

export default function Game() {
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
        {times(MAX_POS, (y) =>
          times(MAX_POS, (x) => (
            <div
              className={`home__game-tile-cell home__game-tile-${x + 1}-${
                y + 1
              }`}
              key={y * 100 + x}
            >
              {x + 1}-{y + 1}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
