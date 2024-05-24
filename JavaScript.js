</script>

// No arquivo seu-arquivo-js.js

// Obtém o elemento do botão pelo seu id

var botao = document.getElementById("meuBotao");

// Adiciona um ouvinte de evento de clique ao botão

botao.addEventListener("click", function() {
  // Redireciona para outra página
  window.location.href = "formulario/pagina_formulario.html";
});
