import React from 'react'
import { ContactInfo } from './ContactInfo'
import { ContactForm } from './ContactForm'
import Map from './Map'

const Contact = () => {
  return (
      <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#E43C5C] text-sm font-semibold uppercase tracking-wide">CONTACT</span>
          <h2 className="text-3xl font-bold mt-2">
            Contact <span className="text-[#E43C5C]">Us</span>
          </h2>
        </div>
        <div className="mb-8">
            <Map />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact