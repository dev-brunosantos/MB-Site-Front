import { MdMenu } from "react-icons/md"
import { BtnComponent } from "../buttom"
import { LinkComponent } from "./LinkComponent"

export const MenuComponent = () => {

    const links = [
        { link: "/", titulo: "Inicio" },
        { link: "/sobre", titulo: "Sobre" },
        { link: "/cursos", titulo: "Cursos" },
        { link: "/planos", titulo: "Planos" },
        { link: "/contato", titulo: "Contato" },
    ]

    return(
        <header 
            // Corrigido o max-w e h para valores válidos. Adicionado mx-auto para centralizar o menu se necessário.
            className="w-full max-w-300 mx-auto h-20 border-b px-5 flex items-center justify-between bg-[#040427] z-50 fixed top-0"
        >
            <div>
                <h1 className="font-bold text-xl text-white">Logomarca</h1>
            </div>

            {/* BOTÃO HAMBÚRGUER: Aparece no mobile, some em telas grandes (lg) */}
            <button className="block lg:hidden text-white">
                <MdMenu size={35} color="white"/> {/* 50px costuma ficar exageradamente grande */}
            </button>

            {/* CONTAINER DE NAVEGAÇÃO: Escondido no mobile (hidden), vira flex no desktop (lg:flex) */}
            <nav className="hidden lg:flex w-[70%] items-center justify-between">
                <ul className="w-[80%] flex items-center justify-evenly">
                    {links.map(opt => (
                        <LinkComponent 
                            key={opt.link}
                            link={opt.link}
                            titulo={opt.titulo}
                        />
                    ))}
                </ul>

                <div className="w-[20%] flex items-center justify-end">
                    <BtnComponent titulo="Entrar" />
                </div>
            </nav>
        </header>
    )
}