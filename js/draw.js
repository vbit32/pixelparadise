var skyColors = ['#00378A','#6666FF','#CC99FF', '#FFCCCC', '#FFCC99', '#FF9999'] ;
var layersPerColor = 5 ;
//change this hardcoded later to let the user input 
var deezColors = [];

//prepare the sky
for (var i = 0 ; i < skyColors.length-1 ; i ++){generateColors (skyColors[i], skyColors[i+1], layersPerColor)}

//show the sky
//creates and places each div with its color on the screen
for (var i = 0 ; i < deezColors.length ; i ++){console.log(deezColors[i]) ; createAndAppend('#' + deezColors[i], 'sky-div') ;}

function get2DigitHex(value) {
	value = Math.floor(value);
	return value < 16 ? '0' + value.toString(16) : value.toString(16);
}

drawWaves("yo") ;
drawSun();

//gets two colors, creates n layer hex color codes between them
function generateColors(c1, c2, n) 
{
	var colors = [];

	if (n > 0) {
		var colors1 = hexToRgb(c1);
		var colors2 = hexToRgb(c2);
		var d = [(colors2.r - colors1.r) / n, (colors2.g - colors1.g) / n, (colors2.b - colors1.b) / n]

		colors1 = [colors1.r, colors1.g, colors1.b];

		for (var i = 0 ; i < n ; ++i) {
			var colorStr = "";
			for (var j = 0 ; j < 3 ; ++j){
				colorStr += get2DigitHex(colors1[j] + d[j] * (i + 1)); 
			}
			colors.push(colorStr);
			deezColors.push(colorStr) ;
			//createAndAppend('#' + colorStr) ;
		}
	}

	return colors;
}

//will create a div with those css dimensions
//then will set the color to the hex code that was passed in
function createAndAppend (color, divName)
{
	var div = document.createElement("div");
	console.log(document);
	div.className = divName;
	div.style.background = color;
	//append the div
	document.getElementById('sky').appendChild(div);
	//love the div
}

//used for lightening/darkening a color
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

//input in quotes, dont forget
//access inidivudal colors with .g .r .b
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
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
	context.strokeStyle = 'black';
	context.stroke();
}

