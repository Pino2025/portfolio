import React from 'react'

function Page() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="relative">
  
        <div className="absolute top-4 right-4 z-10">
          <a
            href="/cv.jpg"
            download="CV of Phouthasin.jpg"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            📥 Download CV (JPG)
          </a>
        </div>

        <img
          src="/cv.jpg"
          alt="Resume"
          className="h-screen object-contain rounded-lg"
        />
      </div>
    </div>
  )
}

export default Page
