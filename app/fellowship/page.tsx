import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Briefcase, MessageCircle, Zap, Award } from "lucide-react"
import Image from "next/image"

export default function FellowshipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-700">New Gaia Tech Fellowship</h1>
          <Button variant="default" className="bg-purple-600 text-white hover:bg-purple-700">Apply Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Tech collaboration"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-4 text-white">Empower Your Tech Career with Web3 & AI</h2>
          <p className="text-xl mb-8 text-gray-200">
            Join our tech fellowship and build the skills you need for the future of technology
          </p>
          <Button size="lg" variant="secondary" className="bg-purple-500 text-white hover:bg-purple-600">
            Start Your Journey <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Our Fellowship?</h3>
          <div className="space-y-8">
            <FeatureCard
              icon={<BookOpen className="w-12 h-12 text-purple-600" />}
              title="Project-Based Learning"
              description="Gain hands-on experience through real-world projects in Web3 and AI. Our curated projects are designed to challenge you and build your portfolio."
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-purple-600" />}
              title="Study Groups & Mentorship"
              description="Engage in weekly Q&A sessions with industry mentors and collaborate in study groups. Learn from experts and peers in a supportive environment."
            />
            <FeatureCard
              icon={<Briefcase className="w-12 h-12 text-purple-600" />}
              title="Career-Ready Portfolio"
              description="Build an impressive portfolio of projects and skills to land your dream job. Our program is tailored to meet industry demands and showcase your abilities."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Our Fellowship Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProcessCard
              icon={<MessageCircle className="w-8 h-8 text-purple-600" />}
              title="Community Engagement"
              description="Join Discord groups, participate in hackathons, and work on curated projects to build your network and skills."
            />
            <ProcessCard
              icon={<Zap className="w-8 h-8 text-purple-600" />}
              title="Flexible Learning"
              description="Choose between a monthly subscription or a one-time payment for a 3-month fellowship. Learn at your own pace."
            />
            <ProcessCard
              icon={<Briefcase className="w-8 h-8 text-purple-600" />}
              title="Career Opportunities"
              description="Get hired by partner companies or receive referrals and recommendations from our extensive industry network."
            />
            <ProcessCard
              icon={<BookOpen className="w-8 h-8 text-purple-600" />}
              title="Curated Resources"
              description="Access carefully selected study materials and practical exercises designed to accelerate your learning and growth."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Tech workspace"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-purple-100 bg-opacity-90"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl font-bold mb-4 text-purple-800">Ready to Transform Your Tech Career?</h3>
          <p className="text-xl mb-8 text-gray-700">
            Join the New Gaia Tech fellowship and unlock your potential in Web3 and AI.
          </p>
          <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-100">
            Apply for the Fellowship <Award className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
      <div className="flex-shrink-0 mr-6">{icon}</div>
      <div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function ProcessCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h4 className="text-lg font-semibold ml-2">{title}</h4>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
