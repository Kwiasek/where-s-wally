"use client";

import { useEffect, useState } from "react";
import jake from ".././../../public/Level01/jake.webp";
import harry_potter from ".././../../public/Level01/harry_potter.png";
import billy_cipher from ".././../../public/Level01/billy_cipher.webp";
import Level01 from "../../../public/Level01/egor-klyuchnyk-small.jpeg";
import Level from "@/components/Level";

export default function Page() {

  const charactersList = [
    {
      name: "Jake",
      img: jake,
      x: 6.87,
      y: 1.92,
      maxX: 7.1,
      minX: 6.72,
      minY: 1.88,
      maxY: 1.96,
    },
    {
      name: "Harry Potter",
      img: harry_potter,
      x: 3.75,
      y: 1.15,
      maxX: 3.85,
      minX: 3.65,
      minY: 1.13,
      maxY: 1.16,
    },
    {
      name: "Billy Cipher",
      img: billy_cipher,
      x: 1.4,
      y: 1.5,
      maxX: 1.42,
      minX: 1.39,
      minY: 1.49,
      maxY: 1.53,
    },
  ]

  return (
    <Level charactersList={charactersList} levelImages={[Level01]} levelNumber={1}/>
  )
}
