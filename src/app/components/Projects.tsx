import { ExternalLink, Code, Building2 } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  link?: string;
  location?: string;
  type: string;
  image?: string;
};

export default function Projects() {
  const professionalProjects: Project[] = [
    {
      title: "Knotbook Wedding",
      description:
        "A professional wedding photography portfolio website showcasing services for wedding, engagement, and baptism photography. Built with modern web technologies and hosted on Netlify.",
      link: "https://knotbook-wedding.netlify.app",
      type: "website",
      location: "Kerala",
    },
    {
      title: "Leisung Tech",
      description:
        "Provided comprehensive Odoo support services for client operations in Dubai",
      location: "Dubai",
      type: "business",
    },
    {
      title: "MSI Global",
      description:
        "Delivered customized software solutions to meet specific business requirements",
      location: "Dubai",
      type: "business",
    },
    {
      title: "Spic Laundry",
      description:
        "Implemented and maintained Odoo systems for streamlined operations",
      location: "UAE",
      type: "business",
    },
    {
      title: "Bright School - Salary Management",
      description:
        "Developed comprehensive salary management software for educational institution",
      location: "Kerala",
      type: "education",
    },
    {
      title: "Bright School - Transport Management",
      description:
        "Created transport management system to optimize school transportation operations",
      location: "Kerala",
      type: "education",
    },
  ];

  const personalProjects: Project[] = [
    {
      title: "Labs and Simulations",
      description:
        "Used platforms like Hack The Box and TryHackMe for hands-on practice. Participated in CTFs to challenge myself and learn.",
      type: "security",
    },
    {
      title: "Deep Fake Detection",
      description:
        "Implemented a deep fake detection model to distinguish between real and AI generated hyper-realistic forged videos. Leveraged a combination of machine learning algorithms and computer vision techniques.",
      type: "ai",
    },
    {
      title: "Auto Brightness Control",
      description:
        "Developed an Arduino-Controlled adaptive lighting system that automatically adjusts the light voltage and brightness of headlamps. Implemented using Photoresistors and Arduino.",
      type: "hardware",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "website":
        return <ExternalLink className="w-5 h-5" />;
      case "business":
        return <Building2 className="w-5 h-5" />;
      case "security":
        return <Code className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        {/* Professional Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            Professional Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalProjects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  {getIcon(project.type)}
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                </div>
                <p className="text-gray-300 mb-2">{project.description}</p>
                {project.location && (
                  <p className="text-blue-400 text-sm">{project.location}</p>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                  >
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            Personal Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                {project.image && (
                  <div className="mb-4 relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center gap-2 mb-3">
                  {getIcon(project.type)}
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                </div>
                <p className="text-gray-300 mb-2">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                  >
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
