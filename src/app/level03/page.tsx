"use client";

import { useEffect, useState } from "react";
import jake from ".././../../public/Level01/jake.webp";
import harry_potter from ".././../../public/Level01/harry_potter.png";
import billy_cipher from ".././../../public/Level01/billy_cipher.webp";
import Level03_up from "../../../public/Level03/egor-klyuchnyk-x-2-seasons-up.jpeg";
import Level03_bt from "../../../public/Level03/egor-klyuchnyk-x-2-seasons-bt.jpeg";
import Level from "@/components/Level";

export default function Page() {

  const charactersList = [
    {
      name: "Morty",
      img: jake,
      x: 2.31,
      y: 4.28,
      maxX: 2.37,
      minX: 2.14,
      minY: 4.26,
      maxY: 4.30,
    },
    {
      name: "Neo",
      img: harry_potter,
      x: 2.44,
      y: 1.34,
      maxX: 2.58,
      minX: 2.29,
      minY: 1.32,
      maxY: 1.36,
    },
    {
      name: "Phineas",
      img: billy_cipher,
      x: 1.02,
      y: 1.16,
      maxX: 1.04,
      minX: 1.00,
      minY: 1.15,
      maxY: 1.17,
    },
    {
      name: "Worms",
      img: billy_cipher,
      x: 5.92,
      y: 1.13,
      maxX: 6.178,
      minX: 5.749,
      minY: 1.136,
      maxY: 1.139,
    },
    {
      name: "Ashe Ketchum",
      img: billy_cipher,
      x: 36.59,
      y: 1.08,
      maxX: 51.43,
      minX: 24.71,
      minY: 1.08,
      maxY: 1.1,
    },
  ]

  return (
    <Level charactersList={charactersList} levelImages={[Level03_up, Level03_bt]} levelNumber={3}/>
  )
}
