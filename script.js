const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("display");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btnText = e.target.innerText;

    if (btnText === "=") {
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Error";
      }
    } else if (btnText === "ac") {
      display.innerText = "0";
    } else {
      display.innerText = display.innerText === "0" ? btnText : display.innerText + btnText;
    }
  });
});
