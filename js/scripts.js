
//backend do some logic to the input
function pingPong(pingPongs){
  for (var i = 1; i <= pingPongs; i++) {
    if (i % 15 === 0) {
      $("#outPut").append('<img src="http://83e2u32cf1b4dlzbl29etyxt.wpengine.netdna-cdn.com/wp-content/uploads/2015/09/Spin-Button.jpg"> ping-pong');
    } else if (i % 3 === 0) {
      $("#outPut").append('<img src="https://cdn.shutterstock.com/shutterstock/videos/23115502/thumb/1.jpg?i10c=img.resize"> ping');
    } else if (i % 5 === 0) {
      $("#outPut").append('<img src="https://cdn.shutterstock.com/shutterstock/videos/23115493/thumb/1.jpg"> pong');
    } else {
      $("#outPut").append( i + " "+'<img src="http://pngimg.com/upload_small/ping_pong/ping_pong_PNG10373.png">');
    }
  }
}
//frontend, gather user's input
$(function(){
	var userNumber = parseInt(prompt("¡Enter your digits, por favor!"));
  var letPing = pingPong(userNumber)
});
