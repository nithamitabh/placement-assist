import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Core Subjects",
    description: "Fundamental computer science subjects",
    topics: [
      {
        name: "Computer Networks",
        slug: "cn",
        excerpt: "Learn about networks, protocols, and architecture.",
      },
      {
        name: "Object Oriented Programming",
        slug: "oops",
        excerpt: "Master OOP concepts and design patterns.",
      },
      {
        name: "Operating Systems",
        slug: "os",
        excerpt: "Explore OS concepts, processes, and memory.",
      },
      {
        name: "Database Management",
        slug: "dbms",
        excerpt: "Understand DBMS, normalization, and SQL.",
      },
    ],
  },
  {
    title: "Aptitude",
    description: "Prepare for aptitude tests",
    topics: [
      {
        name: "Verbal Reasoning",
        slug: "verbal",
        excerpt: "Sharpen your verbal reasoning skills.",
      },
      {
        name: "Quantitative Aptitude",
        slug: "quant",
        excerpt: "Practice quantitative aptitude problems.",
      },
      {
        name: "Logical Reasoning",
        slug: "logical",
        excerpt: "Develop logical thinking and problem-solving.",
      },
    ],
  },
  {
    title: "Soft Skills",
    description: "Enhance your professional skills",
    topics: [
      {
        name: "English Communication",
        slug: "english",
        excerpt: "Improve your English for interviews.",
      },
      {
        name: "HR Interview Questions",
        slug: "hr",
        excerpt: "Prepare for common HR interview questions.",
      },
    ],
  },
];

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Featured Placements Section */}
      <div className="mb-12 p-8 rounded-xl bg-gradient-to-r from-green-900/60 to-emerald-900/60 shadow-lg">
        <h1 className="text-4xl font-bold text-green-300 mb-2 text-center">
          Placements Blog
        </h1>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-4">
          Your one-stop resource for placement preparation. Explore guides,
          tips, and experiences to ace your interviews!
        </p>
      </div>

      {/* Blog Feed */}
      <div className="space-y-10">
        {categories.map((category, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.topics.map((topic, tIdx) => (
                <Card
                  key={tIdx}
                  className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-green-400">
                      {topic.name}
                    </CardTitle>
                    <CardDescription>{topic.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400">
                      {category.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-green-500/80 to-emerald-600/80 hover:from-green-500 hover:to-emerald-600 text-black"
                    >
                      <Link
                        href={`/blogs/${topic.slug}`}
                        className="flex items-center justify-center"
                      >
                        Read More
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
  );
}
