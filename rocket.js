var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images
var rocket = new Image();
var bg = new Image();
var asteroid = new Image();

rocket.src = "images/rocket.png";
bg.src = "images/space.png";
asteroid.src = "images/asteroid.png";


// variables
var bX = 25;
var bY = 200;


// key control
document.addEventListener('keyup', (e) => {
    if (e.code === "ArrowUp" && bY >= rocket.height / 2) bY -= 25;
    else if (e.code === "ArrowDown" && bY <= cvs.height - rocket.height) bY += 25;
});


// asteroids coordinates
var asteroids = [];

asteroids[0] = {
    x: cvs.width,
    y: 20
};

// draw images
function draw() {
    ctx.drawImage(bg, 0, 0);
    for (var i = 0; i < asteroids.length; i++) {
        ctx.drawImage(asteroid, asteroids[i].x, asteroids[i].y);
        asteroids[i].x--;
        if (asteroids[i].x == 350) {
            asteroids.push({
                x: cvs.width,
                y: Math.floor(Math.random() * asteroid.height)
            });
        }

        // detect collision
        if (bX + rocket.width >= asteroids[i].x && bX <= asteroids[i].x + asteroid.width
            && ((bY <= asteroids[i].y + asteroid.height && bY + rocket.height >= asteroids[i].y))) {
            location.reload(); // reload the page
        }
    }
    ctx.drawImage(rocket, bX, bY);
    requestAnimationFrame(draw);
}
draw();
























