import { URLEncoderDecoder } from '@/components/url-encoder-decoder'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { FAQSection } from '@/components/faq-section'
import { SEO } from '@/components/seo'

export default function URLEncoderDecoderPage() {
  return (
    <>
      <SEO 
        title="URL Encoder/Decoder | Testing Tools"
        description="Easily encode and decode URLs with our free online tool. Perfect for web developers and SEO specialists working with complex URLs."
        canonical="https://testingtools.com/url-encoder-decoder"
      />
      <div className="container py-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-cyan-700 dark:text-cyan-300">URL Encoder/Decoder</h1>
        <URLEncoderDecoder />
        <AboutSection 
          title="About URL Encoder/Decoder"
          description="Learn more about our URL encoding and decoding tool"
          content="Our URL Encoder/Decoder is a versatile tool designed to help web developers, SEO specialists, and anyone working with URLs to easily encode and decode complex web addresses. It ensures that special characters in URLs are properly handled for use in various web applications and systems."
        />
        <FeaturesSection 
          title="Features"
          description="Discover the capabilities of our URL Encoder/Decoder"
          features={[
            {
              title: "Two-Way Conversion",
              description: "Easily encode URLs to ensure special characters are properly represented, and decode encoded URLs back to their original form."
            },
            {
              title: "Real-Time Processing",
              description: "See the encoded or decoded output instantly as you type or paste your input."
            },
            {
              title: "Support for Complex URLs",
              description: "Handle URLs with query parameters, special characters, and international characters."
            },
            {
              title: "Client-Side Processing",
              description: "All encoding and decoding is done locally in your browser for enhanced privacy and speed."
            }
          ]}
        />
        <FAQSection 
          title="Frequently Asked Questions"
          description="Common questions about the URL Encoder/Decoder"
          faqs={[
            {
              question: "What is URL encoding?",
              answer: "URL encoding is the practice of converting characters into a format that can be transmitted over the Internet. It replaces unsafe ASCII characters with a '%' followed by two hexadecimal digits."
            },
            {
              question: "Why do I need to encode URLs?",
              answer: "URL encoding is necessary when you have special characters in your URLs that might be misinterpreted by browsers or servers. It ensures that all parts of the URL are properly transmitted and understood."
            },
            {
              question: "Is URL encoding the same as encryption?",
              answer: "No, URL encoding is not encryption. It's a way of representing special characters in a URL-safe format. It doesn't provide any security or privacy; it's purely for ensuring correct data transmission."
            },
            {
              question: "When should I use URL decoding?",
              answer: "You should use URL decoding when you receive or encounter an encoded URL and need to see its original form. This is often necessary when analyzing URLs from server logs or when debugging web applications."
            }
          ]}
        />
      </div>
    </>
  )
}

