// 1 feet = 0.3048 metre
// 1 metre = 3.28048 foot

function ftToMetre(ft) {
  const multiplier = 0.3048;
  return ft * multiplier;
}

function metreToFt(metre) {
  const multiplier = 3.28048;
  return metre * multiplier;
}

document.getElementById("ft-btn").addEventListener("click", () => {
  const ftResult = document.getElementById("ft-result");
  const ftInput = document.getElementById("ft");
  const ftInputValue = ftInput.value;

  const result = ftToMetre(ftInputValue);
  ftResult.innerHTML = `${result.toFixed(3)} Metre`;
});

document.getElementById("metre-btn").addEventListener("click", () => {
  const metreResult = document.getElementById("metre-result");
  const metreInput = document.getElementById("metre");
  const metreInputValue = metreInput.value;
  const result = metreToFt(metreInputValue);
  metreResult.innerHTML = `${result.toFixed(3)} Ft`;
});
