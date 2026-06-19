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

                {/* ----------------- 1. LANDING PAGE - HOME SECTION ----------------- */}
                <section id="inicio" className="flex flex-col pt-8 relative">

                    {/* Notas musicais decorativas flutuando de fundo */}
                    <div className="absolute right-12 top-4 opacity-10 pointer-events-none select-none text-blue-400">
                        <span className="text-4xl block font-serif">♫</span>
                        <span className="text-2xl block ml-6 mt-2 font-serif">♪</span>
                    </div>

                    <div className="flex flex-col gap-4 z-10">
                        <h1 className="text-[34px] leading-[1.15] font-extrabold tracking-tight text-white">
                            Aprenda música <br />
                            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                                do seu jeito,
                            </span> <br />
                            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                                no seu tempo.
                            </span>
                        </h1>

                        <p className="text-slate-400 text-[14.5px] leading-relaxed max-w-[85%] mt-1">
                            Aulas práticas e objetivas para você evoluir de verdade no instrumento que sempre sonhou tocar.
                        </p>

                        <div className="mt-4">
                            <Button className="px-8 py-3 font-semibold rounded-lg text-sm tracking-wide shadow-lg shadow-blue-600/30">
                                Começar agora
                            </Button>
                        </div>
                    </div>

                    {/* Ilustração do Professor com efeito de gradiente na base */}
                    <div className="relative w-full aspect-[4/5] -mt-10 mb-2 pointer-events-none select-none overflow-hidden rounded-b-3xl">
                        {/* SVG do Professor de alto nível (Simulando a foto do mockup) */}

                        <Image
                            src={homePiano}
                            alt=""
                        />

                        {/* Fade escuro sobre a base da imagem para se misturar ao fundo */}
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020215] to-transparent" />
                    </div>

                    {/* Grid de Recursos (Cards conforme mockup) */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-6 mt-4">

                        {/* Recurso 1 */}
                        <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                                <Video className="w-5 h-5 text-blue-400" />
                            </div>
                            <span className="text-[13.5px] font-medium text-slate-200">Aulas em vídeo</span>
                        </div>

                        {/* Recurso 2 */}
                        <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                                <InfinityIcon className="w-5 h-5 text-blue-400" />
                            </div>
                            <span className="text-[13.5px] font-medium text-slate-200">Acesso ilimitado</span>
                        </div>

                        {/* Recurso 3 */}
                        <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                                <Clock className="w-5 h-5 text-blue-400" />
                            </div>
                            <span className="text-[13.5px] font-medium text-slate-200">Aprenda no seu ritmo</span>
                        </div>

                        {/* Recurso 4 */}
                        <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                                <Search className="w-5 h-5 text-blue-400" />
                            </div>
                            <span className="text-[13.5px] font-medium text-slate-200">Suporte exclusivo</span>
                        </div>

                    </div>

                </section>

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
                <section id="planos" className="flex flex-col gap-6 relative">

                    {/* Box container branco/cinza claro estilo mockup premium */}
                    <div className="bg-[#f8fafc] text-slate-900 rounded-3xl p-6 shadow-2xl shadow-blue-950/40 border border-slate-200">

                        {/* Cabeçalho da Seção de Planos */}
                        <div className="text-center mb-8 flex flex-col gap-2">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                                Escolha o plano ideal para você
                            </h2>
                            <p className="text-slate-500 text-xs tracking-wide">
                                Acesso ilimitado a todos os cursos e materiais
                            </p>
                        </div>

                        {/* Container do Carrossel de Cartões */}
                        <div className="relative min-h-[380px] flex items-center justify-center">

                            {/* Botão Anterior */}
                            <button
                                onClick={planoAnterior}
                                className="absolute -left-3 z-20 w-8 h-8 rounded-full bg-white border border-slate-200 shadow flex items-center justify-center text-slate-600 active:scale-95 transition-all"
                                aria-label="Plano anterior"
                            >
                                <ChevronLeft size={18} />
                            </button>

                            {/* Cartão de Plano Ativo */}
                            <div className="w-full transition-all duration-300 transform scale-100 opacity-100 z-10">

                                {/* Renderização do Cartão Atual do Carrossel */}
                                <div className={`relative flex flex-col bg-white rounded-2xl border ${planos[planoAtivo].destaque
                                    ? "border-[#0052e0] shadow-xl shadow-blue-100/70"
                                    : "border-slate-200 shadow-sm"
                                    } overflow-hidden h-full min-h-[350px] p-6`}>

                                    {/* Tag Superior de Destaque / Mais Escolhido */}
                                    {planos[planoAtivo].destaque && (
                                        <div className="absolute top-0 left-0 w-full bg-[#0052e0] text-white text-[10px] font-bold py-1.5 text-center tracking-widest uppercase">
                                            {planos[planoAtivo].tag}
                                        </div>
                                    )}

                                    {/* Espaçador para compensar a tag de destaque no topo */}
                                    <div className={planos[planoAtivo].destaque ? "pt-4" : ""}>
                                        <h3 className="text-xl font-bold text-slate-900">
                                            {planos[planoAtivo].titulo}
                                        </h3>
                                    </div>

                                    {/* Detalhe do Preço */}
                                    <div className="my-6 flex items-baseline">
                                        <span className="text-sm font-bold text-slate-900 mr-1">R$</span>
                                        <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                                            {planos[planoAtivo].preco}
                                        </span>
                                        <span className="text-xs text-slate-500 ml-1 font-medium">
                                            {planos[planoAtivo].periodo}
                                        </span>
                                    </div>

                                    {/* Lista de Benefícios do Plano */}
                                    <ul className="flex flex-col gap-3.5 mb-8 flex-grow">
                                        {planos[planoAtivo].beneficios.map((beneficio, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-[#0052e0] stroke-[3]" />
                                                </div>
                                                <span className="text-[13px] text-slate-600 font-medium">
                                                    {beneficio}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Botão de Assinatura */}
                                    <Button className="w-full bg-[#0052e0] hover:bg-[#0041b3] text-white py-2.5 font-semibold text-sm rounded-xl">
                                        Assinar
                                    </Button>

                                </div>

                            </div>

                            {/* Botão Próximo */}
                            <button
                                onClick={proximoPlano}
                                className="absolute -right-3 z-20 w-8 h-8 rounded-full bg-white border border-slate-200 shadow flex items-center justify-center text-slate-600 active:scale-95 transition-all"
                                aria-label="Próximo plano"
                            >
                                <ChevronRight size={18} />
                            </button>

                        </div>

                        {/* Indicadores / Pontos de Navegação do Carrossel */}
                        <div className="flex justify-center gap-2.5 mt-6">
                            {planos.map((plano) => (
                                <button
                                    key={plano.id}
                                    onClick={() => setPlanoAtivo(plano.id)}
                                    className={`h-2 rounded-full transition-all duration-300 ${planoAtivo === plano.id
                                        ? "w-6 bg-[#0052e0]"
                                        : "w-2 bg-slate-300"
                                        }`}
                                    aria-label={`Ir para o plano ${plano.titulo}`}
                                />
                            ))}
                        </div>

                    </div>

                </section>

            </main>

            {/* Footer minimalista de copyright */}
            <footer className="w-full max-w-md mx-auto text-center py-8 text-xs text-slate-600 border-t border-white/5 relative z-10">
                <p>&copy; {new Date().getFullYear()} SuaLogo. Todos os direitos reservados.</p>
            </footer>
        </div>
    )
}