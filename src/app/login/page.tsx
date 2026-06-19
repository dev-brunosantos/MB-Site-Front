import { TelaComponent } from "@/src/components/Tela";
import Link from "next/link";

export default function Login() {
    return (
        <TelaComponent>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl text-white">
                    Tela de Login
                </h1>

                <Link href='/aluno' className="w-[50%] my-8 border rounded-md p-2 font-bold text-center text-2xl text-[#040427] bg-white">
                    Login
                </Link>
            </div>
        </TelaComponent>
    )
}