"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setResult(+e.target.value % 2 == 0 ? "Even" : "Odd");
  }

  return (
    <>
      {result}
      <br />
      <input
        className="border border-black p-4"
        type="number"
        onChange={handleInput}
      />
    </>
  );
}
