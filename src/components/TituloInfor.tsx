import { Bell } from "lucide-react";

interface TituloInforProps {
    titulo: string;
    subTitulo: string;
    centralizar?: boolean;
    cabecalho?: boolean;
}

export const TituloInfor = (
    { titulo, subTitulo, centralizar = false, cabecalho = true }: TituloInforProps
) => {
    return (
        <div className={`w-full h-auto pt-5 ${cabecalho ? 'pl-4' : 'pl-0'} flex flex-col items-center justify-evenly gap-2 bg-white`}>
            <div
                className={`w-full flex gap-1 items-center justify-between`}
            >
                <div className={`w-full flex flex-col gap-1 ${centralizar ? 'items-center' : 'items-start'} justify-between`}>
                    <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        {titulo}
                    </h1>
                    <span className="text-xs font-semibold text-slate-400">
                        {subTitulo}
                    </span>
                </div>

                {cabecalho && (
                    <div className="flex items-center">
                        {/* Ícone de Notificação com Ponto Vermelho */}
                        <div className="relative">
                            <button className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-700">
                                <Bell size={20} />
                            </button>
                            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
                        </div>
                    </div>
                )}
            </div>
            <div className="w-full h-px bg-linear-to-r from-white/10 via-blue-500 to-white/10" />
        </div>
    )
}