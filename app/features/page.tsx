import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Users, CheckCircle, Search, Zap, Lock, Globe, Download } from 'lucide-react'

const features = [
  {
    icon: CreditCard,
    title: 'Credit Card Generator',
    description: 'Generate valid test credit card numbers with customizable formats and options.'
  },
  {
    icon: Users,
    title: 'User Data Generator',
    description: 'Create realistic user profiles with names, emails, addresses, and more.'
  },
  {
    icon: CheckCircle,
    title: 'Card Validator',
    description: 'Validate credit card numbers using the Luhn algorithm and identify card types.'
  },
  {
    icon: Search,
    title: 'BIN Checker',
    description: 'Look up bank identification numbers (BIN) information for credit cards.'
  },
  {
    icon: Zap,
    title: 'Fast Generation',
    description: 'Generate thousands of records in seconds with our optimized algorithms.'
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'All data is generated locally in your browser. No data is stored or transmitted.'
  },
  {
    icon: Globe,
    title: 'Multiple Formats',
    description: 'Export generated data in various formats including JSON, CSV, and plain text.'
  },
  {
    icon: Download,
    title: 'Bulk Export',
    description: 'Download generated data in bulk for easy integration with your applications.'
  }
]

export default function FeaturesPage() {
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Features</h1>
          <p className="text-muted-foreground">
            Discover all the powerful features our testing tools offer
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

