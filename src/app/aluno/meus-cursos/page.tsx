"use client"

import { MenuAluno } from "@/src/components/menu/MenuAluno";
import { Separador } from "@/src/components/Separador";
import { CardResumoComponent } from "../dashboard/CardResumo";
import { CardResumoConst } from "@/src/utils/CardResumoConst";
import { useState } from "react";
import { listaCursos } from "@/src/utils/ListaCursoConst";
import { TituloInfor } from "@/src/components/TituloInfor";

const CapaCursoSvg = ({ instrumento }: { instrumento: string }) => {
    const cores: Record<string, string> = {
        flauta: "#0284c7",
        sax: "#d97706",
        violao: "#b45309",
        teclado: "#475569",
        baixo: "#4f46e5"
    }
    const corBg = cores[instrumento] || "#0f172a"

    return (
        <div className="w-16 h-12 rounded-lg overflow-hidden flex items-center justify-center relative flex-shrink-0" style={{ backgroundColor: corBg }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10" />
            <svg viewBox="0 0 100 80" className="w-10 h-10 text-white/95 relative z-20">
                {instrumento === "flauta" && (
                    <path d="M10,70 L90,10 M15,67 C17,69 21,65 19,63 Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                )}
                {instrumento === "sax" && (
                    <path d="M30,10 L30,55 C30,68 55,68 55,50 L55,40" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                )}
                {instrumento === "violao" && (
                    <g>
                        <path d="M40,15 C30,15 25,25 25,35 C25,48 40,50 40,65 C40,50 55,48 55,35 C55,25 50,15 40,15 Z" fill="none" stroke="currentColor" strokeWidth="4" />
                        <line x1="40" y1="10" x2="40" y2="70" stroke="currentColor" strokeWidth="2" />
                    </g>
                )}
                {instrumento === "teclado" && (
                    <g stroke="currentColor" strokeWidth="3">
                        <rect x="15" y="25" width="70" height="30" rx="3" fill="none" />
                        <line x1="30" y1="25" x2="30" y2="55" />
                        <line x1="45" y1="25" x2="45" y2="55" />
                        <line x1="60" y1="25" x2="60" y2="55" />
                        <line x1="70" y1="25" x2="70" y2="55" />
                    </g>
                )}
                {instrumento === "baixo" && (
                    <g>
                        <rect x="40" y="10" width="10" height="40" fill="none" stroke="currentColor" strokeWidth="4" />
                        <circle cx="45" cy="58" r="12" fill="none" stroke="currentColor" strokeWidth="4" />
                    </g>
                )}
            </svg>
        </div>
    )
}

export default function MeusCursos() {

    const [abaAtiva, setAbaAtiva] = useState<"dashboard" | "cursos" | "progresso" | "favoritos" | "perfil">("dashboard")
    const [cursoSelecionadoId, setCursoSelecionadoId] = useState<string | null>(null)

    const [filtroCurso, setFiltroCurso] = useState<"todos" | "andamento" | "concluidos">("todos")

    const cursosFiltrados = listaCursos.filter(curso => {
        if (filtroCurso === "concluidos") return curso.progresso === 100
        if (filtroCurso === "andamento") return curso.progresso > 0 && curso.progresso < 100
        return true // todos
    })

    // Atalho para abrir um curso diretamente
    const abrirCurso = (id: string) => {
        setCursoSelecionadoId(id)
    }

    return (
        <div className="w-full min-h-screen bg-white text-slate-100 font-sans selection:bg-blue-600 overflow-x-hidden">

            <MenuAluno />

            <main className="w-full max-w-md mx-auto pt-20 pb-16 px-6 relative z-10 flex flex-col gap-16">

                <div className="flex flex-col gap-6 animate-in fade-in duration-200">

                    {/* Cabeçalho */}
                    <TituloInfor 
                        titulo="Meus Cursos"
                        subTitulo="Acesse e continue seus estudos"
                    />

                    {/* Filtros por Categoria/Status (Conforme o mockup 6) */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setFiltroCurso("todos")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${filtroCurso === "todos"
                                ? "bg-[#0052e0] text-white"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                        >
                            Todos
                        </button>
                        <button
                            onClick={() => setFiltroCurso("andamento")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${filtroCurso === "andamento"
                                ? "bg-[#0052e0] text-white"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                        >
                            Em andamento
                        </button>
                        <button
                            onClick={() => setFiltroCurso("concluidos")}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${filtroCurso === "concluidos"
                                ? "bg-[#0052e0] text-white"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                        >
                            Concluídos
                        </button>
                    </div>

                    {/* Listagem Geral dos Cursos Filtrados */}
                    <div className="flex flex-col gap-3">
                        {cursosFiltrados.length > 0 ? (
                            cursosFiltrados.map((curso) => (
                                <div
                                    key={curso.id}
                                    onClick={() => abrirCurso(curso.id)}
                                    className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-slate-200 transition-all cursor-pointer active:scale-[0.99]"
                                >
                                    <div className="flex items-center gap-3.5 flex-grow">
                                        <CapaCursoSvg instrumento={curso.imagemId} />

                                        <div className="flex flex-col gap-1 flex-grow pr-4">
                                            <span className="text-sm font-bold text-slate-900 leading-tight">
                                                {curso.tituloCompleto}
                                            </span>
                                            <span className="text-[11px] text-slate-400 font-semibold">
                                                Professor: {curso.professor}
                                            </span>
                                            {/* Barra de Progresso Fiel ao Mockup 6 */}
                                            <div className="w-full max-w-[130px] h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1.5">
                                                <div
                                                    className="h-full bg-[#0052e0] rounded-full"
                                                    style={{ width: `${curso.progresso}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                                        <span className="text-xs font-extrabold text-slate-900 tabular-nums">
                                            {curso.progresso}%
                                        </span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 text-slate-400 text-sm">
                                Nenhum curso encontrado nesta categoria.
                            </div>
                        )}
                    </div>

                </div>

            </main >

        </div >
    )
}