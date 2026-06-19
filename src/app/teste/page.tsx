"use client"

import React, { useState } from "react"
import {
    Menu,
    X,
    Music,
    Video,
    Infinity as InfinityIcon,
    Clock,
    Search,
    User,
    Award,
    BookOpen,
    ChevronRight,
    ChevronLeft,
    Check
} from "lucide-react"
import Image from "next/image";

import homePiano from "@/src/../public/bruno-piano.png"
import sobreFlauta from "@/src/../public/bruno-flauta.png"
import { PlanosComponent } from "./planos";
import { HomeComponent } from "../(pages)/home";

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

// ==========================================
// COMPONENTE PRINCIPAL UNIFICADO
// Contém: Header, Hero, Grid de Benefícios e Sobre
// ==========================================

export default function App() {
    const [menuAberto, setMenuAberto] = useState(false)
    const [planoAtivo, setPlanoAtivo] = useState(1)

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

    const planos = [
        {
            id: 0,
            titulo: "Mensal",
            preco: "49,90",
            periodo: "/mês",
            beneficios: [
                "Acesso ilimitado",
                "Todos os cursos",
                "Suporte exclusivo",
                "Cancele quando quiser"
            ],
            destaque: false
        },
        {
            id: 1,
            titulo: "Semestral",
            preco: "249,90",
            periodo: "/6 meses",
            beneficios: [
                "Acesso ilimitado",
                "Todos os cursos",
                "Suporte exclusivo",
                "2 meses grátis"
            ],
            destaque: true,
            tag: "MAIS ESCOLHIDO"
        },
        {
            id: 2,
            titulo: "Anual",
            preco: "399,90",
            periodo: "/ano",
            beneficios: [
                "Acesso ilimitado",
                "Todos os cursos",
                "Suporte exclusivo",
                "4 meses grátis"
            ],
            destaque: false
        }
    ]

    const proximoPlano = () => {
        setPlanoAtivo((prev) => (prev + 1) % planos.length)
    }

    const planoAnterior = () => {
        setPlanoAtivo((prev) => (prev - 1 + planos.length) % planos.length)
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
                <section id="sobre" className="flex flex-col gap-6 relative">

                    <div className="flex flex-col gap-3">
                        <h2 className="text-[28px] font-bold tracking-tight text-white">
                            Sobre mim
                        </h2>
                        <p className="text-slate-400 text-[14.5px] leading-relaxed">
                            Apaixonado por música e ensino, meu objetivo é ajudar você a alcançar a fluência no instrumento de forma prática e motivadora.
                        </p>
                    </div>

                    {/* Lista de Conquistas / Ícones Azuis */}
                    <div className="flex flex-col gap-4 mt-1">

                        <div className="flex items-center gap-3.5">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                <Award className="w-4.5 h-4.5 text-blue-400" />
                            </div>
                            <span className="text-[14px] text-slate-300 font-medium">+15 anos de experiência</span>
                        </div>

                        <div className="flex items-center gap-3.5">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                <User className="w-4.5 h-4.5 text-blue-400" />
                            </div>
                            <span className="text-[14px] text-slate-300 font-medium">+10 mil alunos</span>
                        </div>

                        <div className="flex items-center gap-3.5">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                <BookOpen className="w-4.5 h-4.5 text-blue-400" />
                            </div>
                            <span className="text-[14px] text-slate-300 font-medium">Metodologia própria</span>
                        </div>

                    </div>

                    {/* Ilustração do Professor com Saxofone na base da seção */}
                    <div className="relative w-full aspect-[4/5] -mt-2 pointer-events-none select-none rounded-b-3xl overflow-hidden">

                        <Image src={sobreFlauta} alt="" className="w-full h-[70%]" />

                        {/* Fade escuro sobre a base da imagem */}
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020215] to-transparent" />

                    </div>

                    {/* Separador de seção sutil */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                </section>

                {/* ----------------- 3. SEÇÃO DE PLANOS (CARROSSEL) ----------------- */}
                <PlanosComponent />

            </main>

            {/* Footer minimalista de copyright */}
            <footer className="w-full max-w-md mx-auto text-center py-8 text-xs text-slate-600 border-t border-white/5 relative z-10">
                <p>&copy; {new Date().getFullYear()} SuaLogo. Todos os direitos reservados.</p>
            </footer>
        </div>
    )
}