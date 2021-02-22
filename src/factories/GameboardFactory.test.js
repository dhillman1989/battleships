const { it, expect } = require("@jest/globals");
const { shouldInstrument } = require("@jest/transform");
const GameboardFactory = require("./GameboardFactory");
const ShipFactory = require("./ShipFactory");
const PlayerFactory = require("./PlayerFactory");

it("place ship vertically", () => {
  const gameboard = new GameboardFactory();
  const ship = new ShipFactory("longboat", "vertical", 3);
  gameboard.placeShip(ship, 0, 0);
  expect(gameboard.grid[0][0]).toEqual({ ship, num: 1 });
  expect(gameboard.grid[1][0]).toEqual({ ship, num: 2 });
  expect(gameboard.grid[2][0]).toEqual({ ship, num: 3 });
});

it("switch axis to horizontal", () => {
  const gameboard = new GameboardFactory();
  gameboard.setAxis("horizontal");
  expect(gameboard.axis).toEqual("horizontal");
});

it("place ship horizontally", () => {
  const gameboard = new GameboardFactory();
  const ship = new ShipFactory("longboat", "horizontal", 3);
  gameboard.setAxis("horizontal");
  gameboard.placeShip(ship, 1, 2);
  expect(gameboard.grid[2][1]).toEqual({ ship, num: 1 });
  expect(gameboard.grid[2][2]).toEqual({ ship, num: 2 });
  expect(gameboard.grid[2][3]).toEqual({ ship, num: 3 });
});

it("gameboard attack", () => {
  const gameboard = new GameboardFactory();
  gameboard.receiveAttack(4, 4);
  expect(gameboard.attacksList).toEqual([[4, 4]]);
});

it("gameboard attack twice", () => {
  const gameboard = new GameboardFactory();
  gameboard.receiveAttack(4, 4);
  gameboard.receiveAttack(6, 4);
  expect(gameboard.attacksList).toEqual([
    [4, 4],
    [6, 4],
  ]);
});

it("ship hit", () => {
  const gameboard = new GameboardFactory();
  const longboat = new ShipFactory("longboat", "vertical", 3);
  gameboard.placeShip(longboat, 1, 2);
  gameboard.receiveAttack(1, 2);
  expect(longboat.hitPoints).toContain(1);
});

it("recieve attack from player object", () => {
  const player = new PlayerFactory();
  const gameboard = new GameboardFactory();
  const longboat = new ShipFactory("longboat", "vertical", 3);
  gameboard.placeShip(longboat, 1, 2);

  player.attack(1, 2, gameboard);
  player.attack(1, 3, gameboard);
  expect(longboat.hitPoints).toContain(1);
  expect(longboat.hitPoints).toContain(2);
});

it("test full ship layout", () => {
  const player = new PlayerFactory();
  const gameboard = new GameboardFactory();

  const b1 = new ShipFactory("b1", "vertical", 4);
  gameboard.placeShip(b1, 0, 0);

  const b2 = new ShipFactory("b2", "vertical", 3);
  gameboard.placeShip(b2, 2, 3);

  const b10 = new ShipFactory("b10", "vertical", 3);
  gameboard.placeShip(b10, 3, 7);

  const b5 = new ShipFactory("b5", "vertical", 2);
  gameboard.placeShip(b5, 5, 7);

  const b7 = new ShipFactory("b7", "vertical", 1);
  gameboard.placeShip(b7, 7, 9);

  const b3 = new ShipFactory("b3", "vertical", 3);
  gameboard.placeShip(b3, 3, 2);

  gameboard.setAxis("horizontal");

  const b4 = new ShipFactory("b4", "horizontal", 2);
  gameboard.placeShip(b4, 5, 8);

  const b6 = new ShipFactory("b6", "horizontal", 1);
  gameboard.placeShip(b6, 6, 5);

  const b8 = new ShipFactory("b8", "horizontal", 1);
  gameboard.placeShip(b8, 8, 3);

  const b9 = new ShipFactory("b9", "horizontal", 1);
  gameboard.placeShip(b9, 8, 5);

  //test a single square ship
  expect(gameboard.grid[5][6].ship).toEqual(b6);

  //test a longer ship vertical
  expect(gameboard.grid[2][3].ship).toEqual(b3);
  expect(gameboard.grid[3][3].ship).toEqual(b3);
  expect(gameboard.grid[4][3].ship).toEqual(b3);

  //test a longer ship horizontal
  expect(gameboard.grid[8][5].ship).toEqual(b4);
  expect(gameboard.grid[8][6].ship).toEqual(b4);
});

it("play with opponent", () => {
  //setup player 1
  const player1 = new PlayerFactory();
  const board1 = new GameboardFactory();
  const p1ship1 = new ShipFactory("p1ship1", "vertical", 3);
  const p1ship2 = new ShipFactory("p2ship2", "vertical", 3);
  board1.placeShip(p1ship1, 0, 0);
  board1.setAxis("horizontal");
  board1.placeShip(p1ship2, 1, 0);

  //setup player 2
  const player2 = new PlayerFactory();
  const board2 = new GameboardFactory();
  const p2ship1 = new ShipFactory("p2ship1", "vertical", 3);
  const p2ship2 = new ShipFactory("p2ship2", "vertical", 3);
  board2.placeShip(p2ship1, 0, 0);
  board2.setAxis("horizontal");
  board2.placeShip(p2ship2, 1, 1);

  player1.attack(3, 3, board2);
  player1.attack(1, 1, board2);
  player1.attack(2, 1, board2);
  player1.attack(3, 1, board2);

  expect(board2.attacksList).toEqual([
    [3, 3],
    [1, 1],
    [2, 1],
    [3, 1],
  ]);

  expect(p2ship2.isSunk).toBe(true);
});
