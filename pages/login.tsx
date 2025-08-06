import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { supabase } from '../lib/supabaseClient'

export default function Login() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) {
      setMessage('Error sending magic link.')
    } else {
      setMessage('Check your email for the magic link!')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <div className="p-6 bg-white rounded shadow-md space-y-4 w-80">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {/* Google Login */}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          onClick={() => signIn('google')}
        >
          Sign in with Google
        </button>

        {/* Divider */}
        <div className="text-center text-gray-500">or</div>

        {/* Email Login */}
        <form onSubmit={handleEmailLogin} className="space-y-2">
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded"
          >
            Send Magic Link
          </button>
        </form>

        {message && <p className="text-sm text-center text-gray-700">{message}</p>}
      </div>
    </div>
  )
}
