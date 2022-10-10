import "scss/pages/Home/GameOver.scss";

interface Props {
  handleRestartClick: () => void;
}

export default function GameOver({ handleRestartClick }: Props) {
  return (
    <div className="home__game-over">
      <div>
        <div className="home__game-over-title">GAME OVER!</div>
        <div className="home__retry-btn" onClick={handleRestartClick}>
          Try again
        </div>
      </div>
    </div>
  );
}
