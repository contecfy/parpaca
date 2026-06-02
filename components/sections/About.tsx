'use client'

import Image from "next/image"
import Button from "../ui/Button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const AboutSection = ({ data }: { data?: any }) => {
    const eyebrow = data?.eyebrow || 'About Us';
    const title = data?.title || 'About PARPACA';
    const descChunk1 = data?.description1 || 'The Participatory Action Research and Policy Advocacy Center Africa (PARPACA) is an independent non-profit organisation and NGO think tank based in Uganda with a pan-African operational footprint.';
    const descChunk2 = data?.description2 || 'PARPACA advances participatory research, policy analysis, and strategic advocacy to strengthen governance systems, empower communities, and support evidence-based decision-making across Africa.';
    const descChunk3 = data?.description3 || 'Through collaborations with universities, research institutions, civil society organisations, and community groups, the Center develops sustainable, locally grounded solutions that create long-term social and structural impact.';
    
    type Stat = { number: string; label: string };
    const stats: Stat[] = data?.stats || [
        { number: '20+', label: 'Research Projects' },
        { number: '15+', label: 'Strategic Partners' },
        { number: 'Pan-African', label: 'Operational Reach' }
    ];

    const buttonText = data?.buttonText || 'Read More';
    const image = data?.image || 'https://images.pexels.com/photos/9490630/pexels-photo-9490630.jpeg';

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

                {/* SECTION HEADER */}
                <div className="max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary"
                    >
                        {eyebrow}
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="
                            text-4xl font-black leading-tight tracking-tight
                            text-secondary
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        {title}
                    </motion.h2>
                </div>

                {/* CONTENT */}
                <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:items-center">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-base leading-6 text-light-gray sm:text-lg">
                            {descChunk1}
                            <br />
                            <br />
                            {descChunk2}
                            <br />
                            <br />
                            {descChunk3}
                        </p>

                        {/* STATS */}
                        <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-3">
                            {stats.map((stat, idx) => (
                                <div key={idx}>
                                    <h3 className="text-3xl font-bold text-primary">
                                        {stat.number}
                                    </h3>
                                    <p className="mt-2 text-sm uppercase tracking-[0.15em] text-light-gray">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <Button
                                variant="primary"
                                size="lg"
                                className="gap-2"
                            >
                                {buttonText}

                                <ArrowRight size={18} />
                            </Button>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >

                        {/* IMAGE */}
                        <div className="relative h-[600px] overflow-hidden bg-gray-100">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection