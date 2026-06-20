"use client"

import { MenuAluno } from "@/src/components/menu/MenuAluno";
import { Separador } from "@/src/components/Separador";
import { CardResumoComponent } from "../aluno/dashboard/CardResumo";
import { CardResumoConst } from "@/src/utils/CardResumoConst";
import { useState } from "react";
import { listaCursos } from "@/src/utils/ListaCursoConst";
import { CardCursoInfor } from "./dashboard/CardCursoInfor";
import { TituloInfor } from "@/src/components/TituloInfor";

export default function Dashboard() {

  const [abaAtiva, setAbaAtiva] = useState<"dashboard" | "cursos" | "progresso" | "favoritos" | "perfil">("dashboard")
  const [cursoSelecionadoId, setCursoSelecionadoId] = useState<string | null>(null)

  // Atalho para abrir um curso diretamente
  const abrirCurso = (id: string) => {
    setCursoSelecionadoId(id)
  }

  return (
    <div className="min-h-screen bg-white text-slate-100 font-sans selection:bg-blue-600 overflow-x-hidden">
      <div className="w-full h-15 flex items-center justify-between fixed top-0 left-0 z-50 bg-white">
        <TituloInfor
          titulo="Olá, Aluno!"
          subTitulo="Continue aprendendo e evoluindo."
        />
      </div>

      <main className="w-full max-w-md mx-auto pt-25 pb-16 px-6 relative z-10 flex flex-col gap-16">

        {/* Cards de Resumo / Estatísticas */}
        <div className="flex flex-col gap-3">
          <h2 className="text-md font-bold text-slate-900 tracking-wide">
            Resumo
          </h2>

          <div className="grid grid-cols-2 gap-3">

            {CardResumoConst.map(infor => (
              <CardResumoComponent
                key={infor.titulo}
                titulo={infor.titulo}
                resumo={infor.resumo}
                horas={infor.horas}
              />
            ))}
          </div>
        </div>

        {/* Lista "Meus Cursos" */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-md font-bold text-slate-900 tracking-wide">
              Meus Cursos
            </h2>
            <button
              onClick={() => setAbaAtiva("cursos")}
              className="text-xs font-bold text-[#0052e0] hover:underline"
            >
              Ver todos
            </button>
          </div>

          {/* Lista Curta de Cursos Ativos */}
          <div className="flex flex-col gap-3">
            {listaCursos.slice(0, 4).map((curso) => (
              <CardCursoInfor key={curso.id} curso={curso} />
            ))}
          </div>
        </div>
      </main >
    </div >
  )
}