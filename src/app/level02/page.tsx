"use client";

import { useEffect, useState } from "react";
import jake from ".././../../public/Level01/jake.webp";
import harry_potter from ".././../../public/Level01/harry_potter.png";
import billy_cipher from ".././../../public/Level01/billy_cipher.webp";
import Level02 from "../../../public/Level02/egor-klyuchnyk-web-hd.jpeg";
import Level from "@/components/Level";

export default function Page() {

  const charactersList = [
    {
      name: "Carl Johnson",
      img: jake,
      x: 3.3,
      y: 8.34,
      maxX: 3.51,
      minX: 3.16,
      minY: 7.21,
      maxY: 9.9,
    },
    {
      name: "Aang",
      img: harry_potter,
      x: 1.18,
      y: 3.10,
      maxX: 1.22,
      minX: 1.17,
      minY: 2.95,
      maxY: 3.21,
    },
    {
      name: "Deadpool",
      img: billy_cipher,
      x: 1.4,
      y: 1.5,
      maxX: 1.08,
      minX: 1.04,
      minY: 1.02,
      maxY: 1.08,
    },
  ]

  return (
    <Level charactersList={charactersList} levelImages={[Level02]} levelNumber={2}/>
  )
}
