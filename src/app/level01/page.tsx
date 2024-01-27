"use client";

import { ReactElement, useEffect, useState } from "react";
import jake from ".././../../public/Level01/jake.webp";
import harry_potter from ".././../../public/Level01/harry_potter.png";
import billy_cipher from ".././../../public/Level01/billy_cipher.webp";
import Image, { StaticImageData } from "next/image";
import Level01 from "../../../public/Level01/egor-klyuchnyk-small.jpeg";

interface Characters {
  name: string;
  img: StaticImageData;
  x: number;
  y: number;
}

export default function Page() {
  const [charactersShowcase, setCharactersShowcase] = useState(true);
  const [timer, setTimer] = useState(0);
  const [circle, setCircle] = useState(null);
  const characters: Array<Characters> = [
    {
      name: "Jake",
      img: jake,
      x: 6.95,
      y: 2.9,
    },
    {
      name: "Harry Potter",
      img: harry_potter,
      x: 3.8,
      y: 1.6,
    },
    {
      name: "Billy Cipher",
      img: billy_cipher,
      x: 1.4,
      y: 2.3,
    },
  ];
  const getClickCoords = (event: MouseEvent) => {
    if (event != null) {
      let e = event.target;
      let dim = e.getBoundingClientRect();
      let x = event.clientX - dim.left;
      let y = event.clientY - dim.top;
      return [x, y];
    }
  };

  const addCircle = (event: MouseEvent) => {
    let [x, y] = getClickCoords(event);
    const screenWidth = window.innerWidth;
    const screenHeight = screen.height;
    const radius = (0.032552 * screenWidth) / 2;

    const adjustY = -1.25 * radius + 0.1 * screenHeight;

    let newCircle: ReactElement = (
      <div
        className={`absolute rounded-full  z-10 border-dashed border-4 border-red-600`}
        style={{
          width: 2 * radius,
          height: 2 * radius,
          top: y + adjustY,
          left: x - radius,
        }}
      ></div>
    );
    setCircle(newCircle);
    return {
      center: [
        (x + radius) / (screenWidth / 1920),
        (y - radius) / (screenWidth / 1920),
      ],
      radius: 70,
    };
  };

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
    <div>
      <Image
        src={Level01}
        alt="Level01"
        className="w-screen h-auto"
        onClick={(e) => {
          addCircle(e);
        }}
      />
    </div>
  );
}
