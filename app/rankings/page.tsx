import Link from 'next/link'

export default function RankingsPage() {
  const companies = [
    {
      name: 'AirlineX',
      frustration: '9.3/10',
      support: '1/10',
      complaints: 504,
    },
    {
      name: 'OpenAI',
      frustration: '8.9/10',
      support: '2/10',
      complaints: 312,
    },
    {
      name: 'ShopFast',
      frustration: '7.4/10',
      support: '4/10',
      complaints: 188,
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="px-5 py-3 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition"
          >
            ← Back Home
          </Link>

          <Link
            href="/submit"
            className="px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-500 transition font-semibold"
          >
            Submit Report
          </Link>
        </div>

        <div className="inline-flex px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm mb-6">
          Community Rankings
        </div>

        <h1 className="text-5xl font-black tracking-tight">
          Worst AI Support Rankings
        </h1>

        <p className="text-zinc-400 text-lg mt-4 max-w-3xl">
          Companies ranked by automation frustration, chatbot failures,
          fake support agents, and lack of human accessibility.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-black">{company.name}</h2>
                  <p className="text-zinc-400 mt-2">
                    {company.complaints} complaints
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-300 font-bold">
                  #{index + 1}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-black border border-zinc-800 rounded-2xl p-4">
                  <div className="text-zinc-400 text-sm">
                    Frustration Score
                  </div>
                  <div className="text-2xl font-black mt-2">
                    {company.frustration}
                  </div>
                </div>

                <div className="bg-black border border-zinc-800 rounded-2xl p-4">
                  <div className="text-zinc-400 text-sm">
                    Human Support
                  </div>
                  <div className="text-2xl font-black mt-2">
                    {company.support}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
