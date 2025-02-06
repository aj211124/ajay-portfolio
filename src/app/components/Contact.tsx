export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-md mx-auto bg-gray-700 rounded-lg p-6 shadow-lg">
          <p className="text-gray-300 mb-4">
            Feel free to reach out to me for any inquiries or opportunities.
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:aaaforajay@gmail.com"
                className="text-blue-400 hover:underline"
              >
                aaaforajay@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +91 8301971036
            </li>
            <li>
              <strong>Location:</strong> Thiruvananthapuram, Kerala
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/ajay-john-abraham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                in/ajay-john-abraham
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/ajayjohn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/ajayjohn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
