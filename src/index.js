const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (err, data) => {
    verificaPalavrasDuplucadas(data);
})

// Criar um array com as palavras
// Contar as ocorrências de cada palavra
// Montar um objeto com as palavras e suas respectivas contagens

function verificaPalavrasDuplucadas(data){

    // o método split() divide uma string em um array de substrings, usando um separador especificado. No caso, o separador é um espaço em branco, o que significa que a string será dividida em palavras.
    // O método split faz a divisão procurando um padrão dentro da string, e quando encontra esse padrão, ele cria uma nova substring a partir do ponto onde o padrão foi encontrado. O separador é removido da string original e não é incluído nas substrings resultantes.

    const listaDePalavras = data.split(' '); // o array listaDePalavras conterá todas as palavras do texto, separadas por espaços em branco

    const resultado = {}; // o objeto resultado será usado para armazenar as palavras e suas contagens

    listaDePalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1; // se a palavra já existir no objeto resultado, incrementa sua contagem em 1; caso contrário, inicializa a contagem como 1
    })

    console.log(resultado); // exibe o objeto resultado no console, mostrando as palavras e suas contagens
}