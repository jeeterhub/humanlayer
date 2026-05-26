'use client'

import Link from 'next/link'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function SubmitPage() {
  const [company, setCompany] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [issueType, setIssueType] = useState('Chatbot Loop')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit() {
    if (!company || !title || !description) return

    setLoading(true)

    try {
      const slug = company.toLowerCase().replace(/\s+/g, '-')

      let companyId = null

      const { data: existingCompany } = await supabase
        .from('companies')
        .select('*')
        .eq('slug', slug)
        .maybeSingle()

      if (existingCompany) {
        companyId = existingCompany.id
      } else {
        const { data: newCompany, error: companyError } = await supabase
          .from('companies')
          .insert({
            name: company,
            slug,
          })
          .select()
          .single()

        if (companyError) {
          console.error(companyError)
          setLoading(false)
          return
        }

        companyId = newCompany.id
      }

      const { error: complaintError } = await supabase
        .from('complaints')
        .insert({
          company_id: companyId,
          title,
          description,
          issue_type: issueType,
        })

      if (complaintError) {
        console.error(complaintError)
      } else {
        setSuccess(true)
        setCompany('')
        setTitle('')
        setDescription('')
      }
    } catch (err) {
      console.error(err)
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
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
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company Name"
            className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-red-500"
          />

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Issue Title"
            className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-red-500"
          />

          <select
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)}
            className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-red-500"
          >
            <option>Chatbot Loop</option>
            <option>No Human Support</option>
            <option>Impossible Refund</option>
            <option>Fake Live Agent</option>
            <option>AI Scam Product</option>
          </select>

          <textarea
            rows={8}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your experience..."
            className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-red-500"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-red-600 hover:bg-red-500 transition font-bold text-lg disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit Report'}
          </button>

          {success && (
            <div className="bg-green-500/10 border border-green-500/20 text-green-300 rounded-2xl p-4">
              Report submitted successfully.
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
