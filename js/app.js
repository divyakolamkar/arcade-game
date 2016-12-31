// Enemies our player must avoid
var Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = Math.floor(Math.random()*1500);
    this.y = y;
    this.speed = Math.floor((Math.random()*50)+150);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x<510){

    this.x = this.x + (this.speed)*dt;
 }
 else{
    this.speed = Math.floor((Math.random()*100)+100);
    this.x = -100;
 }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player=function(character){
    this.x=202;
    this.y=415;
    this.sprite=character;
};

Player.prototype.update=function(){
    
};

Player.prototype.reset=function(){
    this.x=202;
    this.y=415;
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
Player.prototype.handleInput = function(keycode){
    if(keycode==='left'){
        if(this.x>50){
        this.x-=50;
    }
    }
    if(keycode==='right'){
        if(this.x<360){
        this.x+= 50;
    }
    }
    if(keycode === 'up'){
        if(this.y<=15){
            alert("you win!!");
            this.reset();
        }
        else if(this.y>15){
        this.y-=80;
    }
    }
    if(keycode ==='down'){
        if(this.y<400){
            this.y+=80;
        }
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player('images/char-boy.png');

var en1 = new Enemy(60); //60
var en2 = new Enemy(143); //143
var en3 = new Enemy(226); //226

var allEnemies = [en1, en2, en3];

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//checks for ollision of the bugs and the player
function checkcollisions(player,enemy){
    if((player.y+50 > enemy.y)&&
        (player.x+50 > enemy.x) &&
        (player.x-50 < enemy.x) &&
        (player.y-50 < enemy.y)){
        player.x=202;
        player.y=415;
    }
};