'use client'

import Image from "next/image"
import Button from "../ui/Button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const AboutSection = () => {
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
                        About Us
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
                        About PARPACA
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
                            The Participatory Action Research and Policy Advocacy
                            Center Africa (PARPACA) is an independent non-profit
                            organisation and NGO think tank based in Uganda with
                            a pan-African operational footprint.

                            <br />
                            <br />

                            PARPACA advances participatory research, policy
                            analysis, and strategic advocacy to strengthen
                            governance systems, empower communities, and support
                            evidence-based decision-making across Africa.

                            <br />
                            <br />

                            Through collaborations with universities, research
                            institutions, civil society organisations, and
                            community groups, the Center develops sustainable,
                            locally grounded solutions that create long-term
                            social and structural impact.
                        </p>

                        {/* STATS */}
                        <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-3">

                            <div>
                                <h3 className="text-3xl font-bold text-primary">
                                    20+
                                </h3>

                                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-light-gray">
                                    Research Projects
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-primary">
                                    15+
                                </h3>

                                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-light-gray">
                                    Strategic Partners
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-primary">
                                    Pan-African
                                </h3>

                                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-light-gray">
                                    Operational Reach
                                </p>
                            </div>
                        </div>

                        {/* BUTTON */}
                        <div className="mt-10">
                            <Button
                                variant="primary"
                                size="lg"
                                className="gap-2"
                            >
                                Read More

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
                        <div className="relative h-[600px] overflow-hidden">
                            <Image
                                src="https://images.pexels.com/photos/9490630/pexels-photo-9490630.jpeg"
                                alt="About PARPACA"
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