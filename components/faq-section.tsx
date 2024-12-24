import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  description: string
  faqs: FAQ[]
}

export function FAQSection({ title, description, faqs }: FAQSectionProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto mt-8 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-orange-700 dark:text-orange-300">{title}</CardTitle>
        <CardDescription className="text-orange-600 dark:text-orange-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-orange-700 dark:text-orange-300">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-orange-600 dark:text-orange-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

