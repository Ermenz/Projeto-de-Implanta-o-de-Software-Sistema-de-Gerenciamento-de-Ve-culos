document.getElementById("vehicleForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let placa = document.getElementById("placa").value;
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let ano = document.getElementById("ano").value;

    if (placa && marca && modelo && ano) {
        let listItem = document.createElement("li");
        listItem.textContent = `${placa} - ${marca} - ${modelo} - ${ano}`;
        document.getElementById("vehicleList").appendChild(listItem);

        // Limpar campos após cadastro
        document.getElementById("vehicleForm").reset();
    } else {
        alert("Preencha todos os campos!");
    }
});
