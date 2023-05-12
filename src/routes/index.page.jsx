import { useSSQ } from "rakkasjs";
import { useState } from "react";
export default function HomePage() {
  const [key, setKey] = useState("A");
  const toggleKey = () => setKey((prevKey) => (prevKey === "A" ? "B" : "A"));
  const { data } = useSSQ(
    (ctx) => {
      console.log("Got request", key);
      return key;
    },
    {
      key,
      staleTime: 100,
    }
  );
  return (
    <main>
      <button onClick={toggleKey}>Toggle key</button>
      {data}
    </main>
  );
}
