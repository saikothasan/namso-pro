import { PasswordGenerator } from '@/components/password-generator'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { FAQSection } from '@/components/faq-section'
import { SEO } from '@/components/seo'

export default function PasswordGeneratorPage() {
  return (
    <>
      <SEO 
        title="Password Generator | Testing Tools"
        description="Generate secure and random passwords with our free Password Generator tool. Customize length and character types for your password needs."
        canonical="https://testingtools.com/password-generator"
      />
      <div className="container py-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-yellow-700 dark:text-yellow-300">Password Generator</h1>
        <PasswordGenerator />
        <AboutSection 
          title="About Password Generator"
          description="Learn more about our password generation tool"
          content="Our Password Generator is a powerful tool designed to create strong, secure, and randomized passwords. It allows you to customize the length and character types included in your password, ensuring you can meet various security requirements while maintaining unpredictability."
        />
        <FeaturesSection 
          title="Features"
          description="Discover the capabilities of our Password Generator"
          features={[
            {
              title: "Customizable Length",
              description: "Generate passwords from 8 to 32 characters long to meet various security requirements."
            },
            {
              title: "Character Type Selection",
              description: "Choose to include uppercase letters, lowercase letters, numbers, and special symbols in your password."
            },
            {
              title: "Instant Generation",
              description: "Create new passwords instantly with a single click."
            },
            {
              title: "Copy to Clipboard",
              description: "Easily copy generated passwords to your clipboard for immediate use."
            },
            {
              title: "Secure Generation",
              description: "All passwords are generated client-side, ensuring your generated passwords never leave your device."
            }
          ]}
        />
        <FAQSection 
          title="Frequently Asked Questions"
          description="Common questions about the Password Generator"
          faqs={[
            {
              question: "How secure are the generated passwords?",
              answer: "The passwords generated are highly secure, using a combination of random characters based on your selected criteria. The generation process occurs entirely in your browser, ensuring no transmission of sensitive data."
            },
            {
              question: "Can I use this for creating passwords for my accounts?",
              answer: "Yes, you can use this tool to create strong passwords for your accounts. However, always ensure you're using unique passwords for each account and consider using a password manager for added security."
            },
            {
              question: "Why can't I generate a password shorter than 8 characters?",
              answer: "Passwords shorter than 8 characters are generally considered weak and easily crackable. We enforce a minimum length of 8 characters to encourage the use of stronger passwords."
            },
            {
              question: "Is it safe to use the 'Copy to Clipboard' feature?",
              answer: "Yes, the 'Copy to Clipboard' feature is safe to use. The password is copied directly from your browser to your device's clipboard without being sent anywhere else."
            }
          ]}
        />
      </div>
    </>
  )
}

