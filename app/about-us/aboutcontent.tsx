'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import TeamSection from '@/components/sections/Team'
import BottomCTA from '@/components/sections/Bottom-CTA'
import { Target, Eye, Sparkles, Users, Zap, Search, RefreshCw, BookOpen } from 'lucide-react'

function AboutContent() {
    return (
        <div className="overflow-x-hidden bg-white">
            {/* HERO SECTION */}
            <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-primary-black">
                {/* BACKGROUND IMAGE */}
                <div
                    className="
                        absolute inset-0
                        bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg')]
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
                            Who We Are
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
                            Catalyzing Change
                            <br />
                            <span className="text-primary">Through Research</span>
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
                            We are an independent non-profit organisation and NGO think tank 
                            advancing participatory research, policy analysis, and strategic advocacy across Africa.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* OUR STORY SECTION */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-6 text-3xl font-black text-secondary sm:text-4xl">
                                Our Story
                            </h2>
                            <div className="space-y-6 text-lg leading-relaxed text-light-gray">
                                <p>
                                   The Participatory Action Research and Policy Advocacy Center Africa (PARPACA) is an independent, non-profit NGO and think tank, registered in Uganda, with a pan-African presence through regional representatives. PARPACA conducts participatory research, rigorous policy analysis, and strategic advocacy to inform evidence-based decision-making, strengthen governance systems, and empower communities to actively shape the policies that impact their social, economic, and political realities.
                                </p>
                              
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] w-full overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="https://images.pexels.com/photos/9490630/pexels-photo-9490630.jpeg"
                                alt="PARPACA Team in Action"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="bg-primary/5 py-24">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        
                        {/* MISSION */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 shadow-xl transition-transform hover:-translate-y-2"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center bg-primary/10 text-primary">
                                <Target size={32} />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-secondary">Our Mission</h3>
                            <p className="text-light-gray leading-relaxed">
                                To advance sustainable development in Africa through participatory research, inclusive innovation, and evidence-based policy.
                            </p>
                        </motion.div>

                        {/* VISION */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 shadow-xl transition-transform hover:-translate-y-2"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center bg-primary/10 text-primary">
                                <Eye size={32} />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-secondary">Our Vision</h3>
                            <p className="text-light-gray leading-relaxed">
                               To be Africas leading evidence-driven innovation hub advancing equitable growth, resilient communities, and sustainable impact.
                            </p>
                        </motion.div>

                        {/* APPROACH */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 shadow-xl transition-transform hover:-translate-y-2 lg:col-span-1 md:col-span-2"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center bg-primary/10 text-primary">
                                <Sparkles size={32} />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-secondary">Our Approach</h3>
                            <p className="text-light-gray leading-relaxed">
                                We believe in co-creating knowledge. By blending rigorous academic research 
                                with indigenous wisdom and grassroots realities, we ensure that our advocacy 
                                is both structurally sound and culturally resonant.
                            </p>
                        </motion.div> */}

                    </div>
                </div>
            </section>
            {/* CORE COMPETENCES SECTION */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="mb-16 max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-6 text-3xl font-black text-secondary sm:text-4xl"
                        >
                            Core Competences
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg leading-relaxed text-light-gray"
                        >
                            Our specialized expertise enables us to drive sustainable impact across Africa.
                        </motion.p>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Competence 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group flex flex-col border border-border bg-white shadow-xl hover:border-primary/20 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
                                    alt="MEAL"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 flex-1">
                                <h3 className="mb-4 text-xl font-bold text-secondary">
                                    Monitoring, Evaluation, Accountability, and Learning (MEAL)
                                </h3>
                                <p className="text-light-gray leading-relaxed">
                                    PARPACA designs and implements robust MEAL frameworks to track performance, outcomes, and impact while promoting accountability, transparency, and continuous improvement.
                                </p>
                            </div>
                        </motion.div>

                        {/* Competence 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col border border-border bg-white shadow-xl hover:border-primary/20 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src="https://images.pexels.com/photos/7947634/pexels-photo-7947634.jpeg"
                                    alt="Financial Management Oversight"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 flex-1">
                                <h3 className="mb-4 text-xl font-bold text-secondary">
                                    Financial Management Oversight
                                </h3>
                                <p className="text-light-gray leading-relaxed">
                                    PARPACA delivers rigorous financial management oversight for complex, multi-stakeholder initiatives, ensuring full compliance with donor, regulatory, and national legal requirements. Our oversight framework safeguards transparency, accountability, and optimal resource utilization while mitigating financial risks.
                                </p>
                            </div>
                        </motion.div>

                        {/* Competence 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group flex flex-col border border-border bg-white shadow-xl hover:border-primary/20 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src="https://images.pexels.com/photos/390426/pexels-photo-390426.png"
                                    alt="Innovation Ecosystems and Research-to-Impact Integration"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 flex-1">
                                <h3 className="mb-4 text-xl font-bold text-secondary">
                                    Innovation Ecosystems and Research-to-Impact Integration
                                </h3>
                                <p className="text-light-gray leading-relaxed">
                                    PARPACA facilitates dynamic multi-stakeholder innovation ecosystems, linking universities, research institutions, startups, private sector actors, policymakers, and communities. We translate cutting-edge research into practical, scalable solutions that generate systemic and sustainable impact. A key component of our approach is the strategic transfer of knowledge and best practices from the Global North to the Global South, ensuring that innovations are contextually adapted and locally relevant.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* KEY PRINCIPLES OF PARTICIPATORY M&E */}
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
                            Key Principles of Participatory M&E
                        </motion.h2>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Principle 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                <Users size={28} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-secondary">Inclusivity</h3>
                            <p className="text-light-gray leading-relaxed">
                                Engage all stakeholders (beneficiaries, staff, donors, partners) in the M&E process.
                            </p>
                        </motion.div>
                        
                        {/* Principle 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                <Zap size={28} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-secondary">Empowerment</h3>
                            <p className="text-light-gray leading-relaxed">
                                Enable communities to take ownership of data collection and analysis.
                            </p>
                        </motion.div>

                        {/* Principle 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                <Search size={28} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-secondary">Transparency</h3>
                            <p className="text-light-gray leading-relaxed">
                                Share findings openly with all stakeholders.
                            </p>
                        </motion.div>

                        {/* Principle 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                <RefreshCw size={28} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-secondary">Flexibility</h3>
                            <p className="text-light-gray leading-relaxed">
                                Adapt M&E tools to local contexts and changing needs.
                            </p>
                        </motion.div>

                        {/* Principle 5 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 shadow-xl transition-transform hover:-translate-y-2 border border-border"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                                <BookOpen size={28} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-secondary">Learning-Oriented</h3>
                            <p className="text-light-gray leading-relaxed">
                                Use findings to improve programs rather than just report to donors.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TEAM SECTION */}
            <TeamSection />

            {/* BOTTOM CTA */}
            <BottomCTA />
        </div>
    )
}

export default AboutContent