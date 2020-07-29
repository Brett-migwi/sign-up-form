// var next = document.getElementById('next');
// var prev = document.getElementById('prev');

var myIndex = 0;
nextContainer(myIndex);

function  plus(n) {
    nextContainer(myIndex += n)
}
 
  var myArray = [];
function nextContainer (n) {
    var my;
    var i;
    var cont = document.getElementsByClassName("sign-up-name");
    var dot = document.getElementsByClassName("dots");
    // let style = window.getComputedStyle(dot, '::before');
    // let color = style.getPropertyValue('backgroun-color');
   
    if (n > cont.length) {
      myIndex = cont.length;
    }

    if (n < 1) {
      myIndex = 1;
    }

    for (i = 0; i < cont.length; i++) {
      cont[i].style.display = "none";
    } 
  
    for ( var im = 0; im < dot.length; im++) {
       dot[im].className  = dot[im].className.replace("active", "");
    }
    
       cont[myIndex - 1].style.display = "block";
       dot[myIndex - 1].className   += " active";
       dot[myIndex -1].after  = ""
 }
 if( myIndex == 0){
  dot[0].className   = " active";
 }



// (function  nextContainer(n) {
//   var i;
//   var myValue = 1;
//   var box = document.getElementsByClassName('sign-up-name');
//    for (i = 0; i < box.length; i++) {
//       box[0].style.display = " block";
     
//    }
  
// })();