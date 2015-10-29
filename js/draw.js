//create the div, add styles

var maxRows = 30 ;

//create array that will hold colors
var bluesPurples = ['#7A8097','#977A80','#99A0BD','#BD99A0','#977A80'] ;
var redsOrangesYellows = ['#ff9b9b','#f0b186','#ece5a7','#e39277','#e7ae74'] ;

//actual array to use
//holds the primary colors to base pattern off of
//pass in the first color, keep passing it in with varying luminosities
//then pass in next color

var skyColors = ['#6666FF','#CC99FF', '#FFCCCC', '#FFCC99', '#FF9999'] ;

for (var i = 0 ; i < skyColors.length ; i ++)
{
	var color = skyColors[i];
	for (var j = 0 ; j < 3 ; j ++)
	{
		var newShade = colorLuminance(color,0.15) ;
		createAndAppend(newShade);
		color = newShade;
	}
}

function createAndAppend (color)
{
	//will create a div with those css dimensions
	//then will set the color to the hex code that was passed in
	//
	var div = document.createElement("div");
	console.log(document);
	div.className = 'div1';
	div.style.background = color;
	//append the div
	document.body.appendChild(div);
	//love the div
}

function colorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

function drawClouds(idName) {
	//create div 
	var canvas = document.getElementById(idName);
	var context = canvas.getContext('2d');

	//begin custom shape
	context.beginPath();
	context.moveTo(170, 80);
	context.bezierCurveTo(130, 100, 130, 150, 230, 150);
	context.bezierCurveTo(250, 180, 320, 180, 340, 150);
	context.bezierCurveTo(420, 200, 420, 120, 390, 100);
	context.bezierCurveTo(430, 40, 370, 30, 340, 50);
	context.bezierCurveTo(320, 5, 250, 20, 250, 50);
	context.bezierCurveTo(200, 5, 150, 20, 170, 80);

	//complete custom shape
	//later remove js styles, add css style class to canvas element in html
	context.closePath();
	context.lineWidth = 5;
	context.strokeStyle = 'blue';
	context.stroke();
}
