"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface Problem {
  id: number
  title: string
  topic: string
  completed: boolean
}

interface ProgressState {
  completedProblems: Record<number, boolean>
  markProblemCompleted: (problemId: number, completed: boolean) => void
  getCompletionPercentage: (topic: string, problems: Problem[]) => number
  getTotalCompletionPercentage: (problems: Problem[]) => number
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedProblems: {},

      markProblemCompleted: (problemId, completed) => {
        set((state) => ({
          completedProblems: {
            ...state.completedProblems,
            [problemId]: completed,
          },
        }))
      },

      getCompletionPercentage: (topic, problems) => {
        const topicProblems = problems.filter((p) => p.topic === topic)
        if (topicProblems.length === 0) return 0

        const completedCount = topicProblems.filter((p) => get().completedProblems[p.id]).length
        return Math.round((completedCount / topicProblems.length) * 100)
      },

      getTotalCompletionPercentage: (problems) => {
        if (problems.length === 0) return 0

        const completedCount = problems.filter((p) => get().completedProblems[p.id]).length
        return Math.round((completedCount / problems.length) * 100)
      },
    }),
    {
      name: "problem-progress",
    },
  ),
)
