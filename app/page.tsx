import { CreditCard, Users, CheckCircle, Search, Hash, Globe, Code, Palette, Key, Mail, Type, Link, Braces, FileText, QrCode } from 'lucide-react'
import NextLink from 'next/link'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/seo'

const tools = [
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
  },
  {
    icon: Hash,
    title: 'MD5 Generator',
    description: 'Generate MD5 hash from input text.',
    href: '/md5-generator'
  },
  {
    icon: Globe,
    title: 'What Is My IP',
    description: 'Discover your current IP address.',
    href: '/what-is-my-ip'
  },
  {
    icon: Code,
    title: 'Base64 Encode/Decode',
    description: 'Encode or decode text using Base64.',
    href: '/base64-tool'
  },
  {
    icon: Palette,
    title: 'Color Converter',
    description: 'Convert between HEX and RGB color formats.',
    href: '/color-converter'
  },
  {
    icon: Key,
    title: 'Password Generator',
    description: 'Generate secure and random passwords.',
    href: '/password-generator'
  },
  {
    icon: Mail,
    title: 'Gmail Dot Trick Generator',
    description: 'Generate Gmail address variations using the dot trick.',
    href: '/gmail-dot-trick-generator'
  },
  {
    icon: Type,
    title: 'Text Case Converter',
    description: 'Convert text to various cases.',
    href: '/text-case-converter'
  },
  {
    icon: Link,
    title: 'URL Encoder/Decoder',
    description: 'Encode or decode URLs.',
    href: '/url-encoder-decoder'
  },
  {
    icon: Braces,
    title: 'JSON Formatter',
    description: 'Format and validate JSON data.',
    href: '/json-formatter'
  },
  {
    icon: FileText,
    title: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text for your designs.',
    href: '/lorem-ipsum-generator'
  },
  {
    icon: QrCode,
    title: 'QR Code Generator',
    description: 'Create QR codes for text or URLs.',
    href: '/qr-code-generator'
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <NextLink key={tool.href} href={tool.href} passHref>
              <div className="border rounded-lg p-4 sm:p-6 h-full flex flex-col items-center text-center hover:shadow-md transition-shadow bg-white dark:bg-slate-900 animate-fade-in cursor-pointer">
                <tool.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-primary" />
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{tool.title}</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-grow">{tool.description}</p>
                <Button className="w-full sm:w-auto">Go to {tool.title}</Button>
              </div>
            </NextLink>
          ))}
        </div>
        <div className="text-center">
          <NextLink href="/tools" passHref>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              View All Tools
            </Button>
          </NextLink>
        </div>
      </main>
    </>
  )
}

