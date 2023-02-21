let operands = document.querySelectorAll(".input");
let output = document.querySelector(".output");
let xVar = 0;
operands.forEach((item) => {
  item.addEventListener("click", showOnScreen);
});
document.querySelector("#equal").addEventListener("click", calc);
document.querySelector("#reset").addEventListener("click", reset);
document.querySelector("#del").addEventListener("click", del);

function showOnScreen() {
 
  if (xVar == 1) {
    if(this.classList.contains("operation")){
      xVar = 0;
    }else{
      xVar = 2
      output.value = "";
    }
    
  }
  output.value += this.dataset.num;
}
function calc() {
  xVar = 1;
  try {
    output.value = eval(output.value);
  } catch (error) {
    output.value = `Error "Invalid Operation"`;
  }
}

function reset() {
  output.value = "";
  output.placeholder = "0";
}

function del() {
  output.value = output.value.slice(0, -1);
  output.value.length == 0 ? (output.placeholder = "0") : null;
}
