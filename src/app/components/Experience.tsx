export default function Experience() {
  const experiences = [
    {
      title: "Software Developer Engineer",
      company: "CareStack",
      location: "Thiruvananthapuram, Kerala",
      period: "07/2022 - 09/2024",
      responsibilities: [
        "Worked with an Agile team of .NET developers to develop efficient software solutions.",
        "Conducted security testing on web applications developed using ASP.NET MVC, C#, and SQL Server with help of burp suite and OWASP ZAP.",
        "Worked closely with designers and development teams to design and deliver responsive, user-friendly interfaces.",
        "Actively contributed in developing new features for the product ensuring seamless integration and optimal performance.",
        "Engaged in code reviews to uphold coding standards and promote best practices across the team.",
        "Migrated the project from Angular 13 to Angular 14.",
        "Provided technical support and quick troubleshooting assistance to clients, resolving issues in a timely manner.",
        "Identified and resolved security vulnerabilities by implementing best practices and industry standards.",
        "Diagnosed and fixed issues to improve performance and streamline the user experience.",
        "Built and maintained consistent, platform-wide UI components using Tailwind CSS.",
      ],
    },
    {
      title: "Front end developer",
      company: "HacKP - Kerala Govt.",
      location: "Thiruvananthapuram, Kerala",
      period: "06/2021 - 10/2021",
      responsibilities: [
        "Worked in a Government-initiated project for developing a data scraping solution to identify and track malicious activities within the dark web.",
        "Designed and developed a sophisticated search engine for users to submit queries and retrieve relevant content from the dark web.",
      ],
    },
    {
      title: "Intern - Data Management",
      company: "Bloombloom Dreambiz",
      location: "Thiruvananthapuram, Kerala",
      period: "01/2019 - 04/2019",
      responsibilities: [
        "Coordinated with data management team in filtering and updating the database of the company.",
        "Participated and hosted tech talks and other cultural programs.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Professional Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-blue-400 mb-2">
                {exp.company} - {exp.location}
              </p>
              <p className="text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
