import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-800">
      <div className="text-center">
        <div className="relative rounded-full overflow-hidden w-64 h-64 mx-auto mb-6">
          <Image
            src="/Hero.jpg"
            alt="Ajay John Abraham"
            width={256}
            height={256}
            className="object-cover"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              position: "absolute",
              top: "-97px",
            }}
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">Ajay John Abraham</h1>
        <h2 className="text-2xl text-blue-400 mb-4">
          Software Developer Engineer
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Software Developer | Full Stack (React, Angular, .Net, React Native) |
          Python, Cybersecurity and Networking
        </p>
      </div>
    </section>
  );
}
