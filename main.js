var days, days1, measure ;

function calculate() {
	days = document.getElementById("days").value;
  days1 = (365*3) - days;
  days1 = days1.toFixed(1);
	measure =  days1 + " days left until the freedom! " ;

		document.getElementById("results").innerHTML = measure;

}
var first, second, result;
function kobeitu() {
  first = document.getElementById("first").value;
  second = document.getElementById("second").value;
  result = first * second;
  document.getElementById("result").innerHTML = "The result is:" + "<br>" + result;
}
var first, second, result;
function bolu() {
  first = document.getElementById("first").value;
  second = document.getElementById("second").value;
  result = first / second;
  document.getElementById("result").innerHTML = "The result is:" + "<br>" + result;
}
