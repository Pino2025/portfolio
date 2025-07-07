import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed  w-full bg-white  ">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl text-black font-bold">Phouthasin</h1>
        <div className=" text-black space-x-4 text-sm sm:text-base">
          <Link href="#about">About Me</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#Soft Skills">Soft Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#Resume">Resume</Link>
        </div>
      </div>
    </nav>
  );
}
