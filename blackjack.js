var startbool = false;
var playerclearvar = false;
var dealerclearvar = false;
var holdbool = false;
var hitcounter = 0;
var dealhitcounter = 0;
var money = 1000;
var bet = 0;
var num = Math.floor(Math.random() * 51);

var cards = [];
var playerpicked = [];
var dealerpicked = [];

var aceofhearts = {name:"ACE of Hearts", picked:false, value:11};
var aceofspades = {name:"ACE of Spades", picked:false, value:11};
var aceofclubs = {name:"ACE of Clubs", picked:false, value:11};
var aceofdiamonds = {name:"ACE of Diamonds", picked:false, value:11};
cards[0]=aceofhearts;
cards[1]=aceofspades;
cards[2]=aceofclubs;
cards[3]=aceofdiamonds;

var twoofhearts = {name:"2 of Hearts", picked:false, value:2};
var twoofspades = {name:"2 of Spades", picked:false, value:2};
var twoofclubs = {name:"2 of Clubs", picked:false, value:2};
var twoofdiamonds = {name:"2 of Diamonds", picked:false, value:2};
cards[4] = twoofhearts;
cards[5] = twoofspades;
cards[6] = twoofclubs;
cards[7] = twoofdiamonds;

var threeofhearts = {name:"3 of Hearts", picked:false, value:3};
var threeofspades = {name:"3 of Spades", picked:false, value:3};
var threeofclubs = {name:"3 of Clubs", picked:false, value:3};
var threeofdiamonds = {name:"3 of Diamonds", picked:false, value:3};
cards[8] = threeofhearts;
cards[9] = threeofspades;
cards[10] = threeofclubs;
cards[11] = threeofdiamonds;

var fourofhearts = {name:"4 of Hearts", picked:false, value:4};
var fourofspades = {name:"4 of Spades", picked:false, value:4};
var fourofclubs = {name:"4 of Clubs", picked:false, value:4};
var fourofdiamonds = {name:"4 of Diamonds", picked:false, value:4};
cards[12] = fourofhearts;
cards[13] = fourofspades;
cards[14] = fourofclubs;
cards[15] = fourofdiamonds;

var fiveofhearts = {name:"5 of Hearts", picked:false, value:5};
var fiveofspades = {name:"5 of Spades", picked:false, value:5};
var fiveofclubs = {name:"5 of Clubs", picked:false, value:5};
var fiveofdiamonds = {name:"5 of Diamonds", picked:false, value:5};
cards[16] = fiveofhearts;
cards[17] = fiveofspades;
cards[18] = fiveofclubs;
cards[19] = fiveofdiamonds;

var sixofhearts = {name:"6 of Hearts", picked:false, value:6};
var sixofspades = {name:"6 of Spades", picked:false, value:6};
var sixofclubs = {name:"6 of Clubs", picked:false, value:6};
var sixofdiamonds = {name:"6 of Diamonds", picked:false, value:6};
cards[20] = sixofhearts;
cards[21] = sixofspades;
cards[22] = sixofclubs;
cards[23] = sixofdiamonds;

var sevenofhearts = {name:"7 of Hearts", picked:false, value:7};
var sevenofspades = {name:"7 of Spades", picked:false, value:7};
var sevenofclubs = {name:"7 of Clubs", picked:false, value:7};
var sevenofdiamonds = {name:"7 of Diamonds", picked:false, value:7};
cards[24] = sevenofhearts;
cards[25] = sevenofspades;
cards[26] = sevenofclubs;
cards[27] = sevenofdiamonds;

var eightofhearts = {name:"8 of Hearts", picked:false, value:8};
var eightofspades = {name:"8 of Spades", picked:false, value:8};
var eightofclubs = {name:"8 of Clubs", picked:false, value:8};
var eightofdiamonds = {name:"8 of Diamonds", picked:false, value:8};
cards[28] = eightofhearts;
cards[29] = eightofspades;
cards[30] = eightofspades;
cards[31] = eightofdiamonds;

var nineofhearts = {name:"9 of Hearts", picked:false, value:9};
var nineofspades = {name:"9 of Spades", picked:false, value:9};
var nineofclubs = {name:"9 of Clubs", picked:false, value:9};
var nineofdiamonds = {name:"9 of Diamonds", picked:false, value:9};
cards[32] = nineofhearts;
cards[33] = nineofspades;
cards[34] = nineofclubs;
cards[35] = nineofdiamonds;

