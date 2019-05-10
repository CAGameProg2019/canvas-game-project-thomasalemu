let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

let player;
let boundary;
let x=canvas.width/2-120;
let y= canvas.height/2;

var keyPressed={
  w:false,
  a:false,
  s:false,
  d:false
};



c.fillStyle="rgba(255,0,0,0.5)"
c.fillRect(100, 100, 100, 100);

function init() {
    player = new Player(x,y,25,"red");
    boundary = new Boundary(75,1,100,800,"blue");
    boundary3 = new Boundary(250,75,100,1000,"blue");
    boundary4 = new Boundary(425,1,100,800,"blue");
    boundary5 = new Boundary(600,75,100,1000,"blue");
    boundary6 = new Boundary(775,1,100,800,"blue");
    boundary7 = new Boundary(950,75,100,1000,"blue");
    boundary8 = new Boundary(1125,1,100,800,"blue");
    boundary9 = new Boundary(1300,75,100,1000,"blue");
    boundary10 = new Boundary(1400,800,200,100,"green");



    update();
}

function update() {
c.clearRect(0,0,canvas.width,canvas.height);


    if(keyPressed.w === true){
        player.y-=5;
    }if(keyPressed.s === true){
        player.y+=5;
    }if(keyPressed.d === true){
        player.x+=5;
    }if(keyPressed.a === true){
        player.x-=5;
    };

    boundary.draw(c);
    boundary3.draw(c);
    boundary4.draw(c);
    boundary5.draw(c);
    boundary6.draw(c);
    boundary7.draw(c);
    boundary8.draw(c);
    boundary9.draw(c);
    boundary10.draw(c);
    player.draw(c);

    var collide = boundary.collidesWith(player)||boundary3.collidesWith(player)||boundary4.collidesWith(player)||boundary5.collidesWith(player)||boundary6.collidesWith(player)||boundary7.collidesWith(player)||boundary8.collidesWith(player)||boundary9.collidesWith(player);
    var collide10 = boundary10.collidesWith(player)
    if(collide == true){
        alert("game over!")
    }if(collide10 == true){
        alert("you win!")
    }else{
        requestAnimationFrame(update);
    };


}

window.addEventListener('load', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

window.addEventListener('keydown',function(event){
    if(event.key==="w"){
        keyPressed.w = true;
    } if(event.key==="a"){
        keyPressed.a = true;
    }if(event.key==="s"){
        keyPressed.s = true;
    }if(event.key==="d"){
        keyPressed.d = true;
    }
});

window.addEventListener('keyup',function(event){
    if(event.key==="w"){
        keyPressed.w = false;
    } if(event.key==="a"){
        keyPressed.a = false;
    }if(event.key==="s"){
        keyPressed.s = false;
    }if(event.key==="d"){
        keyPressed.d = false;
    }
});
