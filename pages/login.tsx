import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white rounded shadow-md space-y-4">
        <h1 className="text-2xl font-bold">Login</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
