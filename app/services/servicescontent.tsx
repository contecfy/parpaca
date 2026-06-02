'use client'

import React from 'react'
import { motion } from 'framer-motion'
import BottomCTA from '@/components/sections/Bottom-CTA'
import { Lightbulb, Workflow, FlaskConical, Rocket, ArrowRightLeft } from 'lucide-react'

function ServicesContent({ data }: { data?: any }) {
    return (
        <div className="overflow-x-hidden bg-white">
            {/* HERO SECTION */}
            <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-primary-black">
                {/* BACKGROUND IMAGE */}
                <div
                    className="
                        absolute inset-0
                        bg-cover
                        bg-center
                        bg-no-repeat
                        opacity-40
                    "
                    style={{ backgroundImage: `url(${data?.heroBgImage || 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'})` }}
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
                            {data?.heroSubtitle || 'We Offer'}
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
                            {data?.heroTitle || 'Our Services'}
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
                            {data?.heroDescription || 'As an independent, non-profit policy research and advocacy institution, the Participatory Action Research and Policy Advocacy Center Africa (PARPACA) delivers rigorous, participatory, and policy-relevant services designed to strengthen governance systems, inform evidence-based decision-making, and advance inclusive and sustainable development across Africa.'}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID SECTION */}
            <section className="bg-primary/5 py-24">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="mb-16 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-3xl font-black text-secondary sm:text-4xl"
                        >
                            {data?.gridTitle || 'What We Do'}
                        </motion.h2>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {data?.servicesList?.map((svc: any, idx: number) => {
                            const IconComponent = [Lightbulb, Workflow, FlaskConical, Rocket, ArrowRightLeft][idx % 5];
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border"
                                >
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                        <IconComponent size={28} />
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold text-secondary">
                                        {svc.title}
                                    </h3>
                                    <p className="text-light-gray leading-relaxed">
                                        {svc.description}
                                    </p>
                                </motion.div>
                            );
                        }) || (
                            <div className="text-center text-gray-500 col-span-3">Services not loaded</div>
                        )}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <BottomCTA />
        </div>
    )
}

export default ServicesContent