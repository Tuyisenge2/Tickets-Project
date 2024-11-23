import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <main className='text-center'>
        <h2 className='text-3xl'>unfortunately Not Tickets Found  </h2>
        <p>we are sorry that we could not find the Ticket you were searching </p>
        <p>Navigate to the All  <Link href="/Tickets" className='text-blue-500 italic '>Tickets</Link></p>
        </main>
      
    </div>
  )
}