//move to is starting point
//line to is ending point
function drawWaves (idName){
    // rand drawing drawing

    var canvas = document.getElementById(idName);
	var ctx = canvas.getContext('2d');
	ctx.canvas.style.width='100%';
  	ctx.canvas.style.height='auto';
 	ctx.canvas.width  = canvas.offsetWidth;
  	ctx.canvas.height = canvas.offsetHeight;

  	ctx.strokeStyle = "#676EC8";
	ctx.beginPath();
	ctx.fillStyle="#676EC8";
	ctx.moveTo(400, 0);
	ctx.lineTo(400,50);
	ctx.lineTo(550,50);
	ctx.lineTo(550,80);
	ctx.lineTo(500,80);
	ctx.lineTo(500,100);
	ctx.lineTo(590,100);
	ctx.lineTo(590,120);
	ctx.lineTo(480,120);
	ctx.lineTo(480,150);
	ctx.lineTo(530,150);
	ctx.lineTo(530,180);
	ctx.lineTo(620,180);
	ctx.lineTo(620,180);
	ctx.lineTo(620,195);
	ctx.lineTo(500,195);
	ctx.lineTo(500,215);
	ctx.lineTo(640,215);
	ctx.lineTo(640,290);
	ctx.lineTo(660,290);
	//insert side wave here
	ctx.lineTo(660,310);
	ctx.lineTo(610,310);
	ctx.lineTo(610,340);
	ctx.lineTo(690,340);
	ctx.lineTo(690,340);
	ctx.lineTo(690,380);
	ctx.lineTo(650,380);
	ctx.lineTo(650,400);
	ctx.lineTo(650,400);
	ctx.lineTo(750,400);
	ctx.lineTo(750,440);
	//insert another side wave
	ctx.lineTo(770,440);
	ctx.lineTo(770,470);
	ctx.lineTo(650,470);
	ctx.lineTo(650,485);
	ctx.lineTo(800,485);
	ctx.lineTo(800,500);
	ctx.lineTo(860,500);
	ctx.lineTo(860,520);
	ctx.lineTo(960,520);
	ctx.lineTo(960,520);
	ctx.lineTo(960,500);

	ctx.moveTo(900,480);
	ctx.lineTo(850,480);
//this is the tip, draw waves underneath
	ctx.lineTo(1020,500);
	ctx.lineTo(1020,460);
	ctx.lineTo(1090,460);
	ctx.lineTo(1090,440);
	ctx.lineTo(1040,440);
	ctx.lineTo(1040,420);
	ctx.lineTo(1060,420);
	ctx.lineTo(1060,400);
	ctx.lineTo(1120,400);
	ctx.lineTo(1120,385);
	ctx.lineTo(1120,385);
	ctx.lineTo(1000,385);
	ctx.lineTo(1000,365);
	ctx.lineTo(1170,365);
	ctx.lineTo(1170,330);
	ctx.lineTo(1130,330);
	ctx.lineTo(1130,310);
	ctx.lineTo(1190,310);
	ctx.lineTo(1190,250);
	ctx.lineTo(1210,250);
	ctx.lineTo(1210,230);
	ctx.lineTo(1180,230);
	//insert another side wave to the right
	ctx.lineTo(1180,230);
	ctx.lineTo(1180,210);
	ctx.lineTo(1090,210);
	ctx.lineTo(1090,190);
	ctx.lineTo(1290,190);
	ctx.lineTo(1290,160);
	ctx.lineTo(1200,160);
	ctx.lineTo(1200,140);
	ctx.lineTo(1180,140);
	ctx.lineTo(1180,120);
	ctx.lineTo(1250,120);
	ctx.lineTo(1250,90);
	ctx.lineTo(1360,90);
	ctx.lineTo(1360,120);
	ctx.lineTo(1420,120);
	ctx.lineTo(1420,80);
	ctx.lineTo(1460,80);
	ctx.lineTo(1460,40);
	ctx.lineTo(1480,40);
	ctx.lineTo(1480,0);
	//draw some right side waves here as well
	ctx.lineTo(400,0);

	//left side waves
	ctx.moveTo(200,300);
	ctx.lineTo(200,320);
	ctx.lineTo(240,320);
	ctx.lineTo(240,300);
	ctx.lineTo(200,300);

	ctx.moveTo(250,300);
	ctx.lineTo(340,300) ;
	ctx.lineTo(340,320) ;
	ctx.lineTo(310,320) ;
	ctx.lineTo(310,340) ;
	ctx.lineTo(280,340) ;
	ctx.lineTo(280,320) ;
	ctx.lineTo(250,320) ;
	ctx.lineTo(250,300) ;
	
	//use this later to fill wave color

	//bottom waves/ dark waves

	ctx.fill();
	ctx.closePath();

	ctx.beginPath() ;
	ctx.fillStyle="#2F3583";
	ctx.strokeStyle = "#2F3583";
	ctx.moveTo (0,800) ;
	ctx.lineTo (100,800) ;
	ctx.lineTo (100,850) ;
	ctx.lineTo (160,850) ;
	ctx.lineTo (160,830) ;
	ctx.lineTo (200,830) ;
	ctx.lineTo (200,810) ;
	ctx.lineTo (320,810) ;
	ctx.lineTo (320,840) ;
	ctx.lineTo (280,840) ;
	ctx.lineTo (280,860) ;
	ctx.lineTo (380,860) ;
	ctx.lineTo (380,840) ;
	ctx.lineTo (398,840) ;
	ctx.lineTo (398,810) ;
	ctx.lineTo (450,810) ;
	ctx.lineTo (450,760) ;
	ctx.lineTo (580,760) ;
	ctx.lineTo (580,790) ;
	ctx.lineTo (620,790) ;
	ctx.lineTo (620,830) ;
	ctx.lineTo (730,830) ;
	ctx.lineTo (730,810) ;
	ctx.lineTo (700,810) ;
	ctx.lineTo (700,795) ;
	ctx.lineTo (850,795) ;
	ctx.lineTo (850,745) ;
	ctx.lineTo (810,745) ;
	ctx.lineTo (810,735) ;
	ctx.lineTo (970,735) ;
	ctx.lineTo (970,765) ;
	ctx.lineTo (995,765) ;
	ctx.lineTo (995,795) ;
	ctx.lineTo (1115,795) ;
	ctx.lineTo (1115,815) ;
	ctx.lineTo (935,815) ;
	ctx.lineTo (935,835) ;
	ctx.lineTo (1015,835) ;
	ctx.lineTo (1015,865) ;
	ctx.lineTo (1195,865) ;
	ctx.lineTo (1195,825) ;
	ctx.lineTo (1295,825) ;
	ctx.lineTo (1295,775) ;
	ctx.lineTo (1230,775) ;
	ctx.lineTo (1230,755) ;
	ctx.lineTo (1310,755) ;
	ctx.lineTo (1310,738) ;
	ctx.lineTo (1450,738) ;
	ctx.lineTo (1450,718) ;
	ctx.lineTo (1560,718) ;
	ctx.lineTo (1560,728) ;
	ctx.lineTo (1490,728) ;
	ctx.lineTo (1490,750) ;
	ctx.lineTo (1520,750) ;
	ctx.lineTo (1520,770) ;
	ctx.lineTo (1650,770) ;
	ctx.lineTo (1650,800) ;
	ctx.lineTo (1710,800) ;
	ctx.lineTo (1710,750) ;
	ctx.lineTo (1660,750) ;
	ctx.lineTo (1660,730) ;
	ctx.lineTo (1770,730) ;
	ctx.lineTo (1770,750) ;
	ctx.lineTo (1830,750) ;
	ctx.lineTo (1830,770) ;
	ctx.lineTo (1920,770) ;
	ctx.lineTo (1920,979) ;
	ctx.lineTo (0,979) ;
	ctx.lineTo (0,800) ;



	


  	
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	
};

function drawSun(){
	
    var canvas = document.getElementById("sun");
	var ctx = canvas.getContext('2d');
	ctx.canvas.width  = window.innerWidth;
  	ctx.canvas.height = window.innerHeight;

	ctx.beginPath();

	ctx.arc(900,450,200,0,2*Math.PI);
	ctx.fillStyle="orange";
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath() ;
}


