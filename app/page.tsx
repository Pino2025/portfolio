'use client'
import { useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter()

  const handleEnter = () => {
    router.push('/cv')
  }
  return (
    <div style={{ backgroundImage: "url('/sea.jpg')" }} className="bg-cover bg-center min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-6">
      <h1 className="animate-pulse text-4xl font-bold">I`m Phouthasin</h1>
      <h3 className="animate-pulse text-4xl font-bold">Welcome to My Site</h3>
      <p className="text-gray-400 animate-pulse">Click below to view my CV</p>
      <button
        onClick={handleEnter}
        className="bg-white animate-pulse text-black px-6 py-2 rounded hover:bg-gray-200"
      >
        View
      </button>
    </div>
  )
}
