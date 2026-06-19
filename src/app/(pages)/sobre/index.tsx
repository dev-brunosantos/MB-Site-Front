import { Award, BookOpen, User } from "lucide-react"
import Image from "next/image"

import sobreFlauta from "@/src/../public/bruno-flauta.png";

export const SobreComponent = () => {
    return (
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
        </section>
    )
}