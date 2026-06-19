"use client"

import React, { useState } from "react"
import {
    Menu,
    X,
    Music,
    Infinity,
    Quote,
    ChevronLeft,
    Star,
    ChevronRight,
} from "lucide-react"

import { PlanosComponent } from "./planos";
import { HomeComponent } from "../(pages)/home";
import { SobreComponent } from "../(pages)/sobre";

// ==========================================
// COMPONENTES AUXILIARES LOCAIS (SHADCN UI SIMULADOS)
// Caso queira substituir pelas suas instalações reais do Shadcn, 
// basta trocar as importações para: import { Button } from "@/components/ui/button"
// ==========================================

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", variant = 'default', size = 'default', children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] transition-all duration-200"

        const variants = {
            default: "bg-[#0052e0] hover:bg-[#0041b3] text-white font-semibold shadow-lg shadow-blue-900/40",
            outline: "border border-slate-700 hover:bg-slate-800 text-white",
            ghost: "text-white hover:bg-slate-800/50"
        }

        const sizes = {
            default: "h-11 px-6 py-2.5 rounded-lg",
            sm: "h-9 px-4 rounded-md",
            lg: "h-12 px-8 rounded-lg text-base",
            icon: "h-10 w-10 rounded-full"
        }

        const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

        return (
            <button ref={ref} className={classes} {...props}>
                {children}
            </button>
        )
    }
)
Button.displayName = "Button"

