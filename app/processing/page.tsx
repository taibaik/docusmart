import Link from "next/link";

export default function ProcessingPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center justify-center">

      <div className="bg-white p-10 rounded-2xl shadow text-center">

        <h1 className="text-3xl font-bold mb-4">
          Processing Document...
        </h1>

        <p className="text-gray-600 mb-6">
          AI summarization is currently being generated.
        </p>

        <div className="animate-pulse text-5xl mb-6">
          🤖
        </div>

        <Link
          href="/result"
          className="bg-black text-white px-5 py-3 rounded-xl shadow inline-block"
        >
          View Result
        </Link>

      </div>

    </main>
  );
}