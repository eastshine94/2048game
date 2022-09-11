import "scss/app.scss";
import "scss/pages/Home/index.scss";
import AboveGame from "./AboveGame";
import Game from "./Game";
import Header from "./Header";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Header />
        <AboveGame />
        <Game />
      </div>
    </div>
  );
}
