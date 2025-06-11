import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "About Me",
    content: (
      <div className="h-full flex flex-col lg:flex-row items-center justify-between gap-8 p-4">
        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-6xl font-bold text-slate-900">Hello, I'm John Doe</h2>
            <p className="text-2xl text-gray-600">
              A passionate software engineer with expertise in web development and cloud technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Experience</h3>
              <p className="text-gray-600">5+ years in software development</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-600">B.S. in Computer Science</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Location</h3>
              <p className="text-gray-600">San Francisco, CA</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Interests</h3>
              <p className="text-gray-600">AI, Cloud Computing, Web3</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="relative">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="w-80 h-80 rounded-full border-8 border-white object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-6 shadow-lg">
              <svg
                className="w-8 h-8 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Skills",
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">Technical Skills</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Frontend</h3>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Backend</h3>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Python</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Tools</h3>
            <ul className="list-disc list-inside">
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Projects",
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">Featured Projects</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
            <p className="text-gray-600 mb-4">
              Built a full-stack e-commerce platform using React and Node.js
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">React</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Node.js</span>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
            <p className="text-gray-600 mb-4">
              Developed a collaborative task management application
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded">TypeScript</span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Experience",
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">Work Experience</h2>
        <div className="space-y-4">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
            <p className="text-gray-600">Tech Corp • 2020 - Present</p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Led development of multiple web applications</li>
              <li>Mentored junior developers</li>
              <li>Implemented CI/CD pipelines</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <p className="text-gray-600">StartUp Inc • 2018 - 2020</p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Developed user-facing features</li>
              <li>Optimized application performance</li>
              <li>Collaborated with design team</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Contact",
    content: (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <div className="max-w-lg mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-blue-600">john@example.com</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-blue-600">@johndoe</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-blue-600">@johndoe</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <h3 className="font-semibold mb-2">Twitter</h3>
              <p className="text-blue-600">@johndoe</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="font-semibold">Portfolio</span>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {slides.map((slide, index) => (
                <Button
                  key={slide.id}
                  variant={currentSlide === index ? "default" : "ghost"}
                  onClick={() => goToSlide(index)}
                >
                  {slide.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Slides Content */}
      <main className="pt-16 min-h-screen">
        <div className="h-[calc(100vh-4rem)] w-full">
          <div className="p-8 h-full">
            {slides[currentSlide].content}
          </div>
        </div>
      </main>

      {/* Floating Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border">
          <Button variant="outline" size="sm" onClick={prevSlide} disabled={currentSlide === 0}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Presentation; 