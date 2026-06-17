import Image from "next/image";

import { BtnIconComponent } from "@/src/components/buttom/BtnIcon";
import { TelaComponent } from "@/src/components/Tela";

import { FaVideo, FaBookReader, FaAward } from "react-icons/fa";

import sobreFlauta from "../../../../public/bruno-flauta.png";

export default function Sobre() {

    const opcoesIcones = [
        {
            id: 1,
            icone: FaVideo,
            titulo: "Aulas em video"
        },
        {
            id: 2,
            icone: FaAward,
            titulo: "Anos de experiência"
        },
        {
            id: 2,
            icone: FaBookReader,
            titulo: "Acesso limitado"
        }
    ]

    return (
        <TelaComponent>
            <div className="w-full h-full flex flex-col justify-evenly relative">

                <div className="w-[80%] flex flex-col items-center gap-10 z-40 relative -top-20">
                    <h2 className="w-full text-4xl font-bold text-blue-500 z-30">
                        Sobre mim
                    </h2>

                    <div className="w-full min-h-30 flex items-center z-30">
                        <p className="text-white font-bold">
                            Apaixonado por musica e ensino, meu objetivo é ajudar
                            você a alcançar a fluência no instrumento
                            de forma prática e motivadora
                        </p>
                    </div>

                    <div className="w-[80%] h-100 border-t border-blue-500 rounded-tl-[95%] rounded-bl-[35%] absolute -top-20 -right-30  shadow-xl z-0">
                        <Image
                            src={sobreFlauta}
                            alt=""
                            className="w-full h-full rounded-bl-2xl"
                        />
                    </div>
                </div>

                <div className="h-40 flex flex-col  z-40">
                    {opcoesIcones.map(opt => (
                        <BtnIconComponent
                            key={opt.id}
                            icone={opt.icone}
                            iconeSize={32}
                            iconeColor="oklch(62.3% 0.214 259.815)"
                            titulo={opt.titulo}
                            tituloSize={20}
                            coluna={false}
                        />
                    ))}
                </div>

            </div>
        </TelaComponent>
    )
}