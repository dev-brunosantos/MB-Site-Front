import { LoginProvider } from "./LoginContext"

export const AppProvider = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <LoginProvider>
            {children}
        </LoginProvider>
    )
}