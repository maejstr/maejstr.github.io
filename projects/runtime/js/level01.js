var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:700,y:groundY},
                {type: 'sawblade',x:1000,y:groundY},
                {type: 'sawblade',x:1300,y:groundY},
                {type: 'sawblade',x:1600,y:groundY},
                {type: 'sawblade',x:1900,y:groundY},
                {type: 'sawblade',x:2200,y:groundY},
                {type: 'chica face',x:550,y:320},
                {type: 'chica face',x:850,y:320},
                {type: 'chica face',x:1150,y:320},
                {type: 'chica face',x:1450,y:320},
                {type: 'chica face',x:1750,y:320},
                {type: 'chica face',x:2050,y:320},
            ]
            
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);
        
        // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x, y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
    
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
    
        myObstacle.x = x;
        myObstacle.y = y;
        
        game.addGameItem(myObstacle);
    
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
    
        obstacleImage.x = -25;
        obstacleImage.y = -25;
    }
       function createChica(x, y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
    
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
    
        myObstacle.x = x;
        myObstacle.y = y;
        
        game.addGameItem(myObstacle);
    
        var obstacleImage = draw.bitmap('img/chica face.PNG');
        myObstacle.addChild(obstacleImage);
    
        obstacleImage.x = -50;
        obstacleImage.y = -50;
    }
    
    function createEnemy(x, y) {
        
    
    var enemy =  game.createGameItem('enemy',28);
    var pacMan = draw.bitmap('img/pacman.png');
    pacMan.x = -22;
    pacMan.y = -28;
    enemy.addChild(pacMan);
    
    enemy.x = x;
    enemy.y = y;
    
    enemy.velocityX = -1;
    
    game.addGameItem(enemy);
    
    enemy.onPlayerCollision = function() {
        game.changeIntegrity(-10);
        enemy.fadeOut();
    
    };
    
    enemy.onProjectileCollision = function() {
      enemy.fadeOut();  
    };
    
    }
    
    createEnemy(800,groundY-50);
    createEnemy(1000,groundY-50);
    createEnemy(1300,groundY-50);
    createEnemy(1500,groundY-50);
    createEnemy(1700,groundY-50);
    createEnemy(1900,groundY-50);
    
    
    
    function createReward(x, y) {
        var hitZoneSize = 70;
        var damageFromObstacle = -500
    
        var myObstacle = game.createObstacle(hitZoneSize);
    
        myObstacle.x = x;
        myObstacle.y = y;
        
        game.addGameItem(myObstacle);
    
        var obstacleImage = draw.bitmap('img/crystal.png');
        myObstacle.addChild(obstacleImage);
    
        obstacleImage.x = -55;
        obstacleImage.y = -100;
        
        myObstacle.onPlayerCollision = function() {
            myObstacle.shrink();
            game.increaseScore(500);
        }
    }
    
  createReward(3000, 300);
    
    
    // createChica(400, 300)
    // createSawBlade(600, 200)
    // createSawBlade(700, 400)
    
             for (var i = 0; i <= levelData.gameItems.length; i++) {
             var ObjectX = levelData.gameItems[i].x 
             var ObjectY = levelData.gameItems[i].y
             
             if(levelData.gameItems[i].type === 'chica face' ){
                 createChica(ObjectX,ObjectY)
            
             }
             else if (levelData.gameItems[i].type === 'sawblade') {
             createSawBlade(ObjectX,ObjectY)
             }
            }
    
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}