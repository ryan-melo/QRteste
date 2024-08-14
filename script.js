const input = document.querySelector("input");
const button = document.querySelector("button");
const qr = document.querySelector("img");
const im = document.querySelector(".im")

button.addEventListener("click", gerar);

function gerar() {
  // qr.style.visibility = "visible"
  if (input.value != "") {
    qr.src = "https://i.gifer.com/ZKZg.gif"
    teste = setTimeout(() => {qr.src = "https://quickchart.io/qr?text=" + input.value + "&margin=0" + "&light=f0f8ff"}, 1000)

    im.style.display = "block"
    input.placeholder = "Digite seu texto ou url"
    input.style.border = "1px solid rgb(165, 165, 165)"
  } else {
    input.placeholder = "Digite algo"
    input.style.border = "2px solid red"
    im.style.display = "none"
  }
}