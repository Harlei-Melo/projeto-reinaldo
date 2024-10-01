$(document).ready(function() {
    // Máscara para o número do cartão de crédito (em blocos de 4 dígitos)
    $('#cardNumber').mask('0000 0000 0000 0000');
    
    // Função para validar o número de cartão de crédito usando o Algoritmo de Luhn
    function luhnCheck(cardNumber) {
        let sum = 0;
        let shouldDouble = false;

        // Remover espaços do número do cartão
        cardNumber = cardNumber.replace(/\s+/g, '');

        // Percorrer os dígitos do número de trás para frente
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumber[i]);

            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }

            sum += digit;
            shouldDouble = !shouldDouble;
        }

        return sum % 10 === 0;
    }

    // Validação no envio do formulário
    $('form').on('submit', function(event) {
        const cardNumber = $('#cardNumber').val().replace(/\s+/g, ''); // Remover espaços

        // Verificar se o número do cartão é inválido
        if (cardNumber.length !== 16 || !luhnCheck(cardNumber)) {
            alert('Número de cartão inválido! Insira um número de cartão válido.');
            event.preventDefault(); // Impede o envio do formulário
        } else {
            // Número do cartão válido: exibir alerta de sucesso e enviar o formulário
            alert("Pedido finalizado com sucesso!");

            // Aqui, não precisamos de event.preventDefault(), pois queremos que o formulário seja enviado
        }
    });
});
