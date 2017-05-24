var Game = {
 preload: function() {
 
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;

            game.load.image("bg", 'assets/bg.png');
            game.load.audio("bgMusic", "music/kanta.mp3");
            game.load.image("slipper","assets/slipper.png",105,150);
            game.load.spritesheet("can",'assets/can.png',40,40);
            game.load.spritesheet("enemy",'assets/enemy.png',181.75,125);
            game.load.image("left","assets/button.png");
            game.load.image("button2","assets/button.png");
            game.load.image('restart', 'assets/restart.png');
            //game.load.image('button1', 'img/pausebtn.png');

            game.load.image("platform2","assets/platform2.png");
            //game.load.spritesheet("naruto","assets/player105x280.png",105,280);
            game.load.spritesheet("button1","assets/btnpause.png",200,100);
     

},
 create: function() {
            game.physics.startSystem(Phaser.Physics.ARCADE);
   //          game.physics.startSystem(Phaser.Physics.P2JS);

			// game.physics.p2.setImpactEvents(true);

  	// 		game.physics.p2.restitution = 0.63;
  	// 		game.physics.p2.gravity.y = 0;



  	// 		game.physics.p2.enable([ enemy], false);

			// enemy.body.setCircle(5.5);
			// enemy.body.static = true;
			// enemy.body.setCollisionGroup(collisionGroup);
			// enemy.body.collides([collisionGroup]);

			// createslipper();

			// cursors = game.input.keyboard.createCursorKeys();

			// game.input.onDown.add(click, this);
			// game.input.onUp.add(release, this);

			// var instructions = document.createElement("span");
			// //instructions.innerHTML = "Instructions: Quickly drag the paper to shoot the paper into the hoop!";
			// document.body.appendChild(instructions);

            game.add.sprite(0, 0, 'bg'); 
            bgAudio = game.add.audio("bgMusic");
            bgAudio.play();
            process.audio(26000);
            player = game.add.sprite(125,325,"slipper");
            player.scale.x = .75;
            player.scale.y = .75;
            button2 = game.add.button(185,0,"button2",process.walkRight);
            button2.scale.x = 9;
            button2.scale.y = 18;
            left = game.add.button(175,0,"left",process.walkLeft);
            left.scale.x = -9;
            left.scale.y = 18;
            button1 = game.add.button(245,0,"button1", process.pause, this,1,0);
            button1.scale.x = .45;
            button1.scale.y = .5;
            button3 = game.add.button(315,4,"restart",process.restart);
            button3.scale.x = .30;
            button3.scale.y = .35;
      
            platform2 = game.add.sprite(-25,600,"platform2");
            platform2.scale.x = .5;
            platform2.scale.y =.25;

            // player.animations.add('walk-right',[5,6,7,8,9],17,true);
            // player.animations.add('walk-left',[0,1,2,3,4],17,true);
    
            
            keyboard = game.input.keyboard.createCursorKeys();

            game.physics.arcade.enable(platform2);
            platform2.body.immovable = true;
            platform2.scale.x = 2;

            game.physics.arcade.enable(player);
            player.body.collideWorldBounds = true;
            player.body.gravity.y = 1000;
            player.body.bounce.y = 0.2

            can = game.add.sprite(165,140,"can");

           // game.physics.arcade.enable(enemy);
            enemy = game.add.sprite(0,10,"enemy");

            game.physics.arcade.enable(enemy);
            enemy.animations.add('fly', [0,1,2,3], 5, true);

            var tween = game.add.tween(enemy).to( { x: 180 }, 5000, Phaser.Easing.Linear.None, true, 0,10, true);
            //tween.onLoop.add(descend, this);

            game.physics.arcade.enable(enemy);
            game.physics.arcade.enable(player);
            game.physics.arcade.enable(can);

            player.body.collideWorldBounds = true;


          
            enemy.body.collideWorldBounds = true;
            can.body.collideWorldBounds = true;
           
      

    // scoreText = game.add.text(w-357,5,"Score: 0" ,
      // {font:'10px Ravie',stroke: 'magenta',strokeThickness:2});
    // BestText = game.add.text(w-357,30,"Best: "+process.getData() ,{font:'10px Ravie',stroke: 'yellow',strokeThickness:2});
    // gameOverText = game.add.text((w/2)-70,150,"",{font:'10px Ravie',stroke: 'violet',strokeThickness:1});
    // LivesText = game.add.text((w/2)-5,2,"Lives: 3",{font:'32px Ravie',stroke: 'red',strokeThickness:2});
    PauseText = game.add.text((w/2)-70,150,"",{font:'32px Ravie',stroke: 'pink',strokeThickness:4});
    // scoreText.scale.x = 1.25;
    // scoreText.scale.y = 3;  
    // BestText.scale.x = 1.25;
    // BestText.scale.y = 3;
    // gameOverText.scale.x = 2;
    // gameOverText.scale.y = 5;
    // LivesText.scale.x =.40;
    // LivesText.scale.y = 1;
    PauseText.scale.x = 2;
    PauseText.scale.y = 5;

},
    
// var x = 0;
update: function() {
             enemy.animations.play("fly");
             enemy.body.velocity.x = .1;
             enemy.body.velocity.x = -.1;
             enemy.body.bounce.x = 0;
     
    //game.physics.arcade.collide(rat,platform);
    //game.physics.arcade.collide(snake,platform);

    game.physics.arcade.collide(player,platform2);
    //game.physics.arcade.overlap(player,rat,process.killNaruto);
    //game.physics.arcade.collide(player,fence);
    //game.physics.arcade.overlap(rat,fence,process.killPlayer);
    //game.physics.arcade.collide(platform2,rat,lives);

    // if(keyboard.left.isDown){
    //     // x++;
    //     player.animations.play("walk-left");
    //     player.body.velocity.x = -500;
    //     // bg.frame = 0;
    // }
    // else if(keyboard.right.isDown){
    //     // x--;
    //     // bg.frame = 1;
    //     player.animations.play("walk-right");
    //     player.body.velocity.x = 500;
    // }
    // else{
    //     player.body.velocity.x = 0;
    //     player.animations.stop();
    // }

    // if(keyboard.up.isDown && player.body.touching.down){
    //     player.body.velocity.y = -400;
    // }
// }

//             game.physics.arcade.enable(player);
//     		player.body.collideWorldBounds = true;
//     		player.body.gravity.y = 1000;
//     		player.body.bounce.y = 0.2



//             can = game.add.sprite(165,140,"can");

//             enemy = game.add.sprite(100,10,"enemy");
//             enemy.animations.add('fly', [0,1,2,3], 5, true);

//             game.physics.arcade.enable(enemy);
//             game.physics.arcade.enable(player);
//             game.physics.arcade.enable(can);

//             player.body.collideWorldBounds = true;


          
//             enemy.body.collideWorldBounds = true;
//             can.body.collideWorldBounds = true;
           
//         },

// update: function() {
//              enemy.animations.play("fly");
//              enemy.body.velocity.x = 74;
//              enemy.body.velocity.x = -74;
//              enemy.body.bounce.x = 0.2;
//         }

},  
};
game.state.add("Game" ,Game, false);
