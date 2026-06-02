'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

export function HideOnAuthAndAdmin({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    
    // Hide component if on login or within the admin dashboard
    if (pathname === '/login' || pathname?.startsWith('/admin')) {
        return null;
    }

    return <>{children}</>;
}
