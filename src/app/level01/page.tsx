"use client";

import { ReactElement, useEffect, useState } from "react";
import jake from ".././../../public/Level01/jake.webp";
import harry_potter from ".././../../public/Level01/harry_potter.png";
import billy_cipher from ".././../../public/Level01/billy_cipher.webp";
import Image, { StaticImageData } from "next/image";
import Level01 from "../../../public/Level01/egor-klyuchnyk-small.jpeg";
import MiniMenu from "@/components/miniMenu";

export interface Characters {
  name: string;
  img: StaticImageData;
  x: number;
  y: number;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export default function Page() {
  const [charactersShowcase, setCharactersShowcase] = useState(true);
  const [timer, setTimer] = useState(0);
  const [openMiniMenu, setOpenMiniMenu] = useState(false);
  const [coords, setCoords] = useState<any>(null);
  const characters: Array<Characters> = [
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
  ];

  return charactersShowcase ? (
    <div className="flex flex-col items-center gap-5 mt-5">
      <h2 className="text-3xl font-bold">You have to find these characters:</h2>
      <div className="flex w-auto">
        {characters.map(({ name, img }) => {
          return (
            <div
              key={name}
              className="flex flex-col items-center gap-3 text-xl object-cover border border-gray-500 rounded-lg p-1 hover:border-inherit mx-2"
            >
              <Image src={img} alt={name} className=" max-h-64 w-auto" />
              {name}
            </div>
          );
        })}
      </div>
      <button
        className="border border-gray-500 hover:border-inherit rounded-lg px-7 py-3 bg-zinc-900"
        onClick={() => {
          setCharactersShowcase(false);
        }}
      >
        Okay
      </button>
    </div>
  ) : (
    <div className="relative">
      <Image
        src={Level01}
        alt="Level01"
        className="w-screen h-auto"
        onClick={(e) => {
          const newCoords = {
            xPosition: document.body.scrollWidth / e.pageX,
            yPosition: document.body.scrollHeight / e.pageY,
          };
          setCoords(newCoords);
        }}
      />
      {openMiniMenu ? <MiniMenu characters={characters}/>}
    </div>
  );
}
