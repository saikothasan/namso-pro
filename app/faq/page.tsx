import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Are the generated credit card numbers real?",
    answer: "No, the generated credit card numbers are not real and cannot be used for actual transactions. They are test numbers that follow the same format and validation rules as real credit cards but are not connected to any actual accounts."
  },
  {
    question: "Is it legal to use these test credit card numbers?",
    answer: "Yes, it is legal to use these test credit card numbers for development and testing purposes. They are specifically designed for testing payment systems and cannot be used for real transactions."
  },
  {
    question: "How accurate is the user data generator?",
    answer: "The user data generator creates realistic-looking but completely fictional data. While the data follows common patterns and formats, it is randomly generated and not connected to real people."
  },
  {
    question: "Can I use the generated data in my application?",
    answer: "Yes, you can use the generated data for testing and development purposes. However, we recommend using real data in production environments."
  },
  {
    question: "Is my data safe when using these tools?",
    answer: "Yes, all data generation happens locally in your browser. We don't store or transmit any data to external servers."
  },
  {
    question: "How often are the tools updated?",
    answer: "We regularly update our tools to add new features, improve functionality, and fix any reported issues. Check our GitHub repository for the latest updates."
  }
]

export default function FaqPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">
            Find answers to common questions about our testing tools
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

