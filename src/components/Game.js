import PlayerFactory from "../factories/PlayerFactory";
import GameboardFactory from "../factories/GameboardFactory";
import "../css/main.scss";

const Game = () => {
  const player1 = new PlayerFactory();
  const board1 = new GameboardFactory();

  const app = document.querySelector(".app");
  app.innerHTML = `<h1 class="heading">jdkasjdlkj</h1>`;
  console.log("game running");
};

export default Game;
