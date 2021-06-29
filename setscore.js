window.onload = function (){
  x = localStorage.getItem("score")
  console.log("executing..")
  if (x == undefined || x == null){
    document.getElementById("Highbox").innerHTML = "0"
    console.log("Set!")
  }else{
    console.log("Set!")
    x = x.toString();
    document.getElementById("Highbox").innerHTML = x
  }
}
  
