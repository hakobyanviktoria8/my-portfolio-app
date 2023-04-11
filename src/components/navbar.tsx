import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
      <div>
          <Link href="/">Home</Link>
          <Link href="/cv">CV</Link>
          <Link href="/projects">Projects</Link>
    </div>
  )
}
