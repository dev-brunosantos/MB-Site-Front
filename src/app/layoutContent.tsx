"use client";

import { useLogin } from "@/src/hooks/useLogin";
import { MenuComponent } from "@/src/components/menu";

export function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { usuario } = useLogin();

  return (
    <>
      {!usuario.logado && <MenuComponent />}
      {children}
    </>
  );
}