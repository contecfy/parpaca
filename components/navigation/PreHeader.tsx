'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {

    Mail,
    MapPin,
    Phone,

} from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function PreHeader({ data }: { data?: any }) {
    const pathname = usePathname();
    const location = data?.location || 'Uganda, Central Kampala, Nakawa Division, Mbuya II,';
    const phone1 = data?.phone1 || '+256 772 873 735';
    const phone2 = data?.phone2 || '+49 1521 474 0368';
    const email = data?.email || 'info@parpacaafrica.org';
    const socialWhatsapp = data?.socialWhatsapp || 'tel:+4915214740368';
    
    if (pathname.startsWith('/admin')) return null;

    return (
        <div className="hidden w-full bg-primary-black text-white lg:block">
            <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-5 lg:px-8">

                {/* LEFT SIDE */}
                <div className="flex items-center gap-8 text-sm">

                    {/* LOCATION */}
                    <div className="flex items-center gap-2 text-white/70">
                        <MapPin size={15} className="text-primary" />

                        <span>{location}</span>
                    </div>

                    {/* PHONE */}
                    <Link
                        href={phone1.startsWith('+') ? `tel:${phone1.replace(/\s+/g, '')}` : phone1}
                        className="flex items-center gap-2 text-white/70 transition-colors duration-300 hover:text-white"
                    >
                        <Phone size={15} className="text-primary" />

                        <span>{phone1}</span>
                    </Link>

                    <Link
                        href={socialWhatsapp}
                        className="flex items-center gap-2 text-white/70 transition-colors duration-300 hover:text-white"
                    >
                        <FaWhatsapp size={15} className="text-primary" />

                        <span>{phone2}</span>
                    </Link>

                    {/* EMAIL */}
                    <Link
                        href={`mailto:${email}`}
                        className="flex items-center gap-2 text-white/70 transition-colors duration-300 hover:text-white"
                    >
                        <Mail size={15} className="text-primary" />

                        <span>{email}</span>
                    </Link>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-2">

                    <Link
                        href={data?.socialFacebook || '/'}
                        className="flex h-9 w-9 items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                        <FaFacebook size={16} />
                    </Link>

                    <Link
                        href={data?.socialInstagram || '/'}
                        className="flex h-9 w-9 items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                        <FaInstagram size={16} />
                    </Link>

                    <Link
                        href={data?.socialTwitter || '/'}
                        className="flex h-9 w-9 items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                        <FaX size={16} />
                    </Link>

                    <Link
                        href={data?.socialLinkedin || '/'}
                        className="flex h-9 w-9 items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                        <FaLinkedin size={16} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PreHeader