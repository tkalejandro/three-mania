"use client"

import { soniaCoronado } from '@/data'
import React from 'react'

const Resume = () => {

  const sonia = soniaCoronado
  return (
    <div>Portfolio - {sonia.name}</div>
  )
}

export default Resume