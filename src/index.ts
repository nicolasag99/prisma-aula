import { waitForDebugger } from "inspector";
import { AlunoRepository } from "./database/aluno.repository.js";
import { AvaliacaoRepository } from "./database/avaliacao.repository.js";

const alunoRepository = new AlunoRepository();
const avaliacaoRepository = new AvaliacaoRepository();

async function main() {
    // 1- LISTAR TODOS OS ALUNOS
    // const alunos = await alunoRepository.list()
    // console.log(alunos)

    // 2- OBTER POR ID
    // const alunos = await alunoRepository.obterPorId("64752388-ec44-4038-8b69-082add1a0abc");
    // console.log(alunos);

    // 3- CRIAR ALUNO
    // const alunoCriado = await alunoRepository.criar({
    //     nome: "Giovanna Vieira ",
    //     email: "giovanna@email.com",
    //     senha: "12345",
    //     rg: 123456789
    // });

    // console.log(alunoCriado);

    // 4 - Atualizar um aluno 
    // const alunoAtulizado = await alunoRepository.atualizar(
    //     "a12d6a19-374e-4fc7-9a1f-e26814753b8e",
    //     {
    //         nome: "Giovanna Vieira Gonçalves"
    //     }
    // );
    // console.log(alunoAtulizado)

    // 5 - Excluir

    // const alunoExcluido = await alunoRepository.excluir(
    //     "64752388-ec44-4038-8b69-082add1a0abc"
    // )

    // console.log(alunoExcluido);

    // console.log(alunos)

    // 6 - Criar uma nova avaliação

    const novaAvaliacao = await avaliacaoRepository.criar({
        disciplina: "React",
        nota: 8,
        idAluno: "8ecc842b-11fd-4eaf-b6c7-f2547a5bac70",
        dtAvaliacao: new Date()
    });

    console.log(novaAvaliacao)
}
main()