export default function App() {
    const [menuAberto, setMenuAberto] = useState(false)
    const [planoAtivo, setPlanoAtivo] = useState(1)
    const [depoimentoAtivo, setDepoimentoAtivo] = useState(0)

    const depoimentos = [
        {
            id: 0,
            nome: "Mariana Costa",
            instrumento: "Aluna de Saxofone",
            mensagem: "As aulas práticas e a didática do professor facilitaram muito meu aprendizado. Em poucos meses já consigo tocar minhas músicas favoritas no sax!",
            nota: 5,
            avatarColor: "from-pink-500 to-rose-600"
        },
        {
            id: 1,
            nome: "Lucas Silva",
            instrumento: "Aluno de Flauta",
            mensagem: "O suporte exclusivo tira todas as dúvidas rapidamente e o cronograma no meu próprio ritmo foi essencial para que eu não desistisse na correria do dia a dia.",
            nota: 5,
            avatarColor: "from-blue-500 to-indigo-600"
        },
        {
            id: 2,
            nome: "Rodrigo Alencar",
            instrumento: "Aluno de Saxofone",
            mensagem: "Metodologia incrível! A plataforma é super organizada e os materiais complementares de estudo dão um suporte gigante para quem está começando do zero.",
            nota: 5,
            avatarColor: "from-emerald-500 to-teal-600"
        }
    ]

    const links = [
        { link: "#inicio", titulo: "Inicio" },
        { link: "#sobre", titulo: "Sobre" },
        { link: "#cursos", titulo: "Cursos" },
        { link: "#planos", titulo: "Planos" },
        { link: "#contato", titulo: "Contato" },
    ]

    const abrirMenu = () => {
        setMenuAberto(!menuAberto)
    }

    const proximoDepoimento = () => {
        setDepoimentoAtivo((prev) => (prev + 1) % depoimentos.length)
    }

    const depoimentoAnterior = () => {
        setDepoimentoAtivo((prev) => (prev - 1 + depoimentos.length) % depoimentos.length)
    }

    return (
        <div className="min-h-screen bg-[#020215] text-slate-100 font-sans selection:bg-blue-600 overflow-x-hidden">

            {/* ----------------- GRADIENTES DE FUNDO ESTILO BRILHO NEON ----------------- */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] h-[600px] bg-gradient-to-b from-[#0a1740] via-transparent to-transparent opacity-60 pointer-events-none blur-3xl z-0" />
            <div className="absolute top-[800px] right-0 w-[300px] h-[500px] bg-[#0c1435] opacity-40 pointer-events-none blur-3xl z-0" />

            {/* ----------------- CABEÇALHO / HEADER ----------------- */}
            <header className="w-full max-w-md mx-auto h-16 border-b border-white/5 px-6 flex items-center justify-between fixed top-0 left-1/2 -translate-x-1/2 bg-[#020215]/95 backdrop-blur-md text-white z-50">
                <div className="flex items-center gap-2">
                    <Music className="w-5 h-5 text-blue-500 fill-blue-500" />
                    <span className="font-bold text-lg tracking-tight">SuaLogo</span>
                </div>

                {/* Botão Hambúrguer para Mobile */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10"
                    onClick={abrirMenu}
                    aria-label="Toggle Menu"
                >
                    {menuAberto ? <X size={26} /> : <Menu size={26} />}
                </Button>

                {/* Menu Dropdown responsivo */}
                {menuAberto && (
                    <nav className="absolute top-16 left-0 w-full bg-[#020215] border-b border-white/10 py-6 px-8 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200">
                        <ul className="flex flex-col gap-4">
                            {links.map((opt) => (
                                <li key={opt.titulo}>
                                    <a
                                        href={opt.link}
                                        className="block text-slate-300 hover:text-white py-2 text-base font-medium border-b border-white/5"
                                        onClick={() => setMenuAberto(false)}
                                    >
                                        {opt.titulo}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <Button className="w-full mt-2" onClick={() => setMenuAberto(false)}>
                            Começar Agora
                        </Button>
                    </nav>
                )}
            </header>

            {/* Conteúdo principal empacotado no container mobile simulado das imagens */}
            <main className="w-full max-w-md mx-auto pt-16 pb-16 px-6 relative z-10 flex flex-col gap-16">

                <HomeComponent />

                {/* Separador de seção sutil */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* ----------------- 2. SOBRE O PROFESSOR SECTION ----------------- */}
                <SobreComponent />

                {/* ----------------- 3. SEÇÃO DE DEPOIMENTOS (CARROSSEL NOVO) ----------------- */}
                <section id="depoimentos" className="flex flex-col gap-6 relative">

                    <div className="flex flex-col gap-2">
                        <h2 className="text-[28px] font-bold tracking-tight text-white">
                            O que dizem os alunos
                        </h2>
                        <p className="text-slate-400 text-[14.5px] leading-relaxed">
                            Descubra como a nossa metodologia transformou a rotina e o aprendizado de quem já faz parte.
                        </p>
                    </div>

                    {/* Container do Carrossel de Depoimentos */}
                    <div className="relative min-h-[250px] flex items-center justify-center">

                        {/* Botão Anterior */}
                        <button
                            onClick={depoimentoAnterior}
                            className="absolute -left-3.5 z-20 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 shadow flex items-center justify-center text-slate-200 active:scale-95 transition-all"
                            aria-label="Depoimento anterior"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        {/* Card do Depoimento Ativo */}
                        <div className="w-full transition-all duration-300 transform scale-100 opacity-100 z-10">

                            <div className="relative flex flex-col bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-md shadow-lg">

                                {/* Ícone de Aspas Flutuante para dar requinte */}
                                <div className="absolute top-4 right-5 text-blue-500/20">
                                    <Quote size={40} className="transform rotate-180 fill-current" />
                                </div>

                                {/* Perfil do Aluno (Avatar + Nome) */}
                                <div className="flex items-center gap-3.5 mb-4">

                                    {/* Avatar Ilustrado Dinamicamente em Vetor */}
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${depoimentos[depoimentoAtivo].avatarColor} flex items-center justify-center overflow-hidden border border-white/15 relative flex-shrink-0`}>
                                        <svg viewBox="0 0 100 100" className="w-8 h-8 text-white/90">
                                            {/* Corpo do avatar simples */}
                                            <path d="M20,90 C20,65 80,65 80,90 Z" fill="currentColor" opacity="0.8" />
                                            {/* Cabeça do avatar simples */}
                                            <circle cx="50" cy="40" r="22" fill="currentColor" />
                                        </svg>
                                    </div>

                                    {/* Nome e Instrumento */}
                                    <div className="flex flex-col">
                                        <h4 className="text-[15px] font-bold text-white tracking-wide leading-tight">
                                            {depoimentos[depoimentoAtivo].nome}
                                        </h4>
                                        <span className="text-xs text-blue-400 font-medium tracking-tight mt-0.5">
                                            {depoimentos[depoimentoAtivo].instrumento}
                                        </span>
                                    </div>

                                </div>

                                {/* Estrelas do Depoimento */}
                                <div className="flex items-center gap-1 mb-4">
                                    {Array.from({ length: depoimentos[depoimentoAtivo].nota }).map((_, i) => (
                                        <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                {/* Mensagem de Feedback */}
                                <p className="text-[13.5px] text-slate-300 leading-relaxed italic font-normal tracking-wide">
                                    "{depoimentos[depoimentoAtivo].mensagem}"
                                </p>

                            </div>

                        </div>

                        {/* Botão Próximo */}
                        <button
                            onClick={proximoDepoimento}
                            className="absolute -right-3.5 z-20 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 shadow flex items-center justify-center text-slate-200 active:scale-95 transition-all"
                            aria-label="Próximo depoimento"
                        >
                            <ChevronRight size={18} />
                        </button>

                    </div>

                    {/* Indicadores do Carrossel */}
                    <div className="flex justify-center gap-2 mt-1">
                        {depoimentos.map((depo) => (
                            <button
                                key={depo.id}
                                onClick={() => setDepoimentoAtivo(depo.id)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${depoimentoAtivo === depo.id
                                    ? "w-5 bg-blue-500"
                                    : "w-1.5 bg-slate-700"
                                    }`}
                                aria-label={`Ir para depoimento ${depo.id + 1}`}
                            />
                        ))}
                    </div>

                </section>

                {/* Separador de seção sutil */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* ----------------- 4. SEÇÃO DE PLANOS (CARROSSEL) ----------------- */}
                <PlanosComponent />

            </main>

            {/* Footer minimalista de copyright */}
            {/* <footer className="w-full max-w-md mx-auto text-center py-8 text-xs text-slate-600 border-t border-white/5 relative z-10">
                <p>&copy; {new Date().getFullYear()} MusicBox. Todos os direitos reservados.</p>
            </footer> */}
        </div>
    )
}