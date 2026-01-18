import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Interstellar",
    subtitle: "Now Showing",
    image: "https://picsum.photos/seed/interstellar/1600/700",
  },
  {
    id: 2,
    title: "The Dark Knight",
    subtitle: "Book Tickets Now",
    image: "https://picsum.photos/seed/darkknight/1600/700",
  },
  {
    id: 3,
    title: "Dune: Part Two",
    subtitle: "Coming Soon",
    image: "https://picsum.photos/seed/dune/1600/700",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 text-white">
              <h1 className="mt-2 text-3xl md:text-5xl font-bold">
                {slide.title}
              </h1>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-red-600" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
