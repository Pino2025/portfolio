'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function Page() {
  const router = useRouter()

  const handleEnter = () => {
    router.push('/cv')
  }

  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      {/* ปุ่ม Back อยู่มุมบนซ้าย */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={handleEnter}
          className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200"
        >
          ← Back
        </button>
      </div>

      {/* ปุ่ม Download อยู่มุมบนขวา */}
      <div className="absolute top-4 right-4 z-10">
        <a
          href="/cv.jpg"
          download="CV of Phouthasin.jpg"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          📥 Download CV (JPG)
        </a>
      </div>

      {/* รูป CV */}
      <img
        src="/cv.jpg"
        alt="Resume"
        className="h-full object-contain rounded-lg"
      />
    </div>
  )
}

export default Page
