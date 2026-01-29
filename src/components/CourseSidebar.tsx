
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Clock, BarChart, Users } from 'lucide-react';
import type { getCourses } from '@/app/lib/courses';

type Course = ReturnType<typeof getCourses>[0];

type CourseSidebarProps = {
    course: Course;
    firstLessonSlug: string;
};

export default function CourseSidebar({ course, firstLessonSlug }: CourseSidebarProps) {
    const [isEnrolled, setIsEnrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check local storage for enrollment status
        const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
        if (enrolledCourses.includes(course.slug)) {
            setIsEnrolled(true);
        }
    }, [course.slug]);

    const handleEnroll = () => {
        // Save enrollment to local storage
        const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
        if (!enrolledCourses.includes(course.slug)) {
            enrolledCourses.push(course.slug);
            localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
        }
        setIsEnrolled(true);
        // Redirect to first lesson
        router.push(`/learn/${course.slug}/${firstLessonSlug}`);
    };

    return (
        <div className="sticky top-24">
            <Card className="overflow-hidden shadow-lg">
                <div className="relative">
                    <Image
                        src={course.image}
                        alt={course.title}
                        width={500}
                        height={300}
                        className="w-full h-56 object-cover"
                    />
                    {course.isTopCourse && (
                        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                            <Award size={14} />
                            <span>Top Course 2026</span>
                        </div>
                    )}
                </div>
                <div className="p-6">
                    <h2 className="text-3xl font-bold mb-4">Free</h2>
                    {isEnrolled ? (
                        <Link href={`/learn/${course.slug}/${firstLessonSlug}`} passHref>
                            <Button className="w-full h-12 text-lg font-bold">Continue Learning</Button>
                        </Link>
                    ) : (
                        <Button onClick={handleEnroll} className="w-full h-12 text-lg font-bold bg-accent text-accent-foreground hover:bg-yellow-500">
                            Enroll Now
                        </Button>
                    )}
                    <div className="mt-6 space-y-3 text-muted-foreground">
                        <p className="flex items-center gap-3"><Clock size={18} /><span>Approx. 25 hours to complete</span></p>
                        <p className="flex items-center gap-3"><BarChart size={18} /><span>{course.level}</span></p>
                        <p className="flex items-center gap-3"><Users size={18} /><span>{course.students.toLocaleString()} students</span></p>
                        <p className="flex items-center gap-3"><Award size={18} /><span>Certificate of completion</span></p>
                    </div>
                    <div className="mt-6">
                        <h4 className="font-bold font-space-grotesk text-gray-800 mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {course.suggestedTags.map(tag => (
                                <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
