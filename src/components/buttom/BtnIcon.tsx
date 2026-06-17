import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface BtnIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icone: IconType;
    iconeSize?: number;
    iconeColor?: string;
    titulo?: string;
    tituloSize?: number;
    coluna?: boolean;
}

export const BtnIconComponent = (
    {
        icone: Icon,
        iconeSize,
        iconeColor,
        titulo,
        tituloSize,
        coluna,
        ...rest
    }: BtnIconProps
) => {
    return (
        <button
            {...rest}
            className="h-25 text-bold text-white flex items-center justify-center"
            style={{
                width: coluna ? "50%" : "100%",
                flexDirection: coluna ? "column" : "row",
                gap: coluna ? "8px" : "8px"
            }}
        >
            {Icon && <Icon size={iconeSize || 24} color={iconeColor ? iconeColor : "white"} />}
            {titulo && <span className="font-bold " style={{ width: coluna ? "70%" : "100%", textAlign: coluna ? "center" : "start",  fontSize: tituloSize ? `${tituloSize}px` : '14px' }}>{titulo}</span>}
        </button>
    )
}