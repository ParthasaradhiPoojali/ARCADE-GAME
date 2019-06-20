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
7. Then Create the enemy array and Place it in correct position.
8. Create two or more enemy object to make more interest.
9. Move the enemy object in randlomly using `math.random()`function.
10. Score is displayed by using `Update` function-->key value dt.
11. Score will increase when ever we reach to top position.
12. Score will increase 10points when Gamer reaches to top.
13. When ever gamer is collide with enemy-->alert will come.
14. Using `sweetalert`-->In that Score will displayed and TryAgain button.
15. When ever we clicked TryAgain button-->game will start again.

## OUTPUT
 When ever Gamer Collided to enemy,Game will end and gives a alert.In that alert u can see final score and TryAgain button to start again.
