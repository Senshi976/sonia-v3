import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const askGPT = async () => {
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: message })
    });
    const data = await res.json();
    setResponse(data.result);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Sonia V2</h1>
      <input
        type="text"
        placeholder="Pose une question..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={askGPT}>Demander</button>
      <p>Réponse : {response}</p>
    </div>
  );
}
