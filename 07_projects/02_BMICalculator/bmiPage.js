const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector(".results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a vaild height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a vaild weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let message = `<span>Your BMI is: <strong>${bmi}</strong></span><br>`;

    if (bmi < 18.6) {
      message += `<span class="text-warning">You are Underweight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message += `<span class="text-success">You are Normal</span>`;
    } else {
      message += `<span class="text-danger">You are Overweight</span>`;
    }

    results.innerHTML = message;
  }
});
