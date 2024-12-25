import { JSONFormatter } from '@/components/json-formatter'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { FAQSection } from '@/components/faq-section'
import { SEO } from '@/components/seo'

export default function JSONFormatterPage() {
  return (
    <>
      <SEO 
        title="JSON Formatter | Testing Tools"
        description="Format and validate JSON data with our free online JSON Formatter. Essential for developers working with JSON data structures."
        canonical="https://testingtools.com/json-formatter"
      />
      <div className="container py-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">JSON Formatter</h1>
        <JSONFormatter />
        <AboutSection 
          title="About JSON Formatter"
          description="Learn more about our JSON formatting and validation tool"
          content="Our JSON Formatter is a powerful tool designed to help developers format, validate, and beautify JSON data. It provides an easy way to ensure your JSON is correctly structured and readable, which is essential for debugging and working with APIs and configuration files."
        />
        <FeaturesSection 
          title="Features"
          description="Discover the capabilities of our JSON Formatter"
          features={[
            {
              title: "JSON Validation",
              description: "Instantly validate your JSON to ensure it's free of syntax errors."
            },
            {
              title: "Pretty Printing",
              description: "Format your JSON with proper indentation and line breaks for improved readability."
            },
            {
              title: "Error Highlighting",
              description: "Quickly identify and locate errors in your JSON structure."
            },
            {
              title: "Copy Formatted JSON",
              description: "Easily copy the formatted JSON to your clipboard for use in your projects."
            }
          ]}
        />
        <FAQSection 
          title="Frequently Asked Questions"
          description="Common questions about the JSON Formatter"
          faqs={[
            {
              question: "What is JSON?",
              answer: "JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate."
            },
            {
              question: "Why should I format my JSON?",
              answer: "Formatting JSON improves its readability, making it easier to understand the structure of your data. This is particularly useful when debugging or when sharing JSON data with others."
            },
            {
              question: "Can this tool fix invalid JSON?",
              answer: "Our tool can identify invalid JSON, but it cannot automatically fix structural errors. It will highlight where the error occurs, allowing you to manually correct it."
            },
            {
              question: "Is it safe to use this formatter with sensitive data?",
              answer: "Yes, all processing is done locally in your browser. Your JSON data is not sent to any server or stored anywhere."
            }
          ]}
        />
      </div>
    </>
  )
}

