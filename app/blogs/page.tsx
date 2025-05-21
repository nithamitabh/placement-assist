import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

// Blog categories
const categories = [
  {
    title: "Core Subjects",
    description: "Fundamental computer science subjects",
    topics: [
      { name: "Computer Networks", slug: "cn" },
      { name: "Object Oriented Programming", slug: "oops" },
      { name: "Operating Systems", slug: "os" },
      { name: "Database Management", slug: "dbms" },
    ],
  },
  {
    title: "Aptitude",
    description: "Prepare for aptitude tests",
    topics: [
      { name: "Verbal Reasoning", slug: "verbal" },
      { name: "Quantitative Aptitude", slug: "quant" },
      { name: "Logical Reasoning", slug: "logical" },
    ],
  },
  {
    title: "Soft Skills",
    description: "Enhance your professional skills",
    topics: [
      { name: "English Communication", slug: "english" },
      { name: "HR Interview Questions", slug: "hr" },
    ],
  },
]

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0,transparent_70%)]"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-4">
            Explore Our Blogs
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Comprehensive resources to help you prepare for your placement interviews. Browse through our collection of
            articles and guides.
          </p>
        </div>
      </div>

      <div className="space-y-16">
        {categories.map((category, index) => (
          <div key={index}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-green-400 mb-2">{category.title}</h2>
              <p className="text-gray-400">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.topics.map((topic, topicIndex) => (
                <Card
                  key={topicIndex}
                  className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-green-400">{topic.name}</CardTitle>
                    <CardDescription>Comprehensive guides and articles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400">
                      Learn everything you need to know about {topic.name.toLowerCase()} for your placement interviews.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-green-500/80 to-emerald-600/80 hover:from-green-500 hover:to-emerald-600 text-black"
                    >
                      <Link href={`/blogs/${topic.slug}`} className="flex items-center justify-center">
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
