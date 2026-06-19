import { Bell, Menu } from "lucide-react"
import { Separador } from "../Separador"

export const MenuAluno = () => {
    return (
        <div className="w-full fixed top-0 left-0 z-50 bg-white">
            <div className="w-full h-15 border-b border-gray-100 pl-4 pr-2 flex items-center justify-between">
                <div className="flex items-center gap-3">

                    <div className="flex flex-col">
                        <h1 className="text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Olá, Aluno!
                        </h1>
                        <span className="text-xs font-semibold text-slate-400">
                            Continue aprendendo e evoluindo.
                        </span>
                    </div>
                </div>

                <div className="flex items-center">
                    {/* Ícone de Notificação com Ponto Vermelho */}
                    <div className="relative">
                        <button className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-700">
                            <Bell size={20} />
                        </button>
                        <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
                    </div>
                </div>

            </div>
            <div className="w-full h-px bg-linear-to-r from-white/10 via-blue-500 to-white/10" />
        </div>
    )
}