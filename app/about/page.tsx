import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">About Testing Tools</h1>
          <p className="text-muted-foreground">
            Learn more about our mission and tools
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Testing Tools is dedicated to providing developers with reliable, easy-to-use tools for generating test data. Our platform helps streamline the development process by offering various data generation utilities that create realistic, valid test data.
            </p>
            <p>
              Whether you're building e-commerce platforms, user management systems, or any other application that requires testing with realistic data, our tools are designed to make your development process smoother and more efficient.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why Choose Us?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Our tools are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free to use</li>
              <li>Generate data locally in your browser</li>
              <li>No registration required</li>
              <li>Regular updates with new features</li>
              <li>Open source and community-driven</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Have questions or suggestions? We'd love to hear from you. Reach out to us through our GitHub repository or contact us directly at support@testingtools.dev
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

