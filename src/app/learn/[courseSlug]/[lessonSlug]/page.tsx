
import { getCourseBySlug, getCourses } from '@/app/lib/courses';
import { notFound } from 'next/navigation';
import LessonClientPage from './LessonClientPage';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  const courses = getCourses();
  const params: { courseSlug: string; lessonSlug: string }[] = [];
  courses.forEach(course => {
    course.syllabus?.forEach(module => {
      module.lessons.forEach(lesson => {
        params.push({ courseSlug: course.slug, lessonSlug: lesson.slug });
      });
    });
  });
  return params;
}

export default function LessonPage({ params }: { params: { courseSlug: string; lessonSlug: string } }) {
  const course = getCourseBySlug(params.courseSlug);

  if (!course || !course.syllabus) {
    notFound();
  }

  const allLessons = course.syllabus.flatMap(module => module.lessons);
  const currentLessonIndex = allLessons.findIndex(lesson => lesson.slug === params.lessonSlug);
  
  if (currentLessonIndex === -1) {
    // A fallback for when the lesson is not found.
    const firstLessonSlug = course.syllabus[0]?.lessons[0]?.slug;
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            <h1 className="text-3xl font-bold font-space-grotesk mb-4">Lesson Not Found</h1>
            <p className="text-muted-foreground mb-8">We couldn't find the lesson you were looking for.</p>
            {firstLessonSlug ? (
                <Link href={`/learn/${params.courseSlug}/${firstLessonSlug}`}>
                    <Button>Go to First Lesson</Button>
                </Link>
            ) : (
                 <Link href={`/courses-live/${params.courseSlug}`}>
                    <Button>Back to Course Details</Button>
                </Link>
            )}
        </div>
    );
  }

  return (
    <LessonClientPage 
        course={course} 
        currentLessonIndex={currentLessonIndex} 
        lessonSlug={params.lessonSlug} 
    />
  );
}

