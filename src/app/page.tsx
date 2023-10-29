import Experience from '@/modules/Experience/Experience'
import React from 'react'
import '../styles/globals.css'
import { Providers } from './providers'


export default function Home() {
  return (
    <Providers>
      <Experience />
    </Providers>
  )
}
