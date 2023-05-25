//Set up canvas and properties
let cnv = document.getElementById("cnv");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//Begin drawing on canvas
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 400, 400);

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 300, 25, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "green";
ctx.fillRect(0, 300, 400, 100);

let cloudIMG = document.getElementById("cloud");
ctx.drawImage(cloudIMG, 150, 100);
