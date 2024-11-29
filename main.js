const btn = document.getElementById("btn");
function changeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const colorCode = `rgb(${r},${g},${b})`;
  document.body.style.backgroundColor = `${colorCode}`;
  const title = document.getElementById("title");
  title.style.color = `rgb(${r},${g},${b})`;
}
btn.addEventListener("click", changeColor);
