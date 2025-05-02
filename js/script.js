function proximaEtapa(etapa) {
  const nome = document.getElementById("nome").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const interesses = document.getElementById("interesses").value.trim();

  if (etapa === "upload" && (!nome || !endereco || !cpf || !interesses)) {
    alert("Por favor, preencha todos os campos antes de continuar.");
    return;
  }

  document.querySelectorAll("section").forEach((sec) => sec.classList.add("hidden"));
  document.getElementById(etapa).classList.remove("hidden");
}
function validarDocumento() {
  const resultado = document.getElementById("resultadoUpload");
  resultado.innerText = "Validando documento...";
  setTimeout(() => {
    resultado.innerText = "✅ Documento validado com sucesso!";
    setTimeout(() => proximaEtapa("redes"), 1500);
  }, 1500);
}
function validarRedes() {
  const resultado = document.getElementById("resultadoRedes");
  resultado.innerText = "Verificando redes sociais...";
  setTimeout(() => {
    resultado.innerText = "✅ Redes sociais verificadas!";
    setTimeout(() => proximaEtapa("perfis"), 1500);
  }, 1500);
}
function validarPerfilEsports() {
  const resultado = document.getElementById("resultadoPerfil");
  resultado.innerText = "Analisando perfil em e-sports...";
  setTimeout(() => {
    resultado.innerText = "✅ Perfil confirmado como fã da FURIA!";
    setTimeout(() => proximaEtapa("finalizacao"), 1500);
  }, 1500);
}