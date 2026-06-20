"use client"

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

interface LoginAluno {
    email: string;
    senha: string;
    logado: boolean;
}

interface LoginProps {
    usuario: LoginAluno;
    login: (email: string, senha: string) => void;
    logout: () => void;
}

const LoginContext = createContext<LoginProps | undefined>(undefined);

const LoginProvider = (
    { children }: { children: React.ReactNode }
) => {

    const router = useRouter();

    const [usuario, setUsuario] = useState<LoginAluno>({
        email: "", senha: "", logado: false
    })

    useEffect(() => {
        const usuarioSalvo = localStorage.getItem("usuario");

        if (usuarioSalvo) {
            setUsuario(JSON.parse(usuarioSalvo));
        }

        // setLoading(false);
    }, []);

    const login = (email: string, senha: string) => {
        const novoUsuario = {
            email,
            senha,
            logado: true
        };

        setUsuario(novoUsuario);

        localStorage.setItem(
            "usuario",
            JSON.stringify(novoUsuario)
        );

        localStorage.setItem("logado", "true");

        router.push("/aluno");
    };

    const logout = () => {
        setUsuario({
            email: "",
            senha: "",
            logado: false
        });

        localStorage.removeItem("usuario");
        localStorage.removeItem("logado");

        router.replace("/");
    }

    return (
        <LoginContext.Provider
            value={{
                usuario,
                login,
                logout
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginProvider }