import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const [user, setUser] = useState({ email: 'loading@example.com' }) // temp default
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState([])

  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser()

        if (error || !data?.user) {
          // Temporarily disabled redirect for testing
          // router.push('/login')
          console.warn('Not logged in, using test user.')
          setUser({ email: 'testuser@example.com' })
        } else {
          setUser(data.user)
        }
      } catch (err) {
        console.error('Error fetching user:', err)
        setUser({ email: 'testuser@example.com' })
      }
    }

    fetchUser()
  }, [])

  const handleSearch = () => {
    // Replace this with real search API
    setResults([
      {
        id: 1,
        title: 'Frontend Developer - Google',
        location: 'Remote',
      },
      {
        id: 2,
        title: 'React Engineer - Amazon',
        location: 'Boston, MA',
      },
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
          <p className="font-semibold">{user.email}</p>
          <p className="text-xs">TrackMyJobsForMe</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column - Search Results */}
        <div className="md:col-span-2 bg-white rounded-md shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Search Results</h2>
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Search
            </button>
          </div>
          <ul>
            {results.length === 0 && (
              <p className="text-gray-500 italic">No search results yet.</p>
            )}
            {results.map((job) => (
              <li
                key={job.id}
                className="border-b border-gray-200 py-2 text-gray-800"
              >
                <p className="font-medium">{job.title}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Tools */}
        <div className="flex flex-col gap-4">
          {/* Cover Letter Tool */}
          <div className="bg-white rounded-md shadow p-4 flex-1">
            <h3 className="text-lg font-semibold mb-2">Cover Letter Tool</h3>
            <textarea
              className="w-full h-40 p-2 border border-gray-300 rounded-md"
              placeholder="Generate your cover letter here..."
            />
            <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md">
              Generate Cover Letter
            </button>
          </div>

          {/* Resume Tool */}
          <div className="bg-white rounded-md shadow p-4 flex-1">
            <h3 className="text-lg font-semibold mb-2">Resume Tool</h3>
            <input type="file" className="w-full mb-2" />
            <textarea
              className="w-full h-32 p-2 border border-gray-300 rounded-md"
              placeholder="Paste or edit your resume here..."
            />
            <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md">
              Save Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
