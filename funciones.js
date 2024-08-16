function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
      
    if (texto.length != 0 && /^[a-z\s]+$/.test(texto)) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = document.getElementById("texto").value = textoCifrado;
      muñeco.src = "file:///C:/Users/PrimerUsuario/Downloads/cute-1751246.svg";
    } else {
      muñeco.src = "file:///C:/Users/PrimerUsuario/Pictures/matacho.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      alert( "Debes ingresar un texto válido");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0  && /^[a-z\s]+$/.test(texto) ) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = document.getElementById("texto").value = textoCifrado;
        muñeco.src = "file:///C:/Users/PrimerUsuario/Downloads/cute-1751246.svg";
      } else {
        muñeco.src = "file:///C:/Users/PrimerUsuario/Pictures/matacho.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert( "Debes ingresar un texto un texto válido");
      }
    }
function copiar() {
      let texto = document.getElementById("texto").value;
      navigator.clipboard.writeText(texto).then(() => {
          alert("Texto copiado al portapapeles");
      }, () => {
          alert("Hubo un error al copiar el texto");
      });
    }

