
'use client';

import { useState, useRef } from 'react';
import { notFound, useParams } from 'next/navigation';
import { getCourseBySlug } from '@/app/lib/courses';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, Linkedin } from 'lucide-react';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import Link from 'next/link';
import Image from 'next/image';

const MedalIcon = () => (
    <svg width="100" height="100" viewBox="0 0 100 120" className="mx-auto">
        <path d="M20 0 L50 30 L80 0 L50 20 Z" fill="#60A5FA" />
        <path d="M50 20 L20 0 L50 30 Z" fill="#3B82F6" />
        <circle cx="50" cy="70" r="30" fill="#FBBF24"/>
        <polygon points="50,55 55,68 70,70 58,80 62,95 50,85 38,95 42,80 30,70 45,68" fill="white"/>
         <g transform="translate(50, 70)">
            <path d="M0 -35 L5 -38 L0 -41 L-5 -38 Z" fill="#FBBF24" />
            <path d="M35 0 L38 -5 L41 0 L38 5 Z" fill="#FBBF24" />
            <path d="M0 35 L5 38 L0 41 L-5 38 Z" fill="#FBBF24" />
            <path d="M-35 0 L-38 -5 L-41 0 L-38 5 Z" fill="#FBBF24" />
            <path d="M25 -25 L28 -22 L25 -19 L22 -22 Z" fill="#FBBF24" />
            <path d="M25 25 L28 22 L25 19 L22 22 Z" fill="#FBBF24" />
            <path d="M-25 25 L-28 22 L-25 19 L-22 22 Z" fill="#FBBF24" />
            <path d="M-25 -25 L-28 -22 L-25 -19 L-22 -22 Z" fill="#FBBF24" />
        </g>
    </svg>
);


export default function CertificatePage() {
    const [studentName, setStudentName] = useState('Learner Name');
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
                        format: [1100, 850]
                    });
                    pdf.addImage(dataUrl, 'PNG', 0, 0, 1100, 850);
                    pdf.save(`SCS_${course.title.replace(/ /g, '_')}_Certificate.pdf`);
                });
        }
    };

    const handleShareToLinkedIn = () => {
        const linkedInUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(course.title)}&organizationName=${encodeURIComponent('Simplified Computer Science')}&issueYear=${new Date().getFullYear()}&issueMonth=${new Date().getMonth() + 1}&certUrl=${encodeURIComponent(window.location.href)}`;
        window.open(linkedInUrl, '_blank');
    };

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
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
                        <Button onClick={handleShareToLinkedIn} size="lg" variant="secondary" className="bg-[#0077B5] hover:bg-[#005E92] text-white">
                            <Linkedin className="mr-2 h-5 w-5" /> Share on LinkedIn
                        </Button>
                    </div>
                </div>

                {/* Certificate */}
                <div ref={certificateRef} className="bg-white w-full p-4 relative" style={{ width: '1100px', height: '850px', margin: '0 auto' }}>
                    <div className="w-full h-full border-[1.5rem] border-[#004B49] p-10 flex flex-col text-[#004B49]">
                        <div className="flex-grow flex flex-col items-center">
                            
                            {/* Logo */}
                            <div className="text-center mb-8">
                                <Image src="https://i.postimg.cc/rs90fh6y/3.png" alt="SCS Logo" width={180} height={60} />
                            </div>

                            <h1 className="text-5xl font-serif font-bold">Certificate of Completion</h1>
                            
                            <p className="text-xl mt-8">This Certificate is awarded to</p>
                            
                            <div className="text-center my-6">
                                <div className="border-t border-dotted border-gray-400 w-96 mx-auto"></div>
                                <h2 className="text-6xl font-serif font-bold my-4 break-words max-w-full px-4">
                                    {studentName || 'Learner Name'}
                                </h2>
                                <div className="border-b border-dotted border-gray-400 w-96 mx-auto"></div>
                            </div>
                            
                            <p className="text-xl max-w-2xl text-center">
                                has successfully completed the course
                            </p>
                            <h3 className="text-4xl font-serif font-semibold mt-4 mb-8">
                                {course.title}
                            </h3>

                            <div className="w-full flex justify-between items-end mt-auto px-16">
                                <div className="text-center">
                                    <p className="font-serif text-xl font-semibold border-b border-dotted border-gray-400 pb-1 px-4">Prerana Pattnaik</p>
                                    <p className="text-xs text-gray-500 tracking-widest mt-1">COURSE DIRECTOR</p>
                                </div>
                                <div className="-mb-2">
                                  <MedalIcon />
                                </div>
                                <div className="text-center">
                                    <p className="font-serif text-xl font-semibold border-b border-dotted border-gray-400 pb-1 px-4">Khusi Kumari</p>
                                    <p className="text-xs text-gray-500 tracking-widest mt-1">PROGRAM DIRECTOR</p>
                                </div>
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
