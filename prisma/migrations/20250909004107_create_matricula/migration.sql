-- CreateTable
CREATE TABLE "public"."matricula" (
    "id_aluno" TEXT NOT NULL,
    "id_curso" TEXT NOT NULL,
    "dt_matricula" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "matricula_pkey" PRIMARY KEY ("id_aluno","id_curso")
);

-- AddForeignKey
ALTER TABLE "public"."matricula" ADD CONSTRAINT "matricula_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "public"."aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."matricula" ADD CONSTRAINT "matricula_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "public"."curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
