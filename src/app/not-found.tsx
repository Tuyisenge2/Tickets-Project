import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <main className='text-center'>
        <h2 className='text-3xl'> There was a problem</h2>
        <p>we are deeply sad to tell that we could not find the page you were looking for </p>
        <p>Go back to the <Link href="/" className='text-blue-500 italic '>Dashboard</Link></p>
        </main>
      
    </div>
  )
}
