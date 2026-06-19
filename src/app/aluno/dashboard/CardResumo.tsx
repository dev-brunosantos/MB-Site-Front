import { CardReumoProps } from "@/src/utils/CardResumoConst"

export const CardResumoComponent = (
    { titulo, resumo, horas } : CardReumoProps
) => {
    return (
        <div className="p-4 bg-white border border-slate-100 rounded-2xl flex flex-col gap-1 shadow-sm">
            <span className="text-slate-400 text-[10.5px] font-bold uppercase tracking-wider">
                {titulo}
            </span>
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                {horas ? `${resumo}h`: `${resumo}`}
            </span>
        </div>
    )
}