import { Button } from "@/src/components/ui/button"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export const PlanosComponent = () => {

    const [planoAtivo, setPlanoAtivo] = useState(1)

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
    )
}