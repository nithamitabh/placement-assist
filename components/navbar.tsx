"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Code, BookOpen, Brain, MessageSquare, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if user is logged in as guest
    const user = localStorage.getItem("user")
    if (user === "guest") {
      setIsLoggedIn(true)
    }
  }, [])

  const handleGuestLogin = () => {
    localStorage.setItem("user", "guest")
    setIsLoggedIn(true)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-green-400 neon-text">PlacementAssist</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6 text-green-400" /> : <Menu className="h-6 w-6 text-green-400" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Core Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center text-green-400 hover:text-green-300 hover:bg-gray-800/50"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Core
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border border-gray-800 text-gray-200 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
              <DropdownMenuItem asChild>
                <Link href="/blogs/cn" className="hover:text-green-400">
                  CN
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blogs/oops" className="hover:text-green-400">
                  OOPs
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blogs/os" className="hover:text-green-400">
                  OS
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blogs/dbms" className="hover:text-green-400">
                  DBMS
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Aptitude Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center text-green-400 hover:text-green-300 hover:bg-gray-800/50"
              >
                <Brain className="mr-2 h-4 w-4" />
                Aptitude
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border border-gray-800 text-gray-200 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
              <DropdownMenuItem asChild>
                <Link href="/blogs/verbal" className="hover:text-green-400">
                  Verbal
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blogs/quant" className="hover:text-green-400">
                  Quant
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blogs/logical" className="hover:text-green-400">
                  Logical
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Soft Skills Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center text-green-400 hover:text-green-300 hover:bg-gray-800/50"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Soft Skills
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border border-gray-800 text-gray-200 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
              <DropdownMenuItem asChild>
                <Link href="/blogs/english" className="hover:text-green-400">
                  English
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blogs/hr" className="hover:text-green-400">
                  HR Tricky
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* DSA Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center text-green-400 hover:text-green-300 hover:bg-gray-800/50"
              >
                <Code className="mr-2 h-4 w-4" />
                DSA
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border border-gray-800 text-gray-200 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
              <DropdownMenuItem asChild>
                <Link href="/problems?topic=dp" className="hover:text-green-400">
                  DP
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/problems?topic=graph" className="hover:text-green-400">
                  Graph
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/problems?topic=sliding-window" className="hover:text-green-400">
                  Sliding Window
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/problems?topic=sorting" className="hover:text-green-400">
                  Sorting
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/problems?topic=arrays" className="hover:text-green-400">
                  Arrays
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/problems?topic=trees" className="hover:text-green-400">
                  Trees
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/problems?topic=linked-list" className="hover:text-green-400">
                  Linked List
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* New Sections */}
          <Link href="/mock-interview">
            <Button
              variant="ghost"
              className="flex items-center text-green-400 hover:text-green-300 hover:bg-gray-800/50"
            >
              Mock Interview
            </Button>
          </Link>
        </nav>

        {/* Theme Toggle and Login Button */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          
          {isLoggedIn ? (
            <Button
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500/10 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
            >
              Guest User
            </Button>
          ) : (
            <Button
              onClick={handleGuestLogin}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-medium shadow-[0_0_10px_rgba(16,185,129,0.5)]"
            >
              Login as Guest
            </Button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-gray-950/95 border-b border-gray-800 p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <div className="border-b border-gray-800 pb-2">
                <p className="text-green-400 font-medium mb-2">Core</p>
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/blogs/cn" className="text-gray-300 hover:text-green-400">
                    CN
                  </Link>
                  <Link href="/blogs/oops" className="text-gray-300 hover:text-green-400">
                    OOPs
                  </Link>
                  <Link href="/blogs/os" className="text-gray-300 hover:text-green-400">
                    OS
                  </Link>
                  <Link href="/blogs/dbms" className="text-gray-300 hover:text-green-400">
                    DBMS
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-800 pb-2">
                <p className="text-green-400 font-medium mb-2">Aptitude</p>
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/blogs/verbal" className="text-gray-300 hover:text-green-400">
                    Verbal
                  </Link>
                  <Link href="/blogs/quant" className="text-gray-300 hover:text-green-400">
                    Quant
                  </Link>
                  <Link href="/blogs/logical" className="text-gray-300 hover:text-green-400">
                    Logical
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-800 pb-2">
                <p className="text-green-400 font-medium mb-2">Soft Skills</p>
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/blogs/english" className="text-gray-300 hover:text-green-400">
                    English
                  </Link>
                  <Link href="/blogs/hr\
