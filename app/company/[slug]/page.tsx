type Props = {
  params: {
    slug: string
  }
}

export default function CompanyPage({ params }: Props) {
  const companyName = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const complaints = [
    {
      title: 'Support bot looped endlessly',
      issue: 'Chatbot Loop',
    },
    {
      title: 'Refund impossible to reach',
      issue: 'No Human Support',
    },
    {
      title: 'Fake live agent detected',
      issue: 'Fake Live Agent',
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-5xl mx-auto">
        <a
          href="/"
          className="inline-flex px-5 py-3 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition mb-8"
        >
          ← Back Home
        </a>

        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div>
            <div className="inline-flex px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm mb-5">
              Company Complaint Profile
            </div>

            <h1 className="text-6xl font-black tracking-tight">
              {companyName}
            </h1>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 min-w-[220px]">
            <div className="text-zinc-400 text-sm">Complaint Volume</div>
            <div className="text-5xl font-black mt-2">
              {complaints.length}
            </div>
          </div>
        </div>

        <div className="space-y-5 mt-12">
          {complaints.map((complaint, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="text-2xl font-bold">
                    {complaint.title}
                  </h2>

                  <p className="text-zinc-400 mt-2">
                    {complaint.issue}
                  </p>
                </div>

                <div className="px-4 py-2 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                  Complaint
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
