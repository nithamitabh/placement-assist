import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"

// Define the props type
type BlogPageProps = {
  params: {
    topic: string
  }
}

// Mock blog data
const blogData: Record<
  string,
  { title: string; description: string; articles: { title: string; description: string; link: string }[] }
> = {
  cn: {
    title: "Computer Networks",
    description: "Learn about computer networks, protocols, and network architecture.",
    articles: [
      {
        title: "OSI Model Explained",
        description: "A comprehensive guide to the 7 layers of the OSI model.",
        link: "https://www.geeksforgeeks.org/osi-model-in-computer-network/",
      },
      {
        title: "TCP vs UDP",
        description: "Understanding the differences between TCP and UDP protocols.",
        link: "https://www.geeksforgeeks.org/differences-between-tcp-and-udp/",
      },
      {
        title: "IP Addressing",
        description: "Learn about IP addressing, subnetting, and CIDR notation.",
        link: "https://www.geeksforgeeks.org/introduction-of-classful-ip-addressing/",
      },
      {
        title: "DNS Explained",
        description: "How the Domain Name System works and its importance.",
        link: "https://www.geeksforgeeks.org/domain-name-system-dns-in-application-layer/",
      },
    ],
  },
  oops: {
    title: "Object-Oriented Programming",
    description: "Master the concepts of object-oriented programming and design patterns.",
    articles: [
      {
        title: "OOP Principles",
        description: "The four main principles of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction.",
        link: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
      },
      {
        title: "Classes and Objects",
        description: "Understanding classes, objects, and their relationship.",
        link: "https://www.geeksforgeeks.org/classes-objects-java/",
      },
      {
        title: "Inheritance Types",
        description: "Different types of inheritance in OOP languages.",
        link: "https://www.geeksforgeeks.org/inheritance-in-java/",
      },
      {
        title: "Design Patterns",
        description: "Common design patterns and their implementations.",
        link: "https://www.geeksforgeeks.org/software-design-patterns/",
      },
    ],
  },
  os: {
    title: "Operating Systems",
    description: "Explore operating system concepts, processes, and memory management.",
    articles: [
      {
        title: "Process Management",
        description: "Understanding processes, threads, and scheduling algorithms.",
        link: "https://www.geeksforgeeks.org/operating-system-process-management-introduction/",
      },
      {
        title: "Memory Management",
        description: "Virtual memory, paging, and segmentation explained.",
        link: "https://www.geeksforgeeks.org/operating-system-memory-management-introduction/",
      },
      {
        title: "File Systems",
        description: "Different file systems and their implementations.",
        link: "https://www.geeksforgeeks.org/file-systems-in-operating-system/",
      },
      {
        title: "Deadlocks",
        description: "Understanding deadlocks, prevention, and recovery.",
        link: "https://www.geeksforgeeks.org/introduction-of-deadlock-in-operating-system/",
      },
    ],
  },
  dbms: {
    title: "Database Management Systems",
    description: "Learn about database design, normalization, and SQL queries.",
    articles: [
      {
        title: "SQL Basics",
        description: "Introduction to SQL and basic query operations.",
        link: "https://www.geeksforgeeks.org/sql-tutorial/",
      },
      {
        title: "Normalization",
        description: "Database normalization forms and their importance.",
        link: "https://www.geeksforgeeks.org/normal-forms-in-dbms/",
      },
      {
        title: "Transactions",
        description: "ACID properties and transaction management.",
        link: "https://www.geeksforgeeks.org/transaction-in-dbms/",
      },
      {
        title: "Indexing",
        description: "Database indexing techniques and their benefits.",
        link: "https://www.geeksforgeeks.org/indexing-in-databases-set-1/",
      },
    ],
  },
  verbal: {
    title: "Verbal Aptitude",
    description: "Improve your verbal reasoning and communication skills.",
    articles: [
      {
        title: "Reading Comprehension",
        description: "Techniques to improve reading comprehension skills.",
        link: "https://www.geeksforgeeks.org/reading-comprehension-for-cat-exam/",
      },
      {
        title: "Vocabulary Building",
        description: "Strategies to enhance your vocabulary for aptitude tests.",
        link: "https://www.geeksforgeeks.org/vocabulary-for-competitive-exams/",
      },
      {
        title: "Grammar Rules",
        description: "Essential grammar rules for verbal aptitude tests.",
        link: "https://www.geeksforgeeks.org/english-grammar-for-competitive-exams/",
      },
      {
        title: "Verbal Reasoning",
        description: "Practice verbal reasoning questions and techniques.",
        link: "https://www.geeksforgeeks.org/verbal-reasoning-for-competitive-exams/",
      },
    ],
  },
  quant: {
    title: "Quantitative Aptitude",
    description: "Master mathematical concepts and problem-solving techniques.",
    articles: [
      {
        title: "Number System",
        description: "Understanding number systems and their properties.",
        link: "https://www.geeksforgeeks.org/number-system-and-base-conversions/",
      },
      {
        title: "Percentages",
        description: "Solving percentage problems quickly and accurately.",
        link: "https://www.geeksforgeeks.org/percentages-for-competitive-exams/",
      },
      {
        title: "Time and Work",
        description: "Techniques to solve time and work problems.",
        link: "https://www.geeksforgeeks.org/time-and-work-for-cat-exam/",
      },
      {
        title: "Probability",
        description: "Basic probability concepts and problem-solving approaches.",
        link: "https://www.geeksforgeeks.org/probability-for-competitive-programming/",
      },
    ],
  },
  logical: {
    title: "Logical Reasoning",
    description: "Develop logical thinking and problem-solving abilities.",
    articles: [
      {
        title: "Logical Puzzles",
        description: "Solving logical puzzles and brain teasers.",
        link: "https://www.geeksforgeeks.org/logical-puzzles-for-interviews/",
      },
      {
        title: "Syllogisms",
        description: "Understanding and solving syllogism problems.",
        link: "https://www.geeksforgeeks.org/syllogism-for-competitive-exams/",
      },
      {
        title: "Coding-Decoding",
        description: "Techniques to solve coding and decoding problems.",
        link: "https://www.geeksforgeeks.org/coding-decoding-for-competitive-exams/",
      },
      {
        title: "Blood Relations",
        description: "Solving blood relation problems efficiently.",
        link: "https://www.geeksforgeeks.org/blood-relations-for-competitive-exams/",
      },
    ],
  },
  english: {
    title: "English Communication",
    description: "Enhance your English language skills for interviews and professional settings.",
    articles: [
      {
        title: "Business Communication",
        description: "Effective business communication strategies.",
        link: "https://www.geeksforgeeks.org/business-communication-for-interviews/",
      },
      {
        title: "Email Writing",
        description: "Guidelines for writing professional emails.",
        link: "https://www.geeksforgeeks.org/email-writing-tips-for-professionals/",
      },
      {
        title: "Public Speaking",
        description: "Techniques to improve public speaking skills.",
        link: "https://www.geeksforgeeks.org/public-speaking-tips-for-interviews/",
      },
      {
        title: "Interview Communication",
        description: "Communication strategies for job interviews.",
        link: "https://www.geeksforgeeks.org/communication-skills-for-interviews/",
      },
    ],
  },
  hr: {
    title: "HR Interview Questions",
    description: "Prepare for HR interviews with common questions and effective answers.",
    articles: [
      {
        title: "Tell Me About Yourself",
        description: "How to answer the most common HR interview question.",
        link: "https://www.geeksforgeeks.org/tell-me-about-yourself-interview-question/",
      },
      {
        title: "Strengths and Weaknesses",
        description: "Strategies to discuss your strengths and weaknesses.",
        link: "https://www.geeksforgeeks.org/strengths-and-weaknesses-interview-questions/",
      },
      {
        title: "Behavioral Questions",
        description: "Answering behavioral interview questions using the STAR method.",
        link: "https://www.geeksforgeeks.org/behavioral-interview-questions/",
      },
      {
        title: "Salary Negotiation",
        description: "Tips for effective salary negotiation during interviews.",
        link: "https://www.geeksforgeeks.org/salary-negotiation-tips-for-interviews/",
      },
    ],
  },
}

export default function BlogPage({ params }: BlogPageProps) {
  const topic = params.topic

  // Check if the topic exists in our data
  if (!blogData[topic]) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-green-400 mb-4">Topic Not Found</h1>
        <p className="text-gray-400 mb-8">The requested topic does not exist.</p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    )
  }

  const { title, description, articles } = blogData[topic]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Button asChild variant="outline" className="mb-6 border-green-500/50 text-green-400 hover:bg-green-500/10">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="relative mb-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0,transparent_70%)]"></div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-4">
              {title}
            </h1>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">{description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Card
            key={index}
            className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10"
          >
            <CardHeader>
              <CardTitle className="text-xl text-green-400">{article.title}</CardTitle>
              <CardDescription>{article.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                This article provides in-depth knowledge about {article.title.toLowerCase()} to help you prepare for
                placement interviews.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                variant="outline"
                className="w-full border-green-500/50 text-green-400 hover:bg-green-500/10"
              >
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read on GeeksForGeeks
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
