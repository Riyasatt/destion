import React from 'react'
import Navbar from './Navbar'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
      <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center  bg-no-repeat bg-[url('/hero-bg.jpg')]"
        style={{
      //     backgroundImage: "url('/hero-bg.jpg)",
          backgroundAttachment: "fixed"
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <Navbar />
      <main className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center">
            <div className="md:text-[25px] text-[20px]  text-white px-9 py-2 bg-white/10 rounded-full  w-fit mb-8 mx-auto">Welcome to <span className=' font-bold'>Destion</span></div>
            <h2 className="mb-4 text-3xl md:text-5xl font-bold text-white">WE&apos;RE CREATIVE AGENCY</h2>
            <p className="mb-10 text-lg md:text-2xl text-white">
              We are team of talented designers making websites, mobile apps and cloud solutions
            </p>
            <Button 
              variant="outline" 
              className="bg-transparent px-8 py-3 rounded-full text-white border-white hover:bg-[#E43C5C] hover:text-white hover:border-[#E43C5C] transition-colors"
            >
              GET STARTED
            </Button>
          </div>
        </main>
      </div>
  )
}

export default Hero