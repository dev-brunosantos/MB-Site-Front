"use client"

import { MenuAluno } from "@/src/components/menu/MenuAluno";
import { TituloInfor } from "@/src/components/TituloInfor";
import { Button } from "@/src/components/ui/button";
import { useLogin } from "@/src/hooks/useLogin";
import { useRouter } from "next/navigation";

export default function Perfil() {

    const { logout } = useLogin();

    return (
        <div className="w-full min-h-screen bg-white text-slate-100 font-sans selection:bg-blue-600 overflow-x-hidden">

            <div className="w-full h-15 flex items-center justify-between fixed top-0 left-0 z-50 bg-white">
                <TituloInfor
                    titulo="Meu Perfil"
                    subTitulo="Gerencie suas preferências de conta"
                />
            </div>

            <main className="w-full max-w-md mx-auto pt-25 pb-16 px-6 relative z-10 flex flex-col gap-16">
                <div className="flex flex-col gap-6 animate-in fade-in duration-200">

                    <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl bg-white shadow-sm">
                        <div className="w-14 h-14 rounded-full bg-[#0052e0] flex items-center justify-center text-white text-lg font-bold">
                            A
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-bold text-slate-900 text-[15px]">Aluno Premium</h3>
                            <span className="text-xs text-slate-400">aluno@musica.com</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button className="w-full py-3 px-4 bg-white border border-slate-100 rounded-xl text-left text-sm font-bold text-slate-700 hover:bg-slate-50">
                            Configurações de Conta
                        </button>
                        <button className="w-full py-3 px-4 bg-white border border-slate-100 rounded-xl text-left text-sm font-bold text-slate-700 hover:bg-slate-50">
                            Assinatura e Cobrança
                        </button>


                        <Button
                            variant="destructive"
                            className="h-11 px-6 py-2.5 rounded-lg text-sm tracking-wide font-semibold shadow-lg "
                            onClick={logout}
                        >
                            Sair da Conta
                        </Button>
                    </div>
                </div>
            </main >

        </div >
    )
}