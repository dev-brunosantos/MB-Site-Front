import Link from "next/link"

interface LinkComponentProps {
    link: string;
    titulo: string;
}

export const LinkComponent = ({ link, titulo }: LinkComponentProps) => {
    return(
        <Link href={link}>
            {titulo}
        </Link>
    )
}