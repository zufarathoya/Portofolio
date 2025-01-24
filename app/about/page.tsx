import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 from-blue-50 to-white flex flex-col items-center">
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
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center">
          About Me
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Hi! I am <span className="font-bold text-blue-600">Zufar Athoya Bahar</span>, a student currently pursuing my studies at <span className="font-semibold text-blue-500">Universitas Gadjah Mada</span>. I am currently looking for internship opportunities in the field of <span className="font-semibold text-blue-500">Software Engineering and Machine Learning</span>.
          I have a strong passion for software development and am eager to learn more through hands-on industry experience.
        </p>

        <div className="mt-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <Image
            src="/image/profile.jpg"
            alt="My Photo"
            className="w-48 h-48 rounded-full shadow-lg object-cover object-center"
            width={200}
            height={200}
          />
          <div className="text-center lg:text-left">
            <p className="text-lg text-gray-600">
              Although I am still in the learning phase, I have developed several skills through academic projects and self-study, including:
            </p>
            <ul className="list-disc text-gray-600 mt-4 ml-6">
              <li>Web application development using HTML, CSS, and JavaScript</li>
              <li>Application development with frameworks like React.js and Next.js</li>
              <li>Database management using MySQL and MongoDB</li>
            </ul>
            <p className="mt-4 text-lg text-gray-600">
              I am eager to gain internship experience to further enhance my skills and contribute to an innovative software development team.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Me</h2>
          <p className="text-gray-600">
            Email:{" "}
            <a
              href="zufarathoyabahar@mail.ugm.ac.id"
              className="text-blue-500 hover:underline"
            >
              zufarathoyabahar@mail.ugm.ac.id 
            </a>
          </p>
          <p className="text-gray-600">
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/zufarathoyabahar"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/username
            </a>
          </p>
          <p className="text-gray-600">
            GitHub:{" "}
            <a
              href="https://github.com/username"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/username
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

