var p;
var size;
var heading;
var pVel;
var force;
var boostColor;
var touch;
var playerColor;
var Score;
var Health;
var state = "play"

function updatePlayer() {
    boostColor = color(0)
        //move and rotate player 

    if (keyIsDown(LEFT_ARROW)) {
        heading -= 6;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        heading += 6;
    }
    if (keyIsDown(UP_ARROW)) {
        force = p5.Vector.fromAngle(radians(heading));
        pVel.add(force.mult(0.2));
        boostColor = color("red");
    }

    //contain player
    if (p.x > 500&&state === "play") {
        p.x = 0
    }
    if (p.x < 0&&state === "play") {
        p.x = 500
    }
    if (p.y > 500&&state === "play") {
        p.y = 0
    }
    if (p.y < 0&&state === "play") {
        p.y = 500
    }



    //update player location
    pVel.mult(0.978);
    p.add(pVel);
    //draw the player
    push();
    translate(p.x, p.y);
    rotate(radians(heading));
    //flame stuff

    fill(boostColor)
    triangle(-size + 1, size * .5, -size * 2.5, size / 7, size * -.6, -size * .6);
    //health


    fill("yellow");
    triangle(-size + 0.5, -size + 0.5, size + 10, 0, -size + 1, size + 1);
    pop();
    fill(255);
    fill(255);
    textSize(20)
    text("Your Health : "+Health,200, 24);
    fill("red");
    textStyle(BOLD)
    text("Your Target : 20",5,50)
    

    if (Score > 19){
        p.x = 10000
        p.y = 10000
        textSize(50);
        text("You Win :)",50,225)
        state = "end";
        textSize(15);
        text("to play again click 'r'",200,250)
        state = "end";
        if (keyIsDown(82)){
            p.x = 200;
            p.y = 200;
            Health = 50;
            Score =0;
            state = "play"
        }
    }

    if (Health === 0){
        p.x = 10000
        p.y = 10000
        textSize(50);
        text("You Lose :(",50,225)
        textSize(15);
        text("to play again click 'r'",200,250)
        state = "end";
        if (keyIsDown(82)){
            p.x = 200;
            p.y = 200;
            Health = 50;
            Score =0;
            state = "play"
        }
    }





    textSize(20);

    fill(255);
    text("Bubbles Hit : "+Score, 5, 25);

}