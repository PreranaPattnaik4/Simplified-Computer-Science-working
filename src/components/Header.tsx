"use client"

import { Menu, User, Search, LogIn, UserPlus, X, BookText, GraduationCap, Loader2, ListChecks } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { useState, useEffect, useMemo } from "react"
import AuthModal from "./AuthModal"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Input } from "./ui/input"
import Image from "next/image"
import { getCourses } from "@/app/lib/courses"
import { getBlogPosts } from "@/app/lib/posts"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ai-search", label: "AI Search" },
  { href: "/courses-live", label: "Courses" },
  { href: "/tech-guide", label: "Tech Guide" },
  { href: "/career-tips-and-roadmaps", label: "Career Tips" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blogs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthModalOpen(false);
    setIsLoggedIn(true);
  };
  
  const searchableContent = useMemo(() => {
    const courses = getCourses().map(course => ({...course, type: 'Course'}));
    const blogPosts = getBlogPosts().map(post => ({...post, type: 'Blog'}));
    return [
        ...courses.map(c => ({ id: c.slug, title: c.title, description: c.description, link: `/courses-live/${c.slug}`, type: 'Course' })),
        ...blogPosts.map(b => ({ id: b.link, title: b.title, description: b.description, link: b.link, type: 'Blog' }))
    ];
  }, []);

  useEffect(() => {
      if (searchQuery.length < 2) {
          setSearchResults([]);
          return;
      }

      setIsSearching(true);
      const handler = setTimeout(() => {
          const results = searchableContent.filter(item =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.description.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setSearchResults(results);
          setIsSearching(false);
      }, 300);

      return () => {
          clearTimeout(handler);
      };
  }, [searchQuery, searchableContent]);


  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };


  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex cursor-pointer items-center gap-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="font-semibold text-sm">MENU</span>
            </button>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 group">
              <Link href="/" className="cursor-pointer">
                <div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
                    <Image src="https://i.postimg.cc/rs90fh6y/3.png" alt="Simplified Computer Science Logo" width={120} height={40} priority />
                </div>
              </Link>
          </div>

          <div className="flex items-center gap-4">
            <Search onClick={() => setIsSearchOpen(true)} className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-foreground" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {isLoggedIn ? (
                  <>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href="/dashboard" passHref><DropdownMenuItem>Dashboard</DropdownMenuItem></Link>
                    <Link href="/profile" passHref><DropdownMenuItem>Profile</DropdownMenuItem></Link>
                    <Link href="#" passHref><DropdownMenuItem>Settings</DropdownMenuItem></Link>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>Log out</DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem onClick={() => setIsAuthModalOpen(true)}>
                      <LogIn className="mr-2 h-4 w-4" />
                      <span>Sign In</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setIsAuthModalOpen(true)}>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Sign Up</span>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      
      {/* Full-screen Menu Overlay */}
      <div className={cn(
          "fixed top-20 left-0 right-0 bottom-0 z-30 bg-white transition-all duration-500 ease-in-out",
          isMenuOpen 
            ? "translate-y-0 opacity-100 visible" 
            : "-translate-y-full opacity-0 invisible"
      )}>
        <div className="container mx-auto max-w-7xl px-4 h-full">
            {/* Navigation Links */}
            <nav className="flex flex-col items-center pt-16">
                {navLinks.map((link) => {
                    const isActive = (pathname === '/' && link.href === '/') || (link.href !== '/' && pathname.startsWith(link.href));
                    return (
                        <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                            <div className={cn(
                                "w-screen py-2 text-center font-bold text-lg tracking-wider text-gray-700 hover:bg-gray-100",
                                isActive && "bg-gray-200/70 text-black"
                            )}>
                                {link.label.toUpperCase()}
                            </div>
                        </Link>
                    )
                })}
                 <Link href={isLoggedIn ? "/profile" : "#"} onClick={() => {
                   setIsMenuOpen(false);
                   if (!isLoggedIn) setIsAuthModalOpen(true);
                 }}>
                    <div className="w-screen py-2 text-center font-bold text-lg tracking-wider text-gray-700 hover:bg-gray-100">
                        MY PROFILE
                    </div>
                </Link>
            </nav>
        </div>
      </div>

       {/* Search Overlay */}
      <div className={cn(
        "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-in-out",
        isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <button onClick={closeSearch} className="absolute top-6 right-8 text-white/70 hover:text-white">
          <X size={32} />
        </button>
        <div className="h-full flex flex-col items-center pt-24 px-4">
            <div className="relative w-full max-w-2xl">
                <Input 
                    type="search" 
                    placeholder="Search for courses, blog posts, and more..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-16 pl-6 pr-16 rounded-full bg-transparent text-white text-xl border-2 border-white/50 focus:border-white focus:ring-0 placeholder:text-white/50"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70">
                    {isSearching ? <Loader2 className="animate-spin" /> : <Search size={24} />}
                </div>
            </div>
            
            <div className="mt-8 w-full max-w-2xl overflow-y-auto max-h-[calc(100vh-200px)]">
                {searchResults.length > 0 && (
                    <div className="bg-white/10 rounded-lg p-4 space-y-2">
                        {searchResults.map((result) => (
                            <Link key={result.id} href={result.link} onClick={closeSearch}>
                                <div className="p-4 rounded-md hover:bg-white/20 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-2 text-sm text-yellow-400 font-bold">
                                        {result.type === 'Course' ? <GraduationCap size={16} /> : <BookText size={16} />}
                                        <span>{result.type}</span>
                                    </div>
                                    <h4 className="font-bold text-white mt-1">{result.title}</h4>
                                    <p className="text-sm text-gray-300 line-clamp-2 mt-1">{result.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
                {searchQuery.length > 1 && !isSearching && searchResults.length === 0 && (
                    <p className="text-center text-gray-300 mt-8">No results found for "{searchQuery}".</p>
                )}
            </div>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onOpenChange={setIsAuthModalOpen}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  )
}
