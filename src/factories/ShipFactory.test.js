const { it, expect } = require("@jest/globals");
const PlayerFactory = require("./PlayerFactory");
const ShipFactory = require("./ShipFactory");

it("ship built", () => {
  const ship = new ShipFactory("longboat", 4);
  expect(ship.length).toBe(4);
});

it("Ship hit", () => {
  const ship = new ShipFactory("longboat", 3);
  ship.hit(2);
  expect(ship.hitPoints).toContain(2);
});

it("ship is sunk", () => {
  const player = new PlayerFactory();
  const ship = new ShipFactory("longboat", 3, player);
  ship.hitPoints = [1, 2];
  ship.hit(3);
  expect(ship.isSunk).toBe(true);
});
