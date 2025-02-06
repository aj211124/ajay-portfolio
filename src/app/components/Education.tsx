export default function Education() {
  const education = [
    {
      degree: "Bachelors in Technology",
      institution: "APJ Abdul Kalam Technical University",
      location: "Thiruvananthapuram, Kerala",
      period: "2018-2022",
      details:
        "Computer Science Engineering (major) - Relevant Courses: Software and Hardware Design, Programming Languages, Algorithms and Data Structure, Networking and Security.",
    },
    {
      degree: "Secondary Higher Studies",
      institution: "Kendriya Vidyalaya",
      location: "Thiruvananthapuram, Kerala",
      period: "2016-2018",
      details: "Science Major - Specialization in biotechnology",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-blue-400 mb-2">
                {edu.institution} - {edu.location}
              </p>
              <p className="text-gray-400 mb-4">{edu.period}</p>
              <p className="text-gray-300">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
