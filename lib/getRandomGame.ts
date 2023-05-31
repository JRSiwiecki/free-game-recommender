export default async function getRandomGame() {
  const res = await fetch(
    "https://www.freetogame.com/api/games?platform=pc"
  ).then((response) => response.json());

  const game = res[Math.floor(Math.random() * res.length)];

  return game;
}
