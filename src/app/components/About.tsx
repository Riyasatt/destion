import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
      <section id="about" className="py-16 container px-3 mx-auto">
      <div className="text-center mb-8">
        <span className="text-[#E43C5C] text-sm font-semibold uppercase tracking-wide px-6 py-2 rounded-full bg-red-100">ABOUT</span>
        <h2 className="text-3xl font-bold mt-4">
          Learn More <span className="text-[#E43C5C]">About Us</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-lg mx-auto font-bold text-lg ">
          We offer collaborative and empowering software solutions that enable you to expand your reach and explore new opportunities.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 text-lg">
        <div>
          <p className="text-gray-600 mb-4">
            We are a digital transformation consultancy and software development company that provides cutting edge engineering solutions, helping companies and enterprise clients untangle complex issues that always emerge during their digital evolution journey.
          </p>
          <ul className="space-y-2">
            {["Achieve Business Goals", "Maximize the timely deliverables", "Accelerate Growth"].map((item, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <Check className="text-[#E43C5C] mr-2 h-5 w-5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-gray-600 mb-4">
            We&apos;re experts in software development with a proven track record of exceeding clients expectations. Our team follows a rigorous process for transparent and timely project delivery. We stay up-to-date with the latest industry trends and continually refine our approach for the best outcomes.
          </p>
          <Button 
            variant="outline" 
            className="border-[#E43C5C] text-[#E43C5C] hover:bg-[#E43C5C] hover:text-white transition-colors px-9 py-2 border-2 "
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

export default About