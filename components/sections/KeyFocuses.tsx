'use client'

import { motion } from "framer-motion"
import {
    Users,
    Globe,
    Scale,
    BookOpen,
    HeartHandshake,
    Lightbulb,
} from "lucide-react"

const KeyFoucs = ({ data }: { data?: any }) => {

    type FocusArea = { title: string; description: string; };
    const focusAreas: FocusArea[] = data?.focusAreas || [
        {
            title: "Grassroots Empowerment",
            description: "Empowerment is not about giving people power — it’s about unlocking the power they already have.",
        },
        {
            title: "Participatory democracy​",
            description: "By empowering voices and creating space for dialogue,we play a vital role in making governance more inclusive, transparent, and accountable.​",
        },
        {
            title: "Policy change​",
            description: "By mobilizing, educating, and empowering communities to speak truth to power—ensuring their voices lead to laws and systems that serve everyone fairly.​",
        },
        {
            title: "Social Justice",
            description: "By creating a society where everyone—regardless of gender, race, income, religion, ability, or background—has equal access to opportunities, rights, and resources.​",
        },
        {
            title: "Sustainable Impact",
            description: "Impact that ends when a project ends is not enough.We believe in impact that grows, multiplies, and continues—powered by communities, for generations to come.",
        },
        {
            title: "Transparency",
            description: "We believe that open sharing of information strengthens trust, drives accountability, and ensures that our research and advocacy efforts truly serve the people.​",
        },
    ];

    const focusIcons = [Users, Globe, Scale, BookOpen, HeartHandshake, Lightbulb];
    const eyebrow = data?.eyebrow || 'Key Focus Areas';
    const title = data?.title || 'Advancing Research,\nAdvocacy & Community Impact';
    const description = data?.description || 'PARPACA focuses on strengthening communities, influencing policy, and promoting inclusive development through participatory and evidence-based approaches.';

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

                {/* GRID */}
                <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {focusAreas.map((item, index) => {
                        const Icon = focusIcons[index % focusIcons.length]

                        return (
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
                                    group relative overflow-hidden
                                    border border-border
                                    bg-white p-8
                                    transition-all duration-500
                                    hover:-translate-y-2
                                    hover:border-primary/20
                                    hover:shadow-2xl
                                "
                            >

                                {/* BACKGROUND ACCENT */}
                                <div
                                    className="
                                        absolute right-0 top-0
                                        h-32 w-32
                                        translate-x-10 -translate-y-10
                                        bg-primary/5
                                        transition-all duration-500
                                        group-hover:bg-primary/10
                                    "
                                />

                                {/* ICON */}
                                <div
                                    className="
                                        relative flex h-16 w-16
                                        items-center justify-center
                                        bg-primary/10
                                        transition-all duration-300
                                        group-hover:bg-primary
                                    "
                                >
                                    <Icon
                                        size={30}
                                        className="
                                            text-primary transition-colors duration-300
                                            group-hover:text-white
                                        "
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="relative mt-8">

                                    <h3
                                        className="
                                            text-2xl font-bold
                                            leading-tight text-secondary
                                        "
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-5 text-base leading-8
                                            text-light-gray
                                        "
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default KeyFoucs