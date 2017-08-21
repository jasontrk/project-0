# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1[0]: GUESS THAT MOVIE


### Play Game
To run the game hosted on Heroku: https://guarded-journey-61209.herokuapp.com/.

----
### Installation

To download or clone repo please visit:
https://github.com/jasontrk/project-0.

Use ```npm i``` to install dependancies.

Run ```gulp``` to compile source code and run in browser.

---

### About the Game/Instructions

**GUESS THAT MOVIE**
# ![](https://s3-eu-west-1.amazonaws.com/wdi27imageupload/Screen+Shot+2017-08-17+at+22.20.28.png)

The concept of this movie trivia game is very simple; click on each letter of a scrambled movie title to form the unscrambled title. Clicked the wrong letter? Simply click it again to return it back to the scrambled pile. You will have the aid of an artistic poster, a theme song from the movie in question and should you need it, a hint. You have 30 seconds to guess each movie. When the time runs out, you lose! There are currently 9 questions and each title gets harder and harder to unscramble.

---

### Technlogies Used

* HTML 5
* SCSS
* JavaScript ES6
* jQuery 3.10
* Gulp
* NPM
* Git & Github

---

### Challenges

Being my first project using JavaScript, I found the process quite challenging. However, doing the project on my own helped me to relearn aspects I hadn't quite fully grasped during my course lessons.

My first real challenge was understanding how to have my game run through a list of movies with specific audio and image files in a specific order. Although it may be obvious, I did not think it was as simple as adding properties to values within a single variable. It was the first time I was really practicing linking javascript to insert things into text or image containers.

A big challenge was fixing my inception'esque code. I spent hours trying to stop functions clashing with each other as I had mistakenly added functions within functions, some of which were in loops. 

I also had difficulty getting my welcome, game over and winner screen to appear correctly. They would be pushed down due to the order they sit in my HTML. I learnt about using the Z-index and using absolute positioning to sort the issues out.

My main challenge was creating an animated countdown bar. I was a bit overwhelmed initially but after reading multiple stackoverflow posts, I started to realise how to pseudocode and then solve the problem - although it did take me longer than I would have liked.

There were times when I should have tried to figure out things on my own and other times when I should have asked for help earlier. Getting the balance was a little difficult for me in this project but has definitely helped me understand how to make my process more effective.

---

### Improvements

There are quite a few aspects of the game I'd like to improve.

To my code:
* Simplify my code and reduce any clutter.
* Add namespacing.

To my game:
* Make it responsive and completely restyle it.
* Add audio to the welcome, game over and winner game screens.
* Add a delay before the next round starts. Currently, when the user clicks on the correct last letter, the round changes before the user can really see the entire completed word.
* Separate the game into two difficulty levels.
* Change the amount of seconds per title. i.e give 10 seconds to the small titles and gradually increase to 30 seconds for the tougher titles.  
