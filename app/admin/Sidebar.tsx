'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home Page CMS', href: '/admin/home' },
        { name: 'About Page CMS', href: '/admin/about' },
        { name: 'Services Page CMS', href: '/admin/services' },
        { name: 'Become Member CMS', href: '/admin/become-member' },
        { name: 'Global Components', href: '/admin/global' },
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

            <div className="p-4 border-t bg-gray-50 shrink-0">
                <Link 
                    href="/" 
                    target="_blank"
                    className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors text-center border border-gray-300 bg-white shadow-sm"
                >
                    View Live Site
                </Link>
            </div>
        </aside>
    );
}
