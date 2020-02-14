var carPic = document.createElement("img");
var carPicLoaded = false;

var carX = 75;
var carY = 75;
var carAng = 0;
var carSpeed = 0;

const GROUNDSPEED_DECAY = 0.96;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.07;

function carImageLoad() {
	carPic.onload = function() {
		carPicLoaded = true;
	}
	carPic.src = "player1car.png";
}


function carReset() {
	for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {
			var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
			if(trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
				trackGrid[arrayIndex] = TRACK_ROAD;
				carAng = -Math.PI/2;
				carX = eachCol * TRACK_W + TRACK_W/2;
				carY = eachRow * TRACK_H + TRACK_H/2;
			}
		}
	}
}

function carDraw() {
	if(carPicLoaded) {
		drawBitmapCenteredWithRotation(carPic, carX,carY, carAng);
	}
}

function carMove() {
	carSpeed *= GROUNDSPEED_DECAY;
	if (keyHeld_Gas) {
		carSpeed += DRIVE_POWER;
	}
	if (keyHeld_Reverse) {
		carSpeed -= REVERSE_POWER;
	}
	if (keyHeld_TurnRight) {
		carAng += TURN_RATE;
	}
	if (keyHeld_TurnLeft) {
		carAng -= TURN_RATE;
	}
	// console.log(carSpeed);
	carX += Math.cos(carAng) * carSpeed;
	carY += Math.sin(carAng) * carSpeed;
	// carAng += 0.02;
}