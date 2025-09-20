import { waitForDebugger } from "inspector";
import type { CreateAvaliacaoDto } from "../dtos/create.avaliacao.js";
import { prisma } from "../config/prisma.config.js";
import { handlerError } from "../config/error.handler.js";

export class AvaliacaoRepository {
    public async criar(dados: CreateAvaliacaoDto) {
        try {
            const avaliacao = await prisma.avaliacao.create({
                data: dados
            });
            return avaliacao;
        } catch (error: any) {
            return handlerError(error);
        }
    }
}
