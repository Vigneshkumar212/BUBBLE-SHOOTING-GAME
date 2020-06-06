lasers = [];
laserVel = [];


function updateLasers() {
    for (var i = 0; i < lasers.length; i++) {

        //check bubble collisions
        for (var z = 0; z < bb.length; z++) {
            if (dist(lasers[i].x, lasers[i].y, bb[z].x, bb[z].y) < bbSize / 2) {
                bb[z] = createVector(random(0, width), random(0, height));
                bbVel[z] = p5.Vector.random2D().mult(random(0.25, 2.25));
                Score++;
            }
        }
        lasers[i].add(laserVel[i]);

        push();
        stroke(1000);
        //point(lasers[i].x,lasers[i].y);
 
        fill("green")
        line(lasers[i].x, lasers[i].y, lasers[i].x + laserVel[i].x * 2, lasers[i].y + laserVel[i].y * 2)
        
        pop();
    }
}

function keyPressed() {
    //console.log (keyCode); 
    if (keyIsDown (32) ) {
        //laserSound.play();
        fill("green")
        lasers.push(createVector(p.x, p.y));
        laserVel.push(p5.Vector.fromAngle(radians(heading)).mult(7));


    }
}