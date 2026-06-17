import Image from "next/image";
import { CardPlanos } from "../components/cards/CardPlano";
import { BtnComponent } from "../components/buttom";
import { MenuComponent } from "../components/menu";

import {
  FaCamera,
  FaHeart,
  FaRegClock
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

import homePiano from "../../public/bruno-piano.png";
import { BtnIconComponent } from "../components/buttom/BtnIcon";
import Home from "./(pages)/home/page";
import Sobre from "./(pages)/sobre/page";

export default function App() {

  const opcoesIcones = [
    {
      id: 1,
      icone: FaCamera,
      titulo: "Aulas em video"
    },
    {
      id: 2,
      icone: FaHeart,
      titulo: "Acesso limitado"
    },
    {
      id: 3,
      icone: FaRegClock,
      titulo: "Aprenda no seu tempo"
    },
    {
      id: 4,
      icone: BiSupport,
      titulo: "Suporte exclusivo"
    },
  ]

  return (
    <main className="w-full h-auto min-h-screen">

      <Home />
      <Sobre />

    </main>
  );
}
