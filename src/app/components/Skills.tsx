export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["C#", "C", "Python", "JavaScript", "SQL"],
    },
    {
      category: "Security Tools",
      items: [
        "Nmap",
        "Hydra",
        "John the Ripper",
        "Dirb",
        "Metasploit",
        "Burp Suite",
        "OWASP ZAP",
      ],
    },
    {
      category: "Frameworks",
      items: [
        "Angular",
        "Dot Net",
        "Django",
        "Odoo",
        "React",
        "React Native",
        "AppWrite",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Presentation",
        "Planning",
        "Organized",
        "Creative Problem-Solving",
        "Teamwork",
        "Active Listening",
        "Adaptability",
        "Analytical Thinking",
      ],
    },
    {
      category: "Cloud Services",
      items: ["Amazon Web Services (AWS)", "Azure"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                {skillSet.category}
              </h3>
              <ul className="list-disc list-inside text-gray-300">
                {skillSet.items.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
