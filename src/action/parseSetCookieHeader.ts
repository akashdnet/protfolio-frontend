import { NextResponse } from "next/server"



type ParsedCookie = {
  name: string
  value: string
  options: Record<string, string | boolean>
}

export function parseSetCookieHeader(header: string): ParsedCookie[] {
  const rawCookies = header.split(/,(?=\s*[a-zA-Z0-9_\-]+=)/)

  return rawCookies.map(cookieStr => {
    const parts = cookieStr.split(';').map(p => p.trim())
    const [name, value] = parts[0].split('=')

    const options: Record<string, string | boolean> = {}
    parts.slice(1).forEach(opt => {
      const [k, v] = opt.split('=')

      const normalizedKey =
        k.charAt(0).toLowerCase() + k.slice(1)

      if (v === undefined) {
        options[normalizedKey] = true
      } else {
        options[normalizedKey] = v
      }
    })

    return { name, value, options }
  })
}





export async function setCookieHeader(req:NextResponse){
  const cookieStore = await req.headers.get('set-cookie')


}
