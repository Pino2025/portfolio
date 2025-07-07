'use client'
import Head from "next/head";
import Navbar from "@/app/components/Navbar"
import { useRouter } from "next/navigation";
import WhatsAppButton from "@/app/components/WhatAppButton"
import HeroSection from "../components/HeroSection";

export default function Home() {   const router = useRouter()

    const handleEnter = () => {
      router.push('/Resume')
    }
  return (
    <>
      <Head>
        <title>Phouthasin CV</title>
        <meta name="description" content="Web CV by Phouthasin" />
      </Head>

      <Navbar />

      <main className="min-h-screen w-full px-* pt-24 max-w-6xl mx-auto px-4 space-y-20">
        {/* About */}
        <section id="about">
        <HeroSection />
        </section>


        {/* Skills */}
        <section id="skills">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
            <li>HTML/CSS/JAVA SCRIPT</li>
            <li>React / Next.js</li>
            <li>Node.js / Express</li>
            <li>Firebase</li>
            <li>Tailwind CSS</li>
            <li>Git / GitHub</li>
            <li>Basic Network</li>
            <li>Rouuteing</li>
            <li>Switching</li>
          </ul>     
        </section>
        <section id="#Soft Skills">
          <h2 className="text-2xl font-bold mb-4">Sfot skills</h2>
              <ul className=" grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
  <li>Teamwork</li>
  <li>Problem Solving</li>
  <li>Communication</li>
  <li>Adaptability</li>
  <li>Critical Thinking</li>
  <li>Time Management</li>
</ul>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="p-4 border rounded shadow">
              <h3 className="text-lg font-semibold">Config Wi-Fi </h3>
              <p>Captive Portal</p>
            </div>
        </section>

        {/* Contact */}
        <section id="contact">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
          
          <div className=" p-4 rounded border" >
          
          <p >Tel: 20 5808 4137</p>
          <p>Address  : Pakthag , Vientine , Laos.</p>
           <WhatsAppButton />
    </div>

        </section>
        <section id="Resume">
            <h2> Resume </h2>
            <button     onClick={handleEnter}
        className="bg-white  text-black px-6 py-2 rounded hover:bg-gray-200"
      >Resume View    
      </button>
        </section>
      </main>
      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Phouthasin XAYNAKHONE. All rights reserved.
      </footer> 
    </>
  );
}
