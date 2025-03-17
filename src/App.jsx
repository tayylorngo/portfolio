import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaUniversity, FaGraduationCap } from "react-icons/fa";

export default function TeachingPortfolio() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold"><a href="#hero" className="hover:text-blue-600">Taylor Ngo</a></div>
        <div className="space-x-6">
          <a href="#education" className="hover:text-blue-600">Education</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white text-center px-4 pt-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Hi, I'm Taylor</h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-700">
          I'm a software-savvy educator passionate about blending technology and teaching. I enjoy building tools that empower students, streamline instruction, and make learning more accessible. 
        </p>
        <div className="mt-8 flex space-x-6 text-3xl">
          <a href="https://www.linkedin.com/in/taylor-ngo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaLinkedin />
          </a>
          <a href="https://github.com/tayylorngo" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
            <FaGithub />
          </a>
          <a href="mailto:cs.taylorngo@gmail.com" className="text-red-600 hover:text-red-800">
            <FaEnvelope />
          </a>
        </div>
        <div className="absolute bottom-8 text-sm text-gray-600 animate-bounce">
          ↓ Scroll down for more ↓
        </div>
      </section>

      <section id="education" className="py-24 px-6 bg-white">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="flex flex-col gap-12 max-w-4xl mx-auto text-xl md:text-2xl">
          {/* Master's Degree */}
          <div className="flex items-start space-x-4">
            <FaGraduationCap className="text-2xl text-blue-600 mt-1" />
            <div>
              <h3 className="font-bold">Brooklyn College</h3>
              <p>M.A. in Math Education, Expected 2026</p>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="flex items-start space-x-4">
            <FaUniversity className="text-2xl text-blue-600 mt-1" />
            <div>
              <h3 className="font-bold">Stony Brook University</h3>
              <p>B.S. in Computer Science & Applied Mathematics, Class of 2023</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 px-6 bg-gray-50 text-xl md:text-2xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div>
              <h4 className="font-bold mb-2">Edward R. Murrow High School</h4>
              <p className="text-base mb-2">Permanent Substitute Teacher <span className="text-gray-500">| March 2024 - Present</span></p>
              <ul className="list-disc list-inside text-base space-y-1 pl-5 mb-5">
                <li>Teaching mathematics classes of Geometry and Algebra II across two long-term assignments.</li>
                <li>Preparing and implementing comprehensive lesson plans focused on NYS regents curriculum and state standards.</li>
                <li>Managing classroom behavior and developing a positive learning environment for a diverse student population.</li>
              </ul>
              <p className="text-base mb-2">Substitute Teacher <span className="text-gray-500">| October 2023 - March 2024</span></p>
              <ul className="list-disc list-inside text-base space-y-1 pl-5">
                <li>Provided daily coverage for teachers across various subjects and grade levels, managing 5-6 classes per day. </li>
                <li>Implemented lesson plans or material based on teacher instructions and classroom needs on short notice.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Research Foundation of The City University of New York</h4>
              <p className="text-base mb-2">Computer Science Teacher (Summer & Weekend Programs)<span className="text-gray-500"> | March 2021 - Present</span></p>
              <ul className="list-disc list-inside text-base space-y-1 pl-5 mb-5">
                <li>Collaborating with faculty members at John Jay College of Criminal Justice to foster an interactive and immersive learning environment for prospective university students.</li>
                <li>Teaching classes consisting of 15-20 students encompassing computer science subjects such as Java, object-oriented programming, web development, and mobile application development.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Stony Brook University</h4>
              <p className="text-base mb-2">Introduction to Object-Oriented Programming Teaching Assistant  <span className="text-gray-500">| May 2021 - August 2021</span></p>
              <ul className="list-disc list-inside text-base space-y-1 pl-5 mb-5">
                <li>Facilitated biweekly laboratory sessions of 20-30 students covering topics of object-oriented programming in Java.</li>
                <li>Assisted faculty members by actively participating in the assessment and grading of assignments and exams.</li>
              </ul>
              <p className="text-base mb-2">Data Structures & Algorithms Teaching Assistant <span className="text-gray-500">| February 2021 - May 2021</span></p>
              <ul className="list-disc list-inside text-base space-y-1 pl-5">
                <li>Taught recitation classes of 20-30 students covering concepts of computer science data structures and algorithms.</li>
                <li>Held office hours for 5 hours a week to assist students with assignments and other inquiries.</li>
                <li>Performed all other teaching assistant duties including moderating the class forum for over 100 students, 
                  creating new recitation material, supervising exam review sessions, and designing homework assignment test cases.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
      <div className="bg-white border rounded-xl shadow p-4">
        <img src="https://images.pexels.com/photos/8443455/pexels-photo-8443455.jpeg" alt="Portfolio Website" className="rounded-lg mb-4 w-full h-40 object-cover" />
        <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
        <p className="text-sm mb-2">Built using React and Tailwind CSS to highlight personal and professional work in a clean, modern layout.</p>
        <a href="https://www.taylorngo.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Project</a>
      </div>
      <div className="bg-white border rounded-xl shadow p-4">
        <img src="https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg" alt="Egg File Processor" className="rounded-lg mb-4 w-full h-40 object-cover" />
        <h3 className="text-xl font-bold mb-2">Egg File Processor</h3>
        <p className="text-sm mb-2">Automates grading comment generation for report cards using React and Python.</p>
        <a href="https://eggfileprocessor.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Project</a>
      </div>
      <div className="bg-white border rounded-xl shadow p-4">
        <img src="https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg" alt="STEM Connect" className="rounded-lg mb-4 w-full h-40 object-cover" />
        <h3 className="text-xl font-bold mb-2">STEM Connect</h3>
        <p className="text-sm mb-2">Platform built for Waffle Hacks 2021 to connect educators with students. Won best hack for small businesses.</p>
        <a href="https://stemconnect.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Project</a>
      </div>
      <div className="bg-white border rounded-xl shadow p-4">
        <img src="https://images.pexels.com/photos/6753471/pexels-photo-6753471.jpeg" alt="Ambulert" className="rounded-lg mb-4 w-full h-40 object-cover" />
        <h3 className="text-xl font-bold mb-2">Ambulert</h3>
        <p className="text-sm mb-2">Mobile app for alerting nearby drivers of emergency vehicles. Won best Twilio use at Hopper Hacks 2022.</p>
        <a href="https://devpost.com/software/ambulert" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Project</a>
      </div>
      <div className="bg-white border rounded-xl shadow p-4">
        <img src="https://images.pexels.com/photos/7092358/pexels-photo-7092358.jpeg" alt="Grading Sheet Sender" className="rounded-lg mb-4 w-full h-40 object-cover" />
        <h3 className="text-xl font-bold mb-2">Grading Sheet Sender</h3>
        <p className="text-sm mb-2">Python script to email grading sheets to students, built as a TA tool at Stony Brook University.</p>
        <a href="https://github.com/tayylorngo/CSE214-Grading-Sheet-Sender" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Project</a>
      </div>
      <div className="bg-white border rounded-xl shadow p-4">
        <img src="https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg" alt="Asset Return Calculator" className="rounded-lg mb-4 w-full h-40 object-cover" />
        <h3 className="text-xl font-bold mb-2">Yearly Asset Return Calculator</h3>
        <p className="text-sm mb-2">Web app to calculate returns using real-time asset data from the FMP API.</p>
        <a href="https://github.com/tayylorngo/yearly-asset-return-calculator" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Project</a>
      </div>
    </div>
    <div className="mt-12 text-center">
      <a
        href="https://github.com/tayylorngo"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
      >
        <FaGithub className="w-5 h-5" />
        More Projects
      </a>
    </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>
        <div className="text-center space-y-4 text-xl">
          <div className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-red-600" />
            <a href="mailto:cs.taylorngo@gmail.com" className="text-blue-600 underline">cs.taylorngo@gmail.com</a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaLinkedin className="text-blue-600" />
            <a href="https://www.linkedin.com/in/taylor-ngo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              linkedin.com/in/taylor-ngo/
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaGithub className="text-gray-700" />
            <a href="https://github.com/tayylorngo" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              github.com/tayylorngo
            </a>
          </div>
        </div>
      </section>


      <footer className="text-center py-6 bg-gray-100 text-sm text-gray-500">
        © {new Date().getFullYear()} Taylor Ngo. All rights reserved.
      </footer>
    </main>
  );
}
