import Link from 'next/link'

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="px-5 py-3 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition"
          >
            ← Back Home
          </Link>

          <Link
            href="/rankings"
            className="px-5 py-3 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition"
          >
            Rankings
          </Link>
        </div>

        <div className="inline-flex px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm mb-6">
          Submit AI Failure Report
        </div>

        <h1 className="text-5xl font-black tracking-tight">
          Report AI Support Failure
        </h1>

        <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
          Document chatbot loops, fake support agents, impossible refunds,
          deceptive automation, and AI abuse.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mt-10 space-y-6">
          <input
            placeholder="Company Name"
            className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-red-500"
          />

          <select className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-red-500">
            <option>Issue Type</option>
            <option>Chatbot Loop</option>
            <option>No Human Support</option>
            <option>Impossible Refund</option>
            <option>Fake Live Agent</option>
            <option>AI Scam Product</option>
          </select>

          <textarea
            rows={8}
            placeholder="Describe your experience..."
            className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-red-500"
          />

          <button className="w-full py-4 rounded-2xl bg-red-600 hover:bg-red-500 transition font-bold text-lg">
            Submit Report
          </button>
        </div>
      </div>
    </main>
  )
}
