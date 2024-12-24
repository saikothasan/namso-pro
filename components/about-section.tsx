import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AboutSectionProps {
  title: string
  description: string
  content: string
}

export function AboutSection({ title, description, content }: AboutSectionProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto mt-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-300">{title}</CardTitle>
        <CardDescription className="text-purple-600 dark:text-purple-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-purple-800 dark:text-purple-200">{content}</p>
      </CardContent>
    </Card>
  )
}

