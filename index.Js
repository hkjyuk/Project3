const input = document.querySelector(".abc");
input.addEventListener("submit", onsubmit);
function onsubmit(params) {
  params.preventDefault();
  const qwe = input.elements[0].value;
  console.log(qwe);
  const kli = Math.floor(qwe / 60);
  console.log(kli);
  const jkl = qwe % 60;
  console.log(jkl);
  console.log("Години " + kli + " Хвилини " + jkl);
}
