const inputBill = document.getElementById("inputBill");
const inputTips = document.querySelectorAll("input[name='inputTip']");
const inputPeople = document.getElementById("inputPeople");
const tipCalc = document.getElementById("tipCalc");
const totalCalc = document.getElementById("totalCalc");
const resetBtn = document.getElementById("resetBtn");
const form = document.getElementById("form");
const error = document.getElementById("error");

let bill, tip, people;

inputBill.addEventListener("input", (e) => {
  bill = onlyDigits(e);
  calculate();
});

inputTips.forEach((inputTip) => {
  inputTip.addEventListener("input", (e) => {
    tip = onlyDigits(e);
    calculate();
  });
});

inputPeople.addEventListener("input", (e) => {
  people = onlyDigits(e);
  if (people == 0) form.classList.add('active');
  else form.classList.remove('active');
  calculate();
});

function onlyDigits(e) {
  return (e.currentTarget.value = e.currentTarget.value.replace(/[^\d.]/g, ""));
}

function calculate() {
 if (bill && tip && people && people != 0) {
    tipCalc.textContent = "$" + ((bill * tip * 0.01) / people).toFixed(2);
    totalCalc.textContent =
      "$" + (bill / people + (bill * tip * 0.01) / people).toFixed(2);
    resetBtn.disabled = false;
  }
}

resetBtn.addEventListener("click", function () {
  document.getElementById("form").reset();
  form.classList.remove("active");
  resetBtn.disabled = true;
  tipCalc.textContent = "$0.00";
  totalCalc.textContent = "$0.00";
  bill = undefined;
  tip = undefined;
  people = undefined;
});


