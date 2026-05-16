import { ArrowRight } from "lucide-react"
import Button from "../ui/Button"

const BottomCTA = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
                <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-20 text-center sm:px-12 sm:py-28 lg:px-20">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to make a difference?
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                            Join us in our mission to empower communities and
                            strengthen governance across Africa.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="gap-2"
                            >
                                Get Involved

                                <ArrowRight size={18} />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="gap-2 text-white hover:bg-white/10"
                            >
                                Contact Us

                                <ArrowRight size={18} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BottomCTA