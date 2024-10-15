import { MapPin, Mail, Phone } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-start">
        <MapPin className="text-[#E43C5C] w-6 h-6 mr-4 mt-1" />
        <div>
          <h3 className="font-semibold text-lg">Location:</h3>
          <p className="text-gray-600">1st Floor It Sez, Kakinada, Andhra Pradesh 533001</p>
        </div>
      </div>
      <div className="flex items-start">
        <Mail className="text-[#E43C5C] w-6 h-6 mr-4 mt-1" />
        <div>
          <h3 className="font-semibold text-lg">Email:</h3>
          <p className="text-gray-600">info@destion.in</p>
        </div>
      </div>
      <div className="flex items-start">
        <Phone className="text-[#E43C5C] w-6 h-6 mr-4 mt-1" />
        <div>
          <h3 className="font-semibold text-lg">Call:</h3>
          <p className="text-gray-600">+91 9494114128</p>
        </div>
      </div>
    </div>
  )
}