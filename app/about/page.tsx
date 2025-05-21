import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Button
        asChild
        variant="outline"
        className="mb-6 border-green-500/50 text-green-400 hover:bg-green-500/10"
      >
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="relative mb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0,transparent_70%)]"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-4">
            About PlacementAssist
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            A platform designed to help students prepare for placement
            interviews and technical assessments.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-green-400">Our Mission</h2>
          <p className="text-gray-300">
            PlacementAssist was created with a simple mission: to provide
            students with a comprehensive, accessible, and structured resource
            for placement preparation.It will help to manage all your progress at one place. 
            We believe that every student deserves
            access to quality learning materials that can help them secure their
            dream job.
          </p>
          <p className="text-gray-300">
            Our platform combines theoretical knowledge with practical
            problem-solving to ensure that students are well-prepared for both
            technical interviews and aptitude tests.
          </p>

          <h2 className="text-2xl font-bold text-green-400 pt-4">Features</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Comprehensive coverage of core computer science subjects</li>
            <li>• Curated collection of DSA problems with LeetCode links</li>
            <li>• Aptitude test preparation materials</li>
            <li>• Soft skills and HR interview guidance</li>
            <li>• MDX-based blog for easy content consumption</li>
            <li>• Mobile-responsive design for learning on the go</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-green-400">
            About the Creator
          </h2>
          <p className="text-gray-300">
            Hi, I'm Amitabh, a passionate developer and student. I created
            PlacementAssist based on my own experience with the placement
            process and the challenges I faced while preparing for technical
            interviews.
          </p>
          <p className="text-gray-300">
            My goal is to continuously improve this platform by adding more
            resources, practice problems, and interactive features to make the
            learning experience even better.
          </p>

          <h2 className="text-2xl font-bold text-green-400 pt-4">
            Connect With Me
          </h2>
          <div className="flex flex-col space-y-4">
            <Button
              asChild
              variant="outline"
              className="border-green-500/50 text-green-400 hover:bg-green-500/10 justify-start"
            >
              <Link
                href="https://github.com/nithamitabh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-green-500/50 text-green-400 hover:bg-green-500/10 justify-start"
            >
              <Link
                href="https://www.linkedin.com/in/amitabh-kumar-392671231"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-green-500/50 text-green-400 hover:bg-green-500/10 justify-start"
            >
              <Link
                href="mailto:harsh36@gmail.com"
                className="flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-green-400 mb-4">Contribute</h2>
        <p className="text-gray-300 mb-6">
          PlacementAssist is an open-source project. If you'd like to contribute
          by adding more resources, fixing bugs, or suggesting improvements,
          please visit our GitHub repository.
        </p>
        <Button
          asChild
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-medium"
        >
          <Link
            href="https://github.com/Amitabh2025/placement-assist"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Github className="mr-2 h-5 w-5" />
            Contribute on GitHub
          </Link>
        </Button>
      </div>
    </div>
  );
}
