"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ChevronDown, ChevronUp, Check, X, Timer } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import DiscussionSection from "@/components/discussion-section"

// Mock quiz data
const quizData = [
  {
    id: 1,
    category: "Data Structures",
    question: "What is the time complexity of searching for an element in a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    explanation:
      "In a balanced binary search tree, each comparison eliminates roughly half of the remaining tree, resulting in a logarithmic time complexity of O(log n).",
  },
  {
    id: 2,
    category: "Algorithms",
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
    correctAnswer: "Quick Sort",
    explanation:
      "Quick Sort has an average-case time complexity of O(n log n), which is optimal for comparison-based sorting algorithms. However, its worst-case is O(n²).",
  },
  {
    id: 3,
    category: "Operating Systems",
    question: "What is a deadlock in operating systems?",
    options: [
      "A process that consumes too much CPU time",
      "A situation where two or more processes are unable to proceed because each is waiting for resources held by another",
      "A memory leak that causes the system to crash",
      "A type of scheduling algorithm",
    ],
    correctAnswer:
      "A situation where two or more processes are unable to proceed because each is waiting for resources held by another",
    explanation:
      "A deadlock occurs when processes are blocked because each process holds a resource and waits for another resource acquired by some other process.",
  },
  {
    id: 4,
    category: "Database",
    question: "What is the purpose of normalization in database design?",
    options: [
      "To increase data redundancy",
      "To optimize query performance",
      "To eliminate data redundancy and dependency",
      "To create more tables",
    ],
    correctAnswer: "To eliminate data redundancy and dependency",
    explanation:
      "Normalization is the process of organizing data to minimize redundancy and dependency by dividing large tables into smaller ones and defining relationships between them.",
  },
  {
    id: 5,
    category: "HR",
    question: "How would you handle a situation where you disagree with your team's decision?",
    options: [
      "Immediately escalate to higher management",
      "Silently implement your own solution",
      "Express your concerns professionally, understand their perspective, and work towards a compromise",
      "Go along with the decision even if you know it's wrong",
    ],
    correctAnswer: "Express your concerns professionally, understand their perspective, and work towards a compromise",
    explanation:
      "Professional disagreement involves respectfully expressing your viewpoint, actively listening to others, and finding common ground or compromise that benefits the project.",
  },
]

export default function MockInterviewPage() {
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([])
  const [revealedAnswers, setRevealedAnswers] = useState<number[]>([])
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [timerActive, setTimerActive] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(300) // 5 minutes in seconds
  const { toast } = useToast()

  // Toggle question expansion
  const toggleQuestion = (questionId: number) => {
    setExpandedQuestions((prev) =>
      prev.includes(questionId) ? prev.filter((id) => id !== questionId) : [...prev, questionId],
    )
  }

  // Reveal answer
  const revealAnswer = (questionId: number) => {
    if (!revealedAnswers.includes(questionId)) {
      setRevealedAnswers((prev) => [...prev, questionId])
    }
  }

  // Select answer
  const selectAnswer = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))

    const question = quizData.find((q) => q.id === questionId)
    if (question && answer === question.correctAnswer) {
      toast({
        title: "Correct!",
        description: "You selected the right answer.",
        variant: "success",
      })
    } else {
      toast({
        title: "Incorrect",
        description: "Try again or reveal the answer to learn more.",
        variant: "destructive",
      })
    }
  }

  // Start timer
  const startTimer = () => {
    setTimerActive(true)

    toast({
      title: "Timer Started",
      description: "You have 5 minutes to complete the mock interview.",
      variant: "default",
    })

    // Reset timer if it was already running
    setTimeRemaining(300)
  }

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Check if an answer is correct
  const isCorrectAnswer = (questionId: number, option: string) => {
    const question = quizData.find((q) => q.id === questionId)
    return question?.correctAnswer === option
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0,transparent_70%)]"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-4">
            Mock Interview Questions
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Test your knowledge with these common interview questions. Time yourself to simulate a real interview
            environment.
          </p>
        </div>
      </div>

      {/* Timer Section */}
      <div className="mb-8 flex justify-center">
        <Card className="w-full max-w-md bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-lg font-medium text-gray-200">Interview Timer</span>
              </div>
              <div className="text-2xl font-bold text-green-400">{formatTime(timeRemaining)}</div>
            </div>
            <div className="mt-4">
              <Button
                onClick={startTimer}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-medium"
                disabled={timerActive}
              >
                <Timer className="mr-2 h-4 w-4" />
                Start 5-Minute Timer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Questions */}
      <div className="space-y-6 mb-12">
        {quizData.map((question) => (
          <Card
            key={question.id}
            className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10"
          >
            <CardHeader className="cursor-pointer" onClick={() => toggleQuestion(question.id)}>
              <div className="flex justify-between items-center">
                <div>
                  <Badge variant="outline" className="mb-2">
                    {question.category}
                  </Badge>
                  <CardTitle className="text-xl text-green-400">{question.question}</CardTitle>
                </div>
                <div>
                  {expandedQuestions.includes(question.id) ? (
                    <ChevronUp className="h-6 w-6 text-green-400" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-green-400" />
                  )}
                </div>
              </div>
            </CardHeader>

            {expandedQuestions.includes(question.id) && (
              <>
                <CardContent>
                  <div className="space-y-3">
                    {question.options.map((option, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-md cursor-pointer flex items-center justify-between transition-colors ${
                          selectedAnswers[question.id] === option
                            ? isCorrectAnswer(question.id, option)
                              ? "bg-green-500/20 border border-green-500/50"
                              : "bg-red-500/20 border border-red-500/50"
                            : "bg-gray-800 hover:bg-gray-700"
                        }`}
                        onClick={() => selectAnswer(question.id, option)}
                      >
                        <span className="text-gray-200">{option}</span>
                        {selectedAnswers[question.id] === option &&
                          (isCorrectAnswer(question.id, option) ? (
                            <Check className="h-5 w-5 text-green-400" />
                          ) : (
                            <X className="h-5 w-5 text-red-400" />
                          ))}
                      </div>
                    ))}
                  </div>

                  {revealedAnswers.includes(question.id) && (
                    <div className="mt-6 p-4 bg-gray-800/50 rounded-md border border-gray-700">
                      <p className="font-medium text-green-400 mb-2">Explanation:</p>
                      <p className="text-gray-300">{question.explanation}</p>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex justify-end">
                  <Button
                    variant="outline"
                    className="border-green-500/50 text-green-400 hover:bg-green-500/10"
                    onClick={() => revealAnswer(question.id)}
                    disabled={revealedAnswers.includes(question.id)}
                  >
                    Reveal Answer
                  </Button>
                </CardFooter>
              </>
            )}
          </Card>
        ))}
      </div>

      {/* Discussion Section */}
      <DiscussionSection />
    </div>
  )
}
