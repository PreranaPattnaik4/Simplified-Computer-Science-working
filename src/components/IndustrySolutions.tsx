import React from 'react';

export default function IndustrySolutions() {
  const tags = [
    { number: "01", text: "Generative AI", color: "bg-pastel-purple" },
    { number: "02", text: "Natural Language Processing", color: "bg-pastel-green" },
    { number: "03", text: "Machine Learning", color: "bg-pastel-blue" },
    { number: "04", text: "Data Science", color: "bg-pastel-beige" },
    { number: "05", text: "Computer Vision", color: "bg-pastel-pink" },
    { number: "06", text: "Responsible AI", color: "bg-pastel-purple" },
    { number: "07", text: "Deep Learning", color: "bg-pastel-green" },
    { number: "08", text: "AI Ethics", color: "bg-pastel-blue" },
    { number: "09", text: "Neural Networks", color: "bg-pastel-beige" },
    { number: "10", text: "Cloud Computing", color: "bg-pastel-pink" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
          Industry Solutions
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {tags.map((tag, index) => (
            <div
              key={index}
              className={`${tag.color} text-black px-6 md:px-8 py-4 rounded-full font-semibold shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
            >
              <span className="font-bold">{tag.number}</span> {tag.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
