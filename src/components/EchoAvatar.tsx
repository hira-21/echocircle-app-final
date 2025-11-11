import { useState } from "react";

export default function EchoAvatar() {
  const [mood, setMood] = useState("Reflective");

  const regenerateMood = () => {
    const moods = ["Reflective", "Chill", "Hype", "Curious"];
    const next = moods[Math.floor(Math.random() * moods.length)];
    setMood(next);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow">
      <div className="w-24 h-24 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center text-3xl">
        😊
      </div>
      <p className="mt-2 text-sm text-gray-600">Overall mood: <strong>{mood}</strong></p>
      <button
        onClick={regenerateMood}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-full text-sm"
      >
        Regenerate
      </button>
    </div>
  );
}
