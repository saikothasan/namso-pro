import { Base64Tool } from '@/components/base64-tool'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { FAQSection } from '@/components/faq-section'
import { SEO } from '@/components/seo'

export default function Base64ToolPage() {
  return (
    <>
      <SEO 
        title="Base64 Encode/Decode | Testing Tools"
        description="Easily encode and decode text using Base64 with our free online tool. Perfect for developers working with data encoding and transmission."
        canonical="https://testingtools.com/base64-tool"
      />
      <div className="container py-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-700 dark:text-green-300">Base64 Encode/Decode</h1>
        <Base64Tool />
        <AboutSection 
          title="About Base64 Encode/Decode"
          description="Learn more about our Base64 encoding and decoding tool"
          content="Our Base64 Encode/Decode tool provides a simple and efficient way to convert text to and from Base64 encoding. Base64 is widely used for encoding binary data to ensure it can be safely transmitted over text-based protocols."
        />
        <FeaturesSection 
          title="Features"
          description="Discover the capabilities of our Base64 Encode/Decode tool"
          features={[
            {
              title: "Two-Way Conversion",
              description: "Easily encode plain text to Base64 and decode Base64 back to plain text."
            },
            {
              title: "Real-Time Processing",
              description: "See the encoded or decoded output instantly as you type or paste your input."
            },
            {
              title: "Support for Various Character Sets",
              description: "Handle ASCII and Unicode characters in both encoding and decoding operations."
            },
            {
              title: "Client-Side Processing",
              description: "All encoding and decoding is done locally in your browser for enhanced privacy and speed."
            }
          ]}
        />
        <FAQSection 
          title="Frequently Asked Questions"
          description="Common questions about the Base64 Encode/Decode tool"
          faqs={[
            {
              question: "What is Base64 encoding?",
              answer: "Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It's commonly used to encode binary data for transmission over text-based protocols or storage in text-based systems."
            },
            {
              question: "Why would I need to use Base64 encoding?",
              answer: "Base64 encoding is useful when you need to transmit binary data over media that only reliably support text content. It's commonly used in email attachments, storing complex data in XML, and embedding image data in CSS or HTML."
            },
            {
              question: "Is Base64 encoding a form of encryption?",
              answer: "No, Base64 encoding is not encryption. It's a way of representing data, not securing it. Anyone can decode Base64 encoded data without a key. For secure data transmission, you should use proper encryption methods."
            },
            {
              question: "Can I encode any type of file with Base64?",
              answer: "Yes, any type of file or binary data can be encoded into Base64. However, our online tool is designed for text input. For encoding files, you would typically use a local application or programming library."
            }
          ]}
        />
      </div>
    </>
  )
}

