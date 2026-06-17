export const TelaComponent = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <section className="w-full h-screen p-5 px-8 bg-[#040427]">
            {children}
        </section>
    )
}