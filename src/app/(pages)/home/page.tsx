import Image from "next/image";

import { BtnIconComponent } from "@/src/components/buttom/BtnIcon";
import { TelaComponent } from "@/src/components/Tela";

import { FaCamera, FaHeart, FaRegClock } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { BtnComponent } from "@/src/components/buttom";

import homePiano from "../../../../public/bruno-piano.png";

export default function Home() {

    const opcoesIcones = [
        {
            id: 1,
            icone: FaCamera,
            titulo: "Aulas em video"
        },
        {
            id: 2,
            icone: FaHeart,
            titulo: "Acesso limitado"
        },
        {
            id: 3,
            icone: FaRegClock,
            titulo: "Aprenda no seu tempo"
        },
        {
            id: 4,
            icone: BiSupport,
            titulo: "Suporte exclusivo"
        },
    ]


    return (
        <TelaComponent>
            <div className="w-full h-full flex flex-col justify-evenly relative">

                <div className="w-[80%] mt-20 flex flex-col items-center z-40 relative">
                    {/* <h2 className="w-full text-3xl font-bold text-white z-30"> */}
                    <h2 className="w-full text-3xl font-bold text-blue-500 z-30">
                        Aprenda musica
                        <br />
                        <span className="text-blue-500">do seu jeito, <br /> no seu tempo.</span>
                    </h2>

                    <div className="w-full min-h-30 flex items-center z-30">
                        <p className="text-white font-bold">
                            Aulas práticas e objetivas para você
                            evoluir de verdade no instrumento que
                            sempre sonhou tocar.
                        </p>
                    </div>

                    <div className="w-full pr-20 z-40">
                        <BtnComponent titulo="Começar agora" />
                    </div>

                    <div className="w-[80%] h-90 border-t border-blue-500 rounded-tl-[95%] rounded-bl-[35%] absolute -top-10 -right-35 shadow-xl z-0">
                        <Image
                            src={homePiano}
                            alt=""
                            className="w-full h-full rounded-bl-2xl"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-evenly z-40">
                    {opcoesIcones.map(opt => (
                        <BtnIconComponent
                            key={opt.id}
                            icone={opt.icone}
                            iconeSize={32}
                            titulo={opt.titulo}
                            tituloSize={12}
                            coluna
                        />
                    ))}
                </div>

            </div>
        </TelaComponent>
    )
}