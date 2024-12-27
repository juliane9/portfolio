// // export default function Home() {
// //   return <Navbar />;
// // }

// // function Navbar() {
// //   return (
// //     <nav className="border-b sticky top-0 bg-blue-950 text-gray-100 border-gray-800 z-10 font-mono">
// //       <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
// //         <a href="/" className="font-medium text-lg md:hover:underline">
// //           Home
// //         </a>
// //         <ul className="hidden md:flex items-center justify-end space-x-4 text-sm font-medium">
// //         <li className="md:hover:underline">
// //             <a href="/about">About</a>
// //           </li>
// //           <li className="md:hover:underline">
// //             <a href="/projects">Projects</a>
// //           </li>
// //           <li className="md:hover:underline">
// //             <a href="/blog">Blog</a>
// //           </li>
// //           <li className="md:hover:underline">
// //             <a href="/contact">Contact</a>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // }


// // export default function Home() {
// //   return (
// //     <div>
// //       <p>This is the home page!</p>
// //     </div>
// //   );
// // }

// import Container from './components/Container';
// export default function Home() {
//   const person = {
//     name: "Juliane",
//     //age: 30,
//     hobbies: ["reading", "hiking", "coding"],
//     address: {
//       city: "Seattle",
//       country: "United States"
//     },
//     contact: {
//       email: "john@email.com",
//       phone: "123-456-7890",
//     },
//     isMarried: true,
//   };

//   return (
//     <Container>
//       <Person person = {person} />
//     </Container>
//   );
// }

// function Person({ person }) { // pass an object, Person is JSON, in curly braxkets, there are variables
//   return (
//     <div className="max-w-sm border border-primary-950 rounded-xl px-4 pb-4 pt-6 bg-gradient-to-bl from-secondary-900 to-black via-black md:hover:shadow-xl md:hover:scale-105 transition-all space-y-4">
//       <div className="space-y-2">
//         <h3 className="font-medium text-xl">{person.name}</h3>
//         <p className="text-sm text-primary-500">
//           {person.address.city} {person.address.country}
//         </p>
//       </div>
//       <div className="space-y-1">
//         <h4 className="font-medium">Hobbies</h4>
//         <ul className="flex flex-wrap gap-2 text-sm text-secondary-800">
//           <li className="bg-secondary-100 px-2 py-0.5 rounded-full">{person.hobbies[0]}</li>
//           <li className="bg-secondary-100 px-2 py-0.5 rounded-full">{person.hobbies[1]}</li>
//           <li className="bg-secondary-100 px-2 py-0.5 rounded-full">{person.hobbies[2]}</li>
//         </ul>
//       </div>
//       <div className="space-y-1">
//         <h4 className="font-medium">Get In Touch</h4>
//         <ul className="font-mono text-sm">
//           <li>{person.contact.email}</li>
//           <li>{person.contact.phone}</li>
//         </ul>
//       </div>
//     </div>
//   );
// }



export default function Home() {
  return (
    <div className="bg-gradient-to-bl from-gray-900 via-black to-gray-800 min-h-screen relative">
      {/* Social Buttons */}
      <div className="absolute bottom-4 right-4 flex space-x-4">
        <a
          href="https://www.linkedin.com/in/juliane-mercoli-08706831b"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono px-4 py-2 bg-indigo-500 text-indigo-400 rounded-md hover:bg-indigo-600 transition"
          style={{
            border: "2px solid #6366f1", 
          }}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/juliane9" 
          target="_blank"
          rel="noopener noreferrer"
          className="fontt-mono px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
          style={{
            border: "2px solid #6366f1", 
          }}
        >
          GitHub
        </a>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 text-gray-300 text-mono">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Hero Section */}
          <div className="text-gray-100">
            <h1 className="text-6xl font-extrabold text-indigo-400 drop-shadow-md text-white">
              Welcome!
            </h1>
            <p className="text-lg mt-4">I&apos;m Juliane Mercoli, a computer science student at EPFL, Switzerland and UW, Seattle.</p>
          </div>

          {/* Highlights Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-indigo-300">
                Want to learn more?
              </h2>
              <p className="text-sm text-gray-300 mt-2 rounded-full border-2px border-white">
                Discover who I am and what I do.
              </p>
              <a
                href="/about"
                className="inline-block mt-4 px-4 py-2 bg-indigo-500 rounded-md hover:bg-indigo-600 transition"
                style={{
                  color: "#6366f1", 
                }}
              >
                Learn More
              </a>
            </div>

            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-teal-300">
                Want to see more?
              </h2>
              <p className="text-sm text-gray-300 mt-2">
                See what I’ve been working on.
              </p>
              <a
                href="/projects"
                className="inline-block mt-4 px-4 py-2 bg-teal-500 rounded-md hover:bg-teal-600 transition"
                style={{
                  color: "#6366f1", 
                }}
              >
                View Projects
              </a>
            </div>

            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-pink-300">
                Want to connect?
              </h2>
              <p className="text-sm text-gray-300 mt-2">
                Let’s collaborate or chat.
              </p>
              <a
                href="/contact"
                className="inline-block mt-4 px-4 py-2 bg-pink-500 rounded-md hover:bg-pink-600 transition"
                style={{
                  color: "#6366f1", 
                }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="h-1 w-40 mx-auto bg-indigo-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
