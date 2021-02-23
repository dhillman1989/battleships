import PlayerFactory from "../factories/PlayerFactory";
import GameboardFactory from "../factories/GameboardFactory";
import ShipFactory from "../factories/ShipFactory";

const Game = () => {
  const player1 = new PlayerFactory();
  const gameboard1 = new GameboardFactory();
  const ship1 = new ShipFactory("ship34234", "vertical", 3);
  const ship2 = new ShipFactory("ship3456234234", "vertical", 2);
  const ship3 = new ShipFactory("ship3888834", "horizontal", 4);
  const ship4 = new ShipFactory("ship3888834", "horizontal", 1);
  gameboard1.placeShip(ship1, 3, 3);
  gameboard1.placeShip(ship2, 0, 0);
  gameboard1.setAxis("horizontal");
  gameboard1.placeShip(ship3, 6, 3);
  gameboard1.placeShip(ship4, 5, 5);

  const player2 = new PlayerFactory();
  const gameboard2 = new GameboardFactory();
  const ship21 = new ShipFactory("ship34234", "vertical", 3);
  const ship22 = new ShipFactory("ship3456234234", "vertical", 2);
  const ship23 = new ShipFactory("ship3888834", "horizontal", 4);
  const ship24 = new ShipFactory("ship3888834", "horizontal", 1);
  gameboard2.placeShip(ship21, 0, 0);
  gameboard2.placeShip(ship22, 2, 2);
  gameboard2.setAxis("horizontal");
  gameboard2.placeShip(ship23, 3, 5);
  gameboard2.placeShip(ship24, 5, 5);

  player1.attack(0, 0, gameboard2);
  player1.attack(0, 1, gameboard2);
  player1.attack(0, 2, gameboard2);
  player1.attack(1, 1, gameboard2);
  console.log(ship21);
  console.log(gameboard2.attacksList.filter((a) => a[0] == 1 && a[1] == 1));

  const enemyBoard = document.querySelector(".gameboard__grid--attacking");
  const enemyBoardGrid = gameboard2.grid
    .map(
      (row, y) =>
        `<div class="gameboard__grid-row">${row
          .map(
            (tile, x) =>
              `<div class="gameboard__grid-tile ${
                gameboard2.attacksList.filter((a) => a[0] == x && a[1] == y)
                  .length > 0
                  ? `gameboard__grid-shot ${tile.ship && "gameboard__grid-hit"}`
                  : null
              }"></div>`
          )
          .join("")}</div>`
    )
    .join("");

  const playerBoard = document.querySelector(".gameboard__grid--defending");
  const playerBoardGrid = gameboard1.grid
    .map(
      (row, i) =>
        `<div class="gameboard__grid-row">${row
          .map((tile) =>
            tile != 0
              ? "<div class='gameboard__grid-tile gameboard__grid-occupied'></div>"
              : "<div class='gameboard__grid-tile'></div>"
          )
          .join("")}</div>`
    )
    .join("");

  playerBoard.innerHTML = playerBoardGrid;
  enemyBoard.innerHTML = enemyBoardGrid;
};

export default Game;
