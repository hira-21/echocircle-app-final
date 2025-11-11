export const moodColors: Record<string, string> = {
  chill: "#FDE68A",
  reflective: "#FCA5A5",
  hype: "#5EEAD4",
  funny: "#BFDBFE",
  deep: "#C4B5FD",
  curious: "#A7F3D0"
};

export function getMoodColor(mood: string): string {
  return moodColors[mood.toLowerCase()] || "#E5E7EB"; // default: gray-200
}
