import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <span className="text-white hover:text-gray-400 cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="text-white hover:text-gray-400 cursor-pointer">About</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="text-white hover:text-gray-400 cursor-pointer">Contact</span>
          </Link>
        </li>
        <li>
          <Link href="/store">
            <span className="text-white hover:text-gray-400 cursor-pointer">Store</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
