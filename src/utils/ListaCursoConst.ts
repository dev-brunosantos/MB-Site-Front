export interface AulasProps {
    id: string;
    titulo: string;
    duracao: string;
    concluida: boolean;
}

export interface ModuloProps {
    id: string;
    titulo: string;
    totalAulas: number;
    concluido: boolean;
    aulas: AulasProps[];
}

export interface ListaCursosProps {
    id: string;
    titulo: string;
    tituloCompleto: string;
    professor: string;
    nivel: string;
    progresso: number;
    imagemId: string;
    modulos: ModuloProps[]
}

export const listaCursos: ListaCursosProps[] = [
        {
            id: "flauta-iniciante",
            titulo: "Flauta",
            tituloCompleto: "Flauta Iniciante",
            professor: "Prof. Seu Nome",
            nivel: "Iniciante",
            progresso: 100,
            imagemId: "flauta",
            modulos: [
                {
                    id: "mod-1",
                    titulo: "1. Introdução à Flauta",
                    totalAulas: 5,
                    concluido: true,
                    aulas: [
                        { id: "1.1", titulo: "Conhecendo o instrumento", duracao: "06:15", concluida: true },
                        { id: "1.2", titulo: "Primeira embocadura", duracao: "08:40", concluida: true },
                        { id: "1.3", titulo: "Como limpar a flauta", duracao: "04:20", concluida: true },
                        { id: "1.4", titulo: "Postura dos dedos", duracao: "07:10", concluida: true },
                        { id: "1.5", titulo: "Sopros iniciais", duracao: "05:30", concluida: true },
                    ]
                },
                {
                    id: "mod-2",
                    titulo: "2. Postura e Embocadura",
                    totalAulas: 5,
                    concluido: false,
                    aulas: [
                        { id: "2.1", titulo: "2.1 Postura correta", duracao: "05:12", concluida: true },
                        { id: "2.2", titulo: "2.2 Posicionamento da flauta", duracao: "07:45", concluida: true },
                        { id: "2.3", titulo: "2.3 Embocadura", duracao: "06:30", concluida: false },
                        { id: "2.4", titulo: "2.4 Exercícios de embocadura", duracao: "08:10", concluida: false },
                        { id: "2.5", titulo: "2.5 Dicas importantes", duracao: "04:30", concluida: false },
                    ]
                },
                {
                    id: "mod-3",
                    titulo: "3. Primeiras Notas",
                    totalAulas: 7,
                    concluido: false,
                    aulas: [
                        { id: "3.1", titulo: "A nota SI (B)", duracao: "06:00", concluida: false },
                        { id: "3.2", titulo: "A nota LÁ (A)", duracao: "05:45", concluida: false },
                        { id: "3.3", titulo: "A nota SOL (G)", duracao: "07:12", concluida: false },
                        { id: "3.4", titulo: "Exercício de conexão SI-LÁ-SOL", duracao: "09:30", concluida: false },
                    ]
                },
                {
                    id: "mod-4",
                    titulo: "4. Escalas Básicas",
                    totalAulas: 6,
                    concluido: false,
                    aulas: []
                },
                {
                    id: "mod-5",
                    titulo: "5. Músicas Práticas",
                    totalAulas: 8,
                    concluido: false,
                    aulas: []
                }
            ]
        },
        {
            id: "sax-intermediario",
            titulo: "Sax",
            tituloCompleto: "Sax Intermediário",
            professor: "Prof. Seu Nome",
            nivel: "Intermediário",
            progresso: 40,
            imagemId: "sax",
            modulos: [
                {
                    id: "sax-mod-1",
                    titulo: "1. Respiração e Suporte",
                    totalAulas: 4,
                    concluido: true,
                    aulas: []
                },
                {
                    id: "sax-mod-2",
                    titulo: "2. Digitação das Notas Médias",
                    totalAulas: 6,
                    concluido: false,
                    aulas: []
                }
            ]
        },
        {
            id: "violao-basico",
            titulo: "Violão",
            tituloCompleto: "Violão Básico",
            professor: "Prof. Seu Nome",
            nivel: "Básico",
            progresso: 20,
            imagemId: "violao",
            modulos: []
        },
        {
            id: "teclado-iniciante",
            titulo: "Teclado",
            tituloCompleto: "Teclado Iniciante",
            professor: "Prof. Seu Nome",
            nivel: "Iniciante",
            progresso: 10,
            imagemId: "teclado",
            modulos: []
        },
        {
            id: "baixo-basico",
            titulo: "Baixo",
            tituloCompleto: "Baixo Básico",
            professor: "Prof. Seu Nome",
            nivel: "Básico",
            progresso: 0,
            imagemId: "baixo",
            modulos: []
        }
    ]