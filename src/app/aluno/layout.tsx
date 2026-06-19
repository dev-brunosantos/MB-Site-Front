import { FooterAlunoComponent } from "./footerAluno";

export default function LayoutAreaAluno({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <FooterAlunoComponent />
        </>
    )
}

