
//backend do some logic to the input
function pingPong(pingPongs){
  for (var i = 1; i <= pingPongs; i++) {
    if (i % 15 === 0) {
      $("#outPut").append("<li>ping-pong</li>");
    } else if (i % 3 === 0) {
      $("#outPut").append("<li>ping</li>");
    } else if (i % 5 === 0) {
      $("#outPut").append("<li>pong</li>");
    } else {
      $("#outPut").append("<li>" + i + "</li>");
    }
  }
}
//frontend, gather user's input
$(function(){
	var userNumber = parseInt(prompt("¡Enter your digits, por favor!"));
  var letPing = pingPong(userNumber)
});
