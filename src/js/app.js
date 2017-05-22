$(() => {
  console.log('jQuery Loaded');

  const $result = $('#result_list');
  const $letters = $('#letters_list');

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

  $letters.on('click','li', (e) => {
    $(e.target).hide();
    const letter = $(e.target).text();
    const index = $(e.target).data('index');
    console.log(letter);
    $result.append(`<li data-index=${index}>${letter}</li>`);
    console.log($result.text());
  });


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


  const correctWord ='PREDATOR';
  const shuffledWord =correctWord.shuffle();
  console.log('shuffled word', shuffledWord);
  for (let i=0; i < shuffledWord.length; i++ ) {
    $letters.append(`<li data-index=${i}>${shuffledWord[i]}</li>`);
  }

  $('#movie_picture').css('background-image', 'url(src/images/predator.jpg)');

  // correct letter pass in. event listener will sit on the li's
  // look into event delegation which is putting an event listener across the whole UL on each LI
  // $e.target html


});

    // Outside Shuffle function:
    //
    // create array before shuffle
    //     movietitle = title.split('');
    //     i = 0;
    //     //ensures the correct number of boxes
    //     boxes.each(function(){
    //          $(this).data('letter', movietitle[i]);
    //          i++;
    //     });


    // const selectLetter = function (letter) {
    //   document.getElementById(letter.target.id).setAttribute('class', 'hide');
    //   this.updateResult(letter.target.id, letter.target.innerText);
    // };


  // };




//Action  Plan:
// Create basic layout containing 12 divs. 1 main container. 1 header containing 3 headers for logo, timer and score. 1 'top' div containing 3 divs for movie picture, movie title result, game options. 1 'bottom' div containing a letters div with an unordered letters list within.

// Work on the shuffle function and figure out how to make each shuffled letter clickable as well as make it dissapear and show in the 'movie title' div. The letters will be placed in order of clicks and answer is only correct when letters are in the right order. Use the splited array with a forEach statement when creating the boxes.

//Mike: Split film, create a for loop and append to DOM.

//Stackoverflow: You don't need to hide the letters, use data-attributes to identify the right position of them in the Movie Title container and append that in the empty boxes. The letters that doesn't correspond to the movie title just put with data-attributes empty and your algorithm will filter that putting a red border into selected wrong letter and stuff;
