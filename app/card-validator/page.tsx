import { CardValidator } from '@/components/card-validator'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { FAQSection } from '@/components/faq-section'
import { SEO } from '@/components/seo'

export default function CardValidatorPage() {
  return (
    <>
      <SEO 
        title="Credit Card Validator"
        description="Validate credit card numbers instantly with our free Credit Card Validator. Check card types and verify numbers using the Luhn algorithm."
        canonical="https://testingtools.com/card-validator"
      />
      <div className="container py-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-700 dark:text-green-300">Card Validator</h1>
        <CardValidator />
        <AboutSection 
          title="About Card Validator"
          description="Learn more about our card validation tool"
          content="Our Card Validator is a robust tool designed to verify the validity of credit card numbers. It uses industry-standard algorithms to check if a given card number is properly formatted and could potentially be a real card number, without actually verifying it against any bank databases."
        />
        <FeaturesSection 
          title="Features"
          description="Discover the capabilities of our Card Validator"
          features={[
            {
              title: "Luhn Algorithm Check",
              description: "Validates card numbers using the Luhn algorithm, an industry-standard method."
            },
            {
              title: "Card Type Detection",
              description: "Identifies the card network (e.g., Visa, Mastercard, Amex) based on the number pattern."
            },
            {
              title: "Instant Validation",
              description: "Provides immediate feedback on the validity of the entered card number."
            },
            {
              title: "Secure Validation",
              description: "Performs all checks locally in your browser, ensuring no sensitive data is transmitted."
            }
          ]}
        />
        <FAQSection 
          title="Frequently Asked Questions"
          description="Common questions about the Card Validator"
          faqs={[
            {
              question: "Does this tool check if a card is active or has available funds?",
              answer: "No, this tool only checks if the card number is properly formatted and could potentially be valid. It does not verify the card against any bank databases or check for funds."
            },
            {
              question: "What is the Luhn algorithm?",
              answer: "The Luhn algorithm, also known as the 'modulus 10' algorithm, is a simple checksum formula used to validate various identification numbers, including credit card numbers."
            },
            {
              question: "Is it safe to enter my card number into this tool?",
              answer: "Yes, all validation is performed locally in your browser. We do not store or transmit any card numbers you enter."
            },
            {
              question: "Can this tool validate all types of credit cards?",
              answer: "Our tool can validate and identify most major credit card types, including Visa, Mastercard, American Express, Discover, and more."
            }
          ]}
        />
      </div>
    </>
  )
}

