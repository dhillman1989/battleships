import PlayerFactory from "../factories/PlayerFactory";
import GameboardFactory from "../factories/GameboardFactory";
import ShipFactory from "../factories/ShipFactory";

import Popup from "./Popup";

const Game = () => {
  //CREATE PLAYER 1 AND BOARD 1
  const player1 = new PlayerFactory();
  const gameboard1 = new GameboardFactory(player1);
  let currShipMarker = 0;

  //PLAYER 1  SHIPS ARRAY
  let ships_p1 = [
    new ShipFactory("boat0", 4, player1),
    new ShipFactory("boat1", 3, player1),
    new ShipFactory("boat2", 3, player1),
    new ShipFactory("boat3", 2, player1),
    new ShipFactory("boat4", 2, player1),
    new ShipFactory("boat5", 2, player1),
    new ShipFactory("boat6", 1, player1),
    new ShipFactory("boat7", 1, player1),
    new ShipFactory("boat8", 1, player1),
    new ShipFactory("boat9", 1, player1),
  ];

  ///CREATE PLAYER 2 AND BOARD 2
  const player2 = new PlayerFactory();
  const gameboard2 = new GameboardFactory(player2);

  //PLAYER 2 SHIPS ARRAY
  let ships_p2 = [
    new ShipFactory("boat21", 4, player2),
    new ShipFactory("boat22", 3, player2),
    new ShipFactory("boat23", 3, player2),
    new ShipFactory("boat24", 2, player2),
    new ShipFactory("boat24", 2, player2),
    new ShipFactory("boat25", 2, player2),
    new ShipFactory("boat26", 1, player2),
    new ShipFactory("boat27", 1, player2),
    new ShipFactory("boat28", 1, player2),
    new ShipFactory("boat29", 1, player2),
  ];

  ///RENDER BOARDS FOR PLAYER TO PLACE THEIR SHIPS
  const renderSetupBoard = (currGameboard, shipsSet) => {
    const setupBoard = document.querySelector(".gameboard__grid--defending");
    const setupBoardGrid = currGameboard.grid
      .map(
        (row, y) =>
          `<div class="gameboard__grid-row">${row
            .map(
              (tile, x) =>
                `<div ${
                  tile.ship ? `data-ship=${JSON.stringify(tile.ship)}` : null
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
    const gameboard = document.querySelector(".gameboard");
    const setupPassButton = document.createElement("button");
    setupPassButton.innerText = "Click & Pass";
    currShipMarker == 9 && gameboard.appendChild(setupPassButton);
    setupPassButton.addEventListener("click", () => {
      currShipMarker = 0;
      gameboard.removeChild(setupPassButton);
      if (currGameboard == gameboard2) {
        document
          .querySelector(".gameboard__grid--attacking")
          .classList.remove("hidden");
        renderBoards(gameboard1, gameboard2);
      } else {
        renderSetupBoard(gameboard2, ships_p2);
      }
    });

    //remove existing piece preview if it exists before creating new piece preview
    const createPiecePreview = () => {
      const existingPiece = document.querySelector("#currPiece");
      existingPiece &&
        document.querySelector(".gameboard").removeChild(existingPiece);

      ///create piece preview window
      const piece = document.createElement("div");
      piece.id = "currPiece";
      piece.classList.add("gameboard__grid-row");
      piece.classList.add("piece");
      currGameboard.axis === "horizontal" &&
        piece.classList.add("piece--horizontal");

      ///populate preview window with appropriate preview
      console.log(shipsSet[currShipMarker].length);
      for (let i = 0; i < shipsSet[currShipMarker].length; i++) {
        console.log(shipsSet[currShipMarker].length);
        const tile = document.createElement("div");
        tile.classList.add("gameboard__grid-tile");
        tile.classList.add("gameboard__grid-occupied");
        piece.appendChild(tile);
      }

      //add preview piece to DOM
      document.querySelector(".gameboard").appendChild(piece);
    };

    //AXIS SWITCH FUNCTION
    const switchAxis = (e) => {
      if (e.keyCode === 32) {
        if (currGameboard.axis == "vertical") {
          currGameboard.setAxis("horizontal");
          document
            .querySelector("#currPiece")
            .classList.add("piece--horizontal");
        } else if (currGameboard.axis == "horizontal") {
          currGameboard.setAxis("vertical");
          document
            .querySelector("#currPiece")
            .classList.remove("piece--horizontal");
        }
      }
    };

    ///register axis switch event
    document.addEventListener("keydown", switchAxis);

    const tiles = document.querySelectorAll(".gameboard__grid-tile");

    var tilesArray = Array.prototype.slice.call(tiles);
    tilesArray.some((t) => {
      return (
        t.dataset.ship &&
        JSON.parse(t.dataset.ship).id == shipsSet[currShipMarker].id
      );
    })
      ? (currShipMarker += 1)
      : (currShipMarker = currShipMarker);

    ///RUN PIECE PREVIEW FUNCTION
    createPiecePreview();

    ///ADD EVENT LISTENERS  TO PLACE SHIPS
    tiles.forEach((t) =>
      t.addEventListener("click", (e) => {
        console.log(currGameboard);
        currGameboard.placeShip(
          shipsSet[currShipMarker],
          parseInt(e.target.dataset.coordx),
          parseInt(e.target.dataset.coordy)
        );

        console.log(currShipMarker);
        renderSetupBoard(currGameboard, shipsSet);

        //remove event switch axis listener
        document.removeEventListener("keydown", switchAxis);
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

          if (enemyGameboard.owner.sunkenShips.length == 10) {
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

  renderSetupBoard(gameboard1, ships_p1);
  ///renderBoards(gameboard1)
};

export default Game;
