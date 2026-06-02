'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Button from "../ui/Button"

const Collaboration = ({ data }: { data?: any }) => {
    const eyebrow = data?.eyebrow || 'Collaboration & Support';
    const title = data?.title || 'Building Stronger Communities\nThrough Partnerships';
    const description = data?.description || 'We collaborate with vulnerable and marginalised populations to co-create knowledge, amplify community voices, and influence policies that dismantle systemic injustices. Through grassroots inclusion, participatory research, and strategic advocacy, we work to transform inequitable structures and strengthen communities’ capacity to claim their rights and shape their futures.';
    
    const partnershipCard = data?.partnershipCard || {
        title: 'Partner With PARPACA',
        desc1: 'Universities and research institutions across Africa can collaborate with PARPACA to access grant calls, participate in community-based research projects, and contribute to evidence-driven development initiatives across the continent.',
        desc2: 'Thank you for your interest in becoming part of the PARPACA network. Our team will guide you through the collaboration and membership process.',
        buttonText: 'Partner With Us',
        image: 'https://images.pexels.com/photos/6147210/pexels-photo-6147210.jpeg'
    };

    const donationCard = data?.donationCard || {
        title: 'Support Our Mission',
        desc1: 'Your contribution helps PARPACA expand participatory research, strengthen advocacy efforts, and support vulnerable communities across Africa through impactful and sustainable programs.',
        desc2: 'Payments to Participatory Action Research and Policy Advocacy Center Africa can be made using different secure and convenient payment methods.',
        buttonText: 'Donate',
        image: 'https://images.pexels.com/photos/36467878/pexels-photo-36467878.jpeg'
    };

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

                {/* TOP CONTENT */}
                <div className="mx-auto max-w-5xl text-center">

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
                        <span className="whitespace-pre-line">{title}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                        }}
                        viewport={{ once: true }}
                        className="
                            mx-auto mt-8 max-w-4xl
                            text-base leading-8 text-light-gray
                            sm:text-lg
                        "
                    >
                        {description}
                    </motion.p>
                </div>

                {/* CARDS */}
                <div className="mt-20 grid gap-8 lg:grid-cols-2">

                    {/* PARTNERSHIP CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="
                            group overflow-hidden
                            border border-border
                            bg-white
                            transition-all duration-500
                            hover:-translate-y-2
                            hover:shadow-2xl
                        "
                    >

                        {/* IMAGE */}
                        <div className="relative h-[320px] overflow-hidden">

                            <Image
                                src={partnershipCard.image}
                                alt={partnershipCard.title}
                                fill
                                className="
                                    object-cover
                                    transition-transform duration-700
                                    group-hover:scale-105
                                "
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        </div>

                        {/* CONTENT */}
                        <div className="p-8">

                            <h3
                                className="
                                    text-3xl font-bold leading-tight
                                    text-secondary
                                "
                            >
                                {partnershipCard.title}
                            </h3>

                            <p
                                className="
                                    mt-5 text-base leading-8
                                    text-light-gray
                                "
                            >
                                {partnershipCard.desc1}
                            </p>

                            <p
                                className="
                                    mt-5 text-base leading-8
                                    text-light-gray
                                "
                            >
                                {partnershipCard.desc2}
                            </p>

                            {/* BUTTON */}
                            <div className="mt-8">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="gap-2 bg-secondary"

                                >
                                    {partnershipCard.buttonText}

                                    <ArrowRight size={18} />
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* DONATION CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                        }}
                        viewport={{ once: true }}
                        className="
                            group overflow-hidden
                            border border-border
                            bg-primary-dark
                            transition-all duration-500
                            hover:-translate-y-2
                            hover:shadow-2xl
                        "
                    >

                        {/* IMAGE */}
                        <div className="relative h-[320px] overflow-hidden">

                            <Image
                                src={donationCard.image}
                                alt={donationCard.title}
                                fill
                                className="
                                    object-cover
                                    transition-transform duration-700
                                    group-hover:scale-105
                                "
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        </div>

                        {/* CONTENT */}
                        <div className="p-8">

                            <h3
                                className="
                                    text-3xl font-bold leading-tight
                                    text-white
                                "
                            >
                                {donationCard.title}
                            </h3>

                            <p
                                className="
                                    mt-5 text-base leading-8
                                    text-white/70
                                "
                            >
                                {donationCard.desc1}
                            </p>

                            <p
                                className="
                                    mt-5 text-base leading-8
                                    text-white/70
                                "
                            >
                                {donationCard.desc2}
                            </p>

                            {/* BUTTON */}
                            <div className="mt-8">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="gap-2 bg-secondary"
                                >
                                    {donationCard.buttonText}

                                    <ArrowRight size={18} />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Collaboration