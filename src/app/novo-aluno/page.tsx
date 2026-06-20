"use client";

import { TelaComponent } from "@/src/components/Tela";
import Link from "next/link";

import { Button } from "@/src/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/src/components/ui/field"

import { Input } from "@/src/components/ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select"
import { useRouter } from "next/navigation";

export default function NovoAluno() {

    const router = useRouter();

    const cadastrarNovoUsuario = () => {
        router.replace("/")
    }

    return (
        <TelaComponent>
            <div className="w-full h-full flex flex-col items-center justify-center pt-8 relative">

                <div className="absolute right-12 top-10 opacity-10 pointer-events-none select-none text-blue-400">
                    <span className="text-4xl block font-serif">♫</span>
                    <span className="text-2xl block ml-6 mt-2 font-serif">♪</span>
                </div>

                <form className="w-full max-w-sm border rounded-md p-4 shadow-md shadow-blue-500 bg-white">
                    <FieldGroup className="text-white">
                        <Field>
                            <FieldLabel htmlFor="form-name">Name</FieldLabel>
                            <Input
                                id="form-name"
                                type="text"
                                placeholder="Evil Rabbit"
                                required
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="form-email">Email</FieldLabel>
                            <Input id="form-email" type="email" placeholder="john@example.com" />
                            <FieldDescription>
                                We&apos;ll never share your email with anyone.
                            </FieldDescription>
                        </Field>
                        <div className="grid grid-cols-2 gap-4">
                            <Field>
                                <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
                                <Input id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="form-country">Country</FieldLabel>
                                <Select defaultValue="us">
                                    <SelectTrigger id="form-country">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="us">United States</SelectItem>
                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                        <SelectItem value="ca">Canada</SelectItem>
                                    </SelectContent>
                                </Select>
                            </Field>
                        </div>
                        <Field>
                            <FieldLabel htmlFor="form-address">Address</FieldLabel>
                            <Input id="form-address" type="text" placeholder="123 Main St" />
                        </Field>
                        <Field orientation="horizontal" className="w-full flex items-center justify-between">
                            <Button
                                className="w-[48%] py-5 font-bold"
                                variant="destructive"
                                onClick={() => router.back()}
                            >
                                Cancelar
                            </Button>

                            <Button
                                className="w-[48%] py-5 font-bold bg-blue-500"
                                onClick={cadastrarNovoUsuario}
                            >
                                Cadastrar
                            </Button>
                        </Field>
                    </FieldGroup>
                </form>
            </div>
        </TelaComponent>
    )
}