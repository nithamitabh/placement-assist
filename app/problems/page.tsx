"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"
import { useProgressStore } from "@/lib/progress-store"
import { ExternalLink, ChevronLeft, ChevronRight, Search, Filter } from "lucide-react"
import DiscussionSection from "@/components/discussion-section"

// Mock problem data
const problemsData = [
  // DP Problems
  {
    id: 1,
    title: "Fibonacci Number",
    difficulty: "Easy",
    topic: "dp",
    tags: ["recursion", "memoization"],
    leetcodeLink: "https://leetcode.com/problems/fibonacci-number/",
  },
  {
    id: 2,
    title: "Climbing Stairs",
    difficulty: "Easy",
    topic: "dp",
    tags: ["recursion", "memoization"],
    leetcodeLink: "https://leetcode.com/problems/climbing-stairs/",
  },
  {
    id: 3,
    title: "Coin Change",
    difficulty: "Medium",
    topic: "dp",
    tags: ["array", "memoization"],
    leetcodeLink: "https://leetcode.com/problems/coin-change/",
  },
  {
    id: 4,
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    topic: "dp",
    tags: ["array", "binary search"],
    leetcodeLink: "https://leetcode.com/problems/longest-increasing-subsequence/",
  },
  {
    id: 5,
    title: "Edit Distance",
    difficulty: "Hard",
    topic: "dp",
    tags: ["string", "recursion"],
    leetcodeLink: "https://leetcode.com/problems/edit-distance/",
  },
  {
    id: 6,
    title: "Regular Expression Matching",
    difficulty: "Hard",
    topic: "dp",
    tags: ["string", "recursion"],
    leetcodeLink: "https://leetcode.com/problems/regular-expression-matching/",
  },

  // Graph Problems
  {
    id: 7,
    title: "Number of Islands",
    difficulty: "Medium",
    topic: "graph",
    tags: ["dfs", "bfs", "matrix"],
    leetcodeLink: "https://leetcode.com/problems/number-of-islands/",
  },
  {
    id: 8,
    title: "Course Schedule",
    difficulty: "Medium",
    topic: "graph",
    tags: ["topological sort", "dfs"],
    leetcodeLink: "https://leetcode.com/problems/course-schedule/",
  },
  {
    id: 9,
    title: "Clone Graph",
    difficulty: "Medium",
    topic: "graph",
    tags: ["dfs", "bfs", "hash table"],
    leetcodeLink: "https://leetcode.com/problems/clone-graph/",
  },
  {
    id: 10,
    title: "Network Delay Time",
    difficulty: "Medium",
    topic: "graph",
    tags: ["dijkstra", "shortest path"],
    leetcodeLink: "https://leetcode.com/problems/network-delay-time/",
  },
  {
    id: 11,
    title: "Alien Dictionary",
    difficulty: "Hard",
    topic: "graph",
    tags: ["topological sort", "string"],
    leetcodeLink: "https://leetcode.com/problems/alien-dictionary/",
  },
  {
    id: 12,
    title: "Word Ladder",
    difficulty: "Hard",
    topic: "graph",
    tags: ["bfs", "string"],
    leetcodeLink: "https://leetcode.com/problems/word-ladder/",
  },

  // Sliding Window Problems
  {
    id: 13,
    title: "Maximum Subarray",
    difficulty: "Easy",
    topic: "sliding-window",
    tags: ["array", "divide and conquer"],
    leetcodeLink: "https://leetcode.com/problems/maximum-subarray/",
  },
  {
    id: 14,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    topic: "sliding-window",
    tags: ["hash table", "string", "two pointer"],
    leetcodeLink: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
  },
  {
    id: 15,
    title: "Minimum Size Subarray Sum",
    difficulty: "Medium",
    topic: "sliding-window",
    tags: ["array", "binary search", "two pointer"],
    leetcodeLink: "https://leetcode.com/problems/minimum-size-subarray-sum/",
  },
  {
    id: 16,
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    topic: "sliding-window",
    tags: ["queue", "array", "monotonic queue"],
    leetcodeLink: "https://leetcode.com/problems/sliding-window-maximum/",
  },

  // Arrays Problems
  {
    id: 17,
    title: "Two Sum",
    difficulty: "Easy",
    topic: "arrays",
    tags: ["hash table"],
    leetcodeLink: "https://leetcode.com/problems/two-sum/",
  },
  {
    id: 18,
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    topic: "arrays",
    tags: ["dynamic programming"],
    leetcodeLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
  },
  {
    id: 19,
    title: "Product of Array Except Self",
    difficulty: "Medium",
    topic: "arrays",
    tags: ["prefix sum"],
    leetcodeLink: "https://leetcode.com/problems/product-of-array-except-self/",
  },
  {
    id: 20,
    title: "Container With Most Water",
    difficulty: "Medium",
    topic: "arrays",
    tags: ["two pointer"],
    leetcodeLink: "https://leetcode.com/problems/container-with-most-water/",
  },
  {
    id: 21,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    topic: "arrays",
    tags: ["two pointer", "stack"],
    leetcodeLink: "https://leetcode.com/problems/trapping-rain-water/",
  },

  // Sorting Problems
  {
    id: 22,
    title: "Merge Sorted Array",
    difficulty: "Easy",
    topic: "sorting",
    tags: ["array", "two pointer"],
    leetcodeLink: "https://leetcode.com/problems/merge-sorted-array/",
  },
  {
    id: 23,
    title: "Sort Colors",
    difficulty: "Medium",
    topic: "sorting",
    tags: ["array", "two pointer"],
    leetcodeLink: "https://leetcode.com/problems/sort-colors/",
  },
  {
    id: 24,
    title: "Merge Intervals",
    difficulty: "Medium",
    topic: "sorting",
    tags: ["array"],
    leetcodeLink: "https://leetcode.com/problems/merge-intervals/",
  },

  // Trees Problems
  {
    id: 25,
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    topic: "trees",
    tags: ["dfs", "recursion"],
    leetcodeLink: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
  },
  {
    id: 26,
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    topic: "trees",
    tags: ["dfs", "recursion"],
    leetcodeLink: "https://leetcode.com/problems/validate-binary-search-tree/",
  },
  {
    id: 27,
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    topic: "trees",
    tags: ["bfs"],
    leetcodeLink: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
  },
  {
    id: 28,
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    topic: "trees",
    tags: ["design", "string"],
    leetcodeLink: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
  },

  // Linked List Problems
  {
    id: 29,
    title: "Reverse Linked List",
    difficulty: "Easy",
    topic: "linked-list",
    tags: ["recursion"],
    leetcodeLink: "https://leetcode.com/problems/reverse-linked-list/",
  },
  {
    id: 30,
    title: "Linked List Cycle",
    difficulty: "Easy",
    topic: "linked-list",
    tags: ["two pointer", "hash table"],
    leetcodeLink: "https://leetcode.com/problems/linked-list-cycle/",
  },
  {
    id: 31,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    topic: "linked-list",
    tags: ["recursion"],
    leetcodeLink: "https://leetcode.com/problems/merge-two-sorted-lists/",
  },
  {
    id: 32,
    title: "LRU Cache",
    difficulty: "Medium",
    topic: "linked-list",
    tags: ["hash table", "design"],
    leetcodeLink: "https://leetcode.com/problems/lru-cache/",
  },
]

