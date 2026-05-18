'use client'

import React from 'react'
import { motion } from 'framer-motion'
import BottomCTA from '@/components/sections/Bottom-CTA'
import { Network, FlaskConical, Rocket } from 'lucide-react'

function EcoContent() {
    return (
        <div className="overflow-x-hidden bg-white">
            {/* HERO SECTION */}
            <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-primary-black">
                {/* BACKGROUND IMAGE */}
                <div
                    className="
                        absolute inset-0
                        bg-[url('https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg')]
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
                            Eco-systems Hub
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
                            PARPACA Innovation
                            <br />
                            Ecosystems Hub
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-lg leading-relaxed text-light-gray"
                        >
                            <p>
                                The PARPACA Innovation Ecosystems Hub operationalises a systems-based, multi-stakeholder approach to tackling complex societal challenges across Africa. The Hub serves as a dynamic platform that brings together universities, research institutions, independent scholars, non-governmental organisations, startups, policymakers, private sector actors, development partners, and local communities within a collaborative framework designed to co-create, pilot, and scale innovative solutions.
                            </p>
                            <p>
                                By fostering cross-sectoral partnerships, knowledge exchange, and collaborative problem-solving, the Innovation Ecosystems Hub strengthens institutional capacity, promotes inclusive and contextually relevant innovation, and facilitates the effective translation of research insights into policy and practice. The Hub’s ecosystem-driven approach ensures that interventions are locally anchored, culturally sensitive, and responsive to community-defined priorities, thereby enhancing relevance, uptake, and sustainability.
                            </p>
                            <p>
                                Through this integrated and participatory model, the PARPACA Innovation Ecosystems Hub advances sustainable development outcomes, drives evidence-informed policy, and reinforces local ownership, creating long-term structural impact and fostering resilient, innovation-ready communities across the continent.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PATHWAYS SECTION */}
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
                            Our Interconnected Pathways
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg text-primary font-bold tracking-wide"
                        >
                            Think of it as a journey: Connect → Create → Scale.
                        </motion.p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Pathway 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 shadow-xl transition-transform hover:-translate-y-2 border border-border flex flex-col"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center bg-primary/10 text-primary">
                                <Network size={32} />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-secondary">Ecosystem Builder</h3>
                            <p className="mb-4 font-semibold text-secondary">
                                Connecting people and organizations to foster collaboration and knowledge exchange.
                            </p>
                            <p className="text-light-gray leading-relaxed flex-1">
                                Rather than focusing on isolated projects or individual organizations, ecosystem building looks at the whole system — how institutions, people, policies, markets, resources, and ideas interact.
                            </p>
                        </motion.div>

                        {/* Pathway 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 shadow-xl transition-transform hover:-translate-y-2 border border-border flex flex-col"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center bg-primary/10 text-primary">
                                <FlaskConical size={32} />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-secondary">Incubator</h3>
                            <p className="mb-4 font-semibold text-secondary">
                                Supporting early-stage ideas to develop into practical, tested solutions.
                            </p>
                            <p className="text-light-gray leading-relaxed flex-1">
                                Instead of simply helping individual ventures survive, an ecosystem-based incubator strengthens the entire system that enables innovation to emerge and scale.
                            </p>
                        </motion.div>

                        {/* Pathway 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 shadow-xl transition-transform hover:-translate-y-2 border border-border flex flex-col"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center bg-primary/10 text-primary">
                                <Rocket size={32} />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-secondary">Accelerator</h3>
                            <p className="mb-4 font-semibold text-secondary">
                                Scaling proven solutions to reach wider communities and create sustainable impact.
                            </p>
                            <p className="text-light-gray leading-relaxed flex-1">
                                While incubators focus on nurturing early-stage ideas, accelerators focus on rapid growth, market expansion, and investment readiness.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CLOSING STATEMENT */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <p className="text-xl md:text-2xl leading-relaxed text-secondary font-medium italic border-l-4 border-primary pl-8 text-left">
                            &quot;By facilitating cross-sectoral partnerships and knowledge exchange, the Hub strengthens institutional capacity, promotes inclusive innovation, and ensures that research insights are translated into actionable policy and practice. Through this participatory and ecosystem-driven approach, PARPACA advances sustainable development outcomes, reinforces local ownership, and delivers long-term structural impact across the continent.&quot;
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <BottomCTA />
        </div>
    )
}

export default EcoContent