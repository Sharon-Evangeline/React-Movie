import React from 'react'
import TopBar from './TopBar'
import { Outlet } from 'react-router-dom'

export default function Portal() {
  return (
    <div className="Portal">
      <TopBar />
        <Outlet/>
    </div>
  )
}
