import getRandomGame from "@/lib/getRandomGame";
import Game from "./components/Game";

export const metadata = {
  title: "Random Free Game",
  description: "A random free game recommended to the user.",
};

export default async function RandomGame() {
  const gameData: Promise<Game> = await getRandomGame();

  const game = await gameData;

  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-bold mb-10">Random Game</h1>
      <Game game={game}></Game>
    </main>
  );
}
