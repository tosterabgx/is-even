"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState(false);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const inputData = e.target.value;
    const res =
      inputData.length != 0 &&
      !inputData.includes(".") &&
      !inputData.includes("e") &&
      !isNaN(+inputData) &&
      +inputData.slice(-1) % 2 == 0;

    setResult(res);
  }

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-13 bg-linear-to-bl from-purple-800 to-violet-800 text-white">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-5xl font-extrabold">Is It Even Number?</h1>
        {result ? (
          <span className="text-2xl font-semibold text-green-400">Yes</span>
        ) : (
          <span className="text-2xl font-semibold text-red-400">No</span>
        )}
      </div>

      <input
        className="rounded-3xl border border-white/40 bg-white/20 p-5 backdrop-blur-md focus:outline-0"
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        onChange={handleInput}
      />

      <span>
        API for developers:
        <pre>https://tosterabgx.me/api/:number</pre>
      </span>
    </main>
  );
}
