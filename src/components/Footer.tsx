import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer
      className=" bg-gradient-to-br from-sky-100 via-emerald-100 to-indigo-100 
                 shadow-[0_-6px_0px_#000]
                 border-t-4 border-slate-900"
    >
      <div className="container mx-auto max-w-6xl px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">


          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 drop-shadow-[2px_2px_0px_#f472b6]">
              MD Imtiaz Khondoker Akash
            </h2>
            <p className="mt-2 text-sm text-slate-700">
                Passionate Programmer. Love to solve problems, building ideas throw code.
            </p>
          </div>







          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:underline font-medium">About</Link></li>
              <li><Link href="#blog" className="hover:underline font-medium">Blog</Link></li>
              <li><Link href="#projects" className="hover:underline font-medium">Projects</Link></li>
            </ul>
          </div>






          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Connect</h3>
            <div className="flex justify-center md:justify-start gap-4 text-2xl">
              <Link
                href="https://github.com/akashdnet"
                target="_blank"
                className="rounded-full border-2 border-slate-900 bg-white p-2 
                           shadow-[3px_3px_0px_#000] hover:bg-slate-100 transition"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://linkedin.com/in/akashdnet"
                target="_blank"
                className="rounded-full border-2 border-slate-900 bg-white p-2 
                           shadow-[3px_3px_0px_#000] hover:bg-slate-100 transition"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://twitter.com/akashdnet"
                target="_blank"
                className="rounded-full border-2 border-slate-900 bg-white p-2 
                           shadow-[3px_3px_0px_#000] hover:bg-slate-100 transition"
              >
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-[3px] w-full bg-slate-900"></div>

        {/* Bottom Note */}
        <div className="text-center text-sm font-medium text-slate-900">
          © {new Date().getFullYear()} @akashdnet — Build with assignment pressure ❤️‍🩹 
        </div>
      </div>
    </footer>
  )
}
