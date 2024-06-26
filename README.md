# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## Installation
 In the instructions i got git hub link https://github.com/udacity/frontend-nanodegree-arcade-game
## Steps to Build the Arcade Game
1. Download the skeleton project from github(rubric Structure) And run it.
2. I got plain page with error in console,intialized player class and assingned to variables.
3. For that palyer I added `render`,`update` and `handleInput` functions.
4. HandleInput with function value key-->Using Switch case i assingned the direction.
5. Gamer will move according to the key direction(handleInput function).
6. When ever we reach top-->we need to come back to starting position.
7. render() is already given. I used an array for placing 3 enemies on the game board based on the calculations. And update() updates the enemy position based on the speed which was generated by JavaScript random function.
8. Move the enemy object in randlomly using `math.random()`function.
9. Score is displayed by using `Update` function-->key value dt.
10. If the user reaches the water area, the he completes his game successfully. Again the player reborn at the starting position. If he touches the water area, the score is increased by 10.
11. When ever gamer is collide with enemy-->alert will come.
12. Using `sweetalert`-->In that Score will displayed and TryAgain button.
13. When ever we clicked TryAgain button-->game will start again.

## How To Run And Play
1. After completion of project(without error).
2. Run the index.html file in your favorite browser.You can see the game module in your screen.
3. You can move the player using `left`-->to move left
                                  `right`-->to move right
                                  `up`-->to go upward
                                  `down`-->to move downward directions.
4. We have to move the player without colliding with enemy.
5. If we reach to watermark area,the player will automatically get back to starting position and you will be rewarded 10 points.
6. When ever player get collide with enemy-->game will ended automatically.
7. Score will be displayed in the sweet Alert.
8. If you want to play again press tryagain button.

Try using below link:

https://parthasaradhipoojali.github.io/ARCADE-GAME/
