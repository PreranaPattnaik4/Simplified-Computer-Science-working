
'use client'

import { notFound } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { CheckCircle, Circle, FileText, MessageSquare, BookOpen, ChevronLeft, ChevronRight, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useEffect } from 'react';
import { marked } from 'marked';
import type { getCourses } from '@/app/lib/courses';
import { cn } from '@/lib/utils';
import Quiz from '@/components/Quiz';

type Course = ReturnType<typeof getCourses>[0];

type ContentCard = {
    cardTitle: string;
    cardSubtitle: string;
    cardContent: string;
};

type Question = {
    question: string;
    options: { id: string; text: string }[];
    correctAnswer: string;
    explanation: string;
}

type Lesson = Course['syllabus'][0]['lessons'][0] & {
    type?: string;
    content: string | ContentCard[];
    questions?: Question[];
};

export default function LessonClientPage({ course, currentLessonIndex, lessonSlug }: { course: Course, currentLessonIndex: number, lessonSlug: string }) {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [progressLoaded, setProgressLoaded] = useState(false);

  useEffect(() => {
    const savedProgress = localStorage.getItem(`progress_${course.slug}`);
    if (savedProgress) {
        setCompletedLessons(new Set(JSON.parse(savedProgress)));
    }
    setProgressLoaded(true);
  }, [course.slug]);

  useEffect(() => {
    if (progressLoaded) {
        localStorage.setItem(`progress_${course.slug}`, JSON.stringify(Array.from(completedLessons)));
    }
  }, [completedLessons, progressLoaded, course.slug]);


  if (!course || !course.syllabus) {
    notFound();
  }
  
  const allLessons = course.syllabus.flatMap(module => module.lessons);
  const currentLesson = allLessons[currentLessonIndex] as Lesson;
  
  const totalLessons = allLessons.length;
  const progress = totalLessons > 0 ? (completedLessons.size / totalLessons) * 100 : 0;

  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

  const handleMarkComplete = () => {
    // When a lesson is marked complete, all preceding lessons are also marked complete.
    const newCompleted = new Set(completedLessons);
    for (let i = 0; i <= currentLessonIndex; i++) {
        newCompleted.add(allLessons[i].slug);
    }
    setCompletedLessons(newCompleted);
  };
  
  const isCurrentLessonCompleted = completedLessons.has(lessonSlug);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-80 min-w-80 flex-shrink-0 border-r bg-white flex flex-col">
        <div className="p-4 border-b">
          <Link href="/courses-live" className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-black">
            <BookOpen size={16} />
            <span>Course Content</span>
          </Link>
        </div>
        <div className="flex-grow overflow-y-auto">
          <Accordion type="multiple" defaultValue={course.syllabus.map((_, i) => `item-${i}`)} className="w-full">
            {course.syllabus.map((module, moduleIndex) => (
              <AccordionItem key={moduleIndex} value={`item-${moduleIndex}`} className="border-none">
                <AccordionTrigger className="px-4 py-3 text-sm font-semibold hover:bg-gray-100 border-b">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <ul className="space-y-1 mt-1">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const isActive = lesson.slug === lessonSlug;
                      const isLessonCompleted = completedLessons.has(lesson.slug);

                      return (
                        <li key={lessonIndex}>
                          <Link href={`/learn/${course.slug}/${lesson.slug}`}>
                            <div className={cn(
                              "flex items-center gap-3 px-4 py-2.5 text-sm mx-2 rounded-md",
                              isActive ? 'bg-accent/20 text-accent-foreground font-semibold' : 'hover:bg-gray-100',
                            )}>
                              <FileText size={16} className="flex-shrink-0" />
                              <span className="flex-grow">{lesson.title}</span>
                              {isLessonCompleted ? <CheckCircle size={16} className="text-green-500 flex-shrink-0" /> : <Circle size={16} className={cn("flex-shrink-0", isActive ? 'text-accent' : 'text-gray-300')} />}
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <div className="border-b bg-white">
            <div className="container mx-auto max-w-7xl px-6 py-3 flex justify-between items-center">
                <h1 className="text-lg font-semibold text-gray-800">{course.title}</h1>
                 <div className="flex items-center gap-4">
                    <div className="w-64">
                         <Progress value={progress} className="h-2" />
                         <p className="text-xs text-muted-foreground mt-1 text-right">{Math.round(progress)}% Complete</p>
                    </div>
                    {currentLesson.type !== 'quiz' && (
                        <Button 
                          variant={isCurrentLessonCompleted ? "default" : "outline"} 
                          size="sm"
                          onClick={handleMarkComplete}
                          disabled={isCurrentLessonCompleted}
                        >
                          {isCurrentLessonCompleted ? "Completed" : "Mark as Complete"}
                        </Button>
                    )}
                </div>
            </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 flex justify-center bg-gray-50">
          <div className="w-full max-w-4xl">
            <h2 className="text-3xl font-bold font-space-grotesk mb-2">{currentLesson.title}</h2>
            <div className="h-px bg-gray-200 mb-8"></div>
            
            <Tabs defaultValue="overview">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                {currentLesson.type === 'quiz' ? (
                  <Quiz lesson={currentLesson as any} courseSlug={course.slug} onComplete={handleMarkComplete} />
                ) : (
                  <>
                  {Array.isArray(currentLesson.content) ? (
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {(currentLesson.content as ContentCard[]).map((card, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl shadow-sm bg-white overflow-hidden">
                          <AccordionTrigger className="p-6 text-left hover:no-underline data-[state=open]:border-b">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold font-space-grotesk text-gray-900">{card.cardTitle}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{card.cardSubtitle}</p>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="p-6 pt-4">
                            <div 
                              className="prose prose-lg max-w-none" 
                              dangerouslySetInnerHTML={{ __html: marked(card.cardContent) }} 
                            />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <article className="prose prose-lg max-w-none p-6 bg-white rounded-xl border shadow-sm">
                      <div dangerouslySetInnerHTML={{ __html: marked(currentLesson.content as string) }} />
                    </article>
                  )}
                  </>
                )}
              </TabsContent>
              <TabsContent value="comments">
                <div className="bg-white p-8 rounded-xl border text-center">
                  <MessageSquare className="mx-auto text-gray-400 h-12 w-12 mb-4" />
                  <h3 className="font-bold font-space-grotesk text-xl">Comments are coming soon!</h3>
                  <p className="text-muted-foreground mt-2">Have a question or want to share your thoughts? A discussion area will be available here shortly.</p>
                </div>
              </TabsContent>
            </Tabs>

            {currentLesson.type !== 'quiz' && (
                <div className="mt-12 flex justify-between items-center border-t pt-8">
                    {prevLesson ? (
                        <Link href={`/learn/${course.slug}/${prevLesson.slug}`}>
                            <Button variant="outline">
                                <ChevronLeft className="h-4 w-4 mr-2" />
                                Previous Lesson
                            </Button>
                        </Link>
                    ) : (
                        <div /> // Placeholder for alignment
                    )}
                    {nextLesson ? (
                        <Link href={`/learn/${course.slug}/${nextLesson.slug}`} passHref>
                            <Button onClick={handleMarkComplete}>
                                Next Lesson
                                <ChevronRight className="h-4 w-4 ml-2" />
                            </Button>
                        </Link>
                    ) : (
                        <Link href={`/certificate/${course.slug}`} passHref>
                            <Button onClick={handleMarkComplete}>Finish Course</Button>
                        </Link>
                    )}
                </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
