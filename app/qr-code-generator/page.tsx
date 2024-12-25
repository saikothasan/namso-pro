import { QRCodeGenerator } from '@/components/qr-code-generator'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { FAQSection } from '@/components/faq-section'
import { SEO } from '@/components/seo'

export default function QRCodeGeneratorPage() {
  return (
    <>
      <SEO 
        title="QR Code Generator | Testing Tools"
        description="Create QR codes for text or URLs with our free QR Code Generator. Essential for businesses and marketers looking to bridge offline and online experiences."
        canonical="https://testingtools.com/qr-code-generator"
      />
      <div className="container py-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-emerald-700 dark:text-emerald-300">QR Code Generator</h1>
        <QRCodeGenerator />
        <AboutSection 
          title="About QR Code Generator"
          description="Learn more about our QR code generation tool"
          content="Our QR Code Generator is a powerful tool that allows you to create QR codes quickly and easily. Whether you need to encode a URL, plain text, or contact information, our generator provides a simple way to create scannable QR codes for various purposes."
        />
        <FeaturesSection 
          title="Features"
          description="Discover the capabilities of our QR Code Generator"
          features={[
            {
              title: "Versatile Input",
              description: "Generate QR codes for URLs, text, contact information, and more."
            },
            {
              title: "Instant Generation",
              description: "Create your QR code immediately with just one click."
            },
            {
              title: "High-Quality Output",
              description: "Get clear, scannable QR codes suitable for both digital and print use."
            },
            {
              title: "Easy Download",
              description: "Download your generated QR code as a PNG image for easy sharing and printing."
            }
          ]}
        />
        <FAQSection 
          title="Frequently Asked Questions"
          description="Common questions about the QR Code Generator"
          faqs={[
            {
              question: "What is a QR Code?",
              answer: "A QR (Quick Response) code is a type of matrix barcode that contains information about the item to which it is attached. QR codes are read using smartphone cameras or dedicated QR code readers."
            },
            {
              question: "What can I use QR codes for?",
              answer: "QR codes have many uses, including linking to websites, sharing contact information, displaying text, connecting to Wi-Fi networks, and much more. They're commonly used in marketing, inventory tracking, and for providing quick access to information."
            },
            {
              question: "Are the generated QR codes permanent?",
              answer: "The QR codes generated by our tool are static and permanent. Once created, the information encoded in the QR code doesn't change. If you need to update the information, you'll need to generate a new QR code."
            },
            {
              question: "Can I customize the appearance of the QR code?",
              answer: "Our current tool generates standard black and white QR codes. For more advanced customization options, you might need to use specialized QR code software."
            }
          ]}
        />
      </div>
    </>
  )
}
