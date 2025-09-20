-- CreateTable
CREATE TABLE "public"."avalicao" (
    "id" TEXT NOT NULL,
    "disciplina" VARCHAR(30) NOT NULL,
    "nota" SMALLINT NOT NULL,
    "dt_avaliacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_aluno" TEXT NOT NULL,

    CONSTRAINT "avalicao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."avalicao" ADD CONSTRAINT "avalicao_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "public"."aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
