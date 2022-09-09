import "scss/app.scss";
import "scss/pages/Home/index.scss";
import Header from "./Header";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__above-game">above-game</div>
      <div className="home__game">game</div>
    </div>
  );
}
