import { BinChecker } from '@/components/bin-checker'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { FAQSection } from '@/components/faq-section'
import { SEO } from '@/components/seo'

export default function BinCheckerPage() {
  return (
    <>
      <SEO 
        title="BIN Checker"
        description="Look up Bank Identification Number (BIN) information with our free BIN Checker. Identify card issuers, types, and countries of origin."
        canonical="https://testingtools.com/bin-checker"
      />
      <div className="container py-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-orange-700 dark:text-orange-300">BIN Checker</h1>
        <BinChecker />
        <AboutSection 
          title="About BIN Checker"
          description="Learn more about our BIN (Bank Identification Number) checker tool"
          content="Our BIN Checker is a powerful tool that allows you to look up information about a credit card's issuer based on its Bank Identification Number (BIN). The BIN is the first 6 to 8 digits of a credit card number and contains valuable information about the card's origin and type."
        />
        <FeaturesSection 
          title="Features"
          description="Discover the capabilities of our BIN Checker"
          features={[
            {
              title: "Issuer Information",
              description: "Provides details about the bank or financial institution that issued the card."
            },
            {
              title: "Card Type Identification",
              description: "Identifies whether the card is credit, debit, or prepaid."
            },
            {
              title: "Brand Recognition",
              description: "Recognizes major card brands like Visa, Mastercard, Amex, and more."
            },
            {
              title: "Country of Origin",
              description: "Determines the country where the card was issued."
            }
          ]}
        />
        <FAQSection 
          title="Frequently Asked Questions"
          description="Common questions about the BIN Checker"
          faqs={[
            {
              question: "What is a BIN?",
              answer: "BIN stands for Bank Identification Number. It's the first 6 to 8 digits of a credit card number that identify the institution that issued the card."
            },
            {
              question: "Is it safe to use this BIN checker?",
              answer: "Yes, our BIN checker only requires the first 6 to 8 digits of a card number, which do not uniquely identify a card or account. We do not store or transmit this information."
            },
            {
              question: "How accurate is the information provided?",
              answer: "Our BIN database is regularly updated, but the accuracy of the information can vary. It should be used for general information purposes only."
            },
            {
              question: "Can I use this tool to validate a credit card?",
              answer: "No, this tool is not for validating credit cards. It only provides information about the card issuer based on the BIN. For card validation, please use our Card Validator tool."
            }
          ]}
        />
      </div>
    </>
  )
}

