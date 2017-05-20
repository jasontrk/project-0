console.log('JS Loaded');
// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//   'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//   't', 'u', 'v', 'w', 'x', 'y', 'z'];
//
// const movie1 = 'starwars'

const shuffle = function () {
  var x = this.split(''),
    n = x.length;

  for(var i = n - 1; i > 0; i--) {
    var y = Math.floor(Math.random() * (i + 1));
    var tmp = x[i];
    x[i] = x[y];
    x[y] = tmp;
  }
  return x.join('');
};
console.log('test'.shuffle());
