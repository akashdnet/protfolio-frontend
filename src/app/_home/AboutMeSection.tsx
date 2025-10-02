import React from "react"
import Image from "next/image"
import Link from "next/link"
import { GraduationCap, UniversityIcon } from "lucide-react"

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center bg-gradient-to-br from-sky-50 via-emerald-50 to-indigo-50 overflow-hidden"
    >


      <div className="absolute top-10 left-10 h-10 w-10 rounded-full bg-pink-300 shadow-[3px_3px_0px_#000] animate-bounce z-0" />
      <div className="absolute bottom-20 right-16 h-12 w-12 rotate-45 bg-yellow-300 shadow-[3px_3px_0px_#000] animate-pulse z-0" />
      <div className="absolute top-1/3 right-1/4 h-0 w-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-indigo-400 shadow-[2px_2px_0px_#000] animate-spin-slow z-0" />
      <div className="absolute bottom-10 left-1/3 h-8 w-20 bg-emerald-300 skew-x-12 shadow-[2px_2px_0px_#000] animate-pulse z-0" />



      <div className="container relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 items-center">

        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 drop-shadow-[2px_2px_0px_#a5b4fc]">
            About Me
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            I’m MD Imtiaz Khondoker AKash, a passionate web developer who loves to build application to solve problems and make project profitable.
            My focus is always on clean architecture, 
            modular design, thats scalable and maintainable backend system.
          </p>
          <div className="mt-8 space-y-2 text-slate-700 font-medium">
            <p><GraduationCap className="inline mr-2 w-6 h-6"/> <span className="font-bold">Under Graduation:</span> B.Sc. in Civil Engineering[2024-2028]</p>
            <p><UniversityIcon className="inline mr-2 w-6 h-6" /> <span className="font-bold">University:</span> Northern University Bangladesh </p>
          </div>
        </div>





        <div className="flex justify-center relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
            <span className="inline-block rounded-full bg-yellow-300 px-5 py-2 text-base md:text-lg font-extrabold text-slate-900 shadow-[3px_3px_0px_#000] rotate-[-3deg]">
              💬 Let’s Connect
            </span>
          </div>




          <div className="relative w-full bg-gradient-to-br from-emerald-100 via-teal-50 to-sky-100
 shadow-[6px_6px_0px_#000] p-6 z-10  max-w-sm rounded-3xl border-4">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-slate-800 shadow-[4px_4px_0px_#000] bg-white">
                <Image
                  src="/profile_pic.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-2xl font-extrabold text-slate-900 drop-shadow-[2px_2px_0px_#a5b4fc]">
                Abdullah
              </h3>
              <p className="text-indigo-500/70 font-semibold">Full‑Stack Developer</p>

              <div className="my-6 h-2 w-full rounded-full bg-gradient-to-r from-pink-400 via-yellow-300 to-sky-400 shadow-[2px_2px_0px_#000]" />

              <div className="w-full space-y-3 text-left">
                <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 border-2 border-slate-800 shadow-[3px_3px_0px_#000]">
                  <span className="text-indigo-600 text-lg">📧</span>
                  <span className="font-bold text-slate-800">mdimtiazka@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 border-2 border-slate-800 shadow-[3px_3px_0px_#000]">
                  <span className="text-emerald-600 text-lg">📞</span>
                  <span className="font-bold text-slate-800">+880 1317****00</span>
                </div>
              </div>

              
              <div className="mt-6">
                <Link
                  href="https://github.com/akashdnet"
                  target="_blank"
                  className="inline-flex items-center gap-2  border-2 border-slate-800 bg-white px-5 py-2 font-bold text-slate-800 shadow-[3px_3px_0px_#000] hover:bg-slate-100 transition rounded-full"
                >
                  🐙 GitHub Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutMe
