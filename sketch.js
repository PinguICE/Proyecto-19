var calle, calleImg;
var cieloimg;
var player, playerImg;
var basura1, basura1img, basura2, basura2img, basura3, basura3img, basura4, basura4img;
var basura1Group, basura2Group, basura3Group, basura4Group;
var END = 0;
var PLAY = 1;
var gameState = PLAY;
var distance = 0;
var gameOver, restart, edges;


function preload() {
    cieloimg = loadImage("Cielo.jpg");
    calleImg = loadImage("Calle.gif");
    playerImg = loadImage("corredor.gif");
    basura1img = loadImage("Basura1.png");
    basura2img = loadImage("Basura2.png");
    basura3img = loadImage("Basura3.png");
    basura4img = loadImage("Basura4.png");
}

function setup() {
    createCanvas(500, 500) 
                    
    Ecenario calle = createSprite(100, 150);
    calle.addImage(calleImg);
    calle.velocityX = -5 player
    player = createSprite(70, 300);
    player.addImage(playerImg) player.scale = 0.06
    Grupos basura1Group = new Group(); basura2Group = new Group(); basura3Group = new Group(); basura4Group = new Group();

}

function draw() { //puntuacion 
    
    background(cieloimg);
    drawSprites();
    textSize(20);
    fill(225);
    text("Recorrido: " + distance, 900, 30);
    if (gameState == PLAY) {
        distance = distance + Math.round(getFrameRate() / 50);
        calle.velocityX = (-6 + 2 * distance / 150);
         player.y = World.mouseY;
        edges = createEdgeSprites();
        player.collide(edges);
              

              if (calle.x < 0) {
            calle.x = width / 2;
        }

        //programación de basuras
        var select_oppPlayer = Math.round(random(1, 3));
        if (World.frameCount % 150 == 0) {
            if (select_oppPlayer == 1) { Basura1(); } else if (select_oppPlayer == 2) { Basura2(); } else { Basura3(); }
        } //Muertes
        if (basura1Group.isTouching(player)) { 
            gameState = END; player.velocity;