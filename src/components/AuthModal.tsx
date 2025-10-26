
'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Mail, Key, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

type AuthModalProps = {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    onLoginSuccess: () => void;
}

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" {...props}>
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 12.81C34.553 9.077 29.625 7 24 7c-9.4 0-17 7.6-17 17s7.6 17 17 17c9.4 0 17-7.6 17-17c0-1.079-.09-2.144-.258-3.169z"/>
        <path fill="#FF3D00" d="m6 37l12.429-12.429l4.571 4.571l-17 17z"/>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-6.19C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.16-4.087 5.571l6.19 6.19C42.043 36.372 44 31.599 44 26c0-1.079-.09-2.144-.258-3.169z"/>
    </svg>
)

export default function AuthModal({ isOpen, onOpenChange, onLoginSuccess }: AuthModalProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[450px]">
                <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="signup">Create Account</TabsTrigger>
                    </TabsList>
                    
                    {/* Login Tab */}
                    <TabsContent value="login">
                        <DialogHeader className="my-4 text-center">
                            <DialogTitle className="text-2xl font-bold font-space-grotesk">Welcome Back!</DialogTitle>
                            <DialogDescription>
                                Sign in to continue your learning journey.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input type="email" placeholder="Email Address" className="pl-10"/>
                            </div>
                            <div className="relative">
                                <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input type={showPassword ? "text" : "password"} placeholder="Password" className="pl-10 pr-10"/>
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground">
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </button>
                            </div>
                            <Button onClick={onLoginSuccess} className="w-full h-11 text-base">Login</Button>
                        </div>
                         <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                                </span>
                            </div>
                        </div>
                        <Button variant="outline" className="w-full h-11 text-base">
                            <GoogleIcon className="mr-2 h-5 w-5"/>
                            Continue with Google
                        </Button>
                    </TabsContent>
                    
                    {/* Signup Tab */}
                    <TabsContent value="signup">
                         <DialogHeader className="my-4 text-center">
                            <DialogTitle className="text-2xl font-bold font-space-grotesk">Join a Community of Learners</DialogTitle>
                            <DialogDescription>
                                Create an account to get started. It's free!
                            </DialogDescription>
                        </DialogHeader>
                         <div className="space-y-4">
                            <Input type="text" placeholder="Full Name" />
                            <Input type="email" placeholder="Email Address" />
                            <div className="relative">
                                <Input type={showPassword ? "text" : "password"} placeholder="Password" className="pr-10"/>
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground">
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </button>
                            </div>
                            <Button onClick={onLoginSuccess} className="w-full h-11 text-base">Create Account</Button>
                        </div>
                         <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                                </span>
                            </div>
                        </div>
                        <Button variant="outline" className="w-full h-11 text-base">
                            <GoogleIcon className="mr-2 h-5 w-5"/>
                            Sign Up with Google
                        </Button>
                         <p className="px-8 text-center text-sm text-muted-foreground mt-4">
                            By clicking continue, you agree to our{" "}
                            <a href="/terms" className="underline underline-offset-4 hover:text-primary">
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}
