const input = document.getElementById("inputbox");
const buttons = document.querySelectorAll("button");

let string = "";
const values = Array.from(buttons);

values.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = string.replace(/x/g, "*");
      try {
        let result = eval(string);

        if (!Number.isInteger(result)) {
          result = result.toFixed(3);
        }
        input.value = result;
        string = result;
      } catch {
        input.value = "Error";
        string = "";
      }
    } else if (e.target.innerHTML === "RESET") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
