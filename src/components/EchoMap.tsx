export default function EchoMap() {
  const cities = ["Seattle", "Azalice", "New York"];
  const moods = ["Chill", "Funny", "Deep"];

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-2">EchoMap</h2>
      <p className="mb-4 text-sm text-gray-600">
        Explore trending voice posts by location, mood, or topic.
      </p>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {cities.map((city) => (
          <button key={city} className="bg-indigo-200 p-2 rounded-lg">
            📍 {city}
          </button>
        ))}
      </div>

      <div className="flex space-x-2">
        {moods.map((mood) => (
          <button key={mood} className="bg-pink-200 px-3 py-1 rounded-full text-sm">
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
}
