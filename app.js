const action = document.querySelector(".action");
const screen = document.querySelector(".screen");
const screen2 = document.querySelector(".screen2");

let num1 = 0;
let islem = "";
let num2 = 0;
let sonuc = "";

action.addEventListener("click", (e) => {
  if (e.target.classList.contains("reset")) {
    resetScreen();
    resetNumber();
  }

  if (e.target.classList.contains("point")) {
    if (!screen.innerText.includes(".")) {
      screen.innerText += ".";
    }
  }

  if (e.target.classList.contains("neg-or-pos")) {
    screen.textContent *= -1;
    num2 = screen.textContent;
  }

  if (e.target.classList.contains("num")) {
    if (screen.textContent.includes(".")) {
      screen.textContent += e.target.innerText;
      num2 = screen.textContent;
    } else if (screen.textContent == 0) {
      screen.textContent = "";
      screen.textContent += e.target.innerText;
      num2 = screen.textContent;
    } else {
      screen.textContent += e.target.innerText;
      num2 = screen.textContent;
    }
  }

  if (e.target.classList.contains("operator")) {
    if (num1 == 0 && num2 == 0) {
    } else if (num1 && num2) {
      num1 = fSonuc();
      screen2.textContent += screen.innerText;
      num2 = screen.innerText;
      screen.innerText = "";
      islem = "";
      elseİf(e);
    } else if (num1 == 0) {
      num1 = screen.textContent;
      num2 = 0;
      screen2.textContent += screen.innerText;
      elseİf(e);
      screen.innerText = "";
    } else if (!num2) {
      num1 = screen.textContent;
      num2 = 0;
      screen2.textContent += screen.innerText;
      islem = "";
      elseİf(e);
      screen.innerText = "";
    }
  }

  if (e.target.classList.contains("equal")) {
    if (num1 == 0 && num2 == 0) {
      screen.innerText = 0;
    } else if (num1 == 0) {
      screen.innerText = screen.innerText;
    } else {
      resetScreen();
      screen.innerText = fIslem(islem);
      num1 = screen.innerText;
      num2 = 0;
    }
  }

  if (e.target.classList.contains("funcMod")) {
    screen.innerText = parseFloat(Number(screen.innerText) / 100);
  }
});

const elseİf = (e) => {
  if (e.target.innerText == "x") {
    screen2.textContent += "*";
    islem += e.target.innerText;
  } else if (e.target.innerText == "÷") {
    screen2.textContent += "/";
    islem += e.target.innerText;
  } else {
    screen2.textContent += e.target.innerText;
    islem += e.target.innerText;
  }
};

const fSonuc = () => {
  let x;
  if (num1 && num2) {
    x = fIslem(islem);
  }
  return x;
};

const resetScreen = () => {
  screen.textContent = "";
  screen2.textContent = "";
};

const resetNumber = () => {
  num1 = "";
  num2 = "";
  islem = "";
};

const fIslem = (islem) => {
  if (islem == "+") {
    return Number(num1) + Number(num2);
  } else if (islem == "-") {
    return Number(num1) - Number(num2);
  } else if (islem == "x") {
    return Number(num1) * Number(num2);
  } else if (islem == "÷") {
    return Number(num1) / Number(num2);
  }
};
