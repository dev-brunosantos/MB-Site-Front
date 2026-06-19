import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { useState } from "react"

export const DepoimentosComponent = () => {

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

    const proximoDepoimento = () => {
        setDepoimentoAtivo((prev) => (prev + 1) % depoimentos.length)
    }

    const depoimentoAnterior = () => {
        setDepoimentoAtivo((prev) => (prev - 1 + depoimentos.length) % depoimentos.length)
    }

    return (
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
    )
}