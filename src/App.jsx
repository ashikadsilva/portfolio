import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar';

function App() {

  return (
    <h1 className="w-full h-screen font-bodyFont bg-bodyColor text-textLight  overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
      <Navbar/>
    </h1>

  )
}

export default App
  