import PlayerFactory from "../factories/PlayerFactory";
import GameboardFactory from "../factories/GameboardFactory";
import ShipFactory from "../factories/ShipFactory";

import Popup from "./Popup";

const Game = () => {
  const player1 = new PlayerFactory();
  const gameboard1 = new GameboardFactory(player1);

  let ships = [
    new ShipFactory("longboat0", 4, player1),
    new ShipFactory("longboat1", 3, player1),
    new ShipFactory("longboat2", 3, player1),
    new ShipFactory("longboat3", 2, player1),
    new ShipFactory("longboat4", 2, player1),
    new ShipFactory("longboat5", 2, player1),
    new ShipFactory("longboat6", 1, player1),
    new ShipFactory("longboat7", 1, player1),
    new ShipFactory("longboat8", 1, player1),
    new ShipFactory("longboat9", 1, player1),
  ];

  ///player2 places ships on board 2
  const player2 = new PlayerFactory();
  const gameboard2 = new GameboardFactory(player2);
  let currShipMarker = 0;

  const renderSetupBoard = (currGameboard) => {
    const setupBoard = document.querySelector(".gameboard__grid--defending");
    const setupBoardGrid = currGameboard.grid
      .map(
        (row, y) =>
          `<div class="gameboard__grid-row">${row
            .map(
              (tile, x) =>
                `<div ${
                  tile.ship ? `data-ship=${tile.ship}` : null
                } data-coordx=${x} data-coordy=${y} class="gameboard__grid-tile ${
                  tile != 0 ? "gameboard__grid-occupied" : null
                } ${
                  currGameboard.attacksList.filter(
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

    ///RENDER setup grid to dom
    setupBoard.innerHTML = setupBoardGrid;
    //add eventListners to setup Grid

    const keyevent = (e) => {
      if (e.keyCode === 32) {
        if (currGameboard.axis == "vertical") {
          currGameboard.setAxis("horizontal");
        } else if (currGameboard.axis == "horizontal") {
          currGameboard.setAxis("vertical");
        }
      }
    };

    document.addEventListener("keydown", keyevent);

    const tiles = document.querySelectorAll(".gameboard__grid-tile");

    tiles.forEach((t) =>
      t.addEventListener("click", (e) => {
        console.log(currGameboard);
        currGameboard.placeShip(
          ships[currShipMarker],
          parseInt(e.target.dataset.coordx),
          parseInt(e.target.dataset.coordy)
        );

        console.log(ships[currShipMarker].id);
        var tilesArray = Array.prototype.slice.call(tiles);
        if (
          tilesArray.some((t) => {
            let shipData = t.dataset.ship ? t.dataset.ship : null;
            if (shipData && shipData.id == ships[currShipMarker].id) {
              return true;
            }
            return true;
          })
        ) {
          currShipMarker = currShipMarker + 1;
        }
        console.log(currShipMarker);
        renderSetupBoard(gameboard1);
        document.removeEventListener("keydown", keyevent);
      })
    );
  };

  ///map gameboard to UI
  const renderBoards = (activeGameboard, enemyGameboard, turnTaken = false) => {
    const enemyBoard = document.querySelector(".gameboard__grid--attacking");
    const enemyBoardGrid = enemyGameboard.grid
      .map(
        (row, y) =>
          `<div class="gameboard__grid-row">${row
            .map(
              (tile, x) =>
                `<div id="sq${y * 10 + x + 1}" ${
                  tile.ship ? `data-ship=${JSON.stringify(tile.ship)}` : null
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
        (row, y) =>
          `<div class="gameboard__grid-row">${row
            .map(
              (tile, x) =>
                `<div ${
                  tile.ship ? `data-ship=${tile.ship}` : null
                } data-coordx=${x} data-coordy=${y} class="gameboard__grid-tile ${
                  tile != 0 ? "gameboard__grid-occupied" : null
                } ${
                  activeGameboard.attacksList.filter(
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

    ///RENDER GRIDS IN THE DOM
    playerBoard.innerHTML = playerBoardGrid;
    enemyBoard.innerHTML = enemyBoardGrid;

    ///add event listeners
    const tiles = enemyBoard.querySelectorAll(".gameboard__grid-tile");

    tiles.forEach((tile) =>
      tile.addEventListener("click", (e) => {
        if (
          !turnTaken &&
          enemyGameboard.attacksList.filter(
            (a) =>
              a[0] == e.target.dataset.coordx && a[1] == e.target.dataset.coordy
          ).length == 0
        ) {
          player1.attack(
            e.target.dataset.coordx,
            e.target.dataset.coordy,
            enemyGameboard
          );
          renderBoards(activeGameboard, enemyGameboard, (turnTaken = true));

          if (enemyGameboard.owner.sunkenShips.length == 5) {
            return Popup("OPPONENT ANIHALATED, YOU WIN!");
          }

          const squareId = e.target.id;
          const targetSquare = document.querySelector(`#${squareId}`);
          let targetShip = targetSquare.dataset.ship
            ? JSON.parse(targetSquare.dataset.ship)
            : null;
          console.log(targetShip);
          return targetShip
            ? Popup(
                `${targetShip.isSunk ? "SANK SHIP" : "HIT"}`,
                activeGameboard,
                enemyGameboard,
                renderBoards
              )
            : Popup("MISS", activeGameboard, enemyGameboard, renderBoards);
        }
      })
    );
  };

  renderSetupBoard(gameboard1);
  ///renderBoards(gameboard1, gameboard2);
};

export default Game;