// Available topics for filtering
const topics = [
  { value: "all", label: "All Topics" },
  { value: "dp", label: "Dynamic Programming" },
  { value: "graph", label: "Graph" },
  { value: "sliding-window", label: "Sliding Window" },
  { value: "sorting", label: "Sorting" },
  { value: "arrays", label: "Arrays" },
  { value: "trees", label: "Trees" },
  { value: "linked-list", label: "Linked List" },
]

// Difficulty levels for filtering
const difficulties = [
  { value: "all", label: "All Difficulties" },
  { value: "Easy", label: "Easy" },
  { value: "Medium", label: "Medium" },
  { value: "Hard", label: "Hard" },
]

// Status options for filtering
const statusOptions = [
  { value: "all", label: "All Problems" },
  { value: "completed", label: "Completed" },
  { value: "incomplete", label: "Incomplete" },
]

// Extract all unique tags from problems
const allTags = Array.from(new Set(problemsData.flatMap((problem) => problem.tags))).sort()

export default function ProblemsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toast } = useToast()
  const topicParam = searchParams.get("topic") || "all"
  const difficultyParam = searchParams.get("difficulty") || "all"
  const pageParam = Number.parseInt(searchParams.get("page") || "1")
  const statusParam = searchParams.get("status") || "all"

  const [currentPage, setCurrentPage] = useState(pageParam)
  const [selectedTopic, setSelectedTopic] = useState(topicParam)
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficultyParam)
  const [selectedStatus, setSelectedStatus] = useState(statusParam)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isSearchSticky, setIsSearchSticky] = useState(false)

  // Get progress store functions
  const { completedProblems, markProblemCompleted, getCompletionPercentage, getTotalCompletionPercentage } =
    useProgressStore()

  const itemsPerPage = 8

  // Add completed property to problems
  const problemsWithCompletion = problemsData.map((problem) => ({
    ...problem,
    completed: !!completedProblems[problem.id],
  }))

  // Filter problems based on selected filters
  const filteredProblems = problemsWithCompletion.filter((problem) => {
    const topicMatch = selectedTopic === "all" || problem.topic === selectedTopic
    const difficultyMatch = selectedDifficulty === "all" || problem.difficulty === selectedDifficulty
    const statusMatch =
      selectedStatus === "all" ||
      (selectedStatus === "completed" && problem.completed) ||
      (selectedStatus === "incomplete" && !problem.completed)
    const searchMatch = searchQuery === "" || problem.title.toLowerCase().includes(searchQuery.toLowerCase())
    const tagsMatch = selectedTags.length === 0 || selectedTags.some((tag) => problem.tags.includes(tag))

    return topicMatch && difficultyMatch && statusMatch && searchMatch && tagsMatch
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredProblems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProblems = filteredProblems.slice(startIndex, endIndex)

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams()
    if (selectedTopic !== "all") params.set("topic", selectedTopic)
    if (selectedDifficulty !== "all") params.set("difficulty", selectedDifficulty)
    if (selectedStatus !== "all") params.set("status", selectedStatus)
    if (currentPage > 1) params.set("page", currentPage.toString())

    router.push(`/problems?${params.toString()}`)
  }, [selectedTopic, selectedDifficulty, selectedStatus, currentPage, router])

  // Handle scroll for sticky search bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsSearchSticky(scrollPosition > 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle topic change
  const handleTopicChange = (value: string) => {
    setSelectedTopic(value)
    setCurrentPage(1) // Reset to first page when filter changes
  }

  // Handle difficulty change
  const handleDifficultyChange = (value: string) => {
    setSelectedDifficulty(value)
    setCurrentPage(1) // Reset to first page when filter changes
  }

  // Handle status change
  const handleStatusChange = (value: string) => {
    setSelectedStatus(value)
    setCurrentPage(1) // Reset to first page when filter changes
  }

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1) // Reset to first page when search changes
  }

  // Handle tag selection
  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
    setCurrentPage(1) // Reset to first page when tags change
  }

  // Handle problem completion toggle
  const handleProblemToggle = (problemId: number, completed: boolean) => {
    markProblemCompleted(problemId, completed)

    toast({
      title: completed ? "Problem marked as completed" : "Problem marked as incomplete",
      description: "Your progress has been saved",
      variant: "success",
    })
  }

  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "success"
      case "Medium":
        return "warning"
      case "Hard":
        return "danger"
      default:
        return "default"
    }
  }

  // Calculate topic progress percentages
  const topicProgressPercentages = topics
    .filter((topic) => topic.value !== "all")
    .map((topic) => ({
      topic: topic.label,
      percentage: getCompletionPercentage(topic.value, problemsWithCompletion),
    }))

  // Calculate total progress percentage
  const totalProgressPercentage = getTotalCompletionPercentage(problemsWithCompletion)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0,transparent_70%)]"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-4">
            Practice Problems
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Sharpen your skills with these carefully selected problems. Filter by topic and difficulty to find the
            perfect challenge.
          </p>
        </div>
      </div>

      {/* Progress Section */}
      <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold text-green-400 mb-4">Your Progress</h2>

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-300">Overall Progress</span>
            <span className="text-green-400">{totalProgressPercentage}%</span>
          </div>
          <Progress value={totalProgressPercentage} className="h-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {topicProgressPercentages.map((item, index) => (
            <div key={index} className="bg-gray-800/50 rounded-md p-3">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-300">{item.topic}</span>
                <span className="text-sm text-green-400">{item.percentage}%</span>
              </div>
              <Progress value={item.percentage} className="h-1.5" />
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filters - Sticky on scroll */}
      <div
        className={`${isSearchSticky ? "sticky top-16 z-40 py-4 bg-gray-950/95 backdrop-blur-md border-b border-gray-800 shadow-lg transition-all duration-300" : ""}`}
      >
        <div className="flex flex-col space-y-4 mb-8">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search problems..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 bg-gray-900 border-gray-700 focus:border-green-500/50"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={selectedTopic} onValueChange={handleTopicChange}>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-gray-200">
                <SelectValue placeholder="Select Topic" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700 text-gray-200">
                {topics.map((topic) => (
                  <SelectItem key={topic.value} value={topic.value}>
                    {topic.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDifficulty} onValueChange={handleDifficultyChange}>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-gray-200">
                <SelectValue placeholder="Select Difficulty" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700 text-gray-200">
                {difficulties.map((difficulty) => (
                  <SelectItem key={difficulty.value} value={difficulty.value}>
                    {difficulty.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={handleStatusChange}>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-gray-200">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700 text-gray-200">
                {statusOptions.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="relative">
              <Button
                variant="outline"
                className="w-full border-gray-700 text-gray-200 flex justify-between items-center"
              >
                <span className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Tags
                </span>
                <Badge className="ml-2 bg-green-500/20 text-green-400">{selectedTags.length}</Badge>
              </Button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "success" : "outline"}
                className="cursor-pointer transition-all"
                onClick={() => handleTagToggle(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Problems Grid */}
      {currentProblems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentProblems.map((problem) => (
            <Card
              key={problem.id}
              className={`bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10 ${
                problem.completed ? "border-l-4 border-l-green-500" : ""
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg text-green-400">{problem.title}</CardTitle>
                  <Switch
                    checked={problem.completed}
                    onCheckedChange={(checked) => handleProblemToggle(problem.id, checked)}
                    aria-label={`Mark ${problem.title} as ${problem.completed ? "incomplete" : "completed"}`}
                  />
                </div>
                <CardDescription className="flex justify-between items-center">
                  <Badge variant={getDifficultyColor(problem.difficulty)}>{problem.difficulty}</Badge>
                  <span className="text-gray-500 text-sm capitalize">{problem.topic.replace("-", " ")}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-400">
                <div className="flex flex-wrap gap-1 mb-2">
                  {problem.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p>Solve this problem to improve your {problem.topic.replace("-", " ")} skills.</p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-green-500/50 text-green-400 hover:bg-green-500/10"
                >
                  <Link
                    href={problem.leetcodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on LeetCode
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-900/50 border border-gray-800 rounded-lg">
          <p className="text-gray-400">No problems found with the selected filters.</p>
          <Button
            variant="outline"
            className="mt-4 border-green-500/50 text-green-400 hover:bg-green-500/10"
            onClick={() => {
              setSelectedTopic("all")
              setSelectedDifficulty("all")
              setSelectedStatus("all")
              setSelectedTags([])
              setSearchQuery("")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-green-400"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                size="icon"
                onClick={() => handlePageChange(page)}
                className={
                  page === currentPage
                    ? "bg-green-500 text-black hover:bg-green-600"
                    : "border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-green-400"
                }
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-green-400"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Discussion Section */}
      <DiscussionSection />
    </div>
  )
}
