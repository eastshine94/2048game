import "scss/pages/Home/Header.scss";

interface Props {
  score: number;
  bestScore: number;
  plusScore: number;
}

export default function Header({ score, bestScore, plusScore }: Props) {
  return (
    <div className="home__header">
      <div className="home__header-title">2048</div>
      <div className="home__header-score-block">
        <div className="home__header-current-score">
          {score}

          {plusScore ? (
            <span className="home__header-plus-score" key={score}>
              +{plusScore}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="home__header-best-score">{bestScore}</div>
      </div>
    </div>
  );
}
