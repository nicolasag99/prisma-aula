import { PrismaClientInitializationError, PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { prisma } from "../config/prisma.config.js"
import type { CreateAlunoDto } from "../dtos/create-aluno.dto.js";
import { handlerError } from "../config/error.handler.js";
import type { UpdateAlunoDto } from "../dtos/update.aluno.dto.js";

export class AlunoRepository {

    //FUNÇÕES GET

    //Listar todos os alunos
    public async list() {
        try {
            const alunos = await prisma.aluno.groupBy({
                by: ["formado"],
                where: {
                    // email: {
                    //     contains: "@email.com"
                    // }
                },

                _count: true,

            })
            
            return alunos;

        } catch(error: any){
            return handlerError(error);
        }

    }

    //Listar aluno por ID
    public async obterPorId(id: string) {
        //SELECT * ALL FROM WHERE ID = ?

        try {
            const aluno = await prisma.aluno.findUnique({
                where: {
                    id: id
                }
            })
    
            return aluno;

        } catch(error: any) {
            return handlerError(error);
        }

    }

    // FUNCÇÕES CREATE

    //Crirar aluno
    public async criar(dados: CreateAlunoDto){

        try {
            const aluno = await prisma.aluno.create({
                data: dados
            });
            
            return aluno;

        } catch(error: any) {
            return handlerError(error);
        }


    }

    //Atualizar
    public async atualizar(id: string, dados: UpdateAlunoDto) {

        try {
            const aluno = await prisma.aluno.update({
                where: {
                    id
                },
                data: dados
            })

            return aluno;
        } catch(error: any) {
            return handlerError(error);
        }


    }

    //Excluir
    public async excluir(id: string){
        try {

            const aluno = await prisma.aluno.delete({
                where: {
                    id
                }
            })

        } catch(error: any) {
            return handlerError
        }
    }
}