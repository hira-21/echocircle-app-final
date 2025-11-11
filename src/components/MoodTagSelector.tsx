type MoodTagSelectorProps = {
  selected: string;
  onSelect: (mood: string) => void;
};

const moods = [
  { label: "Chill", color: "bg-yellow-300" },
  { label: "Reflective", color: "bg-orange-300" },
  { label: "Hype", color: "bg-teal-300" }
];

export default function MoodTagSelector({ selected, onSelect }: MoodTagSelectorProps) {
  return (
    <div className="flex space-x-2">
      {moods.map(({ label, color }) => (
        <button
          key={label}
          onClick={() => onSelect(label.toLowerCase())}
          className={`px-4 py-2 rounded-full text-white ${color} ${
            selected === label.toLowerCase() ? "opacity-100" : "opacity-50"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
