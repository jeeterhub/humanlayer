import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default async function Home() {
  const { data: complaints } = await supabase
    .from('complaints')
    .select(`
      *,
      companies (
        name,
        slug
      )
    `)
    .order('created_at', { ascending: false })
    .limit(5)

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm mb-6">
              AI Failure Intelligence Platform
            </div>

            <h1 className="text-6xl font-black leading-tight tracking-tight">
              Track Which Companies Still Treat Humans Like Humans.
            </h1>

            <p className="text-zinc-400 text-lg mt-6 max-w-xl leading-relaxed">
              HumanLayer monitors chatbot loops, fake support agents,
              impossible refund systems, AI-generated spam, and automation abuse.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">
              <Link
                href="/submit"
                className="px-6 py-4 rounded-2xl bg-red-600 hover:bg-red-500 transition font-semibold"
              >
                Submit Report
              </Link>

              <Link
                href="/rankings"
                className="px-6 py-4 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition"
              >
                Browse Rankings
              </Link>

              <Link
                href="/reports"
                className="px-6 py-4 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition"
              >
                View Latest Reports
              </Link>
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                Latest AI Failure Reports
              </h2>

              <Link
                href="/reports"
                className="text-red-400 hover:text-red-300 transition"
              >
                View All →
              </Link>
            </div>

            <div className="space-y-4">
              {complaints?.map((complaint: any) => (
                <Link
                  key={complaint.id}
                  href={`/company/${complaint.companies.slug}`}
                  className="block bg-zinc-900 rounded-2xl border border-zinc-800 p-5 hover:border-red-500/30 transition"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">
                        {complaint.title}
                      </h3>

                      <p className="text-zinc-400 mt-1">
                        {complaint.companies.name}
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-sm">
                      {complaint.issue_type}
                    </span>
                  </div>
                </Link>
              ))}

              {!complaints?.length && (
                <div className="text-zinc-500">
                  No reports submitted yet.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
