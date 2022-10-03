import "scss/pages/Home/Header.scss";

interface Props {
  score: number;
}

export default function Header({ score }: Props) {
  return (
    <div className="home__header">
      <div className="home__header-title">2048</div>
      <div className="home__header-score-block">
        <div className="home__header-current-score">{score}</div>
        <div className="home__header-best-score">24000</div>
      </div>
    </div>
  );
}
