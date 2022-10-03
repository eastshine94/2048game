import "scss/pages/Home/AboveGame.scss";

interface Props {
  handleRestartClick: () => void;
}
export default function AboveGame({ handleRestartClick }: Props) {
  return (
    <div className="home__above-game">
      <div className="home__game-intro">
        Join the tiles, get to <strong>2048!</strong>
        <br />
        Have a good game
      </div>
      <button
        className="home__restart-button"
        type="button"
        onClick={handleRestartClick}
      >
        New Game
      </button>
    </div>
  );
}
