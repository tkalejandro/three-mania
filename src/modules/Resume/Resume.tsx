"use client"

import { soniaCoronado } from '@/data'
import { useAppSettings } from '@/store'
import React from 'react'

const Resume = () => {

  // Dummy use
  const loading = useAppSettings(state => state.loading)
  const sonia = soniaCoronado
  return (
    <div>Portfolio - {sonia.name} and I am loading {loading.toString()}</div>
  )
}

export default Resume