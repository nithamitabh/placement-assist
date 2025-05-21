"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { ExternalLink, ChevronLeft, ChevronRight, Search, Filter, X } from "lucide-react"
import { useProgressStore } from "@/lib/progress-store"
import { useToast } from "@/hooks/use-toast"
import DiscussionSection from "@/components/discussion-section"

// Mock problem data
const problemsData = [
  // DP Problems
  {
    id: 1,
    title: "Fibonacci Number",
    difficulty: "Easy",
    topic: "dp",
    leetcodeLink: "https://leetcode.com/problems/fibonacci-number/",
    tags: ["Recursion", "Memoization"],
  },
  {
    id: 2,
    title: "Climbing Stairs",
    difficulty: "Easy",
    topic: "dp",
    leetcodeLink: "https://leetcode.com/problems/climbing-stairs/",
    tags: ["Recursion", "Fibonacci"],
  },
  {
    id: 3,
    title: "Coin Change",
    difficulty: "Medium",
    topic: "dp",
    leetcodeLink: "https://leetcode.com/problems/coin-change/",
    tags: ["Knapsack", "Optimization"],
  },
  {
    id: 4,
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    topic: "dp",
    leetcodeLink: "https://leetcode.com/problems/longest-increasing-subsequence/",
    tags: ["Binary Search", "Subsequence"],
  },
  {
    id: 5,
    title: "Edit Distance",
    difficulty: "Hard",
    topic: "dp",
    leetcodeLink: "https://leetcode.com/problems/edit-distance/",
    tags: ["String", "Levenshtein"],
  },
  {
    id: 6,
    title: "Regular Expression Matching",
    difficulty: "Hard",
    topic: "dp",
    leetcodeLink: "https://leetcode.com/problems/regular-expression-matching/",
    tags: ["String", "Pattern Matching"],
  },

  // Graph Problems
  {
    id: 7,
    title: "Number of Islands",
    difficulty: "Medium",
    topic: "graph",
    leetcodeLink: "https://leetcode.com/problems/number-of-islands/",
    tags: ["DFS", "BFS", "Matrix"],
  },
  {
    id: 8,
    title: "Course Schedule",
    difficulty: "Medium",
    topic: "graph",
    leetcodeLink: "https://leetcode.com/problems/course-schedule/",
    tags: ["Topological Sort", "Cycle Detection"],
  },
  {
    id: 9,
    title: "Clone Graph",
    difficulty: "Medium",
    topic: "graph",
    leetcodeLink: "https://leetcode.com/problems/clone-graph/",
    tags: ["DFS", "Hash Table"],
  },
  {
    id: 10,
    title: "Network Delay Time",
    difficulty: "Medium",
    topic: "graph",
    leetcodeLink: "https://leetcode.com/problems/network-delay-time/",
    tags: ["Dijkstra", "Shortest Path"],
  },
  {
    id: 11,
    title: "Alien Dictionary",
    difficulty: "Hard",
    topic: "graph",
    leetcodeLink: "https://leetcode.com/problems/alien-dictionary/",
    tags: ["Topological Sort", "String"],
  },
  {
    id: 12,
    title: "Word Ladder",
    difficulty: "Hard",
    topic: "graph",
    leetcodeLink: "https://leetcode.com/problems/word-ladder/",
    tags: ["BFS", "String"],
  },

  // Sliding Window Problems
  {
    id: 13,
    title: "Maximum Subarray",
    difficulty: "Easy",
    topic: "sliding-window",
    leetcodeLink: "https://leetcode.com/problems/maximum-subarray/",
    tags: ["Kadane's Algorithm", "Array"],
  },
  {
    id: 14,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    topic: "sliding-window",
    leetcodeLink: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    tags: ["Hash Table", "String"],
  },
  {
    id: 15,
    title: "Minimum Size Subarray Sum",
    difficulty: "Medium",
    topic: "sliding-window",
    leetcodeLink: "https://leetcode.com/problems/minimum-size-subarray-sum/",
    tags: ["Array", "Two Pointers"],
  },
  {
    id: 16,
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    topic: "sliding-window",
    leetcodeLink: "https://leetcode.com/problems/sliding-window-maximum/",
    tags: ["Deque", "Monotonic Queue"],
  },

  // Arrays Problems
  {
    id: 17,
    title: "Two Sum",
    difficulty: "Easy",
    topic: "arrays",
    leetcodeLink: "https://leetcode.com/problems/two-sum/",
    tags: ["Hash Table", "One Pass"],
  },
  {
    id: 18,
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    topic: "arrays",
    leetcodeLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    tags: ["Dynamic Programming", "Kadane"],
  },
  {
    id: 19,
    title: "Product of Array Except Self",
    difficulty: "Medium",
    topic: "arrays",
    leetcodeLink: "https://leetcode.com/problems/product-of-array-except-self/",
    tags: ["Prefix Sum", "Postfix Sum"],
  },
  {
    id: 20,
    title: "Container With Most Water",
    difficulty: "Medium",
    topic: "arrays",
    leetcodeLink: "https://leetcode.com/problems/container-with-most-water/",
    tags: ["Two Pointers", "Greedy"],
  },
  {
    id: 21,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    topic: "arrays",
    leetcodeLink: "https://leetcode.com/problems/trapping-rain-water/",
    tags: ["Two Pointers", "Stack"],
  },

  // Sorting Problems
  {
    id: 22,
    title: "Merge Sorted Array",
    difficulty: "Easy",
    topic: "sorting",
    leetcodeLink: "https://leetcode.com/problems/merge-sorted-array/",
    tags: ["Two Pointers", "Array"],
  },
  {
    id: 23,
    title: "Sort Colors",
    difficulty: "Medium",
    topic: "sorting",
    leetcodeLink: "https://leetcode.com/problems/sort-colors/",
    tags: ["Dutch National Flag", "One Pass"],
  },
  {
    id: 24,
    title: "Merge Intervals",
    difficulty: "Medium",
    topic: "sorting",
    leetcodeLink: "https://leetcode.com/problems/merge-intervals/",
    tags: ["Array", "Greedy"],
  },

  // Trees Problems
  {
    id: 25,
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    topic: "trees",
    leetcodeLink: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    tags: ["DFS", "Recursion"],
  },
  {
    id: 26,
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    topic: "trees",
    leetcodeLink: "https://leetcode.com/problems/validate-binary-search-tree/",
    tags: ["DFS", "Inorder Traversal"],
  },
  {
    id: 27,
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    topic: "trees",
    leetcodeLink: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    tags: ["BFS", "Queue"],
  },
  {
    id: 28,
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    topic: "trees",
    leetcodeLink: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    tags: ["DFS", "Design"],
  },

  // Linked List Problems
  {
    id: 29,
    title: "Reverse Linked List",
    difficulty: "Easy",
    topic: "linked-list",
    leetcodeLink: "https://leetcode.com/problems/reverse-linked-list/",
    tags: ["Recursion", "Iterative"],
  },
  {
    id: 30,
    title: "Linked List Cycle",
    difficulty: "Easy",
    topic: "linked-list",
    leetcodeLink: "https://leetcode.com/problems/linked-list-cycle/",
    tags: ["Two Pointers", "Floyd's Algorithm"],
  },
  {
    id: 31,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    topic: "linked-list",
    leetcodeLink: "https://leetcode.com/problems/merge-two-sorted-lists/",
    tags: ["Recursion", "Dummy Head"],
  },
  {
    id: 32,
    title: "LRU Cache",
    difficulty: "Medium",
    topic: "linked-list",
    leetcodeLink: "https://leetcode.com/problems/lru-cache/",
    tags: ["Hash Table", "Doubly Linked List"],
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
const statuses = [
  { value: "all", label: "All Problems" },
  { value: "completed", label: "Completed" },
  { value: "pending", label: "Pending" },
]

export default function EnhancedProblemsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const topicParam = searchParams.get("topic") || "all"
  const difficultyParam = searchParams.get("difficulty") || "all"
  const statusParam = searchParams.get("status") || "all"
  const searchParam = searchParams.get("search") || ""
  const pageParam = Number.parseInt(searchParams.get("page") || "1")

  const [currentPage, setCurrentPage] = useState(pageParam)
  const [selectedTopic, setSelectedTopic] = useState(topicParam)
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficultyParam)
  const [selectedStatus, setSelectedStatus] = useState(statusParam)
  const [searchQuery, setSearchQuery] = useState(searchParam)
  const [showFilters, setShowFilters] = useState(false)

  const { completedProblems, markProblemCompleted, getCompletionPercentage, getTotalCompletionPercentage } =
    useProgressStore()
  const { toast } = useToast()

  const searchInputRef = useRef<HTMLInputElement>(null)
  const filterSectionRef = useRef<HTMLDivElement>(null)

  const itemsPerPage = 8

  // Convert problems to the format expected by the progress store
  const problemsWithCompletion = problemsData.map((problem) => ({
    ...problem,
    completed: !!completedProblems[problem.id],
  }))

  // Filter problems based on selected filters and search query
  const filteredProblems = problemsWithCompletion.filter((problem) => {
    const topicMatch = selectedTopic === "all" || problem.topic === selectedTopic
    const difficultyMatch = selectedDifficulty === "all" || problem.difficulty === selectedDifficulty
    const statusMatch =
      selectedStatus === "all" ||
      (selectedStatus === "completed" && problem.completed) ||
      (selectedStatus === "pending" && !problem.completed)

    const searchMatch =
      searchQuery === "" ||
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return topicMatch && difficultyMatch && statusMatch && searchMatch
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
    if (searchQuery !== "") params.set("search", searchQuery)
    if (currentPage > 1) params.set("page", currentPage.toString())

    router.push(`/problems/enhanced?${params.toString()}`)
  }, [selectedTopic, selectedDifficulty, selectedStatus, searchQuery, currentPage, router])

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

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchInputRef.current) {
      setSearchQuery(searchInputRef.current.value)
      setCurrentPage(1) // Reset to first page when search changes
    }
  }

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // Handle problem completion toggle
  const handleToggleCompletion = (problemId: number, completed: boolean) => {
    markProblemCompleted(problemId, completed)

    toast({
      title: completed ? "Problem Marked as Completed" : "Problem Marked as Pending",
      description: completed
        ? "Your progress has been updated. Keep up the good work!"
        : "Problem marked for review. You can revisit it later.",
      variant: completed ? "success" : "default",
    })
  }

  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400"
      case "Medium":
        return "text-yellow-400"
      case "Hard":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  // Get difficulty badge variant
  const getDifficultyBadge = (difficulty: string) => {
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

  // Sticky header effect for filters
  useEffect(() => {
    const handleScroll = () => {
      if (filterSectionRef.current) {
        if (window.scrollY > 300) {
          filterSectionRef.current.classList.add("sticky-filters")
        } else {
          filterSectionRef.current.classList.remove("sticky-filters")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0,transparent_70%)]"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-4">
            Practice Problems
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Sharpen your skills with these carefully selected problems. Track your progress and filter by topic,
            difficulty, and completion status.
          </p>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-green-400 mb-4">Your Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Overall Progress */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-green-400">Overall Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Completed</span>
                  <span className="text-green-400 font-medium">
                    {Object.keys(completedProblems).length} / {problemsData.length}
                  </span>
                </div>
                <Progress value={getTotalCompletionPercentage(problemsWithCompletion)} />
              </div>
            </CardContent>
          </Card>

          {/* Topic Progress Cards - Show 3 most popular topics */}
          {["dp", "arrays", "graph"].map((topic) => {
            const topicProblems = problemsWithCompletion.filter((p) => p.topic === topic)
            const percentage = getCompletionPercentage(topic, problemsWithCompletion)
            const topicLabel = topics.find((t) => t.value === topic)?.label || topic

            return (
              <Card key={topic} className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-green-400">{topicLabel}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Completed</span>
                      <span className="text-green-400 font-medium">
                        {topicProblems.filter((p) => p.completed).length} / {topicProblems.length}
                      </span>
                    </div>
                    <Progress value={percentage} />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Filters Section */}
      <div
        ref={filterSectionRef}
        className="mb-8 bg-gray-900/80 backdrop-blur-md p-4 rounded-lg border border-gray-800 transition-all duration-300"
      >
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              ref={searchInputRef}
              type="text"
              placeholder="Search problems by title or tag..."
              className="pl-10 bg-gray-800 border-gray-700 text-gray-200 focus:border-green-500"
              defaultValue={searchQuery}
            />
            <Button
              type="submit"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 bg-green-500 hover:bg-green-600 text-black"
            >
              Search
            </Button>
          </div>
        </form>

        {/* Filter Toggle Button */}
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="w-full mb-4 border-gray-700 text-gray-300 hover:text-green-400 hover:border-green-500/50"
        >
          <Filter className="mr-2 h-4 w-4" />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Topic</label>
              <Select value={selectedTopic} onValueChange={handleTopicChange}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-200">
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
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Difficulty</label>
              <Select value={selectedDifficulty} onValueChange={handleDifficultyChange}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-200">
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
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">Status</label>
              <Select value={selectedStatus} onValueChange={handleStatusChange}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-gray-200">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700 text-gray-200">
                  {statuses.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </div>

      {/* Problems Grid */}
      {currentProblems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {currentProblems.map((problem) => (
            <Card
              key={problem.id}
              className={`bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10 ${
                problem.completed ? "border-green-500/30 bg-green-500/5" : ""
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant={getDifficultyBadge(problem.difficulty)}>{problem.difficulty}</Badge>
                  <div className="flex items-center">
                    <span className="text-gray-400 text-sm mr-2">Completed</span>
                    <Switch
                      checked={problem.completed}
                      onCheckedChange={(checked) => handleToggleCompletion(problem.id, checked)}
                    />
                  </div>
                </div>
                <CardTitle className="text-lg text-green-400 mt-2">{problem.title}</CardTitle>
                <CardDescription className="flex items-center">
                  <span className="text-gray-500 text-sm capitalize">{problem.topic.replace("-", " ")}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {problem.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-800/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
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
        <div className="text-center py-12 bg-gray-900/50 rounded-lg border border-gray-800">
          <X className="h-12 w-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg mb-2">No problems found</p>
          <p className="text-gray-500 mb-6">Try adjusting your filters or search query</p>
          <Button
            onClick={() => {
              setSelectedTopic("all")
              setSelectedDifficulty("all")
              setSelectedStatus("all")
              setSearchQuery("")
              if (searchInputRef.current) searchInputRef.current.value = ""
            }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black"
          >
            Reset Filters
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

      {/* CSS for sticky filters */}
      <style jsx global>{`
        .sticky-filters {
          position: sticky;
          top: 4rem;
          z-index: 40;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          border-color: rgba(16, 185, 129, 0.2);
        }
      `}</style>
    </div>
  )
}
