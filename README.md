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

Being my first project using JavaScript, I faced quite a few challenges as I hadn't fully grasped the fundamentals. However, doing the project itself helped me to relearn aspects I hadn't grasped as well as putting my existing knowledge into practice.

Using console.log was quite key to getting me through the project to test what was exactly happening when things didn't work as I expected it to.

My first real challenge was understanding how to have my game run through a list of movies with specific audio and image files in a specific order. Although it may be obvious, I did not think it was as simple as adding properties to values within a single variable. It was the first time I was really practicing linking javascript to insert things into text or image containers.

A big challenge was fixing my Funct-eption'esque code. I spent hours trying to stop functions clashing with each other as I had functions within functions, some of which were in loops. Examples of the issues were when my letters would be duplicated and progress bar visually behaving erratic like it was moving to a dubstep beat. My instructor, Mike, rescued my code by pulling functions out of my main 'runGame' function and in the end, there wasn't even a function left in it! I wasted some time due to simple syntax errors such as forgetting to put in a capital letter or invoking functions. Going forward, this experience will make me aware of doing these things correctly.

I also had difficulty getting my welcome, game over and winner screen to appear correctly. They would be pushed down due to the order they sit in my HTML. I learnt about using the Z-index and using absolute positioning to sort the issues out.

There were times when I should have tried to figure out things on my own and other times when I should have asked for help earlier. Getting the balance was a little difficult for me in this project but has definitely helped me understand how to make my process more effective.

---

### Improvements

There are quite a few aspects of the game I'd like to improve.

To my code:
* Define more consts to simplify my code and reduce any clutter.
* Add namespacing.

To my game:
* Make it responsive. Currently it looks like a game made made in the early 2000s.
* Add audio to the welcome, game over and winner game screens.
* Add a delay before the next round starts. Currently, when the user clicks on the correct last letter, the round changes before the user can really see the entire completed word.
* I would definitely like to add more CSS to the game as it looks relatively basic.
* Separate the game into two difficulty levels.
* Change the amount of seconds per title. i.e give 10 seconds to the small titles and gradually increase to 30 seconds for the tougher titles.  
