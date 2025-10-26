
import { BookOpen, Award, User, ShoppingCart, Star, HelpCircle, Settings, LogOut, FileText, Bell, DollarSign, BookCopy, BarChartHorizontal } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const StatCard = ({ icon: Icon, title, value }: { icon: React.ElementType, title: string, value: string | number }) => (
    <Card>
        <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="bg-accent/10 p-4 rounded-full mb-4">
                <Icon className="w-8 h-8 text-accent" />
            </div>
            <p className="text-3xl font-bold font-space-grotesk">{value}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
        </CardContent>
    </Card>
);


export default function DashboardPage() {
    return (
        <main className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold font-space-grotesk">Dashboard</h1>
                <Button>+ New Course</Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <StatCard icon={BookOpen} title="Enrolled Courses" value={4} />
                <StatCard icon={BookCopy} title="Active Courses" value={4} />
                <StatCard icon={Award} title="Completed Courses" value={0} />
                <StatCard icon={User} title="Total Students" value={17} />
                <StatCard icon={FileText} title="Total Courses" value={5} />
                <StatCard icon={DollarSign} title="Total Earnings" value={0} />
            </div>

            <div>
                <h2 className="text-2xl font-bold font-space-grotesk mb-4">In Progress Courses</h2>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-full md:w-1/3 lg:w-1/4">
                                <Image src="https://picsum.photos/seed/html-css/400/225" alt="Web Development Course" width={400} height={225} className="rounded-lg object-cover" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-bold font-space-grotesk">Web Development Fundamentals with Responsive Web Design Essentials</h3>
                                        <div className="flex items-center gap-1 mt-1">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-gray-300" />)}
                                            <span className="text-sm text-muted-foreground ml-1">0.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between text-sm text-muted-foreground mb-1">
                                        <span>Completed Lessons: 0 of 10</span>
                                        <span>0% Complete</span>
                                    </div>
                                    <Progress value={0} className="h-2" />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
