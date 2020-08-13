var canvas, canvasContext;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	loadImages();
}

function imageLoadingDoneSoStartGame() {
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);
  setupInput();
	carReset();
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	carMove();
	carTrackHandling();
}

function clearScreen() {
  colorRect(0,0, canvas.width,canvas.height, 'white'); // clear screen
}

function drawAll() {
  clearScreen();
	drawTracks();
	colorText("Varv: 1/5", "30px Arial", canvas.width/2-50, 90, "white");
  carDraw();
	// colorText(showWords, textX,textY, fillColor)
}
