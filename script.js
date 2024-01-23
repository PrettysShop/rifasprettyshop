function verificarSenha() {
    var senhaCorreta = "Pretty8068";
    var senhaDigitada = document.getElementById("senha").value;

    if (senhaDigitada === senhaCorreta) {
        // Se a senha está correta, exibe o conteúdo da página
        document.getElementById("login-container").style.display = "none";
        document.getElementById("conteudo").style.display = "block";
    } else {
        // Se a senha está incorreta, exibe uma mensagem de erro
        alert("Senha incorreta. Tente novamente.");
    }
}


// Adiciona dinamicamente os números de 1 a 100 à tabela
var linhaNumeros = document.getElementById("linha-numeros");
for (var i = 1; i <= 100; i++) {
    if ((i - 1) % 20 === 0) {
        // Adiciona uma nova linha a cada 20 números
        linhaNumeros = document.createElement("tr");
        document.getElementById("tabela").appendChild(linhaNumeros);
    }

    var cell = document.createElement("td");
    cell.id = i.toString();
    cell.textContent = i;
    linhaNumeros.appendChild(cell);
}

function escolherNumeroAleatorio() {
    var numeros = document.querySelectorAll('td');

    // Remova a classe numero-escolhido e numero-aleatorio de todos os elementos
    numeros.forEach(function(numero) {
        numero.classList.remove("numero-escolhido", "numero-aleatorio");
    });

    var numeroEscolhido;

    // Intervalo para destacar números aleatórios enquanto o script escolhe
    var intervalo = setInterval(function() {
        var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        numeros[numeroAleatorio - 1].classList.add("numero-aleatorio");
        setTimeout(function() {
            numeros[numeroAleatorio - 1].classList.remove("numero-aleatorio");
        }, 100);
    }, 100);

    // Após 10 segundos, escolher um único número e abrir o modal
    setTimeout(function() {
        clearInterval(intervalo);

        do {
            numeroEscolhido = Math.floor(Math.random() * 100) + 1;
        } while (numeros[numeroEscolhido - 1].classList.contains("numero-aleatorio"));

        // Adiciona a classe para destacar o número escolhido
        numeros[numeroEscolhido - 1].classList.add("numero-escolhido");

        // Exibe o número escolhido abaixo do botão
        document.getElementById("numero-escolhido").innerText = "Número Escolhido: " + numeroEscolhido;

        // Exibe o modal com o número escolhido
        document.getElementById("modalNumero").innerText = "Número Escolhido: " + numeroEscolhido;
        document.getElementById("myModal").style.display = "block";
    }, 10000);
}

function fecharModal() {
    document.getElementById("myModal").style.display = "none";
}

