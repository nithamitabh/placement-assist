import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">PlacementAssist</h3>
            <p className="text-gray-400">Your one-stop solution for all placement preparation needs.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">Blog</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors">
                  About Section
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-green-400 transition-colors">
                  My MDX Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/problems" className="text-gray-400 hover:text-green-400 transition-colors">
                  Practice Problems
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-400 hover:text-green-400 transition-colors">
                  Explore Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">All Rights Reserved @Amitabh2025</p>
        </div>
      </div>
    </footer>
  )
}
