$(() => {
  console.log('Guess Movie Game');
  // rounds
  // let roundsArr = [
  //   'roundOne',
  //   'roundTwo',
  //   'roundThree',
  //   'roundFour',
  //   'roundFive',
  //   'roundSix'];
  //
  //   let level = 0;
  //
  //   let score = 10;
  //   $playerScore.html(score);

// change movie title - done
// clear existing letters_list
// shuffle the word
// display shuffled letters
// display correct image



  console.log('Movie:', currentTitle);
  const $result = $('#result_list');
  const $letters = $('#letters_list');
  const movieTitles = ['SCREAM', 'PREDATOR', 'ROBOCOP', 'GLADIATOR', 'SILENCE OF THE LAMBS'];
  let currentIndex = 0;
  let currentTitle = movieTitles[currentIndex];

  function clearLetters() {
    $letters.html('');
    $result.html('');
  }

  // shuffle function
  String.prototype.shuffle = function () {
    var a = this.split(''),
      n = a.length;

    for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join('');
  };

  // hiding letters when clicked in the letters_list and show in result_list
  $letters.on('click','li', (e) => {
    $(e.target).hide();
    const letter = $(e.target).text();
    const index = $(e.target).data('index');
    console.log(letter);
    $result.append(`<li data-index=${index}>${letter}</li>`);
    // console.log($result.text());
    $result.text() === 'currentTitle';
    if ($result.text() === currentTitle) {
      clearLetters();
      currentIndex++;
      currentTitle = movieTitles[currentIndex];
      // console.log(clearLetters());

    }


  });

  // hiding letters when clicked in result_list and show in letters_list
  $result.on('click', 'li', (e) => {
    const dataIndex = $(e.target).data('index');
    $letters.children().filter((index) => {
      return index === dataIndex;
    }).show();
    $(e.target).remove();

    // use the data index to display the particular LI
    // display none the LI we just clicked to move back down
    console.log($(e.target));
  });


  // shuffled word
  const shuffledWord =currentTitle.shuffle();
  console.log('shuffled word', shuffledWord);
  for (let i=0; i < shuffledWord.length; i++ ) {
    $letters.append(`<li data-index=${i}>${shuffledWord[i]}</li>`);
  }




  $('#movie_picture').css('background-image', 'url(src/images/predator.jpg)');

  // correct letter pass in. event listener will sit on the li's
  // look into event delegation which is putting an event listener across the whole UL on each LI
  // $e.target html


});



//Action  Plan:
// Create basic layout containing 12 divs. 1 main container. 1 header containing 3 headers for logo, timer and score. 1 'top' div containing 3 divs for movie picture, movie title result, game options. 1 'bottom' div containing a letters div with an unordered letters list within.

// Work on the shuffle function and figure out how to make each shuffled letter clickable as well as make it dissapear and show in the 'movie title' div. The letters will be placed in order of clicks and answer is only correct when letters are in the right order. Use the splited array with a forEach statement when creating the boxes.

//Mike: Split film, create a for loop and append to DOM.

//Stackoverflow: You don't need to hide the letters, use data-attributes to identify the right position of them in the Movie Title container and append that in the empty boxes. The letters that doesn't correspond to the movie title just put with data-attributes empty and your algorithm will filter that putting a red border into selected wrong letter and stuff;
