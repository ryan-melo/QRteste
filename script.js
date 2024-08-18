const input = document.querySelector("input");
const button = document.querySelector("button");
const qr = document.querySelector("img");
const im = document.querySelector("#im");
const downloadButton = document.querySelector(".downloadButton");
const a = document.querySelector("a")

button.addEventListener("click", gerar);

let link;
let validacion = false

function gerar() {
  if (input.value != "") {
    validacion = true
    im.style.display = "block"
    downloadButton.style.display = "block"
    qr.src = "https://i.gifer.com/ZKZg.gif"
    teste = setTimeout(() => {qr.src = gerarLink()}, 300)
    
    input.placeholder = "Digite seu texto ou url"
    input.style.border = "1px solid rgb(165, 165, 165)"
  } else {
    pedirParaInserirTexto()
  }
}

function gerarLink() {
  return link = "https://quickchart.io/qr?text=" + input.value + "&margin=0" + "&light=f0f8ff"
}

function pedirParaInserirTexto() {
  input.placeholder = "Digite algo"
  input.style.border = "2px solid red"
  im.style.display = "none"
}

downloadButton.addEventListener("click", async () => {
  if (validacion) {
    const blob = await fetch(link).then(res => res.blob());
    console.log(blob)
    const objectURL = URL.createObjectURL(blob);
    a.href = objectURL
    a.download = `${input.value}.pdf`;
    a.click()  
  } else {
    pedirParaInserirTexto()
  }
} )



