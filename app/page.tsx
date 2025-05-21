import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Code } from "lucide-react"
import AnimatedCounter from "@/components/animated-counter"
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Animated Background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0,transparent_70%)]"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="spotlight"></div>
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse">
                Your One-go Site for All Your Placement Preparation
              </h1>
              <p className="text-xl text-gray-400 md:text-2xl">
                Designed for Students | Static Site with MDX | Interactive UI
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-medium px-8 py-6 h-auto text-lg shadow-[0_0_15px_rgba(16,185,129,0.5)]"
              >
                <Link href="/blogs">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Blogs
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-6 h-auto text-lg shadow-[0_0_10px_rgba(16,185,129,0.3)]"
              >
                <Link href="/problems">
                  <Code className="mr-2 h-5 w-5" />
                  Practice Problems
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </p>
              <p className="text-gray-400">Practice Problems</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold mb-2">
                <AnimatedCounter end={100} suffix="+" />
              </p>
              <p className="text-gray-400">Blog Articles</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold mb-2">
                <AnimatedCounter end={5000} suffix="+" />
              </p>
              <p className="text-gray-400">Students Helped</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Core */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Core Subjects</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                  <Link href="/blogs/cn" className="hover:text-green-400 transition-colors">
                    Computer Networks
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                  <Link href="/blogs/oops" className="hover:text-green-400 transition-colors">
                    Object Oriented Programming
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                  <Link href="/blogs/os" className="hover:text-green-400 transition-colors">
                    Operating Systems
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                  <Link href="/blogs/dbms" className="hover:text-green-400 transition-colors">
                    Database Management
                  </Link>
                </li>
              </ul>
            </div>

            {/* Aptitude */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Aptitude</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                  <Link href="/blogs/verbal" className="hover:text-green-400 transition-colors">
                    Verbal
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                  <Link href="/blogs/quant" className="hover:text-green-400 transition-colors">
                    Quantitative
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                  <Link href="/blogs/logical" className="hover:text-green-400 transition-colors">
                    Logical Reasoning
                  </Link>
                </li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Soft Skills</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                  <Link href="/blogs/english" className="hover:text-green-400 transition-colors">
                    English
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                  <Link href="/blogs/hr" className="hover:text-green-400 transition-colors">
                    HR Tricky Questions
                  </Link>
                </li>
              </ul>
            </div>

            {/* DSA */}
            <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">DSA</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                  <Link href="/problems?topic=dp" className="hover:text-green-400 transition-colors">
                    Dynamic Programming
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                  <Link href="/problems?topic=graph" className="hover:text-green-400 transition-colors">
                    Graph
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                  <Link href="/problems?topic=sliding-window" className="hover:text-green-400 transition-colors">
                    Sliding Window
                  </Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                  <Link href="/problems?topic=arrays" className="hover:text-green-400 transition-colors">
                    Arrays
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-900/30">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-12">
            What Our Users Say
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0,transparent_70%)]"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Ready to Ace Your Placement Interviews?
            </h2>
            <p className="text-lg text-gray-400">
              Join thousands of students who have successfully prepared for their dream jobs using PlacementAssist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-medium px-8 py-6 h-auto text-lg shadow-[0_0_15px_rgba(16,185,129,0.5)]"
              >
                <Link href="/problems">Start Practicing Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-6 h-auto text-lg shadow-[0_0_10px_rgba(16,185,129,0.3)]"
              >
                <Link href="/mock-interview">Try Mock Interview</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
