"use client";

import { useEffect, useState } from "react";
import Image, {StaticImageData} from "next/image";
import MiniMenu from "@/components/MiniMenu";
import { Characters } from "@/app/interfaces/characters";

interface Props {
  charactersList: Array<Characters>,
  levelImages: Array<StaticImageData>
  levelNumber: number
}
export default function Level({charactersList, levelImages, levelNumber}:Props) {
  const [timer, setTimer] = useState(0);
  const [game, setGame] = useState(false);
  const [charactersShowcase, setCharactersShowcase] = useState(true);
  const [openMiniMenu, setOpenMiniMenu] = useState(false);
  const [coords, setCoords] = useState<any>(null);
  const [characters, setCharacters] = useState<Array<Characters>>(charactersList);

  useEffect(() => {
    if (characters.length == 0) {
      setGame(false);
    }
    let intervalId: any;
    if (game) {
      intervalId = setInterval(() => setTimer(timer + 1), 10);
    } else {
      if (timer != 0) {
        const miliseconds = timer % 100;
        const seconds = Math.floor((timer % 6000) / 100);
        const minutes = Math.floor((timer % 360000) / 6000);
        const finalTime = `${minutes}:${seconds}:${miliseconds}`;
        alert("Good job! Your final time was: " + finalTime);
      }
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [characters, timer, game]);

  const handleGoodChoice = (pickedCharacter: String) => {
    let newCharacters: Array<Characters>;
    if (pickedCharacter) {
      newCharacters = characters.filter(
        (character) => character.name != pickedCharacter
      );
      setCharacters(newCharacters);
    }
    setOpenMiniMenu((prevValue) => !prevValue);
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
          setCharactersShowcase((prevState) => !prevState);
          setGame(true);
        }}
      >
        Okay
      </button>
    </div>
  ) : (
    <>
      <div className="relative">
        {levelImages.map((level, id) => {
          return (
            <Image
              src={level}
              key={id}
              alt="Level"
              className="w-screen h-auto"
              onClick={(e) => {
                const newCoords = {
                  xPosition: document.body.scrollWidth / e.pageX,
                  yPosition: document.body.scrollHeight / e.pageY,
                  x: e.pageX,
                  y: e.pageY,
                };
                setCoords(newCoords);
                setOpenMiniMenu((prevValue) => !prevValue);
              }}
        />
          )
        })}
        {openMiniMenu ? (
          <MiniMenu
            characters={characters}
            coords={coords}
            handleGoodChoice={handleGoodChoice}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
