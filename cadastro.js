document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (this.checkValidity()) {
      window.location.href = "index.html";
    } else {
      this.reportValidity();
    }
  });

  $(document).ready(function(){
    // Máscara para o CEP
    $('#cep').mask('00000-000');

    // Máscara para Data de Nascimento
    $('#data-nascimento').mask('00/00/0000');

    // Máscara para Número
    $('#numero').mask('0000');
});
