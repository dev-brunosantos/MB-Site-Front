import { ButtonHTMLAttributes } from "react"

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    titulo: string;
}

export const BtnComponent = (
    { titulo}: BtnProps
) => {
    return (
        <button
            className="w-full h-12 rounded-md flex items-center justify-center text-white font-bold text-2xl bg-blue-700 hover:bg-blue-800 transition-all duration-300 cursor-pointer"
        >
            {titulo}
        </button>
    )
}