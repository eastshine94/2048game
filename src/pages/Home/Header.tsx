import "scss/pages/Home/Header.scss";

export default function Header() {
  return (
    <div className="home__header">
      <div className="home__header-title">2048</div>
      <div className="home__header-score-block">
        <div className="home__header-current-score">0</div>
        <div className="home__header-best-score">24000</div>
      </div>
    </div>
  );
}
