import "scss/pages/Home/GameOver.scss";

export default function GameOver() {
  return (
    <div className="home__game-over">
      <div>
        <div className="home__game-over-title">GAME OVER!</div>
        <div className="home__retry-btn">Try again</div>
      </div>
    </div>
  );
}
