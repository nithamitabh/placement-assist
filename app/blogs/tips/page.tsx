"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Lightbulb, Copy } from "lucide-react"
import DiscussionSection from "@/components/discussion-section"

// Mock tips data
const tipsData = [
  {
    id: 1,
    title: "Master the STAR Method",
    category: "Behavioral",
    content:
      "When answering behavioral questions, use the STAR method: Situation, Task, Action, Result. This structure helps you provide complete and compelling answers that showcase your skills and experience.",
    tags: ["Interview Technique", "Soft Skills"],
  },
  {
    id: 2,
    title: "Optimize Your Resume with Keywords",
    category: "Resume",
    content:
      "Many companies use Applicant Tracking Systems (ATS) to screen resumes. Include relevant keywords from the job description to increase your chances of getting past the initial screening.",
    tags: ["Resume", "ATS"],
  },
  {
    id: 3,
    title: "Practice System Design with Real Examples",
    category: "Technical",
    content:
      "When preparing for system design interviews, practice designing real-world applications like Twitter, Netflix, or Uber. Focus on scalability, reliability, and performance considerations.",
    tags: ["System Design", "Architecture"],
  },
  {
    id: 4,
    title: "Explain Your Thought Process",
    category: "Coding",
    content:
      "During coding interviews, explain your thought process out loud. Interviewers are often more interested in how you approach problems than whether you get the perfect solution immediately.",
    tags: ["Problem Solving", "Communication"],
  },
  {
    id: 5,
    title: "Research the Company Culture",
    category: "Preparation",
    content:
      "Before your interview, research the company's culture, values, and recent news. This shows your genuine interest and helps you tailor your answers to align with their values.",
    tags: ["Research", "Company Culture"],
  },
  {
    id: 6,
    title: "Use the Rubber Duck Debugging Technique",
    category: "Coding",
    content:
      "When stuck on a coding problem, explain it to an imaginary rubber duck (or any object). This forces you to articulate the problem step by step, often leading to insights about the solution.",
    tags: ["Debugging", "Problem Solving"],
  },
  {
    id: 7,
    title: "Prepare Questions for the Interviewer",
    category: "General",
    content:
      "Always prepare thoughtful questions to ask your interviewer. This demonstrates your interest in the role and company, and helps you evaluate if the position is right for you.",
    tags: ["Interview Questions", "Engagement"],
  },
  {
    id: 8,
    title: "Follow Up After the Interview",
    category: "General",
    content:
      "Send a thank-you email within 24 hours after your interview. Express your appreciation for the opportunity, reiterate your interest, and briefly mention a key point from your conversation.",
    tags: ["Follow-up", "Etiquette"],
  },
  {
    id: 9,
    title: "Practice Mock Interviews",
    category: "Preparation",
    content:
      "Conduct mock interviews with friends or use online platforms. This helps reduce anxiety, improves your communication skills, and identifies areas for improvement.",
    tags: ["Practice", "Feedback"],
  },
]

// Tip Card Component
function TipCard({ tip }: { tip: (typeof tipsData)[0] }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // In a real implementation, we would use the toast here
    alert("Tip copied to clipboard")
  }

  return (
    <Card className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10 h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="bg-gray-800">
            {tip.category}
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-400 hover:text-green-400"
            onClick={() => copyToClipboard(`${tip.title}: ${tip.content}`)}
          >
            <Copy className="h-4 w-4" />
            <span className="sr-only">Copy tip</span>
          </Button>
        </div>
        <CardTitle className="text-xl text-green-400 flex items-center">
          <Lightbulb className="h-5 w-5 mr-2 text-green-400" />
          {tip.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-300">{tip.content}</p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {tip.tags.map((tag, index) => (
            <Badge key={index} variant="success">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

export default function TipsPage() {
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
            Tips & Tricks
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Quick, actionable advice to help you succeed in technical interviews and the job application process.
          </p>
        </div>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {tipsData.map((tip) => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </div>

      {/* Discussion Section */}
      <DiscussionSection />
    </div>
  )
}