var tenofhearts = {name:"10 of Hearts", picked:false, value:10};
var tenofspades = {name:"10 of Spades", picked:false, value:10};
var tenofclubs = {name:"10 of Clubs", picked:false, value:10};
var tenofdiamonds = {name:"10 of Diamonds", picked:false, value:10};
cards[36] = tenofhearts;
cards[37] = tenofspades;
cards[38] = tenofclubs;
cards[39] = tenofdiamonds;

var jackofhearts = {name:"Jack of Hearts", picked:false, value:10};
var jackofspades = {name:"Jack of Spades", picked:false, value:10};
var jackofclubs = {name:"Jack of Clubs", picked:false, value:10};
var jackofdiamonds = {name:"Jack of Diamonds", picked:false, value:10};
cards[40] = jackofhearts;
cards[41] = jackofspades;
cards[42] = jackofclubs;
cards[43] = jackofdiamonds;

var queenofhearts = {name:"Queen of Hearts", picked:false, value:10};
var queenofspades= {name:"Queen of Spades", picked:false, value:10};
var queenofclubs = {name:"Queen of Clubs", picked:false, value:10};
var queenofdiamonds = {name:"Queen of Diamonds", picked:false, value:10};
cards[44] = queenofhearts;
cards[45] = queenofspades;
cards[46] = queenofclubs;
cards[47] = queenofdiamonds;

var kingofhearts = {name:"King of Hearts", picked:false, value:10};
var kingofspades = {name:"King of Spades", picked:false, value:10};
var kingofclubs = {name:"King of Clubs", picked:false, value:10};
var kingofdiamonds = {name:"King of Diamonds", picked:false, value:10};
cards[48] = kingofhearts;
cards[49] = kingofspades;
cards[50] = kingofclubs;
cards[51] = kingofdiamonds;


function deal(){
	clearcards();
	if(startbool===true){
		alert("Cards have already been dealt!");
		return;
	}
	startbool = true;
	pickDealer1();
	pickDealer2();
	pickPlayer1();
	pickPlayer2();
	document.getElementById("gamelog").innerHTML = "Cards have been dealt";
	var playercount = 0;
	for(i in playerpicked){
		playercount = playercount + playerpicked[i].value;
	}
	if(playercount === 21){
		alert("blackjack");
		money = money + 2.5*bet;
		bet = 0;
		document.getElementById("bet").innerHTML = "Bet: $"+bet;
		document.getElementById("money").innerHTML = "Money: $"+money;
		document.getElementById("gamelog").innerHTML = "New hand, place bets!";
		startbool = false;
		holdbool = false;
		hitcounter = 0;
		dealhitcounter = 0;
		num = Math.floor(Math.random() * 51);
		playerpicked = [];
		dealerpicked = [];
		for(i in cards){
			cards[i].picked = false;
		}
		return;
	}
	checkwin();
	return;
}

function dealerhit(){
	var count = 0;
	for(var i in dealerpicked){
		count = count+dealerpicked[i].value;
	}
	if(count<=16){
		num = Math.floor(Math.random() * 51);
		if(cards[num].picked === false){
			var dbutton1 = document.createElement("BUTTON");
			dbutton1.id = "dbutton";
			dbutton1.style.cssText = "width:100px;height:150px;";
			document.getElementById("mid1").appendChild(dbutton1);
			cards[num].picked = true;
			dbutton1.innerHTML = ""+cards[num].name;
			dealerpicked.push(cards[num]);
			dealerclearvar = true;
			dealhitcounter+=1;
			dealerhit();
		}
	}
	else{
		return;
	}
	
}

function hold(){
	
	if(startbool === false){
		alert("Deal cards before holding!");
		return;
	}
	if(holdbool === true){
		alert("You've already held!");
		return;
	}
	alert("INSIDE hold");
	holdbool = true;
	//startbool2 = true;
	dealerhit();
	checkwin();
}

