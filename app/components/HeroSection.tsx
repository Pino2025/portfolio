export default function HeroSection() {
    return (
      <section style={{backgroundImage:"url('/sea.jpg')"}} className=" text-white py-45 px-7 text-center " >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to site</h1>     <section id="about" className="text-center">
          <h2 className="text-3xl font-bold">I`am Phouthasin</h2>
          <p className="mt-2 text-gray-600">
            Full-stack Developer from Laos. I love building web applications using modern tech like React, Next.js, and Firebase.
          </p>
        </section>
      </section>
    )
  }