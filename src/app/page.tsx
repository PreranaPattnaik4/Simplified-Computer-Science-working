import { Menu, User, HelpCircle } from 'lucide-react';
import Image from 'next/image';

const heroCards = [
  {
    title: 'Career Tips and Roadmaps',
    imageUrl: 'https://picsum.photos/seed/tech-city/600/800',
    hint: 'futuristic city',
  },
  {
    title: 'Hackathons and Internships',
    imageUrl: 'https://picsum.photos/seed/vr-person/600/800',
    hint: 'person VR',
  },
  {
    title: 'AI & Robotics',
    imageUrl: 'https://picsum.photos/seed/robot-hand/600/800',
    hint: 'robot hand',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <button className="p-2">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </button>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold tracking-tighter">SCS</h1>
            <p className="text-xs text-white/60">Simplified Computer Science</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden text-sm font-medium hover:text-primary/80 sm:flex items-center gap-1">
              <HelpCircle className="h-4 w-4" /> FAQ
            </a>
            <button className="p-2">
              <User className="h-6 w-6" />
              <span className="sr-only">User profile</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {heroCards.map((card) => (
              <div key={card.title} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-cyan-500/50">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint={card.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Hackathons & Internships: Stand Out with Hands-On Experience!!
            </h2>
            <p className="mt-4 text-lg font-semibold text-accent">
              Earn Free Certificate
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}