import { cookies } from 'next/headers'

import React from 'react'
import TableComponent from './TableComponent'
import { TopSection } from './TopSection'

export default async function page({searchParams}:any) {
  const queries = await searchParams
    const cookieStore = await cookies()
  const token = cookieStore?.get('access_token')
  console.log(`🔥blog server component rendered: 
    TokenName:${token?.name}  
    TokenValue:${token?.value}`)

  return (
    <main className='min-h-screen p-5 space-y-20 w-5xl mx-auto  '>
        <h1 className='text-center text-4xl font-bold '>Blog Management</h1>
        <TopSection/>
        <TableComponent queries={queries}/>
    </main>
  )
}
