"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    content:
      "PlacementAssist helped me prepare for my Google interview. The DSA problems and core subject materials were exactly what I needed!",
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "SDE at Amazon",
    content:
      "The structured approach to learning on PlacementAssist made a huge difference in my preparation. I was able to crack my Amazon interview with confidence.",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    role: "Product Engineer at Microsoft",
    content:
      "The mock interview questions were spot on! Many of the questions I practiced here appeared in my actual interviews. Highly recommended!",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Backend Developer at Flipkart",
    content:
      "The core subject materials, especially the DBMS and OS sections, were comprehensive and helped me build a strong foundation.",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/30 transition-all duration-300 shadow-lg hover:shadow-green-500/5">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-green-400/30 mb-4" />
                  <p className="text-gray-300 mb-6 italic">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-600/30 flex items-center justify-center text-green-400 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-green-400">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-green-400" : "bg-gray-600"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 border-green-500/50 text-green-400 hover:bg-green-500/10 md:flex hidden"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-green-500/50 text-green-400 hover:bg-green-500/10 md:flex hidden"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
