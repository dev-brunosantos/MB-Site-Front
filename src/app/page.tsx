import { HomeComponent } from "./(pages)/home";
import { SobreComponent } from "./(pages)/sobre";
import { DepoimentosComponent } from "./(pages)/depoimentos";
import { PlanosComponent } from "./(pages)/planos";
import { DuvidasComponent } from "./(pages)/duvidas";
import { Separador } from "../components/Separador";

export default function App() {

  return (
    <div className="min-h-screen bg-[#020215] text-slate-100 font-sans selection:bg-blue-600 overflow-x-hidden">
      {/* ----------------- GRADIENTES DE FUNDO ESTILO BRILHO NEON ----------------- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] h-[600px] bg-gradient-to-b from-[#0a1740] via-transparent to-transparent opacity-60 pointer-events-none blur-3xl z-0" />
      <div className="absolute top-[800px] right-0 w-[300px] h-[500px] bg-[#0c1435] opacity-40 pointer-events-none blur-3xl z-0" />

      <main className="w-full max-w-md mx-auto pt-16 pb-16 px-6 relative z-10 flex flex-col gap-16">

        {/* ----------------- 1. HOME ----------------- */}
        <HomeComponent />
        <Separador />
        {/* ----------------- 2. SEÇÃO SOBRE MIM ----------------- */}
        <SobreComponent />
        <Separador />
        {/* ----------------- 3. SEÇÃO DE DEPOIMENTOS ----------------- */}
        <DepoimentosComponent />
        <Separador />
        {/* ----------------- 4. SEÇÃO DE PLANOS ----------------- */}
        <PlanosComponent />
        <Separador />
        {/* ----------------- 5. SEÇÃO DE PERGUNTAS FREQUENTES (FAQ) (NOVA) ----------------- */}
        <DuvidasComponent />

      </main>
    </div>
  );
}