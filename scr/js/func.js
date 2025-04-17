// Formulário página Sobre nós
document.getElementById("btnEnviar").addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagemRetorno");
  
    if (nome) {
      mensagem.textContent = `Obrigado pelo contato, ${nome}! Responderemos em breve.`;
    } else {
      mensagem.textContent = "Por favor, preencha seu nome antes de enviar.";
    }
  });