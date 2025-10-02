"use client"

import Link from "next/link"
import { useState } from "react"



const navList = [
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Blogs", href: "#blog" },
            { name: "Projects", href: "#projects" },
            { name: "Dashboard", href: "/dashboard" },
          ]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky md:top-3 top-10 z-50 md:w-full h-0">
      
      <div className="mx-auto md:max-w-5xl max-sm:inline rounded-2xl border-2 border-white/30 
                      bg-white/20 backdrop-blur-md 
                      shadow-[4px_4px_0px_#000] px-6 py-3 md:flex md:items-center md:justify-between max-sm:ml-5 ">
        


        <nav className="hidden md:flex justify-center gap-8 font-extrabold text-slate-900 text-lg mx-auto">
          {navList.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="relative px-2 py-1 transition-colors hover:text-[#4F39F6]  "
            >
              {item.name}
            </Link>
          ))}
        </nav>






        <button
          onClick={() => setOpen(true)}
          className="md:hidden font-extrabold text-slate-900 "
        >
          ☰
        </button>
      </div>







{/* sheet */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex">
          <div className="w-64 bg-white/90 border-r-4 border-slate-900 shadow-[6px_0_0_#000] p-6 flex flex-col gap-6">
            <button
              onClick={() => setOpen(false)}
              className="self-end font-bold text-slate-900"
            >
              ✕
            </button>
            {navList.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block font-extrabold text-lg text-slate-900 hover:text-pink-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  )
}
