import { BtnComponent } from "../buttom"
import { LinkComponent } from "./LinkComponent"

export const MenuComponent = () => {

    const links = [
        { link: "/", titulo: "inicio" },
        { link: "/sobre", titulo: "Sobre" },
        { link: "/cursos", titulo: "Cursos" },
        { link: "/planos", titulo: "Planos" },
        { link: "/contato", titulo: "Contato" },
    ]

    return(
        <header 
            className="w-full max-w-350 h-15 border-2 px-5 flex items-center justify-between"
        >
            <div>
                <h1>Logomarca</h1>
            </div>

            <nav className="w-[70%] flex items-center justify-between">
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