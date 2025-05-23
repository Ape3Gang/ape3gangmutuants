export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white text-center">
      <img src="/logo.png" alt="Logo" className="w-64 mb-4" />
      <img src="/ape3gang.png" alt="NFT" className="w-40 rounded-lg mb-6" />
      <h1 className="text-4xl font-bold mb-4">Welcome to Ape3Gang Arcade</h1>
      <nav className="flex gap-4 text-lg">
        <a href="/play">🎯 Play</a>
        <a href="/gallery">🖼 Gallery</a>
        <a href="/community">🧑‍🤝‍🧑 Community</a>
      </nav>
    </main>
  );
}
