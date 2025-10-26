'use client';
import { Search, Star, Users, MessageSquare, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const categories = [
  'Artificial Intelligence',
  'Development',
  'WordPress',
];

const tags = [
    "AI Applications",
    "AI Techniques",
    "Beginner",
    "Elementor",
    "GANs"
];

const courses = [
  {
    title: 'Web Development Fundamentals with Responsive Web Design Essentials',
    image: 'https://picsum.photos/seed/course1/500/300',
    rating: 0,
    students: 8,
    comments: 6,
    author: 'Prerana',
    authorImage: '/scs-logo.png',
    categories: ['Development', 'WordPress'],
  },
  {
    title: 'WordPress Website Development for Professionals',
    image: 'https://picsum.photos/seed/course2/500/300',
    rating: 0,
    students: 2,
    comments: 0,
    author: 'Prerana',
    authorImage: '/scs-logo.png',
    categories: ['Development', 'WordPress'],
  },
  {
    title: 'Artificial Intelligence Beginners Guide',
    image: 'https://picsum.photos/seed/course3/500/300',
    rating: 0,
    students: 0,
    comments: 0,
    author: 'Prerana',
    authorImage: '/scs-logo.png',
    categories: ['Artificial Intelligence'],
  },
];

const CourseCard = ({ course }: { course: typeof courses[0] }) => (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative">
            <Image src={course.image} alt={course.title} width={500} height={300} className="w-full h-48 object-cover" />
             <div className="absolute top-2 right-2 bg-white p-1.5 rounded-full text-gray-500 hover:text-accent cursor-pointer">
                <MessageSquare size={16} />
            </div>
        </div>
        <div className="p-4">
            <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < course.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                ))}
            </div>
            <h3 className="font-bold text-lg mb-3 h-14 line-clamp-2">{course.title}</h3>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{course.students}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MessageSquare size={16} />
                    <span>{course.comments}</span>
                </div>
            </div>
             <div className="border-t border-gray-200 pt-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">SCS</div>
                <div>
                    <p className="text-sm font-semibold">{course.author}</p>
                    <p className="text-xs text-gray-500">In {course.categories.join(', ')}</p>
                </div>
            </div>
        </div>
    </div>
);


export default function CoursesLivePage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4">
          <div className="space-y-6">
            <div className="relative">
              <input type="text" placeholder="Search" className="w-full border rounded-md py-2 px-4 pl-10" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-accent rounded focus:ring-accent-focus" />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Tag</h3>
              <div className="space-y-2">
                {tags.map((tag) => (
                  <label key={tag} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-accent rounded focus:ring-accent-focus" />
                    <span>{tag}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4">
          <div className="flex justify-end mb-4">
             <div className="relative">
                <button className="flex items-center gap-2 border rounded-md px-4 py-2 text-sm">
                    <span>Release Date (newest first)</span>
                    <ChevronDown size={16} />
                </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
