import Link from 'next/link';
import Footer from '../../components/footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/"> 
            <h1 className="text-2xl font-bold text-blue-600">Portfolio</h1> 
          </Link>
          <nav>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 mx-4">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 mx-4">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Contact Me</h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl">
        </p>
        
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <a
                href="mailto:zufarathoyabahar@mail.ugm.ac.id"
                className="text-blue-600 hover:underline"
              >
                zufarathoyabahar@mail.ugm.ac.id
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <h3 className="text-xl font-semibold text-gray-800">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/zufar-athoya-bahar-780ba4248/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                zufarathoyabahar
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <h3 className="text-xl font-semibold text-gray-800">GitHub</h3>
              <a
                href="https://github.com/zufarathoya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/zufarathoya
              </a>
            </div>
          </div>
        </div>

      </main>
    <Footer />
    </div>
  );
}

