import { Zap, Shield, Users, BarChart, Clock, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing fast performance with optimized infrastructure designed for speed.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security with end-to-end encryption and compliance certifications.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team with real-time collaboration and communication tools.",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Gain insights with powerful analytics and reporting to make data-driven decisions.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Get help whenever you need it with our dedicated support team available round the clock.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Leverage artificial intelligence to automate tasks and enhance productivity.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            Features
          </div>
          <h2 className="text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-gray-600">
            Powerful features designed to help your business grow and scale efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
