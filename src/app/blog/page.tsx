'use client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { getBlogPosts, recentPosts, tags } from '@/app/lib/posts';

const filterCategories = ['All', 'Artificial Intelligence', 'Software Development', 'Career Development', 'Tech Insights'];
const POSTS_PER_PAGE = 5;


export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const blogPosts = getBlogPosts();

  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === 'All' || post.category.includes(selectedCategory)
  );
  
  const postsToShow = filteredPosts.slice(0, visibleCount);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(POSTS_PER_PAGE);
  };

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + POSTS_PER_PAGE);
  };

  return (
    <div className="bg-white text-gray-800">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-left">
            <div className="w-full md:w-2/3">
              <div className="h-1 w-16 bg-accent mb-4"></div>
              <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk text-gray-900 leading-tight">
                Stay Ahead of the Curve with Cutting-Edge Content: AI, Tech & CS
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Fuel your curiosity with insightful blogs exploring the latest advancements in AI, the ever-evolving tech world, and in-depth analyses of various computer science topics. Keep your tech knowledge on point!
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Blog Posts */}
            <div className="w-full lg:w-2/3">
              <div className="flex flex-wrap gap-2 mb-8 border-b pb-4">
                  {filterCategories.map(category => (
                    <button 
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                        selectedCategory === category
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
              </div>

              <div className="space-y-12">
                {postsToShow.map((post, index) => (
                  <article key={index} className="flex flex-col md:flex-row gap-6 group">
                     <div className="flex-grow">
                        <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">{post.category}</div>
                        <h2 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-2">
                          <Link href={post.link} className="group-hover:text-accent transition-colors">{post.title}</Link>
                        </h2>
                        <div className="text-sm text-gray-500 mb-3">{post.date}</div>
                        <p className="text-gray-600 leading-relaxed line-clamp-3">{post.description}</p>
                         <Link href={post.link} className="text-accent font-semibold mt-4 inline-block hover:underline">Read More</Link>
                    </div>
                  </article>
                ))}
              </div>

              {visibleCount < filteredPosts.length && (
                <div className="mt-12 text-center">
                    <button 
                      onClick={loadMore}
                      className="bg-accent text-accent-foreground font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors"
                    >
                        Load More
                    </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-1/3 space-y-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold font-space-grotesk mb-4 border-b pb-2">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post, index) => (
                     <li key={index}>
                        <Link href={post.link} className="font-semibold text-gray-800 hover:text-accent">{post.title}</Link>
                        <div className="text-xs text-gray-500 mt-1">{post.date} / {post.comments} Comments</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold font-space-grotesk mb-4 border-b pb-2">Search</h3>
                <div className="relative">
                    <input type="text" placeholder="Search..." className="w-full pl-4 pr-10 py-2 border rounded-lg focus:ring-accent focus:border-accent" />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

               <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold font-space-grotesk mb-4 border-b pb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                         <a key={index} href="#" className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors">
                            {tag}
                        </a>
                    ))}
                </div>
              </div>

               <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold font-space-grotesk mb-4 border-b pb-2">Please share this</h3>
                <div className="flex space-x-2">
                     {/* Social share icons can be added here */}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
