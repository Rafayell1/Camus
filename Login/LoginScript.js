function mostrarSenha() {
  var senhaInput = document.getElementById("password");
  var tipoInput = senhaInput.getAttribute("type");

  if (tipoInput === "password") {
    senhaInput.setAttribute("type", "text");
  } else {
    senhaInput.setAttribute("type", "password");
  }
}