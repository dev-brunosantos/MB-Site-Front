"use client"

import { useState } from "react";
import { BarChart2, BookOpen, Heart, Home, User } from "lucide-react";

export const FooterAlunoComponent = () => {

    const [abaAtiva, setAbaAtiva] = useState<"dashboard" | "cursos" | "progresso" | "favoritos" | "perfil">("dashboard")
    const [cursoSelecionadoId, setCursoSelecionadoId] = useState<string | null>(null)

    return (
        <footer className="w-full h-15 fixed bottom-0 left-0 z-50 bg-red-500">
            <nav className="w-full h-full bg-white border-t border-slate-100 flex items-center justify-around px-4 z-40 shrink-0 shadow-lg">

                {/* Aba Dashboard */}
                <button
                    onClick={() => { setAbaAtiva("dashboard"); setCursoSelecionadoId(null); }}
                    className={`flex flex-col items-center gap-1 flex-1 py-2 focus:outline-none transition-all ${abaAtiva === "dashboard" && !cursoSelecionadoId ? "text-[#0052e0]" : "text-slate-400"
                        }`}
                >
                    <Home size={20} className={abaAtiva === "dashboard" && !cursoSelecionadoId ? "stroke-[2.5]" : "stroke-[1.8]"} />
                    <span className="text-[10px] font-bold">Dashboard</span>
                </button>

                {/* Aba Meus Cursos */}
                <button
                    onClick={() => { setAbaAtiva("cursos"); setCursoSelecionadoId(null); }}
                    className={`flex flex-col items-center gap-1 flex-1 py-2 focus:outline-none transition-all ${abaAtiva === "cursos" || cursoSelecionadoId ? "text-[#0052e0]" : "text-slate-400"
                        }`}
                >
                    <BookOpen size={20} className={abaAtiva === "cursos" || cursoSelecionadoId ? "stroke-[2.5]" : "stroke-[1.8]"} />
                    <span className="text-[10px] font-bold">Meus Cursos</span>
                </button>

                {/* Aba Progresso */}
                <button
                    onClick={() => { setAbaAtiva("progresso"); setCursoSelecionadoId(null); }}
                    className={`flex flex-col items-center gap-1 flex-1 py-2 focus:outline-none transition-all ${abaAtiva === "progresso" ? "text-[#0052e0]" : "text-slate-400"
                        }`}
                >
                    <BarChart2 size={20} className={abaAtiva === "progresso" ? "stroke-[2.5]" : "stroke-[1.8]"} />
                    <span className="text-[10px] font-bold">Progresso</span>
                </button>

                {/* Aba Favoritos */}
                <button
                    onClick={() => { setAbaAtiva("favoritos"); setCursoSelecionadoId(null); }}
                    className={`flex flex-col items-center gap-1 flex-1 py-2 focus:outline-none transition-all ${abaAtiva === "favoritos" ? "text-[#0052e0]" : "text-slate-400"
                        }`}
                >
                    <Heart size={20} className={abaAtiva === "favoritos" ? "stroke-[2.5]" : "stroke-[1.8]"} />
                    <span className="text-[10px] font-bold">Favoritos</span>
                </button>

                {/* Aba Perfil */}
                <button
                    onClick={() => { setAbaAtiva("perfil"); setCursoSelecionadoId(null); }}
                    className={`flex flex-col items-center gap-1 flex-1 py-2 focus:outline-none transition-all ${abaAtiva === "perfil" ? "text-[#0052e0]" : "text-slate-400"
                        }`}
                >
                    <User size={20} className={abaAtiva === "perfil" ? "stroke-[2.5]" : "stroke-[1.8]"} />
                    <span className="text-[10px] font-bold">Perfil</span>
                </button>

            </nav>
        </footer>
    )
}