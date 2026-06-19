import Link from "next/link"

interface LinkComponentProps {
    link: string;
    titulo: string;
}

export const LinkComponent = ({ link, titulo }: LinkComponentProps) => {
    return(
        <Link 
            href={link}
            className="my-2 text-[20px] font-bold"    
        >
            {titulo}
        </Link>
    )
}