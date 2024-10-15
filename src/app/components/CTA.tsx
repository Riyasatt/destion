import { Button } from '@/components/ui/button'
import React from 'react'

const CTA = () => {
  return (
      <section className="relative mb-16">
      <div 
        className="absolute inset-0 bg- bg-center bg-no-repeat bg-[url('/cta-bg.jpg')]"
        style={{
          backgroundAttachment: "fixed"
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 py-10">
        <h2 className="md:text-4xl text-2xl font-bold mb-4">Reach out and let&apos;s chat</h2>
        <p className="mb-8 container mx-auto font-semibold text-lg">
          Meet our client success specialist. We&apos;d love to hear from you if you are looking for a company that will develop your product. But don&apos;t worry, sending an inquiry via the form is not binding. This simple step is enough to verify that we fit together.
        </p>
        <Button 
          variant="outline"
          className="bg-transparent text-xl px-8 py-5 border-2 text-white border-white hover:bg-[#E43C5C] hover:text-white hover:border-[#E43C5C] duration-500"
        >
          CALL TO ACTION
        </Button>
      </div>
    </section>
  )
}

export default CTA