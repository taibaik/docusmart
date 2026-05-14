import Link from "next/link";

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">

      <h1 className="text-3xl font-bold mb-6 text-black">
        Upload File
      </h1>

      <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center shadow">

        <p className="text-lg mb-4">
          Drag & Drop File Here
        </p>

        <input
          type="file"
          className="mb-4"
        />

        <p className="text-sm text-gray-500 mb-6">
          Selected File: sample_document.pdf
        </p>

        <Link
          href="/processing"
          className="bg-black text-white px-5 py-3 rounded-xl shadow inline-block"
        >
          Upload File
        </Link>

      </div>

    </main>
  );
}