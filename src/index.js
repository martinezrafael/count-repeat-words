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
    
    const contagem = paragrafos.flatMap(paragrafo => {
        if(!paragrafo) return [];
        return verificaPalavrasDuplucadas(paragrafo);
    })

    console.log(contagem);
}

function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""); // o método replace() substitui todas as ocorrências de um padrão na string por um novo valor. No caso, o padrão é uma expressão regular que corresponde a todos os caracteres de pontuação e símbolos especificados, e o novo valor é uma string vazia, o que significa que esses caracteres serão removidos da palavra.
}


function verificaPalavrasDuplucadas(data){

    // o método split() divide uma string em um array de substrings, usando um separador especificado. No caso, o separador é um espaço em branco, o que significa que a string será dividida em palavras.
    // O método split faz a divisão procurando um padrão dentro da string, e quando encontra esse padrão, ele cria uma nova substring a partir do ponto onde o padrão foi encontrado. O separador é removido da string original e não é incluído nas substrings resultantes.

    const listaDePalavras = data.split(' '); // o array listaDePalavras conterá todas as palavras do texto, separadas por espaços em branco

    const resultado = {}; // o objeto resultado será usado para armazenar as palavras e suas contagens

    listaDePalavras.forEach(palavra => {
        if(palavra.length >= 3){
            const palavraLimpa = limpaPalavras(palavra); // a função limpaPalavras é chamada para remover caracteres de pontuação e símbolos da palavra, garantindo que apenas palavras "limpas" sejam contadas
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1; // se a palavra já existir no objeto resultado, incrementa sua contagem em 1; caso contrário, inicializa a contagem como 1
        }
    })

    return resultado; // retorna o objeto resultado, que contém as palavras e suas respectivas contagens
}