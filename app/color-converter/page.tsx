import { ColorConverter } from '@/components/color-converter'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { FAQSection } from '@/components/faq-section'
import { SEO } from '@/components/seo'

export default function ColorConverterPage() {
  return (
    <>
      <SEO 
        title="Color Converter | Testing Tools"
        description="Convert between HEX and RGB color formats with our free Color Converter tool. Essential for web developers and designers working with color codes."
        canonical="https://testingtools.com/color-converter"
      />
      <div className="container py-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-700 dark:text-pink-300">Color Converter</h1>
        <ColorConverter />
        <AboutSection 
          title="About Color Converter"
          description="Learn more about our color conversion tool"
          content="Our Color Converter is a versatile tool designed to help web developers, designers, and digital artists work seamlessly with different color formats. It provides quick and accurate conversions between HEX and RGB color codes, essential for web development and digital design tasks."
        />
        <FeaturesSection 
          title="Features"
          description="Discover the capabilities of our Color Converter"
          features={[
            {
              title: "Bi-Directional Conversion",
              description: "Convert colors from HEX to RGB and vice versa with ease."
            },
            {
              title: "Real-Time Preview",
              description: "See a live preview of the color as you input or adjust values."
            },
            {
              title: "Random Color Generation",
              description: "Generate random colors for inspiration or testing purposes."
            },
            {
              title: "Input Validation",
              description: "Automatically validate and correct input to ensure accurate color representation."
            }
          ]}
        />
        <FAQSection 
          title="Frequently Asked Questions"
          description="Common questions about the Color Converter"
          faqs={[
            {
              question: "What's the difference between HEX and RGB color formats?",
              answer: "HEX is a hexadecimal notation for RGB color values, typically used in web design. It starts with a # followed by six characters. RGB (Red, Green, Blue) uses three numbers from 0-255 to represent color intensities. Both describe the same colors but in different formats."
            },
            {
              question: "Why would I need to convert between color formats?",
              answer: "Different tools and platforms may require colors in specific formats. Web developers often use HEX in CSS, while image editing software might use RGB. Converting between formats ensures compatibility across different applications and workflows."
            },
            {
              question: "Are the conversions 100% accurate?",
              answer: "Yes, the conversions between HEX and RGB are mathematically precise. However, due to rounding in RGB values (which are integers), there might be slight variations when converting back and forth, especially for colors at the edges of the color space."
            },
            {
              question: "Can this tool handle alpha transparency?",
              answer: "Our current version focuses on solid colors and doesn't include alpha channel support. For colors with transparency, you would need to use formats like RGBA or 8-digit HEX codes, which are not covered by this tool."
            }
          ]}
        />
      </div>
    </>
  )
}

