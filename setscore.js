function load(){
  x = localStorage.getItem("score")
  if (x == undefined){
    document.getElementById("Highbox").innerHTML = "0"
  }else{
    document.getElementById("Highbox").innerHTML = x
  }
}
  
