import { useState } from 'react'

type JobStage = 'Applied' | 'Screen' | 'Interview' | 'Offer'

type Job = {
  id: number
  company: string
  title: string
  location: string
  logo: string
  stages: {
    [key in JobStage]?: string
  }
  status: JobStage
  notes: string
  date: string
}

export default function Dashboard() {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      company: 'AccuWeather',
      title: 'Intern',
      location: 'State College, PA, USA',
      logo: '☀️',
      stages: { Applied: '8/13/22' },
      status: 'Applied',
      notes: '',
      date: '',
    },
    {
      id: 2,
      company: 'Meta',
      title: 'Rotational Product Manager',
      location: 'Seattle, WA, USA',
      logo: '🌀',
      stages: { Applied: '8/7/22', Screen: '08/07/22' },
      status: 'Screen',
      notes: 'Need to prepare for screening and follow up with recruiter!',
      date: '7 August 2022',
    },
  ])

  const [expandedId, setExpandedId] = useState<number | null>(2)

  const handleUpdate = (id: number, updates: Partial<Job>) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === id ? { ...job, ...updates } : job))
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Top Filters */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search for roles or companies"
          className="flex-1 px-4 py-2 border rounded-md"
        />
        <select className="px-3 py-2 border rounded-md">
          <option>Job Type</option>
        </select>
        <select className="px-3 py-2 border rounded-md">
          <option>Status</option>
        </select>
      </div>

      {/* Job Cards */}
      {jobs.map((job) => {
        const isOpen = job.id === expandedId
        return (
          <div
            key={job.id}
            className="bg-white rounded-md shadow p-4 border border-gray-200"
          >
            {/* Job Overview */}
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xl font-bold flex items-center gap-2">
                  <span className="text-2xl">{job.logo}</span> {job.title}
                </div>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>

              {/* Timeline */}
              <div className="flex items-center space-x-4">
                {(['Applied', 'Screen', 'Interview', 'Offer'] as JobStage[]).map(
                  (stage) => (
                    <div key={stage} className="text-center">
                      <div
                        className={`h-3 w-3 rounded-full mx-auto ${
                          job.stages[stage]
                            ? 'bg-blue-600'
                            : 'bg-gray-300 border border-gray-400'
                        }`}
                      ></div>
                      <p className="text-xs mt-1">{job.stages[stage]}</p>
                    </div>
                  )
                )}
              </div>

              {/* Expand Button */}
              <button
                onClick={() =>
                  setExpandedId((prev) => (prev === job.id ? null : job.id))
                }
              >
                {isOpen ? '▲' : '▼'}
              </button>
            </div>

            {/* Expanded Section */}
            {isOpen && (
              <div className="mt-4 border-t pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Status Selector */}
                <div>
                  <label className="block text-sm font-medium">Application Status</label>
                  <select
                    value={job.status}
                    onChange={(e) =>
                      handleUpdate(job.id, { status: e.target.value as JobStage })
                    }
                    className="w-full border px-3 py-2 rounded-md"
                  >
                    {['Applied', 'Screen', 'Interview', 'Offer'].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium">Date</label>
                  <input
                    type="text"
                    value={job.date}
                    onChange={(e) => handleUpdate(job.id, { date: e.target.value })}
                    className="w-full border px-3 py-2 rounded-md"
                  />
                </div>

                {/* Notes */}
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium">Additional Notes</label>
                  <textarea
                    value={job.notes}
                    onChange={(e) => handleUpdate(job.id, { notes: e.target.value })}
                    className="w-full border px-3 py-2 rounded-md"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-2 sm:col-span-3 mt-2">
                  <button className="px-4 py-2 border rounded-md">Archive</button>
                  <button className="px-4 py-2 border rounded-md">View Details</button>
                  <button
                    className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-md"
                    onClick={() => alert('Updated!')}
                  >
                    Update
                  </button>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
