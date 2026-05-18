'use client'

import React from 'react'
import { motion } from 'framer-motion'
import BottomCTA from '@/components/sections/Bottom-CTA'
import { Lightbulb, Workflow, FlaskConical, Rocket, ArrowRightLeft } from 'lucide-react'

function ServicesContent() {
    return (
        <div className="overflow-x-hidden bg-white">
            {/* HERO SECTION */}
            <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-primary-black">
                {/* BACKGROUND IMAGE */}
                <div
                    className="
                        absolute inset-0
                        bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')]
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
                            We Offer
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
                            Our Services
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
                            As an independent, non-profit policy research and advocacy institution, 
                            the Participatory Action Research and Policy Advocacy Center Africa (PARPACA) 
                            delivers rigorous, participatory, and policy-relevant services designed to 
                            strengthen governance systems, inform evidence-based decision-making, and 
                            advance inclusive and sustainable development across Africa.
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
                            What We Do
                        </motion.h2>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Service 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                <Lightbulb size={28} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-secondary">
                                PARPACA Innovation Ecosystems Hub
                            </h3>
                            <p className="text-light-gray leading-relaxed">
                                The PARPACA Innovation Ecosystems Hub applies a systems-based, multi-stakeholder approach to turn research into collaborative solutions, piloting and scaling innovations for sustainable impact in a community.
                            </p>
                        </motion.div>
                        
                        {/* Service 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                <Workflow size={28} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-secondary">
                                Ecosystem Development and Partnership Facilitation
                            </h3>
                            <p className="text-light-gray leading-relaxed">
                                The Hub connects universities, startups, policymakers, private sector actors, development partners, and communities, fostering cross-sector collaboration, knowledge exchange, and resilient, inclusive innovation ecosystems.
                            </p>
                        </motion.div>

                        {/* Service 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                <FlaskConical size={28} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-secondary">
                                Innovation Incubation
                            </h3>
                            <p className="text-light-gray leading-relaxed">
                                PARPACA supports early-stage research and social innovation initiatives through technical guidance, mentorship, research integration, and partnership brokering. The incubation process enables the transformation of evidence-informed ideas into practical, community-solutions.
                            </p>
                        </motion.div>

                        {/* Service 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                <Rocket size={28} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-secondary">
                                Acceleration and Scaling
                            </h3>
                            <p className="text-light-gray leading-relaxed">
                                The Hub facilitates validation, institutionalisation, and scaling of proven solutions. By linking innovators with financing mechanisms, policy frameworks, and implementation partners, PARPACA supports the expansion of high-impact models across regions and sectors.
                            </p>
                        </motion.div>

                        {/* Service 5 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                <ArrowRightLeft size={28} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-secondary">
                                Research-to-Innovation Translation
                            </h3>
                            <p className="text-light-gray leading-relaxed">
                                A core function of the Hub is ensuring that research outcomes are translated into implementable programmes, policy instruments, and scalable interventions. This integration strengthens the continuum from evidence generation to transformation.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <BottomCTA />
        </div>
    )
}

export default ServicesContent