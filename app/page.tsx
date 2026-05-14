import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      
      {/* Title Section */}
      <h1 className="text-4xl font-bold mb-3 text-black">
        DocuSmart
      </h1>

      <p className="text-gray-700 mb-8">
        Mobile Web Application for PDF Tools and AI Summarization
      </p>

      <Link
  href="/upload"
  className="bg-black text-white px-5 py-3 rounded-xl mb-8 shadow inline-block"
>
  Upload File
</Link>

      {/* Feature Cards */}
      <div className="grid gap-4">

        <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow">
          📄 Merge PDF
        </div>

        <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow">
          🔄 File Conversion
        </div>

        <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow">
          🤖 AI Summarization
        </div>

      </div>
    </main>
  );
}