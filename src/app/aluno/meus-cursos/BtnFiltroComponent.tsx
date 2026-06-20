"use client"

import { Button } from "@/src/components/ui/button"
import { SetStateAction, useEffect, useState } from "react";

interface BtnFiltroProps {
    filtro: string;
    setFiltroCurso: (value: SetStateAction<string>) => void;
    titulo: string;
}

export const BtnFiltroComponent = (
    { filtro, setFiltroCurso, titulo }: BtnFiltroProps
) => {

    const [selecionado, setSelecionado] = useState(false)

    const styles = {
        clicado: "bg-[#0052e0] text-white",
        naoClicado: "bg-slate-100 text-slate-600 hover:bg-slate-200"
    }

    useEffect(() => {
        if(filtro === "todos") {
            setSelecionado(true)
        }
    }, [filtro])

    const verificaFiltro = () => {
        setFiltroCurso(filtro)
        setSelecionado(true)
    }

    return (
        <Button
            onClick={verificaFiltro}
            onMouseOut={() => setSelecionado(false)}
            className={`w-[30%] px-2 py-4 relative rounded-md text-xs font-bold transition-all ${selecionado ? styles.clicado
                : styles.naoClicado
                }`}
        >
            {titulo}
        </Button>
    )
}