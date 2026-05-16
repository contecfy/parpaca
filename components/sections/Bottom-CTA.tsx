'use client'

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Button from "../ui/Button"

const BottomCTA = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="
                        relative overflow-hidden
                        border border-border
                        bg-primary-dark
                    "
                >

                    {/* BACKGROUND ACCENTS */}
                    <div
                        className="
                            absolute -right-24 -top-24
                            h-72 w-72
                            bg-primary/10
                        "
                    />

                    <div
                        className="
                            absolute -bottom-32 left-0
                            h-72 w-72
                            bg-white/[0.03]
                        "
                    />

                    {/* CONTENT */}
                    <div
                        className="
                            relative z-10
                            px-6 py-20
                            sm:px-10
                            lg:px-16 lg:py-24
                        "
                    >

                        <div className="max-w-4xl">

                            {/* SMALL LABEL */}
                            <p
                                className="
                                    mb-5 text-sm font-semibold
                                    uppercase tracking-[0.2em]
                                    text-secondary
                                "
                            >
                                Join The Movement
                            </p>

                            {/* TITLE */}
                            <h2
                                className="
                                    text-4xl font-black
                                    leading-tight tracking-tight
                                    text-white
                                    sm:text-5xl
                                    lg:text-6xl
                                "
                            >
                                Creating Lasting
                                <br />
                                Change Through
                                <span className="text-secondary">
                                    {" "}Research & Advocacy
                                </span>
                            </h2>

                            {/* DESCRIPTION */}
                            <p
                                className="
                                    mt-8 max-w-2xl
                                    text-base leading-8
                                    text-white/70
                                    sm:text-lg
                                "
                            >
                                Partner with PARPACA to strengthen communities,
                                advance evidence-based policies, and build
                                sustainable solutions that drive meaningful
                                impact across Africa.
                            </p>

                            {/* BUTTONS */}
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="gap-2 bg-secondary"
                                >
                                    Get Involved

                                    <ArrowRight size={18} />
                                </Button>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="
                                        gap-2
                                        border-secondary
                                        text-white
                                        hover:border-primary
                                        hover:bg-primary
                                    "
                                >
                                    Contact Us

                                    <ArrowRight size={18} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default BottomCTA