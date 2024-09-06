function pesquisar() {
  console.log("clicou no botão.");

  //console.log(dados[0].titulo);
  //comentário
  let section = document.getElementById("resultados-pesquisa");
  //Busque o elemento pelo id "resultados-pesquisa"
  //console.log(section)
  //Aqui estamos colocando uma div HTML dentro do código javascript para habilitar a dinamicidade. Para inserir variáveis dentro desse HTML, eu uso a sintaxe: ${variaveljs[index].atributo} 

  //laço de repetição: 
  //tradução do for: para cada i(item) da lista de dados 
  let campoPesquisa = document.getElementById("campo-pesquisa").value//convenção de nome de função camelCase - onde há uma função com duas palavras, a segunda começará em caixa alta. É importante usar nomes descritivos para poder ajudar no entendimento posterior dele.

  //se o campoPesquisa for uma string "vazia"
  //Ou if (!campoPesquisa)
  if (campoPesquisa == "") {
    section.innerHTML = "<p>Pesquisa inválida.</p>"
    return //O return sinaliza o final da função, ou seja, se entrar nessa condição, tudo que estiver abaixo do return não sera executado.
  }
  
  campoPesquisa = campoPesquisa.toLowerCase()
  //Usando o toLowerCase, ele vai transformar o conteúdo que a gente digitou em caixa baixa, desse modo, não importa a forma que o usuário digitar(caixa alta ou caixa baixa) no campo de pesquisa. 


  //console.log(campoPesquisa);
  //inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  //Não é ideal declarar as variáveis que vão armazenar os valores dos atributos dentro do laço de repetição, então declaramos eles aqui antes de começar, e só vamos mudando o valor conforme vai mudando o objeto.
  let titulo = "";
  let descricao = "";
  let tags = "";

  for (let i of dados) {
    titulo = i.titulo.toLowerCase()
    descricao = i.descricao.toLowerCase()
    tags = i.tags.toLowerCase()
    //console.log(i.titulo.includes(campoPesquisa)) //Se a informação do campoPesquisa estiver dentro da lista do atributo titulo da lista de objetos, ele retorna o valor booleano true, se não tiver, ele retorna false. Isso ele vai retornar para cada objeto.
    //usando o includes acima, vamos montar uma estrutura lógica de condição 
    //se titulo includes campoPesquisa ou descricao includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) { //igual C, se for verdade ele executa, se for falso, ele ignora; como no C, se eu quiser negar a condição, eu basta eu colocar a exclamação na frente
      //Cria um novo elemento HTML(entre crases) para cada resultado
      resultados += `
      <div class="item-resultado">
        <h2 class="titulo">
          <a href="#" target="_blank">
            ${i.titulo} 
          </a>
        </h2>
        <p class="descricao-meta">
          ${i.descricao}  
        </p>
        <a href="${i.link}" class="nota" target="_blank">
          ${i.notaMetacritic}
        </a>  
    </div>
    `;
    }

  }
  if (!resultados) { //Se o resultados NÃO(!) existir
    resultados = "<p>Jogo não encontrado.</p>"
  }

  section.innerHTML = resultados
}
/*function pesquisar() {
  // Busca o elemento HTML onde os resultados serão exibidos
  const section = document.getElementById("resultados-pesquisa");

  // Cria uma string vazia para armazenar os resultados
  let resultados = "";

  // Itera sobre os dados da pesquisa e constrói o HTML de cada resultado
  for (let dado of dados) {
    resultados += `
      <div class="item-resultado">
        <h2 class="titulo">
          <a href="${dado.link}" target="_blank">
            ${dado.titulo}
          </a>
        </h2>
        <p class="descricao-meta">
          ${dado.descricao}
        </p>
        <a href="${dado.link}" class="nota" target="_blank">${dado.notaMetacritic}</a>
      </div>
    `;
  }

  // Atualiza o conteúdo da seção com os resultados construídos
  section.innerHTML = resultados;
} */