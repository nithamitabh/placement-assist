import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, FileText, Youtube, BookOpen, Download } from "lucide-react"
import DiscussionSection from "@/components/discussion-section"

// Mock resources data
const resourcesData = [
  {
    id: 1,
    title: "Data Structures & Algorithms Cheat Sheet",
    description: "A comprehensive cheat sheet covering all major data structures and algorithms concepts.",
    type: "PDF",
    link: "https://example.com/dsa-cheatsheet.pdf",
    tags: ["DSA", "Cheat Sheet", "Interview Prep"],
  },
  {
    id: 2,
    title: "System Design Interview Guide",
    description: "Learn how to approach system design questions with this detailed guide.",
    type: "PDF",
    link: "https://example.com/system-design-guide.pdf",
    tags: ["System Design", "Architecture", "Scalability"],
  },
  {
    id: 3,
    title: "SQL Interview Questions",
    description: "Top 50 SQL interview questions with detailed answers and examples.",
    type: "PDF",
    link: "https://example.com/sql-questions.pdf",
    tags: ["SQL", "Database", "Interview Questions"],
  },
  {
    id: 4,
    title: "Dynamic Programming Patterns",
    description: "Master DP by understanding these common patterns and approaches.",
    type: "Video",
    link: "https://youtube.com/watch?v=dynamic-programming",
    tags: ["DP", "Algorithms", "Patterns"],
  },
  {
    id: 5,
    title: "Graph Algorithms Visualized",
    description: "Visual explanations of common graph algorithms with step-by-step animations.",
    type: "Video",
    link: "https://youtube.com/watch?v=graph-algorithms",
    tags: ["Graph", "Visualization", "Algorithms"],
  },
  {
    id: 6,
    title: "Big O Notation Explained",
    description: "A beginner-friendly explanation of time and space complexity analysis.",
    type: "Article",
    link: "https://example.com/big-o-notation",
    tags: ["Complexity", "Big O", "Fundamentals"],
  },
  {
    id: 7,
    title: "Object-Oriented Programming Concepts",
    description: "Detailed explanations of OOP principles with real-world examples.",
    type: "Article",
    link: "https://example.com/oop-concepts",
    tags: ["OOP", "Design Principles", "Core CS"],
  },
  {
    id: 8,
    title: "Behavioral Interview Preparation",
    description: "How to structure your answers using the STAR method with example responses.",
    type: "PDF",
    link: "https://example.com/behavioral-interview.pdf",
    tags: ["Behavioral", "Soft Skills", "STAR Method"],
  },
]

// Resource type icons
const getResourceIcon = (type: string) => {
  switch (type) {
    case "PDF":
      return <FileText className="h-5 w-5 text-green-400" />
    case "Video":
      return <Youtube className="h-5 w-5 text-green-400" />
    case "Article":
      return <BookOpen className="h-5 w-5 text-green-400" />
    default:
      return <FileText className="h-5 w-5 text-green-400" />
  }
}

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Button asChild variant="outline" className="mb-6 border-green-500/50 text-green-400 hover:bg-green-500/10">
        <Link href="/blogs">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </Link>
      </Button>

      <div className="relative mb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0,transparent_70%)]"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-4">
            Resource Vault
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            A curated collection of cheat sheets, guides, videos, and articles to help you prepare for technical
            interviews.
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {resourcesData.map((resource) => (
          <Card
            key={resource.id}
            className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10 group"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                {getResourceIcon(resource.type)}
                <Badge variant="outline">{resource.type}</Badge>
              </div>
              <CardTitle className="text-xl text-green-400 mt-2">{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {resource.tags.map((tag, index) => (
                  <Badge key={index} variant="success">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                variant="outline"
                className="w-full border-green-500/50 text-green-400 hover:bg-green-500/10 group-hover:border-green-500"
              >
                <Link
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  {resource.type === "PDF" ? (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </>
                  ) : (
                    <>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View {resource.type}
                    </>
                  )}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Discussion Section */}
      <DiscussionSection />
    </div>
  )
}
