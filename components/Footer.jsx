import Link from 'next/link'
import { AiFillHeart } from 'react-icons/ai'

function Footer() {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
      <Link href="https://aminblog.vercel.app/">
        <a
          className="flex items-center justify-center gap-2"
          rel="noopener noreferrer"
        >
          Made with <AiFillHeart color="red" /> by Amin Meraji
        </a>
      </Link>
    </footer>
  )
}

export default Footer
