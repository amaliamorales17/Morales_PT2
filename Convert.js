var inches, centimeter;
var compute = 0;
var centimeters = 2.54;
function computeValue(){

  inches = parseInt(document.getElementById("inches").value);
  compute = inches * centimeters;
 
  document.getElementById("output").value = compute;
}

 document.getElementById("btncompute").addEventListener("click", computeValue);