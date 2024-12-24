import { CreditCardGenerator } from '@/components/credit-card-generator'
import { UserGenerator } from '@/components/user-generator'
import { CardValidator } from '@/components/card-validator'
import { BinChecker } from '@/components/bin-checker'
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
    href: '/credit-card-generator',
    component: CreditCardGenerator
  },
  {
    icon: Users,
    title: 'User Data Generator',
    description: 'Create random user profiles with realistic data for testing.',
    href: '/user-generator',
    component: UserGenerator
  },
  {
    icon: CheckCircle,
    title: 'Card Validator',
    description: 'Validate credit card numbers using the Luhn algorithm.',
    href: '/card-validator',
    component: CardValidator
  },
  {
    icon: Search,
    title: 'BIN Checker',
    description: 'Look up bank identification numbers (BIN) information.',
    href: '/bin-checker',
    component: BinChecker
  }
]

export default function Home() {
  return (
    <>
      <SEO 
        title="Testing Tools - Generate Test Data"
        description="Free tools for generating test credit cards, user data, and more. Perfect for development, testing, and validation purposes."
      />
      <main className="container py-8 space-y-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center gradient-text">Testing Tools</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link key={feature.href} href={feature.href} className="block">
              <div className="border rounded-lg p-4 sm:p-6 h-full flex flex-col items-center text-center hover:shadow-md transition-shadow bg-white dark:bg-slate-900 animate-fade-in">
                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-primary" />
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-grow">{feature.description}</p>
                <Button className="w-full sm:w-auto">Go to {feature.title}</Button>
              </div>
            </Link>
          ))}
        </div>
        {features.map((Feature, index) => (
          <div key={Feature.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <Feature.component />
          </div>
        ))}
        <Toaster />
      </main>
    </>
  )
}

