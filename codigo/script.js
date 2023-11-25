
function salvarDados() {
    // Captura os valores do formulário
    var nomePelada = document.querySelector('input[placeholder="Nome da pelada"]').value;
    var tipoQuadra = document.getElementById('inputGroupSelect02').value;
    var valorPelada = document.querySelector('input[placeholder="Digite um valor"]').value;
    var numeroJogadores = document.querySelector('input[placeholder="Quantos jogadores?"]').value;
    var genero = document.getElementById('inputGroupSelect02').value;
    var equipamento = document.querySelector('input[placeholder="Digite um item"]').value;
    var dataHora = document.querySelector('input[placeholder="Data & Hora"]').value;
    var cep = document.querySelector('input[placeholder="Digite seu CEP..."]').value;
    var rua = document.querySelector('input[placeholder="Digite sua Rua..."]').value;
    var numero = document.querySelector('input[placeholder="Digite seu numero..."]').value;
    var bairro = document.querySelector('input[placeholder="Digite seu Bairro..."]').value;
    var cidade = document.querySelector('input[placeholder="Digite sua Cidade..."]').value;
    var pais = document.querySelector('input[placeholder="Digite seu País..."]').value;
  
    // Verificar se algum campo obrigatório está vazio
    if (
      nomePelada === '' ||
      tipoQuadra === '' ||
      valorPelada === '' ||
      numeroJogadores === '' ||
      genero === '' ||
      equipamento === '' ||
      dataHora === '' ||
      cep === '' ||
      rua === '' ||
      numero === '' ||
      bairro === '' ||
      cidade === '' ||
      pais === ''
    ) {
      alert('Por favor, preencha todos os campos obrigatórios!');
    } else {
      var dadosPartida = {
        nomePelada: nomePelada,
        tipoQuadra: tipoQuadra,
        valorPelada: valorPelada,
        numeroJogadores: numeroJogadores,
        genero: genero,
        equipamento: equipamento,
        dataHora: dataHora,
        localizacao: {
          cep: cep,
          rua: rua,
          numero: numero,
          bairro: bairro,
          cidade: cidade,
          pais: pais
        }
      };
  
      var dadosJSON = JSON.stringify(dadosPartida);
  
      localStorage.setItem('dadosPartida', dadosJSON);
  
      alert('Dados da partida foram salvos no banco de dados com SUCESSO!');
    }
  }
  
  document.querySelector('.btn-success').addEventListener('click', salvarDados);
  
  