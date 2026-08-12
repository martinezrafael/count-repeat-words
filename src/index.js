const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (err, data) => {
    quebraEmParagrafos(data);
    //verificaPalavrasDuplucadas(data);
})

// Criar um array com as palavras
// Contar as ocorrências de cada palavra
// Montar um objeto com as palavras e suas respectivas contagens


function quebraEmParagrafos(data){
    const paragrafos = data.toLowerCase().split('\n'); // o método toLowerCase() converte todos os caracteres da string para minúsculas, garantindo que a contagem de palavras seja case-insensitive. O método split() divide a string em um array de substrings, usando o caractere de nova linha '\n' como separador. Isso significa que cada parágrafo do texto será um elemento do array paragrafos.
    
    const contagem = paragrafos.map(paragrafo => { // o método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array original. No caso, a função verificaPalavrasDuplucadas é chamada para cada parágrafo do array paragrafos, e o resultado é armazenado no array contagem.
       return verificaPalavrasDuplucadas(paragrafo); 
    })

    console.log(contagem);
}


function verificaPalavrasDuplucadas(data){

    // o método split() divide uma string em um array de substrings, usando um separador especificado. No caso, o separador é um espaço em branco, o que significa que a string será dividida em palavras.
    // O método split faz a divisão procurando um padrão dentro da string, e quando encontra esse padrão, ele cria uma nova substring a partir do ponto onde o padrão foi encontrado. O separador é removido da string original e não é incluído nas substrings resultantes.

    const listaDePalavras = data.split(' '); // o array listaDePalavras conterá todas as palavras do texto, separadas por espaços em branco

    const resultado = {}; // o objeto resultado será usado para armazenar as palavras e suas contagens

    listaDePalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1; // se a palavra já existir no objeto resultado, incrementa sua contagem em 1; caso contrário, inicializa a contagem como 1
    })

    return resultado; // retorna o objeto resultado, que contém as palavras e suas respectivas contagens
}