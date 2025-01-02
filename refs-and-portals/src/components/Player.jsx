import { useRef, useState } from "react";

export default function Player() {
  const enteredPlayerName = useRef();
  const [playerName, setPlayerName] = useState("");

  const handleSubmit = () => {
    setPlayerName(enteredPlayerName.current.value);
    enteredPlayerName.current.value = ""; // it is an imperative code :/
  };
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={enteredPlayerName} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
