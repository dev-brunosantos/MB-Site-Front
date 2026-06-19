"use client"

import { MdMenu } from "react-icons/md"
import { BtnComponent } from "../buttom"
import { LinkComponent } from "./LinkComponent"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Menu, Music, X } from "lucide-react"

export const MenuComponent = () => {

    const [menuAberto, setMenuAberto] = useState(false)

    const links = [
        { link: "#inicio", titulo: "Inicio" },
        { link: "#sobre", titulo: "Sobre" },
        { link: "#cursos", titulo: "Cursos" },
        { link: "#planos", titulo: "Planos" },
        { link: "#contato", titulo: "Contato" },
    ]

    const abrirMenu = () => {
        setMenuAberto(!menuAberto)
    }

    return (
        <header className="w-full max-w-md mx-auto h-16 border-b border-white/5 px-6 flex items-center justify-between fixed top-0 left-1/2 -translate-x-1/2 bg-[#020215]/95 backdrop-blur-md text-white z-50">
            <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-blue-500 fill-blue-500" />
                <span className="font-bold text-lg tracking-tight">SuaLogo</span>
            </div>

            {/* Botão Hambúrguer para Mobile */}
            <Button
                className=" text-white hover:bg-slate-800/50 h-10 w-10 rounded-full"
                onClick={abrirMenu}
                aria-label="Toggle Menu"
            >
                {menuAberto ? <X size={26} /> : <Menu size={26} />}
            </Button>

            {/* Menu Dropdown responsivo */}
            {menuAberto && (
                <nav className="absolute top-16 left-0 w-full bg-[#020215] border-b border-white/10 py-6 px-8 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200">
                    <ul className="flex flex-col gap-4">
                        {links.map((opt) => (
                            <li key={opt.titulo}>
                                <a
                                    href={opt.link}
                                    className="block text-slate-300 hover:text-white py-2 text-base font-medium border-b border-white/5"
                                    onClick={() => setMenuAberto(false)}
                                >
                                    {opt.titulo}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Button className="w-full mt-2" onClick={() => setMenuAberto(false)}>
                        Começar Agora
                    </Button>
                </nav>
            )}
        </header>
    )
}
