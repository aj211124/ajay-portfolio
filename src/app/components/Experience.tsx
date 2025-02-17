import React from "react";
import { FaCode, FaDatabase, FaUserShield } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer Engineer",
      company: "CareStack",
      location: "Thiruvananthapuram, Kerala",
      period: "07/2022 - 09/2024",
      responsibilities: [
        "I had the privilege of collaborating with an Agile team of .NET wizards to craft efficient software solutions. In my role, I conducted thorough security testing on web applications using ASP.NET MVC, C#, and SQL Server, leveraging tools like Burp Suite and OWASP ZAP. I partnered closely with designers and developers to create sleek, responsive, and user-friendly interfaces. I played a key role in developing exciting new features, ensuring seamless integration and optimal performance. My active participation in code reviews helped maintain high coding standards and promoted best practices across the team. I also smoothly upgraded the project from Angular 13 to Angular 14, providing technical support and swift troubleshooting assistance to clients, resolving issues in a timely manner. Proactively, I identified and addressed security vulnerabilities by implementing industry best practices and diagnosed and fixed performance issues to enhance and streamline the user experience. Additionally, I built and maintained consistent, platform-wide UI components using Tailwind CSS.",
      ],
      icon: <FaCode />,
    },
    {
      title: "Front end developer",
      company: "HacKP - Kerala Govt.",
      location: "Thiruvananthapuram, Kerala",
      period: "06/2021 - 10/2021",
      responsibilities: [
        "Worked in a Government-initiated project for developing a data scraping solution to identify and track malicious activities within the dark web. Designed and developed a sophisticated search engine for users to submit queries and retrieve relevant content from the dark web.",
      ],
      icon: <FaUserShield />,
    },
    {
      title: "Intern - Data Management",
      company: "Bloombloom Dreambiz",
      location: "Thiruvananthapuram, Kerala",
      period: "01/2019 - 04/2019",
      responsibilities: [
        "Coordinated with data management team in filtering and updating the database of the company. Participated and hosted tech talks and other cultural programs.",
      ],
      icon: <FaDatabase />,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400">
          Professional Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl text-gray-400 mr-4">{exp.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-green-400">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-blue-300 mb-2">
                    {exp.company} - {exp.location}
                  </p>
                  <p className="text-md text-gray-400">{exp.period}</p>
                </div>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed">
                {exp.responsibilities}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
