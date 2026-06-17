import { BtnComponent } from "../buttom"

export interface CardPlanosProps {
    tituloPlano: string;
    valor: number;
    beneficios: string[];

}

// export const CardPlanos = (
//     { tituloPlano, valor, beneficios }: CardPlanosProps
// ) => {
export const CardPlanos = () => {
    return (
        <div
            className="w-90 h-125 border-2 p-5 flex items-center justify-center rounded-md relative"
        >
            <div
                className="w-full h-20 px-5 absolute left-0 top-0 flex items-end"
            >
                <h2 className="font-bold text-3xl">
                    Plano Mensal
                </h2>
            </div>

            <div className="w-full ">

                <div>
                    <h1 className="font-bold text-[30px]">
                        R$ <span className="font-bold text-[50px]">49,90</span> /mes
                    </h1>
                </div>

                <ul className="w-full min-h-50 p-5 flex flex-col justify-evenly">
                    <li className="list-disc my-2">Acesso a toda a biblioteca de músicas</li>
                    <li className="list-disc my-2">Criação de playlists personalizadas</li>
                    <li className="list-disc my-2">Compartilhamento de músicas favoritas</li>
                </ul>
            </div>

            <div className="w-full absolute left-0 bottom-0 ">
                <div className="w-full p-5 ">
                    <BtnComponent
                        titulo="Assinar"
                    />
                </div>
            </div>
        </div>

    )
}