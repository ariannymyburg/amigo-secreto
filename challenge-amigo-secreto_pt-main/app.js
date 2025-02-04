document.addEventListener("DOMContentLoaded", function() {
    let amigos = [];

    document.getElementById("adicionarAmigo").addEventListener("click", function() {
        let input = document.getElementById("nomeAmigo");
        let nome = input.value.trim();

        if (nome === "") {
            alert("Por favor, insira um nome.");
            return;
        }

        amigos.push(nome);
        input.value = ""; // Limpa o campo de entrada

        atualizarLista();
        console.log(amigos); // Apenas para verificar no console se está funcionando
    });

    document.getElementById("sortearAmigo").addEventListener("click", function() {
        if (amigos.length === 0) {
            alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
            return;
        }

        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteado];

        document.getElementById("resultadoSorteio").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
    });

    function atualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; // Limpa a lista existente

        for (let amigo of amigos) {
            let li = document.createElement("li");
            li.textContent = amigo;
            lista.appendChild(li);
        }
    }
});
