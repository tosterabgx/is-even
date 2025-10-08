"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("Not a number");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const inputData = e.target.value;
    const lastDigit = inputData.slice(-1);

    let res = "";

    if (isNaN(+inputData) || inputData.length == 0) {
      res = "Not a number";
    } else {
      res = +lastDigit % 2 == 0 ? "Even" : "Odd";
    }

    setResult(res);
  }

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-5 bg-linear-to-bl from-violet-500 to-fuchsia-500 text-gray-900">
      <h1 className="text-4xl font-bold">Is Number Even?</h1>

      <span>{result}</span>

      <input
        className="rounded-3xl border border-white/40 bg-white/20 p-5 backdrop-blur-md focus:outline-0"
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        onChange={handleInput}
      />

      <p>api: https://tosterabgx.me/is-even/api/:number</p>
    </main>
  );
}
