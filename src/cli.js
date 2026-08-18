import fs from "fs";
import path from "path";
import trataErros from "./erros/funcoesErro.js";
import { contaPalavras } from "./index.js";
import { montaSaidaArquivo } from './helpers.js'
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .version("0.0.1")
  .option("-t, --texto <string>", "Caminho do texto a ser processado")
  .option("-d, --destino <string>", "Caminho da pasta onde salvar o arquivo de resultados")
  .action((options) => {
    const { texto, destino } = options;

    if (!texto || !destino) {
      console.error(chalk.red("Por favor, forneça os caminhos de origem e destino."));
      program.help();
      return;
    }

    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try {
      processaArquivo(caminhoTexto, caminhoDestino);
      console.log(chalk.green("Texto processado com sucesso!"));
    } catch (err) {
      console.log(chalk.red("Ocorreu um erro ao processar o arquivo:"), err);
    }
  })

program.parse();

function processaArquivo(texto, destino){
  fs.readFile(texto, "utf-8", (err, texto) => {
    try {
      if (err) throw err;
      const resultado = contaPalavras(texto);
      criaESalvaArquivo(resultado, destino);
    } catch (err) {
      trataErros(err);
    }
  });
}



/*async function criaESalvaArquivo(listaPalavras, endereco){
  const arquivoNovo = `${endereco}/resultado.txt`
  const textoPalavras = JSON.stringify(listaPalavras);
  try {
    await fs.promises.writeFile(arquivoNovo, textoPalavras);
    console.log("Arquivo criado!");
  } catch (error) {
    throw error;
  }
}*/


function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  //const textoPalavras = JSON.stringify(listaPalavras);
  const textoPalavras = montaSaidaArquivo(listaPalavras)
  fs.promises
    .writeFile(arquivoNovo, textoPalavras)
    .then(() => {
      console.log("Arquivo criado");
    })
    .catch((err) => {
      throw err;
    })
    .finally(() => console.log("Operação finalizada"));
}
