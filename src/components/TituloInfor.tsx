interface TituloInforProps {
    titulo: string;
    subTitulo: string;
    centralizar?: boolean;
}

export const TituloInfor = (
    { titulo, subTitulo, centralizar = false }: TituloInforProps
) => {
    return (
        <div
            className={`w-full flex flex-col gap-1 ${centralizar ? 'items-center' : 'items-start'}`}
        >
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {titulo}
            </h1>
            <span className="text-xs font-semibold text-slate-400">
                {subTitulo}
            </span>
        </div>
    )
}