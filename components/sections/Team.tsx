'use client'

import Image from "next/image"
import { motion } from "framer-motion"

import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"
import { FaX } from "react-icons/fa6"

const TeamSection = ({ data }: { data?: any }) => {

    type TeamMember = { name: string; role: string; description: string; image: string; linkedin?: string; twitter?: string };
    const teamMembers: TeamMember[] = data?.teamMembers || [
        {
            name: "Alice Kiingi",
            role: "Founder & Executive Director  Head of Projects – Africa/Europe",
            description: "PARPACA was founded on the principle that communities should lead in decision-making. We empower marginalized voices that are often excluded from these processes",
            image: "/alice.webp",
        },
        {
            name: "Anne Tumushabe Kafeero",
            role: "Director of Program Management Unit (PMU) ",
            description: "We co-create knowledge with the communities we serve. Every study we conduct amplifies authentic voices, informs impactful policy, and drives lasting social transformationa",
            image: "/anne.webp",
        },
        {
            name: "Eric Kiingi",
            role: "Senior Legal Consultant and advocate",
            description: "True advocacy is rooted in justice. At PARPACA, our legal team ensures that every campaign, partnership, and policy recommendation is firmly grounded in the law.",
            image: "/eric.webp",
        },
        {
            name: "Eugenge Dudu Afande",
            role: " Global Policy & Advocacy Manager",
            description: "Join us in promoting inclusive decision-making for marginalized communities through participatory research and targeted policy advocacy.",
            image: "/eudu.webp",
        }
    ];

    const eyebrow = data?.eyebrow || 'Our Team';
    const title = data?.title || 'Meet The People\nDriving PARPACA Forward';
    const description = data?.description || 'Our multidisciplinary team combines research, advocacy, policy expertise, and community engagement to create meaningful and sustainable impact across Africa.';

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
                            mt-6 max-w-2xl
                            text-base leading-8 text-light-gray
                            sm:text-lg
                        "
                    >
                        {description}
                    </motion.p>
                </div>

                {/* TEAM GRID */}
                <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true }}
                            className="
                                group overflow-hidden
                                border border-border
                                bg-white
                                transition-all duration-500
                                hover:-translate-y-2
                                hover:border-primary/20
                                hover:shadow-2xl
                            "
                        >

                            {/* IMAGE */}
                            <div className="relative h-[420px] overflow-hidden">

                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="
                                        object-cover
                                        transition-transform duration-700
                                        group-hover:scale-105
                                    "
                                />

                                {/* OVERLAY */}
                                <div
                                    className="
                                        absolute inset-0
                                        bg-gradient-to-t
                                        from-black/80 via-black/10 to-transparent
                                    "
                                />

                                {/* SOCIALS */}
                                <div
                                    className="
                                        absolute right-4 top-4
                                        flex flex-col gap-2
                                        opacity-0 transition-all duration-300
                                        group-hover:opacity-100
                                    "
                                >

                                    {member.linkedin && <Link
                                        href={member.linkedin}
                                        className="
                                            flex h-10 w-10 items-center justify-center
                                            bg-white text-secondary
                                            transition-all duration-300
                                            hover:bg-primary hover:text-white
                                        "
                                    >
                                        <FaLinkedin size={18} />
                                    </Link>}

                                    {member.twitter && <Link
                                        href={member.twitter}
                                        className="
                                            flex h-10 w-10 items-center justify-center
                                            bg-white text-secondary
                                            transition-all duration-300
                                            hover:bg-primary hover:text-white
                                        "
                                    >
                                        <FaX size={18} />
                                    </Link>}
                                </div>

                                {/* INFO */}
                                <div className="absolute bottom-0 left-0 w-full p-6">

                                    <h3 className="text-2xl font-bold text-white">
                                        {member.name}
                                    </h3>

                                    <p className="mt-2 text-sm uppercase tracking-[0.15em] text-primary">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamSection