import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="w-full bg-white shadow-md py-4 sticky">
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

      <main className="container mx-auto flex flex-col items-center text-center mt-12 px-4 flex-grow">
        <h2 className="text-4xl font-bold text-gray-800">Hi, I’m Zufar Athoya Bahar</h2>
        <p className="text-lg text-gray-600 mt-4">A passionate developer with experience in building web applications and mobile apps. I specialize in Django and mobile development, aiming to create solutions that help improve user experience and efficiency.</p>
git push -u origin maio
        <div className="flex space-x-4 mt-6">
          <Link href="/about">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">About Me</button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Contact</button>
          </Link>
        </div>

        <section className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white shadow-md rounded-lg p-4">
              <Image src="/image/BeautyHeaven.png" alt="Project 1" className="rounded-md" width={800} height={200} />
              <h4 className="text-gray-600 text-lg font-semibold mt-4">Project 1: E-Commerce with Django</h4>
              <Link href={"https://github.com/zufarathoya/WRPLDjango"} className="text-sm text-blue-600">GitHub</Link>
              <p className="text-sm text-gray-600 mt-2">This is an e-commerce website built with Django, allowing customers to browse and purchase items. Includes an admin panel for managing products, orders, and users, and a supplier panel for managing stock.</p>
              <p className="text-sm text-gray-600 mt-2">Technologies: Django, Python, MongoDB</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="grid grid-cols-3">
                <Image src="/image/BPJS1.png" alt="Project 2" width={150} height={200} className="rounded-md" />
                <Image src="/image/BPJS2.png" alt="Project 2" width={150} height={200} className="rounded-md" />
                <Image src="/image/BPJS3.png" alt="Project 2" width={150} height={200} className="rounded-md" />
              </div>
              <h4 className="text-gray-600 text-lg font-semibold mt-4">Project 2: Diabetes Monitoring Mobile App</h4>
              <Link href={"https://github.com/FajarMaulid/diabetec-melitus-assisstance_mobile-apps"} className="text-sm text-blue-600">GitHub</Link>
              <p className="text-sm text-gray-600 mt-2">A mobile application designed for monitoring the activities of diabetes patients, allowing users to log their daily routines, diet, and medication intake.</p>
              <p className="text-sm text-gray-600 mt-2">Technologies: React Native, MongoDB, ExpressJs</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <Image src="/image/counting.jpg" alt="Project 3" className="rounded-md" width={800} height={200} />
              <h4 className="text-gray-600 text-lg font-semibold mt-4">Project 3: People Counting</h4>
              <p className="text-sm text-gray-600 mt-2">Create a model to calculate the number of people in a room.</p>
              <p className="text-sm text-gray-600 mt-2">Technologies: Python, OpenCV, Machine Learning</p>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-12 mb-12">
          <h3 className="text-2xl font-bold text-gray-800">Skills & Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-gray-800">Web Development</h4>
              <p className="text-gray-600 mt-2">Experienced in building responsive and performant web applications using modern technologies like Django, React, and Node.js.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-gray-800">Mobile Development</h4>
              <p className="text-gray-600 mt-2">Proficient in developing mobile applications with React Native, delivering cross-platform apps with seamless performance.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer selalu di bawah */}
      <Footer />
    </div>
  );
}

