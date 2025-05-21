import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { formatDistanceToNow } from "date-fns"

// Mock comments data
const comments = [
  {
    id: 1,
    author: "Aditya Verma",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "This explanation really helped me understand the concept better. Thanks for sharing!",
    timestamp: new Date(2025, 4, 10, 14, 30),
  },
  {
    id: 2,
    author: "Neha Singh",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "I was stuck on this problem for days. Your approach makes it so much clearer.",
    timestamp: new Date(2025, 4, 12, 9, 15),
  },
  {
    id: 3,
    author: "Rajesh Kumar",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Has anyone tried solving this using a different approach? I'm curious about alternative solutions.",
    timestamp: new Date(2025, 4, 15, 18, 45),
  },
]

export default function DiscussionSection() {
  return (
    <div className="mt-12 border-t border-gray-800 pt-8">
      <h3 className="text-2xl font-bold text-green-400 mb-6">Discussion</h3>

      {/* Comment form */}
      <div className="mb-8">
        <Textarea
          placeholder="Share your thoughts or ask a question..."
          className="bg-gray-900 border-gray-700 focus:border-green-500/50 mb-4 min-h-[100px]"
        />
        <div className="flex justify-end">
          <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-medium">
            Post Comment
          </Button>
        </div>
      </div>

      {/* Comments list */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <Avatar>
              <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.author} />
              <AvatarFallback className="bg-green-500/20 text-green-400">{comment.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <h4 className="font-medium text-green-400 mr-2">{comment.author}</h4>
                <span className="text-xs text-gray-500">
                  {formatDistanceToNow(comment.timestamp, { addSuffix: true })}
                </span>
              </div>
              <p className="text-gray-300">{comment.content}</p>
              <div className="mt-2">
                <button className="text-sm text-gray-400 hover:text-green-400 mr-4">Reply</button>
                <button className="text-sm text-gray-400 hover:text-green-400">Like</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
