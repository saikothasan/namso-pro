import { CreditCardGenerator } from '@/components/credit-card-generator'
import { Toaster } from '@/components/ui/sonner'
import { CreditCard, Users, CheckCircle, Search } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/seo'

const features = [
  {
    icon: CreditCard,
    title: 'Credit Card Generator',
    description: 'Generate valid test credit card numbers for development and testing.',
    href: '/credit-card-generator'
  },
  {
    icon: Users,
    title: 'User Data Generator',
    description: 'Create random user profiles with realistic data for testing.',
    href: '/user-generator'
  },
  {
    icon: CheckCircle,
    title: 'Card Validator',
    description: 'Validate credit card numbers using the Luhn algorithm.',
    href: '/card-validator'
  },
  {
    icon: Search,
    title: 'BIN Checker',
    description: 'Look up bank identification numbers (BIN) information.',
    href: '/bin-checker'
  }
]

export default function Home() {
  return (
    <>
      <SEO 
        title="Testing Tools - Generate Test Data"
        description="Free tools for generating test credit cards, user data, and more. Perfect for development, testing, and validation purposes."
      />
      <main className="container py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Testing Tools</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {features.map((feature) => (
            <Link key={feature.href} href={feature.href} className="block">
              <div className="border rounded-lg p-6 h-full flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-muted-foreground mb-4 flex-grow">{feature.description}</p>
                <Button>Go to {feature.title}</Button>
              </div>
            </Link>
          ))}
        </div>
        <CreditCardGenerator />
        <Toaster />
      </main>
    </>
  )
}

