var id1
var id2
var score = 0

var count = 0

function doscore(){
     if (id1 == eyed){
       score = score+50
       
     }
     if (id2 == mouthid){
       score =  score+50;
     }
       document.getElementById("end").innerHTML = "Your Score:"
  document.getElementById("end2").innerHTML = score
     document.getElementById("test").style.display = "block"
     document.getElementById("bgdiv").style.backgroundColor = "transparent"
}



function endd(){
    document.getElementById("optionbutton1").style.display = "none"
   document.getElementById("optionbutton2").style.display = "none"
   document.getElementById("optionbutton3").style.display = "none"
   document.getElementById("optionbutton4").style.display = "none"
    document.getElementById("optionbutton5").style.display = "none"
   document.getElementById("optionbutton6").style.display = "none"
   document.getElementById("optionbutton7").style.display = "none"
   document.getElementById("optionbutton8").style.display = "none"

   doscore()

  
}

function Set2(idtwo){
   id2 = parseInt(idtwo)
  count = 2
  endd();
}

function clear1(){
   document.getElementById("optionbutton1").style.display = "none"
   document.getElementById("optionbutton2").style.display = "none"
   document.getElementById("optionbutton3").style.display = "none"
   document.getElementById("optionbutton4").style.display = "none"
    document.getElementById("optionbutton5").style.display = "block"
   document.getElementById("optionbutton6").style.display = "block"
   document.getElementById("optionbutton7").style.display = "block"
   document.getElementById("optionbutton8").style.display = "block"
}


function Set1(id){

  id1 = parseInt(id)
  count = 1
  clear1();
}


function conti(){
    document.getElementById("eyes").src = ""
   document.getElementById("mouth").src =  ""
   document.getElementById("optionbutton1").style.display = "block"
   document.getElementById("optionbutton2").style.display = "block"
   document.getElementById("optionbutton3").style.display = "block"
   document.getElementById("optionbutton4").style.display = "block"

}



function startround(){
  document.getElementById("bgdiv").style.backgroundColor = "grey"
   eyed = Math.floor((Math.random() * 4) + 1);
   mouthid = Math.floor((Math.random() * 4) + 1);
   document.getElementById("eyes").src = "eyes"+eyed+".png"
   document.getElementById("mouth").src = "mouth"+mouthid+".png"
   document.getElementById("test").style.display = "none"
   document.getElementById("end2").innerHTML = "Game Is In Progress"
   document.getElementById("end").innerHTML = "-------------------"
   setTimeout(conti, 2000)
}
