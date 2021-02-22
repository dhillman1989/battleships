let fleet = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

class PlayerFactory {
  constructor(type = "human") {
    this.type = type;
    this.fleet = [...fleet];
    this.attack = (x, y, enemyboard) => {
      enemyboard.receiveAttack(x, y);
    };
  }
}

module.exports = PlayerFactory;
