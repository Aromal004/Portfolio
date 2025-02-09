import React from "react";

const projects = [
  { year: "2024", title: "CareNexus", description: "A Healthcare Management Application designed to streamline patient care by enabling seamless communication, appointment scheduling, and health tracking between patients and doctors. Built using ReactJS for the frontend, Django for backend logic, and PostgreSQL for robust data management." ,link:"https://github.com/Aromal004/CareNexus.git"},
  { year: "2022", title: "Portfolio Website", description: "Developed a personal portfolio using Next.js and Tailwind CSS." },
  { year: "2023", title: "AI Chatbot", description: "Created an AI-powered chatbot using Python and OpenAI API." },
];

const ProjectTimeline = () => {
  return (
    <div id="Projects" className="flex flex-col items-center justify-center min-h-screen  text-white">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="relative border-l-4 border-cyan-500 p-6">
        {projects.map((project, index) => (
          <div key={index} className="mb-10 flex items-center">
            {/* Year */}
            <div className="text-lg font-semibold absolute -left-16">{project.year}</div>
            
            {/* Timeline Dot */}
            <div className="w-4 h-4 bg-cyan-500 rounded-full absolute -left-2.5"></div>
            
            {/* Glowing Card */}
            <a target="_blank" href={project.link} className="relative w-96 p-4 bg-black border-2 border-cyan-500 rounded-xl shadow-lg transition-transform hover:scale-105">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              <div className="absolute inset-0 border-2 border-cyan-500 rounded-xl blur-sm opacity-50"></div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;
