import { UserGenerator } from '@/components/user-generator'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { FAQSection } from '@/components/faq-section'
import { SEO } from '@/components/seo'

export default function UserGeneratorPage() {
  return (
    <>
      <SEO 
        title="User Data Generator"
        description="Create realistic user profiles with our free User Data Generator. Perfect for testing and development of user management systems and databases."
        canonical="https://testingtools.com/user-generator"
      />
      <div className="container py-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">User Data Generator</h1>
        <UserGenerator />
        <AboutSection 
          title="About User Data Generator"
          description="Learn more about our user data generator tool"
          content="Our User Data Generator is a versatile tool designed to create realistic user profiles for testing and development purposes. It generates a wide range of user information, from basic details like names and emails to more complex data like addresses and phone numbers, all while maintaining data consistency and realism."
        />
        <FeaturesSection 
          title="Features"
          description="Discover the capabilities of our User Data Generator"
          features={[
            {
              title: "Comprehensive User Profiles",
              description: "Generate complete user profiles including names, emails, addresses, and more."
            },
            {
              title: "Customizable Data Fields",
              description: "Select which data fields to include in your generated profiles."
            },
            {
              title: "Gender and Country Specification",
              description: "Choose specific genders or countries for your generated users."
            },
            {
              title: "Bulk Generation",
              description: "Create up to 1000 user profiles at once for efficient testing."
            },
            {
              title: "Multiple Export Formats",
              description: "Download generated data in JSON or CSV formats."
            }
          ]}
        />
        <FAQSection 
          title="Frequently Asked Questions"
          description="Common questions about the User Data Generator"
          faqs={[
            {
              question: "Is the generated user data real?",
              answer: "No, all generated data is fictional and created for testing purposes only. It should not be used as real user information."
            },
            {
              question: "Can I customize the types of data generated?",
              answer: "Yes, our tool allows you to select which data fields you want to include in your generated user profiles, as well as specify gender and country."
            },
            {
              question: "How many user profiles can I generate at once?",
              answer: "You can generate up to 1000 user profiles in a single operation."
            },
            {
              question: "In what formats can I export the generated data?",
              answer: "The generated data can be exported in JSON and CSV formats, making it easy to integrate with various systems and databases."
            }
          ]}
        />
      </div>
    </>
  )
}

