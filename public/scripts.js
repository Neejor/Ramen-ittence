// let myID = document.getElementById("navbar");
// console.log(myID);

// var myScrollFunc = function() {
//   var y = window.scrollY;
//   // console.log("D");
//   if (y >= 800) {
//     myID.className = "navbar bg-light show"
//   } else {
//     console.log("G");
//     myID.className = "navbar bg-light hide"
//   }
// };

// window.addEventListener("scroll", myScrollFunc);

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
	speed: 800
});

console.log(scroll);