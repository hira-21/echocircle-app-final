import EchoFeed from "../components/EchoFeed";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Echo Feed</h1>
      <EchoFeed />
    </main>
  );
}
