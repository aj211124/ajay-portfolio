export default function Projects() {
  const projects = [
    {
      title: "Labs and Simulations",
      description:
        "Used platforms like Hack The Box and TryHackMe for hands-on practice. Participated in CTFs to challenge myself and learn.",
    },
    {
      title: "Deep Fake detection",
      description:
        "Implemented a deep fake detection model to distinguish between real and AI generated hyper-realistic forged videos. Leveraged a combination of machine learning algorithms and computer vision techniques.",
    },
    {
      title: "Auto brightness controlling in vehicle head lamps",
      description:
        "Developed an Arduino-Controlled adaptive lighting system that automatically adjusts the light voltage and brightness of headlamps. Implemented using Photoresistors and Arduino.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
