export interface CardReumoProps {
    titulo: string;
    resumo: number;
    horas?: boolean;
}

export const CardResumoConst: CardReumoProps[] = [
    {
        titulo: "CURSOS EM ANDAMENTO",
        resumo: 3,
        horas: false
    },
    {
        titulo: "AULAS CONCLUÍDAS",
        resumo: 23,
        horas: false
    },
    {
        titulo: "HORAS DE ESTUDO",
        resumo: 18,
        horas: true
    },
    {
        titulo: "CERTIFICADOS",
        resumo: 2,
        horas: false
    },
]