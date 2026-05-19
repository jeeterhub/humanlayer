export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm mb-6">
              AI Failure Intelligence Platform
            </div>

            <h1 className="text-6xl font-black leading-tight tracking-tight">
              Track Which Companies Still Treat Humans Like Humans.
            </h1>

            <p className="text-zinc-400 text-lg mt-6 max-w-xl leading-relaxed">
              HumanLayer monitors chatbot loops, fake support agents,
              impossible refund systems, AI-generated spam, and automation
              abuse.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="px-6 py-4 rounded-2xl bg-red-600 hover:bg-red-500 transition font-semibold">
                Submit Report
              </button>

              <button className="px-6 py-4 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition">
                Browse Rankings
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5">
                <div className="text-3xl font-black">12k+</div>
                <div className="text-zinc-400 text-sm mt-1">
                  Reports Filed
                </div>
              </div>

              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5">
                <div className="text-3xl font-black">840</div>
                <div className="text-zinc-400 text-sm mt-1">
                  Companies Tracked
                </div>
              </div>

              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5">
                <div className="text-3xl font-black">71%</div>
                <div className="text-zinc-400 text-sm mt-1">
                  No Human Support
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">
              Latest AI Failure Reports
            </h2>

            <div className="space-y-4">
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg">
                      Support bot looped for 2 hours
                    </h3>
                    <p className="text-zinc-400 mt-1">AirlineX</p>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-sm">
                    High
                  </span>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg">
                      Refund request auto-closed instantly
                    </h3>
                    <p className="text-zinc-400 mt-1">OpenAI</p>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-sm">
                    Medium
                  </span>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg">
                      Fake live agent suspected
                    </h3>
                    <p className="text-zinc-400 mt-1">ShopFast</p>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-sm">
                    High
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
