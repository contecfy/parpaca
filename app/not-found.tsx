import Link from 'next/link'
import { ArrowRight, Home } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex h-[75vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="text-8xl font-black text-primary/10 sm:text-9xl">404</h1>
      
      <div className="relative -mt-10 mb-8 sm:-mt-14">
        <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-5xl">
          Page Not Found
        </h2>
      </div>

      <p className="mb-10 max-w-md text-base leading-8 text-light-gray sm:text-lg">
        Sorry, we couldn’t find the page you’re looking for. It might have been moved, removed, or never existed in the first place.
      </p>

      <Link href="/">
        <Button variant="primary" size="lg" className="group gap-2 hover:shadow-lg">
          <Home size={18} />
          Return to Home
          <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </Link>
    </div>
  )
}
