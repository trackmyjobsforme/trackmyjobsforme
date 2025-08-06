import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [stats, setStats] = useState({
    trackedJobs: 0,
    applicationsSent: 0,
    savedJobs: 0,
    coverLetters: 0,
  })
  const [jobs, setJobs] = useState([])
  const [filter, setFilter] = useState('')
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
      } else {
        setUser(user)
        fetchDashboardData(user.id)
      }
    }
    getUser()
  }, [])

  const fetchDashboardData = async (userId: string) => {
    const { data: jobs } = await supabase.from('jobs').select('*').eq('user_id', userId)
    const { data: applications } = await supabase.from('applications').select('*').eq('user_id', userId)
    const { data: saved } = await supabase.from('saved_jobs').select('*').eq('user_id', userId)
    const { data: letters } = await supabase.from('cover_letters').select('*').eq('user_id', userId)

    setStats({
      trackedJobs: jobs?.length || 0,
      applicationsSent: applications?.length || 0,
      savedJobs: saved?.length || 0,
      coverLetters: letters?.length || 0,
    })

    setJobs(jobs || [])
  }

  const handleDelete = async (jobId: string) => {
    await supabase.from('jobs').delete().eq('id', jobId)
    fetchDashboardData(user.id)
  }

  const handleReminder = async (jobId: string, reminderDate: string) => {
    await supabase.from('jobs').update({ reminder: reminderDate }).eq('id', jobId)
    fetchDashboardData(user.id)
  }

  const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-lg font-semibold">Tracked Jobs</h2>
          <p className="text-2xl text-blue-600 mt-2">{stats.trackedJobs}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-lg font-semibold">Applications Sent</h2>
          <p className="text-2xl text-green-600 mt-2">{stats.applicationsSent}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-lg font-semibold">Saved Jobs</h2>
          <p className="text-2xl text-yellow-600 mt-2">{stats.savedJobs}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-lg font-semibold">Cover Letters</h2>
          <p className="text-2xl text-purple-600 mt-2">{stats.coverLetters}</p>
        </div>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Filter by job title..."
          className="p-2 border border-gray-300 rounded w-full"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Tracked Jobs</h2>
        {filteredJobs.map((job) => (
          <div key={job.id} className="border-b border-gray-200 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-medium">{job.title}</p>
              <p className="text-sm text-gray-500">{job.company}</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2 md:mt-0">
              <input
                type="datetime-local"
                className="border p-1 rounded"
                onChange={(e) => handleReminder(job.id, e.target.value)}
              />
              <button
                onClick={() => handleDelete(job.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => router.push(`/edit-job/${job.id}`)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
