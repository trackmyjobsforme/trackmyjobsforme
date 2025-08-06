import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'

export default function Dashboard2() {
  const [user, setUser] = useState(null)
  const [jobs, setJobs] = useState([])
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
        fetchJobs(user.id)
      }
    }
    getUser()
  }, [])

  const fetchJobs = async (userId: string) => {
    const { data, error } = await supabase.from('jobs').select('*').eq('user_id', userId)
    if (!error) setJobs(data || [])
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard 2</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Jobs</h2>
        {jobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="border-b py-2">
              <p className="font-medium">{job.title}</p>
              <p className="text-sm text-gray-600">{job.company}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
