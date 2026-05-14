import Link from "next/link";

export default function ResultPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">

      <h1 className="text-3xl font-bold mb-6 text-black">
        AI Summary Result
      </h1>

      <div className="bg-white p-5 rounded-2xl shadow mb-6">

        <h2 className="font-semibold mb-3">
          Summary
        </h2>

        <p className="text-gray-700">
          This document discusses the importance of efficient
          document management and AI-powered summarization
          for improving productivity and accessibility.
        </p>

      </div>

      <Link
        href="/"
        className="bg-black text-white px-5 py-3 rounded-xl shadow inline-block"
      >
        Back to Home
      </Link>

    </main>
  );
}