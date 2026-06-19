"use client"

import { MdMenu } from "react-icons/md"
import { BtnComponent } from "../buttom"
import { LinkComponent } from "./LinkComponent"
import { useEffect, useState } from "react"

export const MenuComponent = () => {

    const links = [
        { link: "/", titulo: "Inicio" },
        { link: "/sobre", titulo: "Sobre" },
        { link: "/cursos", titulo: "Cursos" },
        { link: "/planos", titulo: "Planos" },
        { link: "/contato", titulo: "Contato" },
    ]

    const [menuAberto, setMenuAberto] = useState(false);

    const abrirMenu = () => {
        setMenuAberto(!menuAberto)
    }

    return (
        <header
            className="
                w-full max-w-300 h-15 border-b-2 pl-5 flex items-center justify-between 
                fixed top-0 left-1/2 -translate-x-1/2 bg-[#040427] text-white z-50
            "
        >

            <div className="h-full flex items-center justify-center">
                <h1>
                    <a href="/">Logomarca</a>
                </h1>
            </div>

            <nav
                className="
                    w-[70%] h-full relative 
                "
            >

                <ul
                    className="
                        w-full h-auto rounded-bl-lg pb-10 flex flex-col items-center justify-evenly gap-8 absolute top-full overflow-hidden transition-all duration-300 shadow-lg bg-[#040427] 
                    "
                    style={{
                        // height: menuAberto ? "auto" : "0",
                        paddingBottom: menuAberto ? "40px" : "0px",
                        right: menuAberto ? "0%" : "-100%"
                    }}
                >
                    {links.map(opt => (
                        <LinkComponent
                            key={opt.titulo}
                            link={opt.link}
                            titulo={opt.titulo}
                        />
                    ))}
                </ul>
            </nav>


            <button
                className="absolute right-2"
                onClick={abrirMenu}
            >
                <MdMenu size={35} />
            </button>

        </header>
    )
}
