class ShipFactory {
  constructor(id, axis, length, player) {
    this.owner = player;
    this.id = id;
    this.axis = axis;
    this.length = length;
    this.hitPoints = [];
    this.isSunk = false;
    this.hit = function (num) {
      this.hitPoints.push(num);
      if (this.hitPoints.length === this.length) {
        this.isSunk = true;
        this.owner.sunkenShips.push(this.id);
      }
    };
  }
}

module.exports = ShipFactory;
