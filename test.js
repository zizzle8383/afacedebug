var id1;
var id2;
var score = 0;
var money = 0;
var count = 0;
var health = 5; // Temporary value
//Guess wednesday is the new friday
//...

function doscore() {
        document.getElementById("hamster").src = "images/Critters/BlankBack.png";


	// check eyes
	if (id1 == eyed) {
		score = score + 5;
		money = money + 5;
	} else {
		health = health - 0.5;
	}

	// check mouth
	if (id2 == mouthid) {
		score = score + 5;
		money = money + 5;
	} else {
		health = health - 0.5;
	}
	// money
	

	if (health > 0) {
		document.getElementById("end").innerHTML = `YOUR SCORE: ${score}!`;
		if (localStorage.getItem("score") == undefined || localStorage.getItem("score") < score){
			
		   localStorage.setItem("score",score)
		}
		document.getElementById("end2").innerHTML = `Remaining Health: ${health}.`;
		document.getElementById("test").style.display = "block";
		document.getElementById("bgdiv").style.backgroundColor = "transparent";
	} else {
		document.getElementById("bgdiv").style.backgroundColor = "transparent";
		document.getElementById("end").innerHTML = "YOU RAN OUT OF HEALTH!";
		document.getElementById("end2").innerHTML = `Final Score: ${score}.`;
		if (localStorage.getItem("score") == undefined || localStorage.getItem("score") < score){
			
		localStorage.setItem("score",score)
		}
		
	}
}

function Combotest2() {
document.getElementById("hamster").src = "images/Critters/eye" + eyed + "mouth"+ mouthid +".png";
	document.getElementById("end2").innerHTML = "Correct Combo.";
	setTimeout(doscore, 2000);
}

function Combotest1() {
	document.getElementById("hamster").src = "images/Critters/eye" + id1 + "mouth"+ id2 +".png";

	document.getElementById("end2").innerHTML = "Your Combo.";
	setTimeout(Combotest2, 2000);
}

function endd() {
	document.getElementById("optionbutton1").style.display = "none";
	document.getElementById("optionbutton2").style.display = "none";
	document.getElementById("optionbutton3").style.display = "none";
	document.getElementById("optionbutton4").style.display = "none";
	document.getElementById("optionbutton5").style.display = "none";
	document.getElementById("optionbutton6").style.display = "none";
	document.getElementById("optionbutton7").style.display = "none";
	document.getElementById("optionbutton8").style.display = "none";

	Combotest1();
}

function Set2(idtwo) {
	id2 = parseInt(idtwo);
	count = 2;
	endd();
}

function clear1() {
	document.getElementById("optionbutton1").style.display = "none";
	document.getElementById("optionbutton2").style.display = "none";
	document.getElementById("optionbutton3").style.display = "none";
	document.getElementById("optionbutton4").style.display = "none";
	document.getElementById("optionbutton5").style.display = "block";
	document.getElementById("optionbutton6").style.display = "block";
	document.getElementById("optionbutton7").style.display = "block";
	document.getElementById("optionbutton8").style.display = "block";
}

function Set1(id) {
	id1 = parseInt(id);
	count = 1;

	clear1();
}

function conti() {
       document.getElementById("hamster").src = "images/Critters/BlankBack.png";
	document.getElementById("optionbutton1").style.display = "block";
	document.getElementById("optionbutton2").style.display = "block";
	document.getElementById("optionbutton3").style.display = "block";
	document.getElementById("optionbutton4").style.display = "block";
}

function startround() {

	document.getElementById("bgdiv").style.backgroundColor = "grey";

	eyed = Math.floor(Math.random() * 4) + 1;
	mouthid = Math.floor(Math.random() * 4) + 1;

        document.getElementById("hamster").src = "images/Critters/eye" + eyed + "mouth"+ mouthid +".png";
	document.getElementById("test").style.display = "none";
	document.getElementById("end2").innerHTML = "GAME IS IN PROGRESS";
	document.getElementById("end").innerHTML = "";
	setTimeout(conti, 2000);
}
