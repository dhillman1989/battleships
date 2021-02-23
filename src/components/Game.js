import PlayerFactory from "../factories/PlayerFactory";
import GameboardFactory from "../factories/GameboardFactory";
import ShipFactory from "../factories/ShipFactory";

import Popup from "./Popup";

const Game = () => {
  const player1 = new PlayerFactory();
  const gameboard1 = new GameboardFactory();
  const ship1 = new ShipFactory("ship34234", "vertical", 3);
  const ship2 = new ShipFactory("ship3456234234", "vertical", 2);
  const ship3 = new ShipFactory("ship3888834", "horizontal", 4);
  const ship4 = new ShipFactory("ship3888834", "horizontal", 1);

  ///player1 places ships on board 1
  gameboard1.placeShip(ship1, 3, 3);
  gameboard1.placeShip(ship2, 0, 0);
  gameboard1.setAxis("horizontal");
  gameboard1.placeShip(ship3, 6, 3);
  gameboard1.placeShip(ship4, 5, 5);

  ///player2 places ships on board 2
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

  ///map gameboard to UI
  const renderBoards = (activeGameboard, enemyGameboard, turnTaken = false) => {
    const enemyBoard = document.querySelector(".gameboard__grid--attacking");
    const enemyBoardGrid = enemyGameboard.grid
      .map(
        (row, y) =>
          `<div class="gameboard__grid-row">${row
            .map(
              (tile, x) =>
                `<div ${
                  tile.ship ? `data-ship=${tile.ship}` : null
                } data-coordx=${x} data-coordy=${y} class="gameboard__grid-tile ${
                  enemyGameboard.attacksList.filter(
                    (a) => a[0] == x && a[1] == y
                  ).length > 0
                    ? `gameboard__grid-shot ${
                        tile.ship && "gameboard__grid-hit"
                      }`
                    : null
                }"></div>`
            )
            .join("")}</div>`
      )
      .join("");

    const playerBoard = document.querySelector(".gameboard__grid--defending");
    const playerBoardGrid = activeGameboard.grid
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

    ///RENDER GRIDS IN THE DOM
    playerBoard.innerHTML = playerBoardGrid;
    enemyBoard.innerHTML = enemyBoardGrid;

    ///add event listeners
    const tiles = enemyBoard.querySelectorAll(".gameboard__grid-tile");

    tiles.forEach((tile) =>
      tile.addEventListener("click", (e) => {
        if (!turnTaken) {
          turnTaken = true;
          player1.attack(
            e.target.dataset.coordx,
            e.target.dataset.coordy,
            enemyGameboard
          );
          renderBoards(activeGameboard, enemyGameboard, (turnTaken = true));
          console.log(e.target.dataset);
          e.target.dataset.ship
            ? Popup("HIT", activeGameboard, enemyGameboard, renderBoards)
            : Popup("MISS", activeGameboard, enemyGameboard, renderBoards);
        }
      })
    );
  };
  renderBoards(gameboard1, gameboard2);
};

export default Game;
