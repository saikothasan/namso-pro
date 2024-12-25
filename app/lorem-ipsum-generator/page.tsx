import { LoremIpsumGenerator } from '@/components/lorem-ipsum-generator'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { FAQSection } from '@/components/faq-section'
import { SEO } from '@/components/seo'

export default function LoremIpsumGeneratorPage() {
  return (
    <>
      <SEO 
        title="Lorem Ipsum Generator | Testing Tools"
        description="Generate placeholder text for your designs with our free Lorem Ipsum Generator. Perfect for designers and developers working on layouts and mockups."
        canonical="https://testingtools.com/lorem-ipsum-generator"
      />
      <div className="container py-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-yellow-700 dark:text-yellow-300">Lorem Ipsum Generator</h1>
        <LoremIpsumGenerator />
        <AboutSection 
          title="About Lorem Ipsum Generator"
          description="Learn more about our Lorem Ipsum generation tool"
          content="Our Lorem Ipsum Generator is a handy tool for designers, developers, and content creators who need placeholder text for their projects. It generates random 'Lorem Ipsum' text, which is a scrambled Latin text traditionally used in design and typography to demonstrate the visual effects of different fonts and layouts."
        />
        <FeaturesSection 
          title="Features"
          description="Discover the capabilities of our Lorem Ipsum Generator"
          features={[
            {
              title: "Customizable Length",
              description: "Generate any number of paragraphs to fit your specific needs."
            },
            {
              title: "Instant Generation",
              description: "Get your Lorem Ipsum text immediately with just one click."
            },
            {
              title: "Copy to Clipboard",
              description: "Easily copy the generated text for quick use in your projects."
            },
            {
              title: "Clean, Formatted Output",
              description: "Receive well-formatted text with proper paragraph breaks."
            }
          ]}
        />
        <FAQSection 
          title="Frequently Asked Questions"
          description="Common questions about the Lorem Ipsum Generator"
          faqs={[
            {
              question: "What is Lorem Ipsum?",
              answer: "Lorem Ipsum is dummy text used in laying out print, graphic or web designs. It's a placeholder text commonly used to demonstrate the visual effects of different fonts and layouts without relying on meaningful content."
            },
            {
              question: "Why use Lorem Ipsum?",
              answer: "Lorem Ipsum is used because it has a more-or-less normal distribution of letters, making it look like readable English. This helps designers focus on the visual elements rather than the content itself during the design process."
            },
            {
              question: "Is the generated text the same every time?",
              answer: "Our generator uses a standard set of Lorem Ipsum text, so the content will be the same. However, you can generate different amounts of text each time by adjusting the number of paragraphs."
            },
            {
              question: "Can I use this Lorem Ipsum text in my project?",
              answer: "Yes, Lorem Ipsum is free to use for any project. It's not copyrighted and has been the industry's standard dummy text since the 1500s."
            }
          ]}
        />
      </div>
    </>
  )
}

