import { WhatIsMyIP } from '@/components/what-is-my-ip'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { FAQSection } from '@/components/faq-section'
import { SEO } from '@/components/seo'

export default function WhatIsMyIPPage() {
  return (
    <>
      <SEO 
        title="What Is My IP | Testing Tools"
        description="Quickly find out your current IP address with our free What Is My IP tool. Essential for network troubleshooting and configuration."
        canonical="https://testingtools.com/what-is-my-ip"
      />
      <div className="container py-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">What Is My IP</h1>
        <WhatIsMyIP />
        <AboutSection 
          title="About What Is My IP"
          description="Learn more about our IP address lookup tool"
          content="Our What Is My IP tool provides a quick and easy way to discover your current public IP address. This information can be crucial for network configuration, troubleshooting, and understanding your internet connection."
        />
        <FeaturesSection 
          title="Features"
          description="Discover the capabilities of our What Is My IP tool"
          features={[
            {
              title: "Instant IP Detection",
              description: "Get your current public IP address with a single click."
            },
            {
              title: "IPv4 and IPv6 Support",
              description: "Detects and displays both IPv4 and IPv6 addresses when available."
            },
            {
              title: "Refresh Functionality",
              description: "Easily refresh your IP address information to check for changes."
            },
            {
              title: "Copy to Clipboard",
              description: "Quickly copy your IP address for use in other applications or configurations."
            }
          ]}
        />
        <FAQSection 
          title="Frequently Asked Questions"
          description="Common questions about the What Is My IP tool"
          faqs={[
            {
              question: "What is an IP address?",
              answer: "An IP (Internet Protocol) address is a unique numerical label assigned to each device connected to a computer network. It serves two main functions: host or network interface identification and location addressing."
            },
            {
              question: "Why might I need to know my IP address?",
              answer: "Knowing your IP address can be useful for various reasons, including network troubleshooting, configuring remote access to your devices, setting up certain software or games, or understanding your internet connection details."
            },
            {
              question: "Is the IP address shown my real IP address?",
              answer: "The IP address shown is your public IP address, which is the address visible to external websites and services. If you're using a VPN, it will show the IP address of the VPN server you're connected to."
            },
            {
              question: "How often does my IP address change?",
              answer: "It depends on your Internet Service Provider (ISP) and your network setup. Some ISPs assign dynamic IP addresses that can change periodically, while others provide static IP addresses that remain constant. You can use the refresh function in our tool to check for any changes."
            }
          ]}
        />
      </div>
    </>
  )
}

