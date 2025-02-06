import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-800">
      <div className="text-center">
        <Image
          src="/Hero.jpg"
          alt="Ajay John Abraham"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-6"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <h1 className="text-4xl font-bold mb-2">Ajay John Abraham</h1>
        <h2 className="text-2xl text-blue-400 mb-4">
          Software Developer Engineer
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Highly motivated and result-oriented software developer with 2 years
          of experience in software and database development.
        </p>
      </div>
    </section>
  );
}
