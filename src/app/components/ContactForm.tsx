import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
      </div>
      <Input type="text" placeholder="Subject" />
      <Textarea placeholder="Message" rows={6} />
      <div className="flex justify-end">
        <Button 
          type="submit"
          className="bg-[#E43C5C] text-white hover:bg-[#d62f4d] transition-colors px-6 py-2 rounded-full"
        >
          Send Message
        </Button>
      </div>
    </form>
  )
}