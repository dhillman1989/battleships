class GameboardFactory {
  constructor(player) {
    this.owner = player;
    this.grid = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.axis = "vertical";
    this.setAxis = (newAxis) => {
      this.axis = newAxis;
    };
    this.placeShip = (ship, x, y) => {
      let spaceClear = true;
      if (this.axis === "vertical") {
        ///check all needed spaces are clear
        for (let i = 0; i < ship.length; i++) {
          if (this.grid[y + i][x] !== 0) {
            spaceClear = false;
          }
        }

        // if clear place ship
        if (spaceClear) {
          for (let i = 0; i < ship.length; i++) {
            this.grid[y + i][x] = { ship, num: 1 + i };
          }
        }
      } else if (this.axis === "horizontal") {
        for (let i = 0; i < ship.length; i++) {
          if (this.grid[y][x + i] !== 0) {
            spaceClear = false;
          }
        }
        if (spaceClear) {
          for (let i = 0; i < ship.length; i++) {
            this.grid[y][x + i] = { ship, num: 1 + i };
          }
        }
      }
    };
    this.attacksList = [];
    this.receiveAttack = (x, y) => {
      this.attacksList.push([x, y]);

      if (this.grid[y][x] !== 0) {
        this.grid[y][x].ship.hit(this.grid[y][x].num);
      }
    };
  }
}

module.exports = GameboardFactory;
