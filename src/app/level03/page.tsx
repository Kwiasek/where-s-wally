"use client";

import { useEffect, useState } from "react";
import morty from ".././../../public/Level03/morty.png";
import neo from ".././../../public/Level03/neo.png";
import phineas from ".././../../public/Level03/phineas.png";
import worms from ".././../../public/Level03/worms.png";
import ash from ".././../../public/Level03/ash.png";


import Level03_up from "../../../public/Level03/egor-klyuchnyk-x-2-seasons-up.jpeg";
import Level03_bt from "../../../public/Level03/egor-klyuchnyk-x-2-seasons-bt.jpeg";
import Level from "@/components/Level";

export default function Page() {

  const charactersList = [
    {
      name: "Morty",
      img: morty,
      x: 2.31,
      y: 4.28,
      maxX: 2.37,
      minX: 2.14,
      minY: 4.26,
      maxY: 4.30,
    },
    {
      name: "Neo",
      img: neo,
      x: 2.44,
      y: 1.34,
      maxX: 2.58,
      minX: 2.29,
      minY: 1.32,
      maxY: 1.36,
    },
    {
      name: "Phineas",
      img: phineas,
      x: 1.02,
      y: 1.16,
      maxX: 1.04,
      minX: 1.00,
      minY: 1.15,
      maxY: 1.17,
    },
    {
      name: "Worms",
      img: worms,
      x: 5.92,
      y: 1.13,
      maxX: 6.178,
      minX: 5.749,
      minY: 1.136,
      maxY: 1.139,
    },
    {
      name: "Ashe Ketchum",
      img: ash,
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
