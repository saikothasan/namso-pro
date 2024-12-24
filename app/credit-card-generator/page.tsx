import { CreditCardGenerator } from '@/components/credit-card-generator'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { FAQSection } from '@/components/faq-section'
import { SEO } from '@/components/seo'

export default function CreditCardGeneratorPage() {
  return (
    <>
      <SEO 
        title="Credit Card Generator"
        description="Generate valid test credit card numbers for development and testing. Create bulk credit card data with customizable options using our free tool."
        canonical="https://testingtools.com/credit-card-generator"
      />
      <div className="container py-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">Credit Card Generator</h1>
        <CreditCardGenerator />
        <AboutSection 
          title="About Credit Card Generator"
          description="Learn more about our credit card generator tool"
          content="Our Credit Card Generator is a powerful tool designed for developers, testers, and anyone who needs valid credit card numbers for testing purposes. It generates card numbers that pass basic validation algorithms but are not connected to real accounts, ensuring safe and legal use for development and testing scenarios."
        />
        <FeaturesSection 
          title="Features"
          description="Discover the capabilities of our Credit Card Generator"
          features={[
            {
              title: "Multiple Card Networks",
              description: "Generate cards for various networks including Visa, Mastercard, American Express, and more."
            },
            {
              title: "Custom BIN Support",
              description: "Use your own Bank Identification Number (BIN) for more specific testing scenarios."
            },
            {
              title: "Bulk Generation",
              description: "Create up to 1000 valid card numbers in a single operation."
            },
            {
              title: "Luhn Algorithm Validation",
              description: "All generated numbers pass the Luhn algorithm check, ensuring they are format-valid."
            }
          ]}
        />
        <FAQSection 
          title="Frequently Asked Questions"
          description="Common questions about the Credit Card Generator"
          faqs={[
            {
              question: "Are these credit card numbers real?",
              answer: "No, these are not real credit card numbers. They are generated for testing purposes only and cannot be used for actual transactions."
            },
            {
              question: "Is it legal to use these generated numbers?",
              answer: "Yes, it's legal to use these numbers for testing and development purposes. However, it's illegal to use them for fraudulent activities or actual purchases."
            },
            {
              question: "Can I use a custom BIN (Bank Identification Number)?",
              answer: "Yes, our generator allows you to input a custom BIN. The generated numbers will start with your provided BIN."
            },
            {
              question: "How many card numbers can I generate at once?",
              answer: "You can generate up to 1000 card numbers in a single operation."
            }
          ]}
        />
      </div>
    </>
  )
}

