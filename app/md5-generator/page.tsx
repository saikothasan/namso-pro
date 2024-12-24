import { MD5Generator } from '@/components/md5-generator'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { FAQSection } from '@/components/faq-section'
import { SEO } from '@/components/seo'

export default function MD5GeneratorPage() {
  return (
    <>
      <SEO 
        title="MD5 Generator | Testing Tools"
        description="Generate MD5 hashes quickly and easily with our free MD5 Generator tool. Perfect for developers and security professionals."
        canonical="https://testingtools.com/md5-generator"
      />
      <div className="container py-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700 dark:text-indigo-300">MD5 Generator</h1>
        <MD5Generator />
        <AboutSection 
          title="About MD5 Generator"
          description="Learn more about our MD5 hash generation tool"
          content="Our MD5 Generator is a simple yet powerful tool that allows you to quickly generate MD5 hashes from any input text. While MD5 is no longer considered cryptographically secure for certain applications, it remains widely used for checksums and data integrity verification."
        />
        <FeaturesSection 
          title="Features"
          description="Discover the capabilities of our MD5 Generator"
          features={[
            {
              title: "Instant Hashing",
              description: "Generate MD5 hashes in real-time as you type or paste your input."
            },
            {
              title: "Client-Side Processing",
              description: "All hashing is done locally in your browser, ensuring your data never leaves your device."
            },
            {
              title: "Copy to Clipboard",
              description: "Easily copy the generated hash with a single click for quick use in your projects."
            },
            {
              title: "Support for Any Text Input",
              description: "Hash any text input, including Unicode characters and special symbols."
            }
          ]}
        />
        <FAQSection 
          title="Frequently Asked Questions"
          description="Common questions about the MD5 Generator"
          faqs={[
            {
              question: "What is MD5?",
              answer: "MD5 (Message Digest algorithm 5) is a widely used hash function that produces a 128-bit hash value. It's commonly used to verify data integrity, although it's no longer considered cryptographically secure for password storage or digital signatures."
            },
            {
              question: "Is MD5 secure for password hashing?",
              answer: "No, MD5 is not considered secure for password hashing. For password storage, it's recommended to use more secure algorithms like bcrypt, Argon2, or PBKDF2."
            },
            {
              question: "Can I reverse an MD5 hash to get the original text?",
              answer: "No, MD5 is a one-way hash function. It's computationally infeasible to reverse an MD5 hash to obtain the original input. However, for known inputs, you can generate MD5 hashes and compare them to find matches."
            },
            {
              question: "Why might I need to generate an MD5 hash?",
              answer: "MD5 hashes are often used for verifying file integrity, creating checksums, or in legacy systems that still rely on MD5. They can also be useful in certain development and testing scenarios."
            }
          ]}
        />
      </div>
    </>
  )
}

