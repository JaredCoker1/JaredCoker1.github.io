/*var boardpic1 = document.getElementById("boardpic1");
var boardpic2 = document.getElementById("boardpic2");
var boardpic3 = document.getElementById("boardpic3");
var boardpic4 = document.getElementById("boardpic4");
var boardpic5 = document.getElementById("boardpic5");
var boardpic6 = document.getElementById("boardpic6");
var boardpic7 = document.getElementById("boardpic7");
var boardpic8 = document.getElementById("boardpic8");
var boardpic9 = document.getElementById("boardpic9");
*/
var boardpics = [document.getElementById("boardpic1"),document.getElementById("boardpic2"),
document.getElementById("boardpic3"),document.getElementById("boardpic4"),document.getElementById("boardpic5"),
document.getElementById("boardpic6"),document.getElementById("boardpic7"),document.getElementById("boardpic8"),
document.getElementById("boardpic9")];
var startbool=false;
var win=false;
var whosTurn = "x";



function start(){
	if(startbool === false){
		document.getElementById("paralog").textContent += "Game has Started... make a move--->";
		startbool = true;
	}
}
function checkStart(myImage){
	if(win===false){
	if(startbool=== true){
		clicked(myImage);
	}
	}
}

function clicked(myImage){
	
	if(myImage.getAttribute('src') === 'x.png'){
		var node = document.createTextNode("Already picked!|||");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		return;
	}
	if(myImage.getAttribute('src') === 'o.png'){
		var node = document.createTextNode("Already picked!|||");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		return;
	}
	if(myImage.src='white.jpg'){
		myImage.src="x.png";
		var node = document.createTextNode("Nice pick!|||");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		
		
		checkWin();
		
		
		}
			//board[i].src="x.png";
			//board[i].splice(i,1);
			//document.getElementById("paralog").textContent += "You picked"+board[i];
			//setTimeout(computerpick, 1500);
			computerPick();
}


function computerPick() {

	var rand = Math.floor(Math.random() * 10);
	
	if(document.getElementById("boardpic"+rand).getAttribute('src') === 'x.png'){
		rand=Math.floor(Math.random() * 10);
	}
	if(document.getElementById("boardpic"+rand).getAttribute('src') === 'o.png'){
		rand=Math.floor(Math.random() * 10);
	}
	if(document.getElementById("boardpic"+rand).getAttribute('src') === 'white.jpg'){
		document.getElementById("boardpic"+rand).src = "o.png";
	}
	else{
		computerPick();
	}
	
}
function checkWin(){
	if(document.getElementById("boardpic1").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic2").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic3").getAttribute('src') === 'x.png'){
		var node = document.createTextNode("YOU WIN!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
	}
	if(document.getElementById("boardpic4").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic5").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic6").getAttribute('src') === 'x.png'){
		var node = document.createTextNode("YOU WIN!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
	}
	if(document.getElementById("boardpic7").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic8").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic9").getAttribute('src') === 'x.png'){
		var node = document.createTextNode("YOU WIN!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
	}
	if(document.getElementById("boardpic1").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic4").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic7").getAttribute('src') === 'x.png'){
		var node = document.createTextNode("YOU WIN!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
	}
	if(document.getElementById("boardpic2").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic5").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic8").getAttribute('src') === 'x.png'){
		var node = document.createTextNode("YOU WIN!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
	}
	if(document.getElementById("boardpic3").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic6").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic9").getAttribute('src') === 'x.png'){
		var node = document.createTextNode("YOU WIN!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
	}
	if(document.getElementById("boardpic1").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic5").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic9").getAttribute('src') === 'x.png'){
		var node = document.createTextNode("YOU WIN!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
	}
	if(document.getElementById("boardpic3").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic5").getAttribute('src') === 'x.png' 
	&& document.getElementById("boardpic7").getAttribute('src') === 'x.png'){
		var node = document.createTextNode("YOU WIN!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
	}
	if(document.getElementById("boardpic1").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic2").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic3").getAttribute('src') === 'o.png'){
		var node = document.createTextNode("COMPUTER WINS!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
	}
	if(document.getElementById("boardpic4").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic5").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic6").getAttribute('src') === 'o.png'){
		var node = document.createTextNode("COMPUTER WINS!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
	}
	if(document.getElementById("boardpic7").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic8").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic9").getAttribute('src') === 'o.png'){
		var node = document.createTextNode("COMPUTER WINS!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
	}
	if(document.getElementById("boardpic1").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic4").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic7").getAttribute('src') === 'o.png'){
		var node = document.createTextNode("COMPUTER WINS!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
	}
	if(document.getElementById("boardpic2").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic5").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic8").getAttribute('src') === 'o.png'){
		var node = document.createTextNode("COMPUTER WINS!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
	}
	if(document.getElementById("boardpic3").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic6").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic9").getAttribute('src') === 'o.png'){
		var node = document.createTextNode("COMPUTER WINS!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
	}
	if(document.getElementById("boardpic1").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic5").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic9").getAttribute('src') === 'o.png'){
		var node = document.createTextNode("COMPUTER WINS!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
	}
	if(document.getElementById("boardpic3").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic5").getAttribute('src') === 'o.png' 
	&& document.getElementById("boardpic7").getAttribute('src') === 'o.png'){
		var node = document.createTextNode("COMPUTER WINS!!!!!!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
		}

}
function checkTie(){
	var count;
	for(var i; i<board.length;i++)
	{
		
		if(document.getElementById("boardpic"+i).getAttribute('src')==='o.png' || document.getElementById("boardpic"+i).getAttribute('src')==='o.png'){
			count++;
		}
		
	}
	if(count===9){
		var node = document.createTextNode("TIE!!");
		var element = document.getElementById("paralog");
		element.appendChild(node);
		win=true;
		return;
		}
}



