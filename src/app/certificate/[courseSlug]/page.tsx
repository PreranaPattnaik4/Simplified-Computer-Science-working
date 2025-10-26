
'use client';

import { useState, useRef } from 'react';
import { notFound, useParams } from 'next/navigation';
import { getCourseBySlug } from '@/app/lib/courses';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, Linkedin, Award } from 'lucide-react';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import Link from 'next/link';

export default function CertificatePage() {
    const [studentName, setStudentName] = useState('Jane Doe');
    const { courseSlug } = useParams<{ courseSlug: string }>();
    const certificateRef = useRef<HTMLDivElement>(null);

    const course = getCourseBySlug(courseSlug);

    if (!course) {
        notFound();
    }

    const handleDownloadImage = () => {
        if (certificateRef.current) {
            toPng(certificateRef.current, { cacheBust: true, pixelRatio: 2 })
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.download = `SCS_${course.title.replace(/ /g, '_')}_Certificate.png`;
                    link.href = dataUrl;
                    link.click();
                })
                .catch((err) => {
                    console.error('oops, something went wrong!', err);
                });
        }
    };
    
    const handleDownloadPdf = () => {
        if (certificateRef.current) {
            toPng(certificateRef.current, { cacheBust: true, pixelRatio: 2 })
                .then((dataUrl) => {
                    const pdf = new jsPDF({
                        orientation: 'landscape',
                        unit: 'px',
                        format: [1000, 700]
                    });
                    pdf.addImage(dataUrl, 'PNG', 0, 0, 1000, 700);
                    pdf.save(`SCS_${course.title.replace(/ /g, '_')}_Certificate.pdf`);
                });
        }
    };

    const handleShareToLinkedIn = () => {
        const linkedInUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(course.title)}&organizationName=${encodeURIComponent('Simplified Computer Science')}&issueYear=${new Date().getFullYear()}&issueMonth=${new Date().getMonth() + 1}&certUrl=${encodeURIComponent(window.location.href)}`;
        window.open(linkedInUrl, '_blank');
    };

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                    <h1 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-2">Claim Your Certificate</h1>
                    <p className="text-muted-foreground mb-6">You've earned it! Enter your name as you'd like it to appear on the certificate.</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                            type="text"
                            placeholder="Enter your full name"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            className="max-w-sm text-lg"
                        />
                         <Button onClick={handleDownloadImage} size="lg">
                            <Download className="mr-2 h-5 w-5" /> Download as Image
                        </Button>
                        <Button onClick={handleDownloadPdf} size="lg" variant="secondary">
                            <Download className="mr-2 h-5 w-5" /> Download as PDF
                        </Button>
                        <Button onClick={handleShareToLinkedIn} size="lg" variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white">
                            <Linkedin className="mr-2 h-5 w-5" /> Share on LinkedIn
                        </Button>
                    </div>
                </div>

                {/* Certificate */}
                <div ref={certificateRef} className="bg-white w-full aspect-[10/7] p-10 relative border-8 border-gray-800 rounded-lg overflow-hidden flex flex-col" style={{ width: '1000px', height: '700px', margin: '0 auto' }}>
                    {/* Ornaments */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gray-800" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-800" style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 0)' }}></div>

                    <div className="flex-grow flex flex-col items-center justify-center text-center text-gray-800">
                        <h2 className="text-2xl font-light tracking-widest uppercase">Certificate of Completion</h2>
                        
                        <div className="w-48 h-px bg-gray-300 my-6"></div>

                        <p className="text-xl">This certifies that</p>
                        
                        <h1 className="text-6xl font-extrabold font-space-grotesk my-6 text-accent break-words max-w-full px-4">
                            {studentName || 'Your Name Here'}
                        </h1>
                        
                        <p className="text-xl max-w-2xl">
                            has successfully completed the course
                        </p>
                        <h3 className="text-3xl font-bold font-space-grotesk mt-4 mb-8">
                            {course.title}
                        </h3>

                        <div className="w-full flex justify-between items-end mt-auto text-sm">
                            <div className="text-left">
                                <p className="font-bold border-b border-gray-400 pb-1 px-4">{course.author}</p>
                                <p className="text-xs text-center">INSTRUCTOR</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <Award className="w-20 h-20 text-accent" />
                                <h3 className="text-xl font-bold font-space-grotesk tracking-wider">SCS</h3>
                                <p className="text-xs text-muted-foreground">SIMPLIFIED COMPUTER SCIENCE</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold border-b border-gray-400 pb-1 px-4">{currentDate}</p>
                                <p className="text-xs text-center">DATE</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/courses-live">
                        <Button variant="link">Explore more courses</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

