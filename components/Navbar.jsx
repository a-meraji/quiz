import Link from 'next/link'
import { BiHomeHeart } from 'react-icons/bi'

function Navbar() {
  return (
    <nav className="flex h-16 w-full items-center justify-between border-b p-10">
      <div>
        <Link href="/">
          <a>
            <BiHomeHeart className="w-6 h-6 text-yellow-400 hover:text-yellow-600" />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/exam/get-id">
          <a className="text-gray-600 hover:text-yellow-600 mr-4">exams</a>
        </Link>
        <Link href="/examiner/new-exam">
          <a className="text-gray-600 hover:text-yellow-600">create exam</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
