"use strict"
// intialize Score Count
let scoreCount = 0;
let count = document.querySelector('.score');
count.innerHTML = "Current Score :" + scoreCount;
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;
  if (this.x == 0) {
    // randlomly enemy should moves
    this.speed = 100 + Math.floor(Math.random() * 300);
  }
  if (this.x > 500) {
    // randlomly enemy should moves
    this.speed = 100 + Math.floor(Math.random() * 300);
    this.x = 0;
  }
  // collosion Condition
  if (this.x < player.x + 60 && this.x + 60 > player.x && player.y < this.y + 60 && player.y + 60 > this.y) {
    player.x = 200;
    player.y = 400;
    // sweetalert
    Swal.fire({
      title: "Oops! Game Over",
      html: 'Your Score :' + scoreCount,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> TryAgain',
    }).then(() => {
      document.location.reload();
    });
    player.sprite = 'images/char-boy.png';
  }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Gamer {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
  }
}
// Score pannel
Gamer.prototype.update = function(dt) {
  if (this.y < 40) {
    this.x = 200;
    this.y = 300;
    scoreCount = scoreCount + 10;
    count.innerHTML = "Current Score :" + scoreCount;
    if (scoreCount == 1000) {
      openWinModel();
    }
  }
}
Gamer.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
// Place the player object in a variable called player
var enemyLocation = [60, 143, 226];
enemyLocation.map((positionY) => {
  var enemyItem = new Enemy(0, positionY, 150);
  allEnemies.push(enemyItem);
});
var player = new Gamer(200, 400);
// key Moves
Gamer.prototype.handleInput = function(key) {
  switch (key) {
    case 'left':
      this.x = this.x - 101;
      if (this.x < 0) {
        this.x = 0;
      }
      break;
    case 'right':
      this.x = this.x + 101;
      if (this.x > 400) {
        this.x = 404;
      }
      break;
    default:
    case 'up':
      this.y = this.y - 84;
      if (this.y < 60) {
        setTimeout(() => {
          this.x = 200;
          this.y = 400;
        }, 100)
      }
      break;
    case 'down':
      this.y = this.y + 84;
      if (this.y > 404) {
        this.y = 404;
      }
  }
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});
