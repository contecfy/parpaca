'use client'

import React from 'react'
import { motion } from 'framer-motion'

function Hero({ data }: { data?: any }) {
    const bgImage = data?.backgroundImage || '/hands.webp';
    const title = data?.title || 'Empowering Communities,\nAcross Africa to Shape\nTheir Own Future';
    const description = data?.description || 'A hybrid NGO think tank and innovation hub advancing community-led research,\ninnovation ecosystems, and evidence-based policy solutions to turn local knowledge into sustainable development impact across Africa.';

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${bgImage}')` }}
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-primary-black/65" />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

            {/* CONTENT */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-4 md:pt-32 lg:px-8">
                <div className="max-w-4xl">

                    {/* MAIN HEADING */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                        }}
                        className="
                            text-5xl font-black leading-[1]
                            tracking-tight text-white
                            sm:text-6xl
                            lg:text-8xl
                        "
                    >
                        <span className="whitespace-pre-line">{title}</span>
                    </motion.h1>

                    {/* DESCRIPTION */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2,
                        }}
                        className="
                            mt-8 max-w-2xl
                            text-base leading-8 text-white/75
                            sm:text-lg
                        "
                    >
                        <span className="whitespace-pre-line">{description}</span>
                    </motion.p>

                    {/* STATS */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.3,
                        }}
                        className="
                            mt-14 grid max-w-3xl
                            grid-cols-2 gap-6
                            border-t border-white/10
                            pt-8
                            sm:grid-cols-3
                        "
                    >

                        <div>
                            <h3 className="text-3xl font-bold text-primary lg:text-4xl">
                                5K+
                            </h3>

                            <p className="mt-2 text-sm uppercase tracking-[0.15em] text-white/60">
                                Lives Reached
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-primary lg:text-4xl">
                                20+
                            </h3>

                            <p className="mt-2 text-sm uppercase tracking-[0.15em] text-white/60">
                                Community Drives
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-primary lg:text-4xl">
                                10+
                            </h3>

                            <p className="mt-2 text-sm uppercase tracking-[0.15em] text-white/60">
                                Partner Organizations
                            </p>
                        </div>
                    </motion.div> */}
                </div>
            </div>
        </section>
    )
}

export default Hero