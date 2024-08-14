const input = document.querySelector("input");
const button = document.querySelector("button");
const qr = document.querySelector("img");

button.addEventListener("click", gerar);

function gerar() {
  // qr.style.visibility = "visible"
  if (input.value != "") {
    qr.src = "https://i.gifer.com/ZKZg.gif"
    teste = setTimeout(() => {qr.src = "https://quickchart.io/qr?text=" + input.value + "&margin=0" + "&light=f0f8ff"}, 1000)
    input.style.border = ""
  } else {
    input.style.border = "2px solid red"
  }
}