'use client';

import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { Loader2, Lock, Mail, ArrowRight, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const auth = getAuth(app);
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/admin/home'); // Redirect to admin dashboard
        } catch (err: any) {
            console.error('Login error:', err);
            setError('Invalid email or password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden">
            <div className="relative w-full max-w-sm px-8 py-10 bg-white border border-gray-200 shadow-xl z-10 rounded-none">
                <div className="text-center mb-8 flex flex-col items-center">
                    <div className="mb-6">
                        <Image 
                            src="/logo.jpg" 
                            alt="PARPACA Foundation Logo" 
                            width={120} 
                            height={120} 
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-[#191970]">Admin Portal</h1>
                    <p className="text-gray-500 mt-2 text-sm">Sign in to manage your content securely.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    {/* Error Message Alert */}
                    {error && (
                        <div className="p-3 bg-red-50 border border-red-200 border-l-4 border-l-red-500 flex items-center gap-3 rounded-none">
                            <div className="w-1.5 h-1.5 bg-red-500 flex-shrink-0 animate-pulse rounded-none" />
                            <p className="text-sm text-red-700 font-medium">{error}</p>
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-[#191970] transition-colors">
                                <Mail size={18} />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 text-[#191970] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#191970] focus:border-[#191970] transition-all text-sm rounded-none"
                                placeholder="Admin Email address"
                                required
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-[#191970] transition-colors">
                                <Lock size={18} />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-300 text-[#191970] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#191970] focus:border-[#191970] transition-all text-sm rounded-none"
                                placeholder="Password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-[#191970] transition-colors focus:outline-none"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#D4503B] hover:bg-[#b63e2d] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold transition-all rounded-none shadow-md shadow-[#D4503B]/20 active:scale-[0.98]"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin text-white" />
                                Authenticating...
                            </>
                        ) : (
                            <>
                                Sign In
                                <ArrowRight className="w-4 h-4 text-white" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Parpaca Foundation.</p>
                </div>
            </div>
        </div>
    );
}
