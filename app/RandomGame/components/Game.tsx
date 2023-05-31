type Props = {
  game: Game;
};

export default function Game({ game }: Props): JSX.Element {
  return (
    <>
      <div className="flex flex-col items-center max-w-sm">
        <h2 className="text-3xl mb-4">{game.title}</h2>
        <p className="italic text-s mb-4">{game.genre}</p>
        <img src={game.thumbnail} alt={game.title} className="mb-4" />
        <p className="italic text-s text-align-center mb-4">
          "{game.short_description}"
        </p>
        <p className="mb-4">{game.developer}</p>
        <p className="mb-4">{game.release_date}</p>
        <a href={game.game_url} className="mb-4 bg-green-950">
          Play Now
        </a>
      </div>
    </>
  );
}
