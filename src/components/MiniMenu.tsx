import { Characters } from "@/app/interfaces/characters";

interface Props {
  characters: Array<Characters>;
  coords: {
    xPosition: number;
    yPosition: number;
    x: number;
    y: number;
  };
  handleGoodChoice: Function;
}

export default function MiniMenu({
  characters,
  coords,
  handleGoodChoice,
}: Props) {
  const newX =
    coords.x >= document.body.scrollWidth - 100 ? coords.x - 100 : coords.x;
  const newY = coords.y >= window.innerHeight - 100 ? coords.y - 200 : coords.y;
  return (
    <div
      className={`flex flex-col max-w-max bg-neutral-900 absolute`}
      style={{
        left: newX + "px",
        top: newY + "px",
      }}
    >
      {characters
        ? characters.map((character) => {
            return (
              <div
                key={character.name}
                className="border-b p-3 border-gray-500 hover:border-white hover:cursor-pointer"
                onClick={() => {
                  if (
                    character.minX <= coords.xPosition &&
                    character.maxX >= coords.xPosition
                  ) {
                    if (
                      character.minY <= coords.yPosition &&
                      character.maxY >= coords.yPosition
                    ) {
                      handleGoodChoice(character.name);
                    }
                  }
                }}
              >
                <p>{character.name}</p>
              </div>
            );
          })
        : ""}
    </div>
  );
}
