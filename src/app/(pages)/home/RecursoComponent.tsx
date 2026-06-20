import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface RecursoProps {
    icone: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    titulo: string;
}

export const RecursoComponent = (
    { icone: Icone, titulo }: RecursoProps
) => {
    return (
        <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                {/* <Video className="w-5 h-5 text-blue-400" /> */}
                <Icone className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-[13.5px] font-medium text-slate-200">
                {titulo}
            </span>
        </div>
    )
}