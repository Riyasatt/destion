import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Destion</h3>
            <p className="text-gray-600">
              1st Floor IT-SEZ<br />
              Kakinada, AP 533001<br />
              India
            </p>
            <p className="mt-4 text-gray-600">
              <strong>Phone:</strong> +91 9494114128<br />
              <strong>Email:</strong> info@destion.in
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {["Home", "About us", "Services", "Terms of service", "Privacy policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-[#E43C5C]">
                    <span className="text-[#E43C5C] mr-2">&gt;</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {["Web Design", "Web Development", "Product Management", "Marketing", "Graphic Design"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-[#E43C5C]">
                    <span className="text-[#E43C5C] mr-2">&gt;</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Join Our Newsletter</h4>
            <p className="text-gray-600 mb-4">
              Tamen quem nulla quae legam multos aute sint culpa legam noster magna
            </p>
            <form className="flex">
              <Input type="email" placeholder="email@example.com" className="rounded-r-none" />
              <Button type="submit" className="bg-[#E43C5C] text-white hover:bg-[#d62f4d] transition-colors rounded-l-none">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer