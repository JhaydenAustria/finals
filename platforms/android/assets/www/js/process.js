var process = function() {
	   "use strict";
        return {


     // else {
     //player.body.velocity.y = 0;
     //player.animations.stop();
    //   }

audio : function(time){
		setInterval(function(){
			bgAudio.play();
			},time)

},
killPlayer: function(rat, player){
  lives = lives + (-1);
  player.kill();
    LivesText.text = "Lives: " + lives;;
  if (lives == 0){
    game._paused = true;
    gameOverText.text = "Game Over!\nBestscore: "+process.getData()+"\nScore: "+score;
    setTimeout(function(){
      game._paused = false;
    },3000)
    game._paused = true;
    game._paused = true;
    lives = 3;
}
},
saveData: function(score){
    localStorage.setItem("gameData" ,score); 
},
getData: function(){
    var data = localStorage.getItem("gameData");
    if(data ==null || data == ""){
        data = 0;
    }
    return data;
},
walkRight: function(){
    console.log("x");
    player.animations.play("walk-right");
    player.body.velocity.x = 100;

    /*button2.frame = 0;*/
},
walkLeft: function(){
    console.log("x");
    player.animations.play("walk-left");
    player.body.velocity.x = -100;

   /* left.frame = 0;*/
},
pause: function(){
  this.game.paused = true;
  var pausedText = this.add.text((w/2)-120, 200, "Game Paused\nTap to resume",{font:'25px Ravie',stroke: 'cyan',strokeThickness:2});
  this.input.onDown.add(function(){
    pausedText.destroy();
    this.game.paused = false;
  }, this);
},
restart: function(){
    game.state.start(game.state.current);




},
}
}();





//  unpause : function(event){
//         // Only act if paused
//    game.paused = false;
// },

//  createStars : function(time) {
//     setInterval(function() {
//         stars= star.create(Math.random()*3000, -100, "star");
//         stars.body.gravity.y = 60;
 

//         stars.body.collideWorldBounds = true;
//     },time);
// }, 
//  createAnons : function(time) {
//     setInterval(function() {
//         anons= anon.create(Math.random()*3000, -600, "anon");
//         anons.body.gravity.y = 2000;



//         anons.body.collideWorldBounds = false;
//     },time);   
   
// },
//  collectStar : function(player, star) {
    
//     // Removes the star from the screen
//     star.kill();
//     score += 500;

//     if(process.getScore()<=score){
//         process.saveScore(score);
//         bestScoreText.text= "Best Game Score:  "+score;
//     }
    
//     scoreText.text = 'Game Score: ' + score;

// },
//  collectAnon : function (player, anon) {
    
//     // Removes the star from the screen
//     player.kill();
//    setTimeout(function(){
//         btn.frame = 0
//         game._paused = false;
//     }, 5000)
//     game._paused = true;
//      messageText.text = 'WASTED!\nClick Restart to Try Again\nHIGHSCORE:'+ score;
// },
//  saveScore : function(score){
//     localStorage.setItem("gameScore",score);
// },
//  getScore : function(){
//     return (localStorage.getItem("gameScore") == null || localStorage.getItem("gameScore") == "")?0:localStorage.getItem("gameScore");
// },
//  goRight : function(){
//   	player.body.velocity.x = 600;
//     player.animations.play('right');
//  },
//  goLeft : function(){
//       player.body.velocity.x = -600;
//         player.animations.play('left');
//  },
//  goJump : function(){
//      player.body.velocity.y = -350;
// },
// stop : function(){
//     game.paused = true;
// },
//  play : function(){
//     game.paused = false;
// },
// restart : function(){
//     game.state.start(game.state.current);
//     },
// }
// }();