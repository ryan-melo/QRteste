const input = document.querySelector("input");
const button = document.querySelector("button");
const qr = document.querySelector("img");
const im = document.querySelector("#im");
const downloadButton = document.querySelector(".downloadButton");
const a = document.querySelector("a")
const rangeInput = document.querySelector("#range")
const teste = document.querySelector(".teste")
const result = document.querySelectorAll(".result")

button.addEventListener("click", gerar);

let validacion = false

function gerar() {
  if (input.value != "") {
    validacion = true
    im.style.display = "block"
    downloadButton.style.display = "block"
    qr.src = "https://i.gifer.com/ZKZg.gif"
    setTimeout(() => {qr.src = gerarLink(200)}, 300)
    
    input.placeholder = "Digite seu texto ou url"
    input.style.border = "1px solid rgb(165, 165, 165)"
  } else {
    pedirParaInserirTexto()
  }
}

function gerarLink(size) {
  return `https://quickchart.io/qr?text=${input.value}&margin=0&light=f0f8ff&size=${size}`
}

function pedirParaInserirTexto() {
  input.placeholder = "Digite algo"
  input.style.border = "2px solid red"
  im.style.display = "none"
}

downloadButton.addEventListener("click", async () => {
  if (validacion) {
    const blob = await fetch(gerarLink(500)).then(res => res.blob());
    console.log(blob)
    const objectURL = URL.createObjectURL(blob);
    a.href = objectURL
    a.download = `qrcode-${input.value}.jpeg`;
    a.click()  
  } else {
    pedirParaInserirTexto()
  }
} )

