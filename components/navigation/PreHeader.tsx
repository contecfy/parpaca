'use client'

import Link from 'next/link'
import React from 'react'
import {

    Mail,
    MapPin,
    Phone,

} from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function PreHeader() {
    return (
        <div className="hidden w-full bg-primary-black text-white lg:block">
            <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-5 lg:px-8">

                {/* LEFT SIDE */}
                <div className="flex items-center gap-8 text-sm">

                    {/* LOCATION */}
                    <div className="flex items-center gap-2 text-white/70">
                        <MapPin size={15} className="text-primary" />

                        <span>Kampala, Uganda</span>
                    </div>

                    {/* PHONE */}
                    <Link
                        href="tel:+256700000000"
                        className="flex items-center gap-2 text-white/70 transition-colors duration-300 hover:text-white"
                    >
                        <Phone size={15} className="text-primary" />

                        <span>+256 700 000 000</span>
                    </Link>

                    {/* EMAIL */}
                    <Link
                        href="mailto:hello@Parpacasicklecell.org"
                        className="flex items-center gap-2 text-white/70 transition-colors duration-300 hover:text-white"
                    >
                        <Mail size={15} className="text-primary" />

                        <span>hello@Parpacasicklecell.org</span>
                    </Link>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-2">

                    <Link
                        href="/"
                        className="flex h-9 w-9 items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                        <FaFacebook size={16} />
                    </Link>

                    <Link
                        href="/"
                        className="flex h-9 w-9 items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                        <FaInstagram size={16} />
                    </Link>

                    <Link
                        href="/"
                        className="flex h-9 w-9 items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                        <FaX size={16} />
                    </Link>

                    <Link
                        href="/"
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