function betmore(){
	if(startbool === true){
		alert("Cards have already been dealt! You can not bet now.");
		return;
	}
	document.getElementById("gamelog").innerHTML = "Bet $100";
	
	if(money-100>=0){
		money = money-100;
		bet = bet + 100;
	}
	else{
		alert("Insufficient funds");
	}
	document.getElementById("bet").innerHTML = "Bet: $"+bet;
	document.getElementById("money").innerHTML = "Money: $"+money;
	return;
}

function lessbet(){
	if(startbool === true){
		alert("Cards have already been dealt! You can not bet now.");
		return;
	}
	document.getElementById("gamelog").innerHTML = "Returned $100";
	if(bet-100>=0){
		bet = bet - 100;
		money = money+100;
	}
	else{
		alert("Insufficient funds");
	}
	document.getElementById("bet").innerHTML = "Bet: $"+bet;
	document.getElementById("money").innerHTML = "Money: $"+money;
	return;
}

function hitter(){
	if(startbool === false){
		alert("Deal cards before hitting!");
		return;
	}
	if(holdbool === true){
		alert("You already held!");
		return;
	}
	playerclearvar = true;
	alert("hit");
	if(hitcounter = 1){
		//alert("hit2");
		num = Math.floor(Math.random() * 51);
		if(cards[num].picked === false){
			var button1 = document.createElement("BUTTON");
			button1.id = "button1";
			alert("hitcounter = "+ hitcounter);
			button1.style.cssText = "width:100px;height:150px;";
			document.getElementById("mid2").appendChild(button1);
			cards[num].picked = true;
			button1.innerHTML = ""+cards[num].name;
			playerpicked.push(cards[num]);
			hitcounter=hitcounter+1;
			//alert("hitcounter = "+hitcounter)
		}
	}
	/*else if(hitcounter = 1){
		num = Math.floor(Math.random() * 51);
		if(cards[num].picked === false){
			var button2 = document.createElement("BUTTON");
			button2.id = "button2";
			alert("2");
			button2.class = "addedButtons"
			button2.style.cssText = "width:100px;height:150px;";
			document.getElementById("mid2").appendChild(button2);
			cards[num].picked = true;
			button2.innerHTML = ""+cards[num].name;
			playerpicked.push(cards[num]);
			hitcounter+=1;
			return;
		}
	}
	else if(hitcounter = 2){
		num = Math.floor(Math.random() * 51);
		if(cards[num].picked === false){
			var button3 = document.createElement("BUTTON");
			button3.style.cssText = "width:100px;height:150px;";
			document.getElementById("mid2").appendChild(button3);
			cards[num].picked = true;
			button3.innerHTML = ""+cards[num].name;
			playerpicked.push(cards[num]);
			hitcounter+=1;
			return;
		}
	}
	else if(hitcounter = 3){
		num = Math.floor(Math.random() * 51);
		if(cards[num].picked === false){
			var button4 = document.createElement("BUTTON");
			button4.style.cssText = "width:100px;height:150px;";
			document.getElementById("mid2").appendChild(button4);
			cards[num].picked = true;
			button4.innerHTML = ""+cards[num].name;
			playerpicked.push(cards[num]);
			hitcounter+=1;
		}
	}
	else{
		alert("error");
	}*/
	return;
}

function pickDealer1(){//make a function for each card pick 1 and 2
	if(cards[num].picked === false){
		document.getElementById("d1").innerHTML = "";
		cards[num].picked = true;
		dealerpicked.push(cards[num]);
		var dealerfirst= num;
	}
	else{
		num = Math.floor(Math.random() * 51);
		pickDealer1();
	}
	num = Math.floor(Math.random() * 51);
}
function pickDealer2(){
	if(cards[num].picked === false){
		document.getElementById("d2").innerHTML = ""+cards[num].name;
		cards[num].picked = true;
		dealerpicked.push(cards[num]);
	}
	else{
		num = Math.floor(Math.random() * 51);
		pickDealer2();
	}
	num = Math.floor(Math.random() * 51);
}

