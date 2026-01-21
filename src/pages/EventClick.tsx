import { useState } from "react";

export default function EventClick() {
  const [data, setData] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <h1>User Event</h1>
      <h2>{data}</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h3>{name}</h3>
      <button onClick={() => setData("hi")}>Click</button>
    </div>
  );
}
