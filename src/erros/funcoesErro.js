export default function trataErros(erro) {
  if (erro.code === "ENOENT") {
    throw new Error("Arquivo não encontrado");
  } else {
    console.log("Erro na aplicação");
  }
}