function pickPlayer1(){
	if(cards[num].picked === false){
		document.getElementById("p1").innerHTML = ""+cards[num].name;
		cards[num].picked = true;
		playerpicked.push(cards[num]);
	}
	else{
		num = Math.floor(Math.random() * 51);
		pickPlayer1();
	}
	
	num = Math.floor(Math.random() * 51);
}
function pickPlayer2(){
	if(cards[num].picked === false){
		document.getElementById("p2").innerHTML = ""+cards[num].name;
		cards[num].picked = true;
		playerpicked.push(cards[num]);
	}
	else{
		num = Math.floor(Math.random() * 51);
		pickPlayer2();
	}
	
	num = Math.floor(Math.random() * 51);
}

function checkwin(){
	var playercount = 0;
	var dealercount = 0;
	
	for(var i in dealerpicked){
		dealercount = dealercount+dealerpicked[i].value;
	}
	for(var i in playerpicked){
		playercount = playercount+playerpicked[i].value;

	}
	if(dealercount>21){
		document.getElementById("gamelog").innerHTML = "Player wins! Dealer busts!";
		money = money + bet*2;
		bet = 0;
		startbool = false;
		holdbool = false;
		hitcounter = 0;
		dealhitcounter = 0;
		num = Math.floor(Math.random() * 51);
		playerpicked = [];
		dealerpicked = [];
		document.getElementById("bet").innerHTML = "Bet: $"+bet;
		document.getElementById("money").innerHTML = "Money: $"+money;
		for(i in cards){
			cards[i].picked = false;
		}
		//clearcards();
		return;
	}
	if(playercount>21){
		document.getElementById("gamelog").innerHTML = "Dealer wins! Player busts!";
		bet = 0;
		startbool = false;
		holdbool = false;
		hitcounter = 0;
		dealhitcounter = 0;
		num = Math.floor(Math.random() * 51);
		playerpicked = [];
		dealerpicked = [];
		document.getElementById("bet").innerHTML = "Bet: $"+bet;
		document.getElementById("money").innerHTML = "Money: $"+money;
		for(i in cards){
			cards[i].picked = false;
		}
		//clearcards();
		return;
	}
	if(dealercount>playercount){
		document.getElementById("gamelog").innerHTML = "dealer is winning";
		if(holdbool===true){
			document.getElementById("gamelog").innerHTML = "dealer wins!!";
			bet = 0;
			startbool = false;
			holdbool = false;
			hitcounter = 0;
			dealhitcounter = 0;
			num = Math.floor(Math.random() * 51);
			playerpicked = [];
			dealerpicked = [];
			document.getElementById("bet").innerHTML = "Bet: $"+bet;
			document.getElementById("money").innerHTML = "Money: $"+money;
			for(i in cards){
				cards[i].picked = false;
			}
			//clearcards();
		}
	}
	else if(playercount>dealercount){
		document.getElementById("gamelog").innerHTML = "Player is winning";
		if(holdbool===true){
			document.getElementById("gamelog").innerHTML = "Player wins!!";
			money = money + bet*2;
			bet = 0;
			startbool = false;
			holdbool = false;
			hitcounter = 0;
			dealhitcounter = 0;
			num = Math.floor(Math.random() * 51);
			playerpicked = [];
			dealerpicked = [];
			document.getElementById("bet").innerHTML = "Bet: $"+bet;
			document.getElementById("money").innerHTML = "Money: $"+money;
			for(i in cards){
				cards[i].picked = false;
			}
			//clearcards();
			return;
		}
	}
	else if(dealercount=playercount & holdbool===true){
		document.getElementById("gamelog").innerHTML = "Push... Place new bets";
		money = money + bet;
		bet = 0;
		startbool = false;
		holdbool = false;
		hitcounter = 0;
		dealhitcounter = 0;
		num = Math.floor(Math.random() * 51);
		playerpicked = [];
		dealerpicked = [];
		document.getElementById("bet").innerHTML = "Bet: $"+bet;
		document.getElementById("money").innerHTML = "Money: $"+money;
		for(i in cards){
			cards[i].picked = false;
		}
		//clearcards();
		return;
	}
}

function clearcards(){
	
	for(var i=0; i<=hitcounter; i++){
		if(playerclearvar===true){
			document.getElementById("button1").remove();
			playerclearvar = false;
		}
	}
	for(var j=0; j<=dealhitcounter;j++){
		if(dealerclearvar===true){
			document.getElementById("dbutton").remove();
			dealerclearvar = false;
		}
	}
	return;
}
//add a check for value of '21' and make an if statement for what to do when player busts