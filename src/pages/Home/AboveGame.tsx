import "scss/pages/Home/AboveGame.scss";

export default function AboveGame() {
  return (
    <div className="home__above-game">
      <div className="home__game-intro">
        Join the tiles, get to <strong>2048!</strong>
        <br />
        Have a Good Game
      </div>
      <button className="home__restart-button" type="button">
        New Game
      </button>
    </div>
  );
}
