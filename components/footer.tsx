import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-12 py-4 bg-gray-800 w-full text-white text-center py-4 mt-auto">
      <p>© {new Date().getFullYear()} Zufar Athoya Bahar. All Rights Reserved.</p>
      <div className="flex justify-center mt-4 space-x-6">
        <Link href="https://github.com/zufarathoya"
          className="text-white hover:text-gray-400 transition duration-300">GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/zufar-athoya-bahar-780ba4248/"
          className="text-white hover:text-gray-400 transition duration-300">LinkedIn
        </Link>
      </div>
    </footer>
  )
}
