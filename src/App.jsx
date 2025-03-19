import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaUniversity, FaGraduationCap, FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaLanguage, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { SiGoogleclassroom, SiMongodb, SiFlutter, SiDart, SiTailwindcss, SiSwift } from "react-icons/si";

export default function TeachingPortfolio() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold"><a href="#home" className="hover:text-blue-600">Taylor Ngo</a></div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#education" className="hover:text-blue-600">Education</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white text-center px-4 pt-20">
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

      <section id="education" className="min-h-screen py-24 px-6 bg-white">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="flex flex-col gap-12 max-w-4xl mx-auto text-xl md:text-2xl">
          {/* Master's Degree */}
          <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-4">
          <span className="text-3xl md:text-4xl">🎓</span>
          <div>
              <h3 className="font-bold">Brooklyn College</h3>
              <p>M.A. in Math Education, Expected 2026</p>
              <div className="mt-2 text-base text-gray-700">
                <p className="font-semibold mb-2 mt-2">Relevant Coursework:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>High School Mathematics from an Advanced Standpoint</li>
                  <li>Geometry for High School Mathematics Teachers</li>
                  <li>Theory of Functions for High School Mathematics Teachers</li>
                  <li>Seminar in Pedagogy and Curriculum</li>
                </ul>
              </div>

              <div className="mt-2 text-base text-gray-700">
                <p className="font-semibold mb-2 mt-5">Certifications:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>New York State Internship Certification in Mathematics Education (7–12)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-4">
            <span className="text-3xl md:text-4xl">🏛️</span>
          <div>
              <h3 className="font-bold">Stony Brook University</h3>
              <p>B.S. in Computer Science & Applied Mathematics, Class of 2023</p>
              <div className="mt-2 text-base text-gray-700">
                <p className="font-semibold mb-2 mt-2">Relevant Coursework (Computer Science):</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Analysis of Algorithms</li>
                  <li>Data Structures & Algorithms</li>
                  <li>Discrete Mathematics</li>
                  <li>Fundamentals of Software Development</li>
                  <li>Introduction to Data Science</li>
                  <li>Mobile App Development for iOS & Android</li>
                  <li>Object-Oriented Programming</li>
                  <li>System Fundamentals I & II</li>
                </ul>
                <p className="font-semibold mt-5 mb-2">Relevant Coursework (Applied Mathematics):</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Computational Geometry</li>
                  <li>Differential Equations</li>
                  <li>Finite Mathematics Structures</li>
                  <li>Linear Algebra</li>
                  <li>Multivariable Calculus</li>
                  <li>Probability Theory</li>
                  <li>Survey of Probability & Statistics</li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>

       {/* Experience Section */}
       <section id="experience" className="py-32 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-12 text-lg md:text-xl">
          <div className="flex items-start space-x-4">
            <span className="text-3xl md:text-4xl">🍎</span>
            <div>
              <h3 className="font-bold">Edward R. Murrow High School</h3>
              <p className="text-base mb-2">Permanent Substitute Teacher <span className="text-gray-500">| March 2024 - Present</span></p>
              <ul className="list-disc list-inside text-base space-y-1 pl-5 mb-5">
                <li>Teaching mathematics classes of Geometry and Algebra II across two long-term assignments.</li>
                <li>Preparing and implementing comprehensive lesson plans focused on NYS regents curriculum and state standards.</li>
                <li>Managing classroom behavior and developing a positive learning environment for a diverse student population.</li>
              </ul>
              <p className="text-base mb-2">Substitute Teacher <span className="text-gray-500">| October 2023 - March 2024</span></p>
              <ul className="list-disc list-inside text-base space-y-1 pl-5">
                <li>Provided daily coverage for teachers across various subjects and grade levels, managing 5-6 classes per day.</li>
                <li>Implemented lesson plans or material based on teacher instructions and classroom needs on short notice.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-3xl md:text-4xl">🧪</span>
            <div>
              <h3 className="font-bold">Research Foundation of The City University of New York</h3>
              <p className="text-base mb-2">Computer Science Teacher (Summer & Weekend Programs)<span className="text-gray-500"> | March 2021 - Present</span></p>
              <ul className="list-disc list-inside text-base space-y-1 pl-5 mb-5">
                <li>Collaborating with faculty members at John Jay College of Criminal Justice to foster an interactive and immersive learning environment for prospective university students.</li>
                <li>Teaching classes consisting of 15-20 students encompassing computer science subjects such as Java, object-oriented programming, web development, and mobile application development.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-3xl md:text-4xl">🎓</span>
            <div>
              <h3 className="font-bold">Stony Brook University</h3>
              <p className="text-base mb-2">Introduction to Object-Oriented Programming Teaching Assistant <span className="text-gray-500">| May 2021 - August 2021</span></p>
              <ul className="list-disc list-inside text-base space-y-1 pl-5 mb-5">
                <li>Facilitated biweekly laboratory sessions of 20-30 students covering topics of object-oriented programming in Java.</li>
                <li>Assisted faculty members by actively participating in the assessment and grading of assignments and exams.</li>
              </ul>
              <p className="text-base mb-2">Data Structures & Algorithms Teaching Assistant <span className="text-gray-500">| February 2021 - May 2021</span></p>
              <ul className="list-disc list-inside text-base space-y-1 pl-5">
                <li>Taught recitation classes of 20-30 students covering concepts of computer science data structures and algorithms.</li>
                <li>Held office hours for 5 hours a week to assist students with assignments and other inquiries.</li>
                <li>Performed all other teaching assistant duties including moderating the class forum for over 100 students, creating new recitation material, supervising exam review sessions, and designing homework assignment test cases.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-3xl md:text-4xl">💻</span>
            <div>
              <h3 className="font-bold">Facebook</h3>
              <p className="text-base mb-2">Above & Beyond Computer Science Program<span className="text-gray-500"> | September 2020 - November 2020</span></p>
              <ul className="list-disc list-inside text-base space-y-1 pl-5 mb-5">
                <li>Coordinated with peers and completed weekly technical tasks to gain a better understanding of programming concepts and career preparation.</li>
                <li>Attended weekly development workshops geared towards enhancing knowledge of programming fundamentals, engaging with industry professionals, and ensuring career readiness.</li>
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
        <a href="https://yearlyreturncalculator.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Project</a>
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

      <section id="skills" className="py-24 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

        {/* Programming Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Programming Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center text-xl">
            <div className="flex flex-col items-center"><FaJava className="text-4xl text-red-600 mb-2" /><p>Java</p></div>
            <div className="flex flex-col items-center"><FaPython className="text-4xl text-blue-500 mb-2" /><p>Python</p></div>
            <div className="flex flex-col items-center"><FaJs className="text-4xl text-yellow-500 mb-2" /><p>JavaScript</p></div>
            <div className="flex flex-col items-center"><SiDart className="text-4xl text-cyan-600 mb-2" /><p>Dart</p></div>
            <div className="flex flex-col items-center"><FaHtml5 className="text-4xl text-orange-500 mb-2" /><p>HTML</p></div>
            <div className="flex flex-col items-center"><FaCss3Alt className="text-4xl text-blue-600 mb-2" /><p>CSS</p></div>            
            <div className="flex flex-col items-center"><SiSwift className="text-4xl text-orange-400 mb-2" /><p>Swift</p></div>
          </div>
        </div>

        {/* Frameworks & Tools */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Frameworks & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center text-xl">
            <div className="flex flex-col items-center"><FaReact className="text-4xl text-blue-400 mb-2" /><p>React</p></div>
            <div className="flex flex-col items-center"><SiFlutter className="text-4xl text-blue-500 mb-2" /><p>Flutter</p></div>
            <div className="flex flex-col items-center"><SiMongodb className="text-4xl text-green-600 mb-2" /><p>MongoDB</p></div>
            <div className="flex flex-col items-center"><FaGitAlt className="text-4xl text-red-500 mb-2" /><p>Git</p></div>
            <div className="flex flex-col items-center"><DiAndroid className="text-4xl text-green-700 mb-2" /><p>Android Studio</p></div>
            <div className="flex flex-col items-center"><FaNodeJs className="text-4xl text-green-600 mb-2" /><p>Node.js</p></div>
            <div className="flex flex-col items-center"><SiTailwindcss className="text-4xl text-teal-500 mb-2" /><p>Tailwind CSS</p></div>
            <div className="flex flex-col items-center"><p className="text-4xl text-blue-500 mb-2">🖥️</p><p>VS Code</p></div>
          </div>
        </div>

        {/* Technical & Teaching Tools */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technical & Teaching Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center text-xl">
            <div className="flex flex-col items-center"><SiGoogleclassroom className="text-4xl text-green-500 mb-2" /><p>Google Classroom</p></div>
            <div className="flex flex-col items-center"><p className="text-4xl font-bold text-gray-600 mb-2">📂</p><p>Google Drive</p></div>
            <div className="flex flex-col items-center"><p className="text-4xl font-bold text-gray-600 mb-2">📊</p><p>Microsoft Office</p></div>
            {/* <div className="flex flex-col items-center"><p className="text-4xl mb-2">📈</p><p>Data Structures</p></div>
            <div className="flex flex-col items-center"><p className="text-4xl mb-2">⚙️</p><p>Algorithms</p></div> */}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center text-xl">
            <div className="flex flex-col items-center"><FaLanguage className="text-4xl text-blue-600 mb-2" /><p>English (Fluent)</p></div>
            <div className="flex flex-col items-center"><FaLanguage className="text-4xl text-red-500 mb-2" /><p>Mandarin (Conversational)</p></div>
            <div className="flex flex-col items-center"><FaLanguage className="text-4xl text-yellow-600 mb-2" /><p>Cantonese (Conversational)</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-32 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-16">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-xl">
          <div className="border rounded-2xl p-8 shadow hover:shadow-lg transition">
            <FaEnvelope className="text-4xl text-red-500 mx-auto mb-4" />
            <p className="font-semibold">Email</p>
            <a href="mailto:cs.taylorngo@gmail.com" className="text-blue-600 hover:underline">cs.taylorngo@gmail.com</a>
          </div>
          <div className="border rounded-2xl p-8 shadow hover:shadow-lg transition">
            <FaLinkedin className="text-4xl text-blue-600 mx-auto mb-4" />
            <p className="font-semibold">LinkedIn</p>
            <a href="https://www.linkedin.com/in/taylor-ngo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/taylor-ngo</a>
          </div>
          <div className="border rounded-2xl p-8 shadow hover:shadow-lg transition">
            <FaGithub className="text-4xl text-gray-800 mx-auto mb-4" />
            <p className="font-semibold">GitHub</p>
            <a href="https://github.com/tayylorngo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/tayylorngo</a>
          </div>
          <div className="border rounded-2xl p-8 shadow hover:shadow-lg transition">
            <FaGithub className="text-4xl text-purple-600 mx-auto mb-4" />
            <p className="font-semibold">Devpost</p>
            <a href="https://devpost.com/tayylorngo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">devpost.com/tayylorngo</a>
          </div>
        </div>
        <div className="mt-16 flex justify-center px-6">
        <div className="border rounded-2xl p-8 shadow hover:shadow-lg transition bg-white">
          <div className="text-4xl mb-4">📄</div>
    <h3 className="text-2xl font-bold mb-4">Resume</h3>
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
    >
      View Resume
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
