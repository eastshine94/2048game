import times from "lodash/times";
import cn from "classnames";
import { MAX_POS } from "constants/tile";
import { TileList } from "types/tile";
import "scss/pages/Home/Game.scss";
import GameOver from "./GameOver";
import GameWinning from "./Winning";

interface Props {
  tileList: TileList;
  isFinish: boolean;
  handleRestartClick: () => void;
}

export default function Game({
  tileList,
  isFinish,
  handleRestartClick,
}: Props) {
  return (
    <div className="home__game">
      <GameWinning handleRestartClick={handleRestartClick} />
      {isFinish && <GameOver handleRestartClick={handleRestartClick} />}
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
