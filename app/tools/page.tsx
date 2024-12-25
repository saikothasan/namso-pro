import { CreditCardGenerator } from '@/components/credit-card-generator'
import { UserGenerator } from '@/components/user-generator'
import { CardValidator } from '@/components/card-validator'
import { BinChecker } from '@/components/bin-checker'
import { MD5Generator } from '@/components/md5-generator'
import { WhatIsMyIP } from '@/components/what-is-my-ip'
import { Base64Tool } from '@/components/base64-tool'
import { ColorConverter } from '@/components/color-converter'
import { PasswordGenerator } from '@/components/password-generator'
import { GmailDotTrickGenerator } from '@/components/gmail-dot-trick-generator'
import { TextCaseConverter } from '@/components/text-case-converter'
import { URLEncoderDecoder } from '@/components/url-encoder-decoder'
import { JSONFormatter } from '@/components/json-formatter'
import { LoremIpsumGenerator } from '@/components/lorem-ipsum-generator'
import { QRCodeGenerator } from '@/components/qr-code-generator'
import { CreditCard, Users, CheckCircle, Search, Hash, Globe, Code, Palette, Key, Mail, Type, Link, Braces, FileText, QrCode } from 'lucide-react'
import { SEO } from '@/components/seo'

const tools = [
  {
    icon: CreditCard,
    title: 'Credit Card Generator',
    description: 'Generate valid test credit card numbers for development and testing.',
    component: CreditCardGenerator
  },
  {
    icon: Users,
    title: 'User Data Generator',
    description: 'Create random user profiles with realistic data for testing.',
    component: UserGenerator
  },
  {
    icon: CheckCircle,
    title: 'Card Validator',
    description: 'Validate credit card numbers using the Luhn algorithm.',
    component: CardValidator
  },
  {
    icon: Search,
    title: 'BIN Checker',
    description: 'Look up bank identification numbers (BIN) information.',
    component: BinChecker
  },
  {
    icon: Hash,
    title: 'MD5 Generator',
    description: 'Generate MD5 hash from input text.',
    component: MD5Generator
  },
  {
    icon: Globe,
    title: 'What Is My IP',
    description: 'Discover your current IP address.',
    component: WhatIsMyIP
  },
  {
    icon: Code,
    title: 'Base64 Encode/Decode',
    description: 'Encode or decode text using Base64.',
    component: Base64Tool
  },
  {
    icon: Palette,
    title: 'Color Converter',
    description: 'Convert between HEX and RGB color formats.',
    component: ColorConverter
  },
  {
    icon: Key,
    title: 'Password Generator',
    description: 'Generate secure and random passwords.',
    component: PasswordGenerator
  },
  {
    icon: Mail,
    title: 'Gmail Dot Trick Generator',
    description: 'Generate Gmail address variations using the dot trick.',
    component: GmailDotTrickGenerator
  },
  {
    icon: Type,
    title: 'Text Case Converter',
    description: 'Convert text to various cases.',
    component: TextCaseConverter
  },
  {
    icon: Link,
    title: 'URL Encoder/Decoder',
    description: 'Encode or decode URLs.',
    component: URLEncoderDecoder
  },
  {
    icon: Braces,
    title: 'JSON Formatter',
    description: 'Format and validate JSON data.',
    component: JSONFormatter
  },
  {
    icon: FileText,
    title: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text for your designs.',
    component: LoremIpsumGenerator
  },
  {
    icon: QrCode,
    title: 'QR Code Generator',
    description: 'Create QR codes for text or URLs.',
    component: QRCodeGenerator
  }
]

export default function ToolsPage() {
  return (
    <>
      <SEO 
        title="Testing Tools - All Tools"
        description="Explore our comprehensive set of testing and development tools. From credit card generators to JSON formatters, find the perfect tool for your needs."
      />
      <main className="container py-8 space-y-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center gradient-text">All Testing Tools</h1>
        {tools.map((Tool, index) => (
          <div key={Tool.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <Tool.component />
          </div>
        ))}
      </main>
    </>
  )
}

