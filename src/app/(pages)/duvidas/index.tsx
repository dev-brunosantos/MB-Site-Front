"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export const DuvidasComponent = () => {

    const perguntasFrequentes = [
        {
            pergunta: "Preciso ter o instrumento para começar?",
            resposta: "Não obrigatoriamente na primeira semana, mas para praticar e fixar os conteúdos das aulas de forma consistente, recomendamos fortemente que tenha acesso ao seu próprio instrumento."
        },
        {
            pergunta: "Por quanto tempo terei acesso ao curso?",
            resposta: "O seu acesso é imediato e continuará ativo pelo período contratado (mensal, semestral ou anual) com renovação automática para você nunca interromper a sua evolução."
        },
        {
            pergunta: "Como funciona o suporte com o professor?",
            resposta: "Todas as suas dúvidas podem ser enviadas diretamente pela área de membros das aulas. Além disso, temos canais de suporte exclusivo onde você pode enviar áudios e vídeos de suas práticas para receber feedbacks personalizados."
        },
        {
            pergunta: "Quais são as formas de pagamento?",
            resposta: "Aceitamos Pix, cartão de crédito com aprovação imediata e boleto bancário. Nos planos semestral e anual, você também pode parcelar em até 12x no cartão de crédito."
        },
        {
            pergunta: "Posso cancelar a assinatura quando quiser?",
            resposta: "Com certeza. No plano mensal, você pode solicitar o cancelamento a qualquer momento e não haverá novas cobranças. Para os planos semestral e anual, garantimos o reembolso integral caso solicite nos primeiros 7 dias após a compra."
        }
    ]

    const [faqAberto, setFaqAberto] = useState<number | null>(null)

    const alternarFaq = (index: number) => {
        setFaqAberto(faqAberto === index ? null : index)
    }

    return (
        <section id="faq" className="flex flex-col gap-6 relative">

            <div className="flex flex-col gap-2">
                <h2 className="text-[28px] font-bold tracking-tight text-white">
                    Dúvidas frequentes
                </h2>
                <p className="text-slate-400 text-[14.5px] leading-relaxed">
                    Ainda tem dúvidas para iniciar sua jornada? Confira as perguntas mais comuns dos nossos alunos.
                </p>
            </div>

            {/* Estrutura de Accordions em Lista */}
            <div className="flex flex-col gap-3">
                {perguntasFrequentes.map((item, index) => {
                    const estaAberto = faqAberto === index
                    return (
                        <div
                            key={index}
                            className="rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors overflow-hidden"
                        >
                            {/* Cabeçalho do Accordion (Pergunta) */}
                            <button
                                onClick={() => alternarFaq(index)}
                                className="w-full flex items-center justify-between p-5 text-left transition-all focus:outline-none"
                                aria-expanded={estaAberto}
                            >
                                <span className="text-[14px] font-bold text-slate-200 leading-snug tracking-wide max-w-[90%]">
                                    {item.pergunta}
                                </span>
                                <ChevronDown
                                    className={`w-4 h-4 text-blue-400 transition-transform duration-300 ${estaAberto ? "transform rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Conteúdo do Accordion (Resposta com transição suave de altura) */}
                            <div
                                className={`transition-all duration-300 ease-in-out ${estaAberto
                                        ? "max-h-[180px] opacity-100 border-t border-white/5"
                                        : "max-h-0 opacity-0 pointer-events-none"
                                    }`}
                            >
                                <div className="p-5 text-[13.5px] text-slate-400 leading-relaxed">
                                    {item.resposta}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}