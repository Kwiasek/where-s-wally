"use client";

import { useEffect, useState } from "react";
import cj from ".././../../public/Level02/cj.png";
import aang from ".././../../public/Level02/aang.png";
import deadpool from ".././../../public/Level02/deadpool.png";
import Level02 from "../../../public/Level02/egor-klyuchnyk-web-hd.jpeg";
import Level from "@/components/Level";

export default function Page() {

  const charactersList = [
    {
      name: "Carl Johnson",
      img: cj,
      x: 3.3,
      y: 8.34,
      maxX: 3.51,
      minX: 3.16,
      minY: 7.21,
      maxY: 9.9,
    },
    {
      name: "Aang",
      img: aang,
      x: 1.18,
      y: 3.10,
      maxX: 1.22,
      minX: 1.17,
      minY: 2.95,
      maxY: 3.21,
    },
    {
      name: "Deadpool",
      img: deadpool,
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
