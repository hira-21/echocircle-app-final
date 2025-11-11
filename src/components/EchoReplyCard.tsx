export default function EchoReplyCard({ user, title, mood }) {
  return (
    <div className={`p-4 rounded-lg shadow-md bg-${mood}`}>
      <h2 className="font-semibold">{user}</h2>
      <p>{title}</p>
      <button className="mt-2 text-sm text-blue-600">Reply</button>
    </div>
  );
}
