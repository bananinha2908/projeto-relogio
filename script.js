let idademinima = 18;
let mensagem = document.getElementById("mensagem");
let mudar = document.getElementById("mudar");

function atualizar() {
  let agora = new Date();
  let horario = agora.toLocaleTimeString("pt-br");
  document.getElementById("relogio").textContent = horario;
}

atualizar ();
setInterval(atualizar, 1);

document.getElementById("verificar").addEventListener("click", function(){
  let digitesuaIdade = Number(document.getElementById("idade").value);
if (digitesuaIdade >= idademinima) {
  mensagem.textContent = "Entrada permitida.";
} else {
  mensagem.textContent = "Entrada não permitida.";
}
});

document.getElementById("mudar").addEventListener("click", function() {
  document.body.classList.toggle("escuro");
});
