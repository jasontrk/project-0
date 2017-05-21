console.log('JS Loaded');


// Outside Shuffle function:
//
//          //create array before shuffle
//     movietitle = title.split('');
//     //in jquery
//     i = 0;
//     //ensures the correct number of boxes
//     boxes.each(function(){
//          $(this).data('letter', movietitle[i]);
//          i++;
//     });


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

//tests
console.log('STAR WARS'.shuffle());


console.log('PREDATOR'.shuffle());


// Outside Shuffle function:

    //      //here you'll need to create the multidimensional array before shuffle him
    // movietitle = title.split("");
    // //in jquery
    // i = 0;
    // //certify you will have a right number of boxes
    // boxes.each(function(){
    //      $(this).data('letter', movietitle[i]);
    //      i++;
    // });

//-> "movietitleshuffled


//Action  Plan:
// Create basic layout containing 12 divs. 1 main container. 1 header containing 3 headers for logo, timer and score. 1 'top' div containing 3 divs for movie picture, movie title result, game options. 1 'bottom' div containing a letters div with an unordered letters list within.

// Work on the shuffle function and figure out how to make each shuffled letter clickable as well as make it dissapear and show in the 'movie title' div. The letters will be placed in order of clicks and can only progress to next word once in the right order. Use the splited array with a forEach statement when creating the boxes.

//Stackoverflow: You don't need to hide the letters, use data-attributes to identify the right position of them in the Movie Title container and append that in the empty boxes. The letters that doesn't correspond to the movie title just put with data-attributes empty and your algorithm will filter that putting a red border into selected wrong letter and stuff;
