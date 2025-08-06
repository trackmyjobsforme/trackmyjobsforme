import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'

type UserInfo = {
  email: string
}

export default function Dashboard() {
  const [user, setUser] = useState<UserInfo | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState([])

  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser()

        if (error || !data?.user?.email) {
          // Use dev fallback
          console.warn('Not logged in, using test user.')
          setUser({ email: 'testuser@example.com' })
        } else {
          setUser({ email: data.user.email })
        }
      } catch (err) {
        console.error('Error fetching user:', err)
        setUser({ email: 'testuser@example.com' })
      }
    }

    fetchUser()
  }, [])

  const handleSearch = () => {
    // Replace with real search logic
    setResults([
      { id: 1, title: 'Frontend Developer - Google', location: 'Remote' },
      { id: 2, title: 'React Engineer - Amazon', location: 'Boston, MA' },
    ])
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-white shadow p-4 rounded-md mb-4">
        <input
          type="text"
          placeholder="Search for jobs..."
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="text-sm text-gray-600 text-right">
          <p className="font-semibold">{user?.email}</p>
          <p className="text-xs">TrackMyJobsForMe</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column - Search Results */}
        <div className="md:col-span-2 bg-white rounded-md shadow p-4">
          <div className="flex justify-between items-center mb-4">
