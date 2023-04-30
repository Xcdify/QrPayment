import React, { useCallback } from 'react';
import Header from '../components/Header'

export default function Home() {

  return (
    <div className="w-screen h-screen">
        <Header/>
        <div className="flex justify-center items-center h-screen">Payment Portal</div>
    </div>
  )
}
