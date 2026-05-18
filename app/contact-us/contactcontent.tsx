'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Button from '@/components/ui/Button'

function ContactContent() {
    return (
        <div className="overflow-x-hidden bg-white">
            {/* HERO SECTION */}
            <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-primary-black">
                {/* BACKGROUND IMAGE */}
                <div
                    className="
                        absolute inset-0
                        bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')]
                        bg-cover
                        bg-center
                        bg-no-repeat
                        opacity-40
                    "
                />
                
                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-20 lg:px-8">
                    <div className="max-w-3xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary"
                        >
                            Get In Touch
                        </motion.p>
                        
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="
                                text-5xl font-black leading-tight
                                tracking-tight text-white
                                sm:text-6xl
                                lg:text-7xl
                            "
                        >
                            Contact Us
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="
                                mt-8 max-w-2xl
                                text-base leading-8 text-white/80
                                sm:text-lg
                            "
                        >
                            We would love to hear from you. Whether you have a question about our research, 
                            want to partner with us, or just want to say hello, we are here to answer.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* CONTACT CONTENT SECTION */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2">
                        
                        {/* LEFT: INFO */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="mb-6 text-3xl font-black text-secondary sm:text-4xl">
                                    Reach Out To Us
                                </h2>
                                <p className="text-lg leading-relaxed text-light-gray">
                                    Our team is always ready to collaborate, share knowledge, and explore new opportunities 
                                    to drive sustainable impact across Africa. Reach out through any of the channels below.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {/* INFO ITEM */}
                                <div className="flex items-start gap-6">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-bold text-secondary">Our Office</h3>
                                        <p className="text-light-gray">
                                            Kampala, Uganda
                                            <br />
                                            (Pan-African Operations)
                                        </p>
                                    </div>
                                </div>

                                {/* INFO ITEM */}
                                <div className="flex items-start gap-6">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-bold text-secondary">Email Us</h3>
                                        <p className="text-light-gray">
                                            info@parpaca.org
                                        </p>
                                    </div>
                                </div>

                                {/* INFO ITEM */}
                                <div className="flex items-start gap-6">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-bold text-secondary">Call Us</h3>
                                        <p className="text-light-gray">
                                            +256 (0) 123 456 789
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT: FORM */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <div className="border border-border bg-white p-8 sm:p-12 shadow-xl">
                                <h3 className="mb-8 text-2xl font-bold text-secondary">Send a Message</h3>
                                
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-secondary">First Name</label>
                                            <input 
                                                type="text" 
                                                className="w-full border border-border bg-white px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-secondary">Last Name</label>
                                            <input 
                                                type="text" 
                                                className="w-full border border-border bg-white px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-secondary">Email Address</label>
                                        <input 
                                            type="email" 
                                            className="w-full border border-border bg-white px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-secondary">Subject</label>
                                        <input 
                                            type="text" 
                                            className="w-full border border-border bg-white px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-secondary">Message</label>
                                        <textarea 
                                            rows={5}
                                            className="w-full border border-border bg-white px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                                            placeholder="Your message here..."
                                        />
                                    </div>

                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="w-full justify-center gap-2"
                                    >
                                        Send Message
                                        <Send size={18} />
                                    </Button>
                                </form>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactContent