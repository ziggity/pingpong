
//backend do some logic to the input
function pingPong(pingPongs){
  for (var i = 1; i <= pingPongs; i++) {
    if (i % 15 === 0) {
      $("#outPut").append('<img src="http://83e2u32cf1b4dlzbl29etyxt.wpengine.netdna-cdn.com/wp-content/uploads/2015/09/Spin-Button.jpg"> ping-pong');
    } else if (i % 3 === 0) {
      $("#outPut").append('<img src="https://i.kinja-img.com/gawker-media/image/upload/s--WodPvWTT--/c_scale,f_auto,fl_progressive,q_80,w_800/p23ecukc9nys2xdixl0q.jpg"> ping');
    } else if (i % 5 === 0) {
      $("#outPut").append('<img src="https://cdn.shutterstock.com/shutterstock/videos/23115493/thumb/1.jpg"> pong').hide().fadeIn(333);
    } else {
      $("#outPut").append( i + " "+'<img src="http://pngimg.com/upload_small/ping_pong/ping_pong_PNG10373.png">').hide().fadeIn(333);
      $( "#outPut" ).click(function() {
      $("#outPut").animate({//--Animation -----
        width: "10%",
        opacity: 0.01,
        marginLeft: "0.3in",
        fontSize: "2em",
        borderWidth: "5px"
        }, 3000 );
      });
    }
    $('#refreshP').click(function() {
    location.reload();
});
  }

}
//frontend, gather user's input
$(function(){

	var userNumber = parseInt(prompt("¡Enter your digits, por favor!"));
  var letPing = pingPong(userNumber)
});
