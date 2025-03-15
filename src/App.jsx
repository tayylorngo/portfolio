import React, { useEffect } from "react";

export default function TeachingPortfolio() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <main className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Taylor Ngo</div>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white text-center px-4 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Taylor Ngo</h1>
        <p className="text-lg md:text-xl max-w-xl">Stony Brook University, Class of 2023<br />B.S. in Computer Science</p>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
          I’m a passionate computer science graduate from Stony Brook University with a strong interest in teaching, software development, and empowering students through technology and education. I enjoy building clean, modern web experiences and fostering student growth through both tech and curriculum design.
        </p>
      </section>

      <section id="projects" className="py-24 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="max-w-3xl mx-auto">
          <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
            <p>Developed a personal portfolio using HTML, CSS, and JavaScript to showcase professional skills and interests. Currently rebuilt in React + Tailwind for scalability and cleaner design.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>
        <div className="text-center">
          <p className="mb-4">Email: <a href="mailto:cs.taylorngo@gmail.com" className="text-blue-600 underline">cs.taylorngo@gmail.com</a></p>
          <p className="mb-4">LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 underline">linkedin.com/in/yourprofile</a></p>
        </div>
      </section>

      <footer className="text-center py-6 bg-gray-100 text-sm text-gray-500">
        © {new Date().getFullYear()} Taylor Ngo. All rights reserved.
      </footer>
    </main>
  );
}
