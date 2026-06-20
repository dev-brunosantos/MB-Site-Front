"use client"

import { TelaComponent } from "@/src/components/Tela";

import { Button } from "@/src/components/ui/button"
import {
    Field,
    FieldGroup,
    FieldLabel,
} from "@/src/components/ui/field"

import { Input } from "@/src/components/ui/input"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/src/components/ui/input-group"

import { TituloInfor } from "@/src/components/TituloInfor";
import { InputPassword } from "@/src/components/input/InputPassword";
import { useLogin } from "@/src/hooks/useLogin";
import { useState } from "react";
import { EyeOffIcon } from "lucide-react";

export default function Login() {

    const { login } = useLogin();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const fazerLogin = () => {
        login(email, senha)
    }

    return (
        <TelaComponent>
            <div className="w-full h-full flex flex-col items-center justify-center pt-8 relative">

                <div className="absolute right-12 top-10 opacity-10 pointer-events-none select-none text-blue-400">
                    <span className="text-4xl block font-serif">♫</span>
                    <span className="text-2xl block ml-6 mt-2 font-serif">♪</span>
                </div>

                <form className="w-full max-w-sm border rounded-md p-4 shadow-md shadow-blue-500 bg-white">

                    <TituloInfor
                        titulo="Bem-vindo(a) de volta!"
                        subTitulo="Entre para continuar sua jornada musical."
                        centralizar
                        cabecalho={false}
                    />

                    <FieldGroup className="">
                        <Field>
                            <FieldLabel htmlFor="form-email">Email</FieldLabel>
                            <Input
                                id="form-email"
                                type="email"
                                placeholder="seu@email.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Field>

                        <Field className="max-w-sm">
                            <FieldLabel htmlFor="inline-end-input">Senha</FieldLabel>
                            <InputGroup>
                                <InputGroupInput
                                    id="inline-end-input"
                                    type="password"
                                    placeholder="Sua senha"
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <InputGroupAddon align="inline-end">
                                    <EyeOffIcon />
                                </InputGroupAddon>
                            </InputGroup>
                        </Field>

                        <Field orientation="horizontal">
                            <Button
                                type="button"
                                variant="default"
                                className="bg-blue-500 w-full p-5 font-bold"
                                onClick={fazerLogin}
                            >
                                Entrar
                            </Button>
                        </Field>
                    </FieldGroup>
                </form>
            </div>
        </TelaComponent>
    )
}