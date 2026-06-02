import React from 'react';
import Sidebar from './Sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex bg-gray-50 text-gray-900 overflow-hidden h-screen">
            <Sidebar />
            <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
                {children}
            </main>
        </div>
    );
}
