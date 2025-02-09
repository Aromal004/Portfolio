import React from "react";

const experiences = [
  { year: "2021", title: "Software Intern", company: "ABC Tech", description: "Worked on frontend development using React.js and improved UI components." },
  { year: "2022", title: "Junior Developer", company: "XYZ Solutions", description: "Developed REST APIs and worked on backend optimization using Node.js." },
  { year: "2023", title: "Software Engineer", company: "TechCorp", description: "Led a team to develop scalable applications using Next.js and AWS." },
];

const Experience = () => {
  return (
    <div id="Experience" className="flex flex-col items-center justify-center min-h-screen  text-white px-6">
      <h2 className="text-4xl font-bold mb-10">Experience</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative w-80 p-6  border-2 border-cyan-500 rounded-xl shadow-lg transition-transform hover:scale-105">
            <h3 className="text-xl font-bold">{exp.title}</h3>
            <h4 className="text-md font-semibold text-cyan-400">{exp.company}</h4>
            <p className="text-sm text-gray-300 mt-2">{exp.description}</p>
            <span className="absolute top-2 right-4 text-cyan-400 font-bold">{exp.year}</span>
            {/* Neon Glow Effect */}
            <div className="absolute inset-0 border-2 border-cyan-500 rounded-xl blur-sm opacity-50"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
