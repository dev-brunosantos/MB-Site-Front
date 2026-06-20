"use client"

import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

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

    const login = (email: string, senha: string) => {
        setUsuario({
            email, senha, logado: true
        })

        localStorage.setItem("logado", "logado")

        router.push("/aluno")
    }

    const logout = () => {
        setUsuario({
            email: "",
            senha: "",
            logado: false
        })

        localStorage.removeItem("logado")

        router.replace("/")
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