const result = document.getElementById("result");
const input = document.getElementById("input");
const alertElement = document.getElementById("alert");

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    alertElement.style.display = "none";
    const value = parseInt(input.value);
    if (Number.isInteger(value) && value !== 0) {
      let output = "";
      if (value % 3 === 0) {
        output = "Fizz";
        if (value % 5 === 0) {
          output = "FizzBuzz";
        }
      } else if (value % 5 === 0) {
        output = "Buzz";
      } else {
        output = value;
      }
      return print(output);
    } else {
      return (alertElement.style.display = "block");
    }
  }
});

const print = (arg) => {
  const createElement = document.createElement("p");
  createElement.textContent = `${arg}!`;
  return result.append(createElement);
};
