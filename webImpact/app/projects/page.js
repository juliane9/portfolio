import { client } from "@/sanity/lib/client";
import Container from '../components/Container';
import Image from 'next/image';
import { urlFor } from "@/sanity/lib/image";


// export default async function Photos() {
//   const dogs = await getDogs();

//   return (
//     <Container>
//       <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {dogs.map((dog) => (
//           <DogCard key={dog.name} dog={dog} />
//         ))}
//       </ul>
//     </Container>
//   );
// }

//import { useEffect, useRef } from "react";

// export default function Portfolio() {
//   const projects = [
//     {
//       title: "Transplant Application Developer",
//       date: "Oct 2024 – Present",
//       description:
//         "Developing an application to help transplant patients track progress and provide physicians with centralized, easily accessible patient data for streamlined care.",
//     },
//     {
//       title: "Telecommunication Engineer Volunteer",
//       date: "Feb 2024 – Aug 2024",
//       description:
//         "CHESS Mission: Designed and implemented encoding and decoding algorithms using Matlab for a Software Defined Radio in compliance with ECSS standards. Achieved a Bit Error Rate of 1 per billion bits and integrated it onto an FPGA with HDLs.",
//     },
//     {
//       title: "Research Assistant and Developer for the THL2 Laboratory",
//       date: "Apr 2024 – Sept 2024",
//       description:
//         "Developed an AI chatbot to offer fast answers and feedback on students' handwritten solutions. Currently being tested in a course of 400 undergrads for distribution to all EPFL students.",
//     },
//     {
//       title: "Sudoku Game Web App Creator",
//       date: "Mar 2024",
//       description:
//         "Built a Sudoku game centralized web application using Scala and JavaScript, ensuring solvability of puzzles and responsiveness with level selection.",
//     },
//     {
//       title: "Student Technical Assistant - Applied Machine Learning Days",
//       date: "Mar 2024",
//       description:
//         "Attended GPT conferences, built a spam detector, and facilitated engagement at workshops, helping speakers and ensuring smooth event coordination.",
//     },
//     {
//       title: "Volunteer Tutor",
//       date: "2019 – 2022",
//       description:
//         "Helped high school students with Mathematics, Physics, and Chemistry, strengthening my ability to explain complex concepts.",
//     },
//     {
//       title: "Etablissement Français du Sang (EFS) Internship",
//       date: "Feb 2019",
//       description:
//         "Learned about organ donations and assisted nurses for blood donations, gaining insights into the medical field.",
//     },
//   ];


//   return (
//     <div className="bg-black min-h-screen py-16 px-6 font-mono">
//       <div className="max-w-4xl mx-auto relative">
//         <h1 className="text-4xl font-bold text-white text-center mb-12">
//           My Projects
//         </h1>
//         <div className="relative">
//           {/* Vertical Timeline Line */}
//           <div
//             className="absolute bg-white"
//             style={{
//               left: "30%", // Line is 30% from the left
//               top: "0",
//               bottom: "0",
//               width: "2px",
//             }}
//           ></div>
//           {projects.map((project, index) => (
//             <div key={index} className="flex items-start mb-20">
//               {/* Date Section */}
//               <div className="w-1/3 text-right pr-4">
//                 <span className="text-gray-300 text-sm font-semibold">
//                   {project.date}
//                 </span>
//               </div>
//               {/* Dot */}
//               <div className="relative w-1/12 flex justify-center">
//                 <div className="w-4 h-4 bg-indigo-500 rounded-full border-4 border-white"></div>
//               </div>
//               {/* Project Content */}
//               <div className="w-2/3 pl-4 flex flex-col md:flex-row">
//                 <div className="flex-1">
//                   <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//                     <h2 className="text-lg font-bold text-indigo-400 mb-2">
//                       {project.title}
//                     </h2>
//                     <p className="text-gray-300 text-justify">{project.description}</p>
//                   </div>
//                 </div>
//                 <div className="flex-1 mt-4 md:mt-0 md:ml-4">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     width={400}
//                     height={300}
//                     className="rounded-lg"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




async function getProjects() {
  const projects = await client.fetch(`
    *[_type == "project"]{
      title,
      date,
      description,
      order, 
      githubUrl,
      "imageUrl": image.asset->url
    } | order(coalesce(order, 0) desc)
  `);

  return projects;
}
export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <div className=" min-h-screen py-16 px-6 font-mono">
      <div className="max-w-5xl mx-auto relative">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Projects & Timeline
        </h1>
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div
            className="absolute bg-white"
            style={{
              left: '25%', // Vertical line position
              top: '0',
              bottom: '0',
              width: '2px',
            }}
          ></div>
          {projects.map((project, index) => (
            <div key={index} className="flex items-start mb-16">
              {/* Date Section */}
              <div className="w-1/5 text-right pr-4">
                <span className="text-gray-300 text-sm font-semibold">
                  {project.date}
                </span>
              </div>
              {/* Dot */}
              <div className="relative w-1/12 flex justify-center">
                <div className="w-3 h-3 bg-indigo-500 rounded-full border-2 border-white mt-1"></div>
              </div>
              {/* Project Content */}
              <div
                className={`w-4/5 pl-4 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center md:hover:shadow-2xl md:hover:scale-105 transition-all space-y-4`}
              >
                {/* Text */}
                <div className="flex-1 pr-4">
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h2 className="text-lg font-bold text-indigo-400 mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 text-justify">
                      {project.description}
                    </p>
                     {/* GitHub Button */}
                 {/* GitHub Button */}
                {project.githubUrl && (
                  <div className="flex justify-center mt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-indigo text-primary px-4 py-2 rounded-lg hover:bg-indigo-500 hover:text-#4338ca transition duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                )}
                  </div>
                </div>
                {/* Image */}
                {project.imageUrl && (
                  <div
                    className={`flex-1 flex justify-center items-center ${
                      index % 2 === 0 ? 'pl-4' : 'pr-4'
                    }`}
                  >
                    <Image
                      src={urlFor(project.imageUrl).url()}
                      alt={project.title}
                      width={250}
                      height={180}
                      className="rounded-lg"
                      style={{ alignSelf: 'center' }} // Ensures centering relative to the text
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// function DogCard({ dog }) { // no need to put in component because only used once
//   return (
//     <li className="border md:hover:scale-95 transition-transform border-primary-200 bg-gradient-to-bl from-secondary-100 to-vlack via-black rounded-xl p-4 flex items-start justify-start space-x-4">
//       <img
//         src={dog.pic}
//         alt={dog.name}
//         className="w-40 h-40 rounded-lg border object-cover border-primary-200"
//       />
//       <div className="space-y-4">
//         <div className="space-y-1">
//           <h3 className="text-lg font-medium">{dog.name}</h3>
//           <p className="uppercase text-xs font-medium text-primary-600">
//             {dog.age} year{dog.age === 1 ? "" : "s"} old
//           </p>
//         </div>
//         <div className="space-y-2">
//           <h4 className="text-sm font-medium">Favorite Toys</h4>
//           <ul className="flex flex-wrap gap-2">
//             {dog.favorite_toys.map((toy) => (
//               <li
//                 key={toy}
//                 className="text-xs text-secondary-800 rounded-full px-2 py-0.5 bg-secondary-100"
//               >
//                 {toy}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </li>
//   );
// }

// async function getDogs() { // async function we do not knpw when it will be, it can crash, fetch and wait
//   const res = await fetch("https://md.rtsh.space/sample.json");

//   if (!res.ok) {
//     throw new Error("Failed to fetch dogs");
//   }

//   return res.json();
// }