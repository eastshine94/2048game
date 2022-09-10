import "scss/app.scss";
import "scss/pages/Home/index.scss";
import AboveGame from "./AboveGame";
import Header from "./Header";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <AboveGame />
      <div className="home__game">game</div>
    </div>
  );
}
