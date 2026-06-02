'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Menu, X, ArrowRight, CircleArrowOutUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../ui/Button'
import router from 'next/router'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Services', href: '/services' },
    { label: 'Eco System Hub', href: '/eco-systems-hub' },
    { label: 'Contact Us', href: '/contact-us' },
]

function Header({ data }: { data?: any }) {
    const pathname = usePathname();
    const logoImage = data?.logoImage || '/logo.jpg';
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeItem, setActiveItem] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [mobileMenuOpen])

    // Border color adapts to scroll state
    const borderColor = scrolled ? 'border-black/10' : 'border-white/20'

    if (pathname.startsWith('/admin')) return null;

    return (
        <>
            <header
                className={`
                    sticky top-0 z-50 w-full transition-all duration-500 -mb-18 md:-mb-25
                    md:border-t md:border-b ${borderColor}
                    ${scrolled ? 'bg-white backdrop-blur-xl' : 'bg-transparent'}
                `}
            >
                <div className="mx-auto flex h-16 md:h-24 max-w-7xl items-stretch justify-between">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3 px-5 lg:px-8">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 overflow-hidden flex-shrink-0">
                            <Image
                                src={logoImage}
                                alt="Parpaca Foundation Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="">
                            <h2 className={`text-lg font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-secondary' : 'text-white'}`}>
                                PARPACA Africa
                            </h2>
                            <p className={`hidden sm:block text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${scrolled ? 'text-light-gray' : 'text-white/70'}`}>
                                Participatory Action Research and<br /> Policy Advocacy Centre
                            </p>
                        </div>
                    </Link>

                    {/* DESKTOP NAV — each item bordered left+right, full header height */}
                    <nav className="hidden items-stretch lg:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={` 
                                    group relative flex items-center px-2 overflow-hidden
                                    border-l ${borderColor}
                                    text-sm font-semibold transition-colors duration-300
                                    ${scrolled
                                        ? 'text-secondary hover:text-white'
                                        : 'text-white hover:text-white'
                                    }
                                `}
                            >
                                <span className="relative z-10">{item.label}</span>
                                {/* animated background fill */}
                                <span className="absolute inset-0 z-0 scale-y-0 origin-bottom bg-primary transition-transform duration-300 ease-out group-hover:scale-y-100" />
                            </Link>
                        ))}
                        {/* closing right border after last nav item */}
                        {/* <div className={`border-l ${borderColor}`} /> */}
                    </nav>

                    {/* DESKTOP CTA */}
                    <div className={`hidden items-center lg:flex border-l ${borderColor} px-6 lg:px-8`}>
                        <Button variant="primary" size="lg" onClick={() => router.push('/become-a-member')} >
                            Become a Member
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <div className="flex items-center px-5 lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                            className={`
                                relative z-[60] flex h-10 w-10 items-center justify-center
                                transition-all duration-300
                                ${mobileMenuOpen
                                    ? 'bg-primary text-white'
                                    : scrolled
                                        ? 'text-secondary hover:bg-muted'
                                        : 'text-white hover:bg-white/10'
                                }
                            `}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {mobileMenuOpen ? (
                                    <motion.span
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={22} />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="open"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={22} />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-16 z-40 flex flex-col overflow-hidden lg:hidden"
                    >
                        <div className="absolute inset-0 bg-black/75 backdrop-blur-2xl" />
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-3xl" />

                        <div className="relative flex h-full flex-col">
                            <nav className="flex flex-col pt-4">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{
                                            delay: index * 0.07,
                                            duration: 0.35,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            onMouseEnter={() => setActiveItem(item.label)}
                                            onMouseLeave={() => setActiveItem(null)}
                                            className="group relative flex items-center overflow-hidden"
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-primary"
                                                initial={false}
                                                animate={{ scaleX: activeItem === item.label ? 1 : 0 }}
                                                style={{ originX: 0 }}
                                                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                            />
                                            {item.label === 'Contact Us' ? (
                                                <CircleArrowOutUpRight size={24} className="relative z-10 ml-6 mr-4 flex-shrink-0 text-primary transition-colors duration-200 group-hover:text-white" />
                                            ) : (
                                                <span className="relative z-10 ml-6 mr-4 h-2 w-2 flex-shrink-0 bg-primary transition-colors duration-200 group-hover:bg-white" />
                                            )}
                                            <span className="relative z-10 py-5 text-3xl font-bold uppercase tracking-wider text-white transition-colors duration-200">
                                                {item.label}
                                            </span>
                                        </Link>
                                        <div className="mx-6 h-px bg-white/10" />
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 16 }}
                                transition={{ delay: 0.38, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="mt-auto px-6 pb-10 pt-8"
                            >
                                <Button
                                    variant="primary"
                                    size="lg"
                                    fullWidth
                                    className="gap-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Become a Member
                                    <ArrowRight size={16} />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Header