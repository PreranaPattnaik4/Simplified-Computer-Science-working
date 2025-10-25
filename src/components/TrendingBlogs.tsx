
'use client';
import React from 'react';
import { ArrowRight } from "lucide-react";

export default function TrendingBlogs() {
  const blogs = [
    {
      number: "01",
      category: "Preview",
      tags: "Artificial Intelligence | Features Tech | Insight blogs",
      title: "Understanding Artificial Intelligence: A Beginner's Guide to AI | Simplified Computer Science",
      description: "Edit Content Click on the Edit Content button to edit the current introduction Artificial Intelligence yet to become a household...",
      link: "#",
    },
    {
      number: "02",
      category: "Preview",
      tags: "Artificial Intelligence | PROJECTS | DFS",
      title: "AI Artistry Unleashed: A Curated Collection of My Prompt-Generated Creations",
      description: "In the world of digital art, AI is transforming how we create. Through my collections, AI Artistry Unleashed, ho...",
      link: "#",
    },
    {
      number: "03",
      category: "Preview",
      tags: "Artificial Intelligence | Features Tech",
      title: "Top Free AI Tools to Supercharge Your Productivity and Creativity in 2023",
      description: "Edit Content Click on the Edit Content button to edit the current Artificial Intelligence continues to revolutionize the way we...",
      link: "#",
    },
    {
      number: "04",
      category: "Preview",
      tags: "Artificial Intelligence | ML | Tutorial",
      title: "Exploring Deep Learning: From Theory to Practice",
      description: "Deep learning has become a cornerstone of modern AI applications. Learn the fundamentals and practical applications...",
      link: "#",
    },
    {
      number: "05",
      category: "Preview",
      tags: "Data Science | Analytics | Insight",
      title: "Data Science Fundamentals: Building Your Career Path",
      description: "Discover the essential skills needed to start a career in data science. From statistics to programming, we cover...",
      link: "#",
    },
    {
      number: "06",
      category: "Preview",
      tags: "Web Development | Frontend | Coding",
      title: "Modern Web Development: Best Practices and Trends",
      description: "Stay ahead of the curve with the latest web development practices. Learn about responsive design, performance...",
      link: "#",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Discover the most trending courses in AI, technology, and more! Join now to access these high-demand courses</h2>
            <p className="mx-auto mt-4 max-w-4xl text-muted-foreground">
              Gain full access to our extensive library of free courses and track your progress effortlessly! While our Blogs, Tutorials, and Resources are available without signup, registering allows you to enjoy exclusive content, course certificates, and more. Most of our courses are free—start learning today with no fees, just knowledge!
            </p>
            <button className="mt-8 rounded-full bg-accent px-10 py-3 font-bold text-accent-foreground transition-transform hover:scale-105">
              TRENDING BLOGS
            </button>
        </div>


        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow relative group"
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-pastel-purple text-black font-bold flex items-center justify-center text-sm">
                {blog.number}
              </div>

              {/* Category Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block w-2 h-2 bg-gold rounded-full"></span>
                <span className="text-xs font-semibold text-gray-600">
                  {blog.category}
                </span>
              </div>

              {/* Tags */}
              <p className="text-xs text-gray-500 mb-4 line-clamp-1">
                {blog.tags}
              </p>

              {/* Title */}
              <h3 className="text-lg font-bold text-black mb-4 line-clamp-2 group-hover:text-gold transition-colors">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                {blog.description}
              </p>

              {/* CTA Link */}
              <a
                href={blog.link}
                className="text-gray-700 text-sm font-semibold hover:text-gold transition-colors inline-flex items-center gap-2"
              >
                Edit Content Click
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

    