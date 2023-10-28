// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

///
let likeButtons = document.querySelectorAll(".like-glyph")
for (element of likeButtons){
  element.addEventListener("click", (e) => {
  mimicServerCall()
  .then((respond) => {
    alert("You let em have it!");
    if(e.target.className.includes(" activated-heart")){
      e.target.className ="like-glyph"
      e.target.innerText = EMPTY_HEART
    }
    else{
      e.target.className += " activated-heart"
      e.target.innerText = FULL_HEART}
})
  .catch((error) => {
    document.getElementById("modal").className = ""
    alert("That ain't right")
  setTimeout(function() {
    document.getElementById("modal").className = "hidden"
}, 3000);
})
})
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
