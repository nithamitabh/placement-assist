import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Building, ThumbsUp } from "lucide-react"
import DiscussionSection from "@/components/discussion-section"

// Mock interview experiences data
const experiencesData = [
  {
    id: 1,
    title: "My Google Interview Experience",
    author: "Priya Sharma",
    company: "Google",
    date: "May 10, 2025",
    likes: 245,
    excerpt:
      "I recently interviewed for a Software Engineer role at Google. The process consisted of 5 rounds, including coding, system design, and behavioral interviews.",
    tags: ["FAANG", "SDE", "System Design"],
  },
  {
    id: 2,
    title: "Amazon SDE-2 Interview Process",
    author: "Rahul Patel",
    company: "Amazon",
    date: "April 22, 2025",
    likes: 189,
    excerpt:
      "My interview journey for the SDE-2 position at Amazon. Learn about the online assessment, technical rounds, and the bar raiser interview.",
    tags: ["FAANG", "SDE-2", "Leadership Principles"],
  },
  {
    id: 3,
    title: "Microsoft Internship Interview",
    author: "Ananya Gupta",
    company: "Microsoft",
    date: "March 15, 2025",
    likes: 156,
    excerpt:
      "How I prepared for and cleared Microsoft's internship interview process. Includes questions asked and tips for future applicants.",
    tags: ["Internship", "Microsoft", "Entry Level"],
  },
  {
    id: 4,
    title: "Flipkart Backend Developer Experience",
    author: "Vikram Singh",
    company: "Flipkart",
    date: "February 28, 2025",
    likes: 132,
    excerpt:
      "My interview experience for the Backend Developer role at Flipkart. Detailed breakdown of each round and the types of questions asked.",
    tags: ["Backend", "E-commerce", "System Design"],
  },
  {
    id: 5,
    title: "Goldman Sachs Technology Analyst",
    author: "Neha Reddy",
    company: "Goldman Sachs",
    date: "January 17, 2025",
    likes: 98,
    excerpt:
      "From online assessment to final interviews - my complete journey to becoming a Technology Analyst at Goldman Sachs.",
    tags: ["Finance", "Analyst", "Java"],
  },
  {
    id: 6,
    title: "Adobe Frontend Engineer Interview",
    author: "Arjun Mehta",
    company: "Adobe",
    date: "December 5, 2024",
    likes: 112,
    excerpt:
      "A detailed account of my interview process for the Frontend Engineer position at Adobe, including JavaScript, React, and system design questions.",
    tags: ["Frontend", "React", "UI/UX"],
  },
]

export default function ExperiencesPage() {
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
            Interview Experiences
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Learn from the experiences of others who have successfully navigated the interview process at top companies.
          </p>
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {experiencesData.map((experience) => (
          <Card
            key={experience.id}
            className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10 flex flex-col"
          >
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="bg-gray-800">
                  <Building className="h-3 w-3 mr-1" />
                  {experience.company}
                </Badge>
                <div className="flex items-center text-gray-500 text-sm">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  {experience.likes}
                </div>
              </div>
              <CardTitle className="text-xl text-green-400">{experience.title}</CardTitle>
              <CardDescription className="flex items-center text-sm">
                <Calendar className="h-3 w-3 mr-1" />
                {experience.date} | By {experience.author}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-300 mb-4">{experience.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag, index) => (
                  <Badge key={index} variant="success">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-green-500/80 to-emerald-600/80 hover:from-green-500 hover:to-emerald-600 text-black"
              >
                <Link href={`/blogs/experiences/${experience.id}`}>Read Full Experience</Link>
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
