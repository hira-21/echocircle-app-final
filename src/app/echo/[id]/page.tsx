import EchoReplyCard from "../../../components/EchoReplyCard";
import EchoAvatar from "../../../components/EchoAvatar";
import Recorder from "../../../components/Recorder";

type Props = {
  params: { id: string };
};

export default function EchoThread({ params }: Props) {
  const echoId = params.id;

  // Simulated replies for demo
  const replies = [
    { user: "Echo Bubbe", title: "Morning reflections", mood: "reflective" },
    { user: "Ethan", title: "Follow-up thoughts", mood: "chill" }
  ];

  return (
    <main className="min-h-screen bg-white p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">EchoThread: {echoId}</h2>

      <section className="space-y-4">
        {replies.map((reply, idx) => (
          <EchoReplyCard key={idx} {...reply} />
        ))}
      </section>

      <section>
        <h3 className="text-lg font-medium text-gray-700 mb-2">Add Your Echo</h3>
        <Recorder />
      </section>

      <section>
        <h3 className="text-lg font-medium text-gray-700 mb-2">Mood Summary</h3>
        <EchoAvatar />
      </section>
    </main>
  );
}
