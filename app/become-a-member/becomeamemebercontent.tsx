'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Network, Scale, TrendingUp, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

function BecomeAMemberContent({ data }: { data?: any }) {
    return (
        <div className="overflow-x-hidden bg-white">
            {/* HERO SECTION */}
            <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-primary-black">
                {/* BACKGROUND IMAGE */}
                <div
                    className="
                        absolute inset-0
                        bg-cover
                        bg-center
                        bg-no-repeat
                        opacity-40
                    "
                    style={{ backgroundImage: `url(${data?.heroBgImage || 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg'})` }}
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
                            {data?.heroSubtitle || 'Join Our Network'}
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
                            {data?.heroTitle || 'Become a Member'}
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
                            {data?.heroDescription || 'Partner with PARPACA and be part of a pan-African movement dedicated to evidence-based policy making, grassroots empowerment, and inclusive innovation.'}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="bg-primary/5 py-24">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-4 text-3xl font-black text-secondary sm:text-4xl"
                        >
                            {data?.benefitsTitle || 'Why Join PARPACA?'}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg leading-relaxed text-light-gray"
                        >
                            {data?.benefitsDescription || 'As a member, you gain access to a collaborative ecosystem designed to amplify your impact.'}
                        </motion.p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {data?.benefitsList?.map((ben: any, idx: number) => {
                            const IconComponent = [BookOpen, Network, Scale, TrendingUp][idx % 4];
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border flex flex-col"
                                >
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                        <IconComponent size={28} />
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold text-secondary">{ben.title}</h3>
                                    <p className="text-light-gray leading-relaxed text-sm">
                                        {ben.description}
                                    </p>
                                </motion.div>
                            );
                        }) || (
                            <div className="text-center text-gray-500 col-span-4">Benefits not loaded</div>
                        )}
                    </div>
                </div>
            </section>

            {/* FORM SECTION */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-4xl px-5 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="border border-border bg-white p-8 sm:p-12 shadow-2xl"
                    >
                        <div className="mb-10 text-center">
                            <h2 className="text-3xl font-black text-secondary sm:text-4xl mb-4">{data?.formTitle || 'Membership Application'}</h2>
                            <p className="text-light-gray text-lg">{data?.formDescription || 'Fill out the form below and our team will get back to you with next steps.'}</p>
                        </div>
                        
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
                            
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-secondary">Email Address</label>
                                    <input 
                                        type="email" 
                                        className="w-full border border-border bg-white px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-secondary">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        className="w-full border border-border bg-white px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="+256 700 000 000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-secondary">Organization / Institution</label>
                                <input 
                                    type="text" 
                                    className="w-full border border-border bg-white px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Enter your organization's name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-secondary">Why do you want to join PARPACA?</label>
                                <textarea 
                                    rows={5}
                                    className="w-full border border-border bg-white px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="Tell us briefly about your interests and how you'd like to collaborate..."
                                />
                            </div>

                            <div className="pt-4">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full justify-center gap-2"
                                >
                                    Submit Application
                                    <ArrowRight size={18} />
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default BecomeAMemberContent