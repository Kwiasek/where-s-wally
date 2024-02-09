import { Characters } from "@/app/level01/page";

export default function MiniMenu(
  characters: Array<Characters>,
  coords: Object
) {
  return (
    <div className="flex">
      {characters
        ? characters.map((character) => {
            return (
              <div key={character.name}>
                <p>{character.name}</p>
              </div>
            );
          })
        : ""}
    </div>
  );
}
