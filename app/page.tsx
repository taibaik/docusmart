export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-3">
        DocuSmart
      </h1>

      <p className="text-gray-700 mb-8">
        Mobile Web Application for PDF Tools and AI Summarization
      </p>

      <button className="bg-black text-white px-5 py-3 rounded-xl mb-8">
        Upload File
      </button>

      <div className="grid gap-4">
        <div className="bg-white p-5 rounded-2xl shadow">
          📄 Merge PDF
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          🔄 File Conversion
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          🤖 AI Summarization
        </div>
      </div>
    </main>
  );
}