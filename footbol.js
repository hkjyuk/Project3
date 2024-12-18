const bool = document.querySelector(".bool");
const fild = document.querySelector(".fild");
fild.addEventListener("click", click);
function click(event) {
  const fildStyles = window.getComputedStyle(fild);
  console.log(fildStyles);
  const fildwidht = Number.parseFloat(fildStyles.width);
  const fildhight = Number.parseFloat(fildStyles.height);
  console.log(fildwidht, fildhight);
  let x = event.clientX;
  console.log(x);
  const boolradius = bool.offsetWidth / 2;
  console.log(boolradius);
  let y = event.clientY;
  bool.style.transform = `translate(${x}px, ${y}px)`;
}
