'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '@/lib/firebase';

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [loggingOut, setLoggingOut] = useState(false);

    const navItems = [
        { name: 'Global Components', href: '/admin/global' },
        { name: 'Home Page CMS', href: '/admin/home' },
        { name: 'About Page CMS', href: '/admin/about' },
        { name: 'Services Page CMS', href: '/admin/services' },
        { name: 'Become Member CMS', href: '/admin/become-member' },
    ];

    return (
        <aside className="w-64 bg-white border-r shadow-sm flex flex-col h-screen shrink-0">
            <div className="h-16 flex items-center px-6 border-b font-bold text-xl text-primary shrink-0">
                PARPACA Admin
            </div>
            
            <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        <Link 
                            key={item.href} 
                            href={item.href} 
                            className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                isActive 
                                    ? 'bg-primary text-white shadow-sm' 
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t bg-gray-50 shrink-0 space-y-3">
                <Link 
                    href="/" 
                    target="_blank"
                    className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors text-center border border-gray-300 bg-white shadow-sm"
                >
                    View Live Site
                </Link>
                <button
                    type="button"
                    onClick={async () => {
                        setLoggingOut(true);
                        try {
                            const auth = getAuth(app);
                            await signOut(auth);
                            router.push('/login');
                        } catch (error) {
                            console.error('Logout failed:', error);
                        } finally {
                            setLoggingOut(false);
                        }
                    }}
                    disabled={loggingOut}
                    className="w-full px-4 py-2 rounded-lg text-sm font-medium text-white bg-[#D4503B] hover:bg-[#b63e2d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loggingOut ? 'Signing out…' : 'Logout'}
                </button>
            </div>
        </aside>
    );
}
