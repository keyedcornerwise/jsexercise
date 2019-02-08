var elemChange = document.getElementById('menu');
elemChange.className = 'newBorder';

var qSel = document.querySelector('div#content p abbr');
qSel.className = 'abra';

// Calls the all the tag strong and adds a class

var theForce = document.getElementsByTagName('strong');

// pa.className = 'theOne';
// if (theForce.length > 0){
  for(var i = 0; i < theForce.length; i++){
    theForce[i].className = 'theOne';
  }
  // var pa = theForce[0];
  // pa.className = 'theOne';
// }

// Calls and finds all the elements that uses the class, display-2

var hdr = document.getElementsByClassName('display-2');
var lenh = hdr.length;
// if(hdr.length > 0){
  for(var j = 0; j < lenh; j++){
    hdr[0].className = 'hd';
  }
// }

// R's Solution

// var hdr = document.getElementsByClassName('display-2');
// // if(hdr.length > 0){
//   for(var j = 0; j = hdr.length; j++){
//     hdr[0].className = 'hd';
//   }
// // }

// Calls all query Selector
var allForOne = document.querySelectorAll('div#menu li.nav-item');

for(var k = 0; k < allForOne.length; k++){
  allForOne[k].className = 'oneForAll';
}
