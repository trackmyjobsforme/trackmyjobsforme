import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [stats, setStats] = useState({
    trackedJobs: 0,
    applicationsSent: 0,
    interviewsScheduled: 0,
  })

  useEffect(() => {
    const fetchUser = async () => {
      // Original logic (temporarily disabled):
      // const { data, error } = await supabase.auth.getUser()
      // if (!data?.user) {
      //   router.push('/login')
      // } else {
      //   setUser(data.user)
      // }

      // Temporary dev bypass (REMOVE this before launch)
      setUser({ email: 'testuser@example.com' })
    }

    fetchUser()
  }, [])

  useEffect(() => {
    // Fake stats just for dev preview
    setStats({
      trackedJobs: 10,
      applicationsSent: 5,
      interviewsScheduled: 2,
    })
  }, [])

  if (!user) return <div>Loading dashboard without login...</div>

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>Tracked Jobs: {stats.trackedJobs}</p>
      <p>Applications Sent: {stats.applicationsSent}</p>
      <p>Interviews Scheduled: {stats.interviewsScheduled}</p>
    </div>
  )
}
