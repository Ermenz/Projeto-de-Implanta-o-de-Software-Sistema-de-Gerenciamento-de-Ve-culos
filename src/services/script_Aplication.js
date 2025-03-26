let carros = [];

// Função para adicionar um carro
function adicionarCarro() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;

    // Verificar se todos os campos foram preenchidos
    if (!marca || !modelo || !ano) {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    // Verificar se o ano é um número válido
    if (isNaN(ano) || ano <= 0) {
        alert("Por favor, insira um ano válido!");
        return;
    }

    // Adicionar o carro no array
    carros.push({ marca, modelo, ano });

    // Limpar os campos após adicionar
    document.getElementById("marca").value = '';
    document.getElementById("modelo").value = '';
    document.getElementById("ano").value = '';

    alert("Carro cadastrado com sucesso!");
    listarCarros(); // Atualiza a lista de carros
}

// Função para listar os carros
function listarCarros() {
    const listaCarros = document.getElementById("lista-carros");
    listaCarros.innerHTML = ''; // Limpar a lista atual

    // Verificar se há carros cadastrados
    if (carros.length === 0) {
        listaCarros.innerHTML = '<p>Nenhum carro cadastrado.</p>';
        return;
    }

    // Adicionar cada carro na lista
    carros.forEach((carro, index) => {
        const divCarro = document.createElement("div");
        divCarro.classList.add("carro");
        divCarro.innerHTML = `
            <p>Marca: ${carro.marca}, Modelo: ${carro.modelo}, Ano: ${carro.ano}</p>
            <button onclick="editarCarro(${index})">Alterar</button>
            <button onclick="removerCarro(${index})">Remover</button>
        `;
        listaCarros.appendChild(divCarro);
    });
}

// Função para alterar um carro
function editarCarro(index) {
    const carro = carros[index];
    document.getElementById("marca").value = carro.marca;
    document.getElementById("modelo").value = carro.modelo;
    document.getElementById("ano").value = carro.ano;

    // Alterar a função do botão "Cadastrar" para "Atualizar"
    const btnCadastrar = document.querySelector("button");
    btnCadastrar.innerHTML = "Atualizar";
    btnCadastrar.setAttribute("onclick", `atualizarCarro(${index})`);
}

// Função para atualizar um carro
function atualizarCarro(index) {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;

    // Verificar se os campos estão preenchidos
    if (!marca || !modelo || !ano) {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    // Verificar se o ano é um número válido
    if (isNaN(ano) || ano <= 0) {
        alert("Por favor, insira um ano válido!");
        return;
    }

    // Atualizar os dados do carro
    carros[index] = { marca, modelo, ano };

    // Limpar os campos
    document.getElementById("marca").value = '';
    document.getElementById("modelo").value = '';
    document.getElementById("ano").value = '';

    // Alterar o botão para "Cadastrar" novamente
    const btnCadastrar = document.querySelector("button");
    btnCadastrar.innerHTML = "Cadastrar";
    btnCadastrar.setAttribute("onclick", "adicionarCarro()");

    alert("Carro atualizado com sucesso!");
    listarCarros(); // Atualiza a lista
}

// Função para remover um carro
function removerCarro(index) {
    if (confirm("Tem certeza que deseja remover este carro?")) {
        carros.splice(index, 1); // Remover o carro
        listarCarros(); // Atualiza a lista
        alert("Carro removido com sucesso!");
    }
}
