var carPic = document.createElement("img");
var road = document.createElement("img");
var start = document.createElement("img");
var wall = document.createElement("img");
var trees = document.createElement("img");

var picsToLoad = 0;

function imagesLeftToLoad() {
  picsToLoad--;
  if (picsToLoad == 0) {
    imageLoadingDoneSoStartGame();
  }
}

function beginLoadingImage(imgVar, fileName) {
  imgVar.onload = imagesLeftToLoad();
  imgVar.src = "images/"+fileName;
}

function loadImages() {
  var imageList = [
    {varName: carPic, theFile: "player1car.png"},
    {varName: road, theFile: "roadDone.png"},
    {varName: start, theFile: "startTrack.png"},
    {varName: wall, theFile: "wall.png"},
    {varName: trees, theFile: "trees.png"},
  ];

  picsToLoad = imageList.length;

  for (var i = 0; i < imageList.length; i++) {
    beginLoadingImage(imageList[i].varName, imageList[i].theFile);
  }
}
