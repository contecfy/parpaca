'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Network, Scale, TrendingUp, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

function BecomeAMemberContent() {
    return (
        <div className="overflow-x-hidden bg-white">
            {/* HERO SECTION */}
            <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-primary-black">
                {/* BACKGROUND IMAGE */}
                <div
                    className="
                        absolute inset-0
                        bg-[url('https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg')]
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
                            Join Our Network
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
                            Become a Member
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
                            Partner with PARPACA and be part of a pan-African movement dedicated to evidence-based policy making, grassroots empowerment, and inclusive innovation.
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
                            Why Join PARPACA?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg leading-relaxed text-light-gray"
                        >
                            As a member, you gain access to a collaborative ecosystem designed to amplify your impact.
                        </motion.p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Benefit 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border flex flex-col"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                <BookOpen size={28} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-secondary">Exclusive Research</h3>
                            <p className="text-light-gray leading-relaxed text-sm">
                                Access cutting-edge participatory research, policy briefs, and evaluation reports before public release.
                            </p>
                        </motion.div>
                        
                        {/* Benefit 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border flex flex-col"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                <Network size={28} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-secondary">Networking</h3>
                            <p className="text-light-gray leading-relaxed text-sm">
                                Connect with policymakers, academic institutions, startups, and community leaders across the continent.
                            </p>
                        </motion.div>

                        {/* Benefit 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border flex flex-col"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                <Scale size={28} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-secondary">Policy Influence</h3>
                            <p className="text-light-gray leading-relaxed text-sm">
                                Participate in advocacy campaigns and contribute to evidence-based policy formulations that drive real change.
                            </p>
                        </motion.div>

                        {/* Benefit 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border flex flex-col"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                <TrendingUp size={28} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-secondary">Capacity Building</h3>
                            <p className="text-light-gray leading-relaxed text-sm">
                                Receive mentorship and technical guidance to scale your organization&apos;s impact and innovation capacity.
                            </p>
                        </motion.div>
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
                            <h2 className="text-3xl font-black text-secondary sm:text-4xl mb-4">Membership Application</h2>
                            <p className="text-light-gray text-lg">Fill out the form below and our team will get back to you with next steps.</p>
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