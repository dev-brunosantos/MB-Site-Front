"use client"

import { Button } from "@/src/components/ui/button"
import { Clock, InfinityIcon, Router, Search, Video } from "lucide-react"
import Image from "next/image"

import homePiano from "@/src/../public/bruno-piano.png"
import { useRouter } from "next/navigation"
import { RecursoComponent } from "./RecursoComponent"

export const HomeComponent = () => {

    const router = useRouter();

    return (
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
                    <Button onClick={() => router.push("/novo-aluno")}
                        className="h-11 px-6 py-2.5 rounded-lg text-sm tracking-wide bg-[#0052e0] hover:bg-[#0041b3] text-white font-semibold shadow-lg shadow-blue-900/40"
                    >
                        Começar agora
                    </Button>
                </div>
            </div>

            {/* Ilustração do Professor com efeito de gradiente na base */}
            <div className="relative w-full aspect-[4/5] -mt-10 mb-2 pointer-events-none select-none overflow-hidden rounded-b-3xl">
                <Image src={homePiano} alt="" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020215] to-transparent" />
            </div>

            {/* Grid de Recursos (Cards conforme mockup) */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 mt-4">
                {/* Recurso 1 */}
                <RecursoComponent icone={Video} titulo="Aulas em vídeo" />

                {/* Recurso 2 */}
                <RecursoComponent icone={InfinityIcon} titulo="Acesso ilimitado" />

                {/* Recurso 3 */}
                <RecursoComponent icone={Clock} titulo="Aprenda no seu ritmo" />

                {/* Recurso 4 */}
                <RecursoComponent icone={Search} titulo="Suporte exclusivo" />
            </div>

        </section>
    )
}