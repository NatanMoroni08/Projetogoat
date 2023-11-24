var openPopupButtons = document.getElementsByClassName("openPopupButton");
var elementId;

// ouvinte de eventos a cada botão "mais"
Array.from(openPopupButtons).forEach(function (button) {
  button.addEventListener("click", function () {
    // Obtém o id do elemento clicado
    elementId = button.id;

    // Abre o popup
    //customPopup.style.display = "block";

    ValidaInfo()
  });
});

//closePopupButton.addEventListener("click", function () {
  //customPopup.style.display = "none";
//});

// Obtendo referências para os parágrafos
var pCriador = document.getElementById("p-criador");
var pEsporte = document.getElementById("p-esporte");
var pData = document.getElementById("p-data");
var pHorario = document.getElementById("p-horario");
var pJogadores = document.getElementById("p-jogadores");
var pCategoria = document.getElementById("p-categoria");
var pObrigatorio = document.getElementById("p-obrigatorio");
//Dados das partidas

var dados = [
  {
    "id": 0,
    "Criador": "Alex Justos",
    "Esporte": "Futsal",
    "Data": "18/11/2024",
    "Horário": "18h",
    "Jogadores": "/12",
    "Categoria": "Masculina",
    "Obrigatório": "chuteira",
  },
  {
    "id": 1,
    "Criador": "Maria Silva",
    "Esporte": "Futebol",
    "Data": "20/11/2024",
    "Horário": "19h",
    "Jogadores": "/10",
    "Categoria": "Feminina",
    "Obrigatório": "caneleira",
  },
  {
    "id": 2,
    "Criador": "João Santos",
    "Esporte": "Futsal",
    "Data": "22/11/2024",
    "Horário": "20h",
    "Jogadores": "/8",
    "Categoria": "Masculina",
    "Obrigatório": "tênis",
  },
  {
    "id": 3,
    "Criador": "Ana Oliveira",
    "Esporte": "Futebol",
    "Data": "24/11/2024",
    "Horário": "17h",
    "Jogadores": "/14",
    "Categoria": "Feminina",
    "Obrigatório": "chuteira",
  },
  {
    "id": 4,
    "Criador": "Pedro Lima",
    "Esporte": "Futsal",
    "Data": "26/11/2024",
    "Horário": "21h",
    "Jogadores": "/16",
    "Categoria": "Masculina",
    "Obrigatório": "chuteira",
  },
  {
    "id": 5,
    "Criador": "Mariana Costa",
    "Esporte": "Futebol",
    "Data": "28/11/2024",
    "Horário": "16h",
    "Jogadores": "/6",
    "Categoria": "Feminina",
    "Obrigatório": "tênis",
  },
  {
    "id": 6,
    "Criador": "Carlos Mendes",
    "Esporte": "Futsal",
    "Data": "30/11/2024",
    "Horário": "19h",
    "Jogadores": "/4",
    "Categoria": "Masculina",
    "Obrigatório": "caneleira",
  },
  {
    "id": 7,
    "Criador": "Isabela Oliveira",
    "Esporte": "Futebol",
    "Data": "02/12/2024",
    "Horário": "22h",
    "Jogadores": "/9",
    "Categoria": "Feminina",
    "Obrigatório": "tênis",
  },
];

function ValidaInfo() {
  let procura = dados.length;
  for (let i = 0; i < procura; i++) {
    if (dados[i].id == elementId) {
      pCriador.textContent = "Criador: " + dados[i].Criador;
      pEsporte.textContent = "Esporte: " + dados[i].Esporte;
      pData.textContent = "Data: " + dados[i].Data;
      pHorario.textContent = "Horário: " + dados[i].Horário;
      pJogadores.textContent = "Jogadores: " + dados[i].Jogadores;
      pCategoria.textContent = "Categoria: " + dados[i].Categoria;
      pObrigatorio.textContent = "Obrigatório: " + dados[i].Obrigatório;
      procura = i;
    }
  }
}

