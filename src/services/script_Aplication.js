// Array para armazenar os carros cadastrados (simulação de um banco de dados)
let carros = [];

// Função para listar os carros
function listarCarros() {
    const listaCarros = document.getElementById("lista-carros"); // Elemento onde a lista de carros será exibida
    listaCarros.innerHTML = ''; // Limpar a lista antes de adicionar novos carros

    // Verificar se há carros cadastrados
    if (carros.length === 0) {
        listaCarros.innerHTML = '<p>Nenhum carro cadastrado.</p>';
    } else {
        // Exibir a lista de carros
        carros.forEach((carro, index) => {
            const divCarro = document.createElement("div");
            divCarro.classList.add("carro");
            divCarro.innerHTML = `
                <p>Marca: ${carro.marca}, Modelo: ${carro.modelo}, Ano: ${carro.ano}</p>
                <button onclick="alterarCarro(${index})">Alterar</button>
                <button onclick="removerCarro(${index})">Remover</button>
            `;
            listaCarros.appendChild(divCarro);
        });
    }
}

// Função para adicionar um novo carro
function adicionarCarro() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;

    // Verificar se os campos estão preenchidos
    if (!marca || !modelo || !ano) {
        alert("Preencha todos os campos!");
        return;
    }

    // Adicionar carro no array
    carros.push({ marca, modelo, ano });

    // Limpar os campos após adicionar
    document.getElementById("marca").value = '';
    document.getElementById("modelo").value = '';
    document.getElementById("ano").value = '';

    // Atualizar a lista de carros
    listarCarros();
}

// Função para alterar os dados de um carro
function alterarCarro(index) {
    const carro = carros[index];
    
    // Preencher os campos com os dados do carro
    document.getElementById("marca").value = carro.marca;
    document.getElementById("modelo").value = carro.modelo;
    document.getElementById("ano").value = carro.ano;

    // Alterar o botão de adicionar para "Atualizar"
    const btnAdicionar = document.getElementById("btn-adicionar");
    btnAdicionar.innerText = "Atualizar";
    btnAdicionar.setAttribute("onclick", `atualizarCarro(${index})`);
}

// Função para atualizar um carro
function atualizarCarro(index) {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;

    // Verificar se os campos estão preenchidos
    if (!marca || !modelo || !ano) {
        alert("Preencha todos os campos!");
        return;
    }

    // Atualizar os dados do carro
    carros[index] = { marca, modelo, ano };

    // Limpar os campos e voltar o botão para "Adicionar"
    document.getElementById("marca").value = '';
    document.getElementById("modelo").value = '';
    document.getElementById("ano").value = '';
    const btnAdicionar = document.getElementById("btn-adicionar");
    btnAdicionar.innerText = "Adicionar";
    btnAdicionar.setAttribute("onclick", "adicionarCarro()");

    // Atualizar a lista de carros
    listarCarros();
}

// Função para remover um carro
function removerCarro(index) {
    // Confirmar se o usuário realmente deseja excluir
    if (confirm("Tem certeza que deseja remover este carro?")) {
        // Remover o carro do array
        carros.splice(index, 1);
        listarCarros();
    }
}
