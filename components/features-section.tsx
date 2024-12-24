import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Feature {
  title: string
  description: string
}

interface FeaturesSectionProps {
  title: string
  description: string
  features: Feature[]
}

export function FeaturesSection({ title, description, features }: FeaturesSectionProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto mt-8 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-green-700 dark:text-green-300">{title}</CardTitle>
        <CardDescription className="text-green-600 dark:text-green-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-green-500 dark:text-green-400">•</span>
              <div>
                <h3 className="font-semibold text-green-700 dark:text-green-300">{feature.title}</h3>
                <p className="text-green-600 dark:text-green-400">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

