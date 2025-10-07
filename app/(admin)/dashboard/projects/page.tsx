import React from 'react'
import TableComponent from './TableComponent'
import { TopSection } from './TopSection'

export default async function page({searchParams}:any) {
  const queries = await searchParams

  return (
    <main className='min-h-screen p-5 space-y-20 w-5xl mx-auto  '>
        <h1 className='text-center text-4xl font-bold '>Project Management</h1>
        <TopSection/>
        <TableComponent queries={queries}/>
    </main>
  )
}
