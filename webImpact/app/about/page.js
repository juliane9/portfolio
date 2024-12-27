// export default function About() {
//   return (
//     <div className="bg-gray-100 py-16 px-6 font-mono">
//       <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-8 space-y-6">
//         <h1 className="text-4xl font-bold text-indigo-600 text-center">About Me</h1>
//         <p className="text-lg leading-relaxed text-gray-700">
//           Hello! My name is <span className="font-semibold">Juliane Mercoli</span>, and I am a 
//           senior Bachelor’s student in <span className="font-semibold">Computer Science</span> at 
//           <span className="font-semibold"> EPFL</span>, Switzerland. Currently, I am enjoying an exchange year 
//           at the <span className="font-semibold">University of Washington</span> in Seattle, where I have been immersing 
//           myself in exciting opportunities and learning experiences.
//         </p>

//         <h2 className="text-2xl font-semibold text-indigo-500">My Journey</h2>
//         <p className="text-lg leading-relaxed text-gray-700">
//           I have a passion for <span className="font-semibold">artificial intelligence</span>, 
//           <span className="font-semibold"> web development</span>, and 
//           <span className="font-semibold"> machine learning</span>. At EPFL, I contributed to the Spacecraft Team working on the 
//           <span className="font-semibold"> CHESS Mission</span>, where I developed encoding and decoding algorithms for a satellite project. 
//           I also gained experience in organizing events and building AI-based chatbots as part of my involvement with the 
//           <span className="font-semibold"> EPFL THL2 Lab</span>.
//         </p>

//         <h2 className="text-2xl font-semibold text-indigo-500">What I&apos;m Working On</h2>
//         <p className="text-lg leading-relaxed text-gray-700">
//           At the University of Washington, I am exploring projects that combine <span className="font-semibold">machine learning </span> 
//           and <span className="font-semibold">healthcare</span>, including an app focused on liver and kidney donations. I am also honing my 
//           skills in <span className="font-semibold">web development</span> by building interactive and responsive applications.
//         </p>

//         <h2 className="text-2xl font-semibold text-indigo-500">Outside of Work</h2>
//         <p className="text-lg leading-relaxed text-gray-700">
//           When I’m not coding, I enjoy exploring new places in Seattle, learning new skills like 
//           <span className="font-semibold"> running</span>, and engaging with clubs and organizations at the University of Washington. 
//           I am always looking for opportunities to connect, learn, and grow.
//         </p>

//         <h2 className="text-2xl font-semibold text-indigo-500">Let’s Connect!</h2>
//         <p className="text-lg leading-relaxed text-gray-700">
//           If you’d like to collaborate or chat, feel free to visit my{" "}
//           <a
//             href="/contact"
//             className="text-indigo-600 underline hover:text-indigo-500"
//           >
//             contact page
//           </a>
//           . I’d love to hear from you!
//         </p>
//       </div>
//     </div>
//   );
// }


export default function About() {
  return (
    <div className="bg-gradient-to-bl from-gray-900 via-black to-gray-800 min-h-screen text-gray-100 px-6 py-12 font-mono">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-indigo-400 drop-shadow-lg">
          About me
        </h1>

        {/* Section: Education */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <span className="text-4xl">🎓</span>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-200">Education</h2>
          <p className="text-gray-300 text-justify">
            I am currently an exchange student from <span className="text-indigo-400">EPFL</span> in Lausanne, Switzerland, spending a year at the <span className="text-indigo-400">University of Washington (UW)</span>. At EPFL, I’m pursuing a Bachelor&apos;s in Computer Science, where I’ve focused on Machine Learning and its application for biomedicine.
          </p>
        </div>

        {/* Section: Interests */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <span className="text-4xl">✨</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-200 text-center">Interests</h2>
          <p className="text-gray-300 text-justify">
            My passion lies in a lot of stuff ! In particular, I&apos;m interested in AI and machine learning. I also enjoy contributing to impactful projects. Outside of tech, I love exploring new areas, be it nature or new cities, and diving into books that spark curiosity.
          </p>
        </div>

        {/* Section: Past */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <span className="text-4xl">💼</span>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-200">Past experiences</h2>
          <p className="text-gray-300 text-justify">
            During my studies, I worked on several exciting projects. At EPFL, I have helped building an AI chatbot that answers students&apos; questions and provide fast feedbacks on their assignements. I have also contributed to the Spacecraft Team for the <span className="text-indigo-400">CHESS Mission</span>, where I developed encoding and decoding algorithms for satellite communications. 
          </p>
        </div>
      </div>
    </div>
  );
}
