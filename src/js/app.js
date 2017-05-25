$(() => {
  console.log('Guess Movie Game');

  const audio = $('audio')[0];
  const $result = $('#result_list');
  const $letters = $('#letters_list');
  const $hint = $('#dropdownHint');
  const $gameOver = $('.gameover');
  const $runGame = $('.gameRunning');
  const movieTitles = [{
    title: 'SCREAM',
    image: 'scream.bmp',
    audio: 'scream',
    hint: 'What\'s your favourite Scary Movie?'

  }, {
    title: 'IRONMAN',
    image: 'ironman.bmp',
    audio: 'ironman',
    hint: 'Heroes aren\'t born. They\'re built.'

  }, {
    title: 'PREDATOR',
    image: 'predator.bmp',
    audio: 'predator',
    hint: 'Soon the hunt will begin.'
  }, {
    title: 'ROBOCOP',
    image: 'robocop.bmp',
    audio: 'robocop',
    hint: 'Part man. Part machine. All cop.'
  }, {
    title: 'GLADIATOR',
    image: 'gladiator.bmp',
    audio: 'gladiator',
    hint: 'Father of a murdered son, husband to a murdered wife and I shall have my vengeance in this life or the next.'
  }, {
    title: 'FRIDAY_THE_13TH',
    image: 'fridaythe13th.bmp',
    audio: 'fridaythe13th',
    hint: 'Fridays will never be the same again.'
  }, {
    title: 'V_FOR_VENDETTA',
    image: 'vforvendetta.bmp',
    audio: 'vforvendetta',
    hint: 'Remember, remember the 5th of November.'
  }, {
    title: 'PHANTOM_OF_THE_OPERA',
    image: 'phantomoftheopera.bmp',
    audio: 'phantomoftheopera'
  }, {
    title: 'BATMAN_VS_SUPERMAN',
    image: 'batmanvssuperman.bmp',
    audio: 'batmanvssuperman',
    hint: 'BvS: Dawn of Justice'
  }];

  let currentIndex = 0;
  let currentTitle = movieTitles[currentIndex];
  let timerId = null;

  function progress(timeleft, timetotal, $element) {
    clearTimeout(timerId);
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('#bar').animate({ width: progressBarWidth }, 500).html(timeleft + 's');
    if(timeleft > 0) {
      timerId = setTimeout(function() {
        progress(timeleft - 1, timetotal, $element);
      }, 1000);
    }
    if(timeleft === 0){
      console.log(audio);
      $runGame.hide();
      audio.pause();
      $gameOver.fadeIn();
      clearLetters();
    }
  }

  console.log('Movie:', currentTitle);

  function congrats() {
    $letters.html('');
    $result.html('Nice. <br>On to the next one.');

  }
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


  // shuffled word and place in letters
  function displayWord(){
    const shuffledWord = currentTitle.title.shuffle();
    $letters.empty();
    // console.log('shuffled word', shuffledWord);
    for (let i=0; i < shuffledWord.length; i++ ) {
      $letters.append(`<li data-index=${i}>${shuffledWord[i]}</li>`);
    }
    progress(25, 25, $('#progressBar'));

    // image change when movie title changes
    $('#movie_picture').css('background-image', `url(public/assets/${currentTitle.image})`);
    // audio change when movie title changes
    audio.src = `public/assets/${currentTitle.audio}.mp3`;
    audio.loop = true;
    audio.play();
    // // hint changes when movie title changes
    // $('#dropdownHint').html;
    $hint.text(currentTitle.hint);
  }

// start on welcome screen. click button to hide welcome page and run game
  function hideWelcome() {
    $('.welcome').fadeOut();
    displayWord();
  }
  $('#welcomeBtn').on('click', hideWelcome);

  //restart game
  function restartGame(){
    $gameOver.hide();
    $runGame.show();
    currentIndex = 0;
    currentTitle = movieTitles[currentIndex];
    displayWord();
  }
  $('#restartBtn').on('click', restartGame);

  // hiding letters when clicked in the letters_list and show in result_list
  $letters.on('click','li', (e) => {
    $(e.target).hide();
    const letter = $(e.target).text();
    const index = $(e.target).data('index');
    console.log(letter);
    $result.append(`<li data-index=${index}>${letter}</li>`);
    if ($result.text() === currentTitle.title) {
      clearTimeout(timerId);
      audio.src = `public/assets/correct.mp3`;
      audio.loop = false;
      audio.play();
      congrats();


      if (currentIndex < movieTitles.length - 1) {
        currentIndex++;
        currentTitle = movieTitles[currentIndex];
        clearLetters();
        setTimeout(displayWord, 1800);
      } else {
        // game over logic

      }


      // console.log(clearLetters());
      // return currentTitle.displayWord

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
});



//Action  Plan:
// Create basic layout containing 12 divs. 1 main container. 1 header containing 3 headers for logo, timer and score. 1 'top' div containing 3 divs for movie picture, movie title result, game options. 1 'bottom' div containing a letters div with an unordered letters list within.

// Work on the shuffle function and figure out how to make each shuffled letter clickable as well as make it dissapear and show in the 'movie title' div. The letters will be placed in order of clicks and answer is only correct when letters are in the right order. Use the splited array with a forEach statement when creating the boxes.

// change movie title - done
// clear existing letters_list - done
// shuffle the word - done
// display shuffled letters - done
// display correct image and change for title - done
// play correct audio and change for title - done
// give hint value in each object and change each title -

//Tips:
//Mike: Split film, create a for loop and append to DOM.

//Stackoverflow: You don't need to hide the letters, use data-attributes to identify the right position of them in the Movie Title container and append that in the empty boxes. The letters that doesn't correspond to the movie title just put with data-attributes empty and your algorithm will filter that putting a red border into selected wrong letter and stuff;
