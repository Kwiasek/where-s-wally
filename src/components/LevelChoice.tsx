import Image from "next/image";
import Link from "next/link";
import level01Img from "../../public/Level01/egor-klyuchnyk-small.jpeg";
import level02Img from "../../public/Level02/egor-klyuchnyk-web-hd.jpeg";
import level03Img from "../../public/Level03/egor-klyuchnyk-x-2-seasons-bt.jpeg";
import { v4 } from "uuid";

export default function LevelChoice() {
  const levels = [level01Img, level02Img, level03Img];
  return (
    <div className="flex flex-col items-center gap-3 px-3 py-3">
      <h1 className="text-xl md:text-3xl">Choose level:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-auto ">
        {levels.map((level, index) => {
          return (
            <Link
              key={v4()}
              href={`level0${index + 1}`}
              className="h-3/6 flex flex-col items-center gap-1 md:text-gray-500 hover:text-inherit cursor-pointer"
            >
              <Image
                src={level}
                alt=""
                className="max-h-72 object-cover border border-gray-500 rounded-lg p-1 hover:border-inherit"
              />
              <p className="text-lg md:text-xl">{`Level 0${index + 1}`}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
