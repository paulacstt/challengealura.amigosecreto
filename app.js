
let listaNomeAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('#amigo').value;
    if (nomeAmigo === '') {
        alert('Insira um nome válido.');
    } else {
        listaNomeAmigos.push(nomeAmigo);

        atualizarLista();

        limparCampo();
    }
}

function limparCampo() {
    let nomeAmigo = document.querySelector('#amigo');
    nomeAmigo.value = '';
}

function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''; 

    listaNomeAmigos.forEach((nome) => {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaNomeAmigos.length === 0) {
        alert('Nenhum nome foi adicionado à lista.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaNomeAmigos.length);

    let amigoSorteado = listaNomeAmigos[indiceSorteado];

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>O seu amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}
