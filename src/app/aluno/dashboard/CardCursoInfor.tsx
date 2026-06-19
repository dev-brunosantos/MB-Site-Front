"use client"

import { useState } from "react"
import { ListaCursosProps } from "@/src/utils/ListaCursoConst"

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

interface CursoInforProps {
    curso: ListaCursosProps
}

export const CardCursoInfor = (
    { curso }: CursoInforProps
) => {


    const [abaAtiva, setAbaAtiva] = useState<"dashboard" | "cursos" | "progresso" | "favoritos" | "perfil">("dashboard")
    const [cursoSelecionadoId, setCursoSelecionadoId] = useState<string | null>(null)

    // Atalho para abrir um curso diretamente
    const abrirCurso = (id: string) => {
        setCursoSelecionadoId(id)
    }


    return (
        <div
            key={curso.id}
            onClick={() => abrirCurso(curso.id)}
            className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-slate-200 transition-all cursor-pointer active:scale-[0.99]"
        >
            <div className="flex items-center gap-3.5 flex-grow">
                <CapaCursoSvg instrumento={curso.imagemId} />

                <div className="flex flex-col gap-1 flex-grow pr-4">
                    <span className="text-sm font-bold text-slate-900">
                        {curso.titulo}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                        {curso.nivel}
                    </span>
                    {/* Barra de Progresso Interna */}
                    <div className="w-full max-w-[140px] h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1">
                        <div
                            className="h-full bg-[#0052e0] rounded-full"
                            style={{ width: `${curso.progresso}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-1.5">
                <span className="text-xs font-extrabold text-slate-900 tabular-nums">
                    {curso.progresso}%
                </span>
            </div>
        </div>
    )
}