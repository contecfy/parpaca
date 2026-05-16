'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Button from '../ui/Button'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
]

function Footer() {
    return (
        <footer className="mt-24 bg-primary-black text-white">
            <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

                {/* TOP SECTION */}
                <div className="grid gap-14 lg:grid-cols-[1.3fr_0.8fr_1fr]">

                    {/* BRAND */}
                    <div>
                        <div className="flex items-center gap-4">
                            <div className="relative h-24 w-24 overflow-hidden border border-white/10 bg-white p-2">
                                <Image
                                    src="/logo.jpg"
                                    alt="Parpaca Foundation"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold tracking-tight">
                                    Parpaca
                                </h2>

                                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/60">
                                    Participatory Action Research and Policy Advocacy Centre
                                </p>
                            </div>
                        </div>

                        <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
                            We are a non-profit organization working to improve the lives of people affected by sickle cell disease in Uganda
                        </p>

                        {/* CONTACT INFO */}
                        <div className="mt-8 space-y-4 text-sm text-white/70">

                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5 text-primary" />

                                <p>Uganda, Central Kampala, Nakawa Division, Mbuya II,</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-primary" />

                                <p>+256 772 873 735</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-primary" />

                                <p>info@parpacaafrica.org</p>
                            </div>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-lg font-semibold">
                            Quick Links
                        </h3>

                        <div className="mt-6 flex flex-col gap-4">
                            {quickLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="w-fit text-sm text-white/70 transition-colors duration-300 hover:text-primary"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* NEWSLETTER */}
                    <div>
                        <h3 className="text-lg font-semibold">
                            Join Our Newsletter
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/70">
                            Stay updated with our programs, awareness campaigns,
                            community events, and impact stories.
                        </p>

                        {/* EMAIL FORM */}
                        <form className="mt-6">
                            <div className="flex flex-col gap-3 sm:flex-row">

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="h-14 w-full border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-primary"
                                />

                                <Button
                                    className="h-14 px-8 whitespace-nowrap"
                                >
                                    Subscribe
                                </Button>
                            </div>
                        </form>

                        {/* SOCIALS */}
                        <div className="mt-8 flex items-center gap-3">

                            <Link
                                href="/"
                                className="flex h-11 w-11 items-center justify-center  text-white/70 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <FaFacebook size={18} />
                            </Link>

                            <Link
                                href="/"
                                className="flex h-11 w-11 items-center justify-center  text-white/70 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <FaInstagram size={18} />
                            </Link>

                            <Link
                                href="/"
                                className="flex h-11 w-11 items-center justify-center  text-white/70 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <FaX size={18} />
                            </Link>

                            <Link
                                href="/"
                                className="flex h-11 w-11 items-center justify-center  text-white/70 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <FaLinkedin size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-14 border-t border-white/10 pt-6">
                    <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/50 md:flex-row">

                        <p>
                            © {new Date().getFullYear()} Parpacaafrica.org. All rights reserved.
                        </p>

                        <div className="flex items-center gap-6">
                            <Link
                                href="/privacy-policy"
                                className="transition-colors duration-300 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/terms"
                                className="transition-colors duration-300 hover:text-primary"
                            >
                                Terms & Conditions
                            </Link>
                            <Link
                                href="lukwagojr.vercel.app"
                                className="transition-colors duration-300 hover:text-primary"
                            >
                                Build by Lukwago Joel Jr
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer