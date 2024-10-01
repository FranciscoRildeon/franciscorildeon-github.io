function insert(num) {
  document.getElementById("display").innerHTML += num;
}

function clearDisplay() {
  document.getElementById("display").innerHTML = "";
}

function calculate() {
  let display = document.getElementById("display").innerHTML;
  if (display) {
    document.getElementById("display").innerHTML = eval(display);
  }
}
