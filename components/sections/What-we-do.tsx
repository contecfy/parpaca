'use client'

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const Whatwedo = () => {

    const services = [
        {
            number: "01",
            title: "No Poverty (SDG 1)",
            description:
                "Eradicating poverty leads to more stable societies, reduces inequality, and enables communities to contribute fully to social and economic development.",
            points: [
                "Empowerment through education and skills training",
                "Microfinance and small business support",
                "Agricultural and community development",
                "Health and sanitation programs",
            ],
        },
        {
            number: "02",
            title: "Quality Education (SDG 4)",
            description:
                "Access to inclusive and equitable education strengthens communities, expands opportunities, and promotes sustainable development across generations.",
            points: [
                "Community-based literacy programs",
                "Research and policy advocacy in education",
                "Youth mentorship and leadership initiatives",
                "Digital learning and innovation access",
            ],
        },
        {
            number: "03",
            title: "Gender Equality (SDG 5)",
            description:
                "Promoting gender equality ensures that women and girls can participate meaningfully in leadership, decision-making, and economic development.",
            points: [
                "Women empowerment initiatives",
                "Gender-responsive policy research",
                "Leadership and advocacy training",
                "Protection against gender-based violence",
            ],
        },
        {
            number: "04",
            title: "Good Health & Well-being (SDG 3)",
            description:
                "Healthy communities are fundamental to sustainable growth, social stability, and improved quality of life across Africa.",
            points: [
                "Public health awareness campaigns",
                "Mental health and psychosocial support",
                "Community health outreach programs",
                "Health systems research and advocacy",
            ],
        },
        {
            number: "05",
            title: "Climate Action (SDG 13)",
            description:
                "Addressing climate challenges through community-centered approaches helps protect livelihoods, ecosystems, and future generations.",
            points: [
                "Environmental awareness initiatives",
                "Climate resilience research",
                "Sustainable agriculture programs",
                "Community-led conservation projects",
            ],
        },
        {
            number: "06",
            title: "Peace, Justice & Strong Institutions (SDG 16)",
            description:
                "Inclusive governance, transparency, and justice systems are essential for sustainable peace and accountable leadership.",
            points: [
                "Governance and policy research",
                "Civic engagement and participation",
                "Human rights advocacy",
                "Institutional capacity strengthening",
            ],
        },
    ]

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
                        What We Do
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
                        Driving Sustainable
                        <br />
                        Impact Across Africa
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
                        PARPACA advances participatory research, policy advocacy,
                        and community-centered development initiatives aligned
                        with the Sustainable Development Goals (SDGs).
                    </motion.p>
                </div>

                {/* SERVICES GRID */}
                <div className="mt-20 grid gap-8 lg:grid-cols-2">

                    {services.map((service, index) => (
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
                                group border border-border
                                bg-white p-8
                                transition-all duration-500
                                hover:border-primary/20
                                hover:shadow-2xl
                            "
                        >

                            {/* NUMBER */}
                            <div className="flex items-center justify-between">

                                <span
                                    className="
                                        text-5xl font-black
                                        text-primary/15
                                        transition-all duration-500
                                        group-hover:text-primary
                                    "
                                >
                                    {service.number}
                                </span>

                                <ArrowRight
                                    size={22}
                                    className="
                                        text-light-gray transition-all duration-300
                                        group-hover:translate-x-1
                                        group-hover:text-primary
                                    "
                                />
                            </div>

                            {/* TITLE */}
                            <h3
                                className="
                                    mt-6 text-3xl font-bold
                                    leading-tight text-secondary
                                "
                            >
                                {service.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p
                                className="
                                    mt-5 text-base leading-8
                                    text-light-gray
                                "
                            >
                                {service.description}
                            </p>

                            {/* POINTS */}
                            <div className="mt-8 space-y-4">

                                {service.points.map((point, pointIndex) => (
                                    <div
                                        key={pointIndex}
                                        className="flex items-start gap-3"
                                    >

                                        <span
                                            className="
                                                mt-2 h-2 w-2
                                                flex-shrink-0 bg-primary
                                            "
                                        />

                                        <p className="text-sm leading-7 text-light-gray">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Whatwedo