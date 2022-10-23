import "scss/pages/Home/Winning.scss";

interface Props {
  handleRestartClick: () => void;
}

export default function GameWinning({ handleRestartClick }: Props) {
  return (
    <div className="home__winning">
      <div>
        <div className="home__winning-title">You Win!</div>

        <button className="home__retry-btn" onClick={handleRestartClick}>
          Keep Going
        </button>
        <button className="home__retry-btn" onClick={handleRestartClick}>
          Try again
        </button>
      </div>
    </div>
  );
}
