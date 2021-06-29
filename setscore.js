function load(){
  x = localStorage.getItem("score")
  console.log("executing..")
  if (x == undefined || x == null){
    document.getElementById("Highbox").innerHTML = "0"
  }else{
    x = x.toString();
    document.getElementById("Highbox").innerHTML = x
  }
}
  
