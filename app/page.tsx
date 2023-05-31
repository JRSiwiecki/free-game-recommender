import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-5xl">Free Game Recommender</h1>

      <Link href="RandomGame">Get Random Game</Link>
    </main>
  );
}
