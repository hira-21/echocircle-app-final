import { useState } from "react";

const moods = ["chill", "reflective", "hype"];

export default function Recorder() {
  const [recording, setRecording] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const toggleRecording = () => setRecording(!recording);

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onMouseDown={toggleRecording}
        onMouseUp={toggleRecording}
        className="bg-purple-600 text-white rounded-full p-6 shadow-lg"
      >
        🎤 {recording ? "Recording..." : "Tap to Record"}
      </button>

      <div className="flex space-x-2">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => setSelectedMood(mood)}
            className={`px-4 py-2 rounded-full text-white ${
              selectedMood === mood ? "opacity-100" : "opacity-50"
            } bg-${mood}`}
          >
            {mood.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
