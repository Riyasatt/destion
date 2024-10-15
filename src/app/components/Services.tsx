
import { Activity, FileText, Gauge, Globe } from 'lucide-react'
import React from 'react'

const Services = () => {
  return (
      <section id="about" className="py-16 max-w-screen-xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-[#E43C5C] text-sm font-semibold uppercase tracking-wide px-6 py-2 rounded-full bg-red-100">Services</span>
        <h2 className="text-3xl font-bold mt-4">
        We do offer awesome <span className="text-[#E43C5C]">Services</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-lg mx-auto font-bold text-lg ">
          We offer collaborative and empowering software solutions that enable you to expand your reach and explore new opportunities.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Activity, title: "FinTech development services", desc:"Destion provides comprehensive FinTech development services to help businesses stay ahead of the rapidly evolving financial landscape." },
              { icon: FileText, title: "Healthcare development services",desc:"Destion provides top-notch healthcare development services that help healthcare providers improve patient outcomes and enhance operational efficiency." },
              { icon: Gauge, title: "Consumer development services" ,desc:"Destion provides innovative consumer development services that help businesses build engaging and user-friendly digital products and experiences."},
              { icon: Globe, title: "Financial services development services", desc:"Destion specializes in developing customized financial services that cater to the specific needs of businesses and their clients." },
            ].map((service, index) => (
              <div key={index} className="bg-white p-7 py-14 rounded-lg shadow-md text-center  ">
                <service.icon className="text-[#E43C5C] w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-600 ">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
    </section>
  )
}

export default Services