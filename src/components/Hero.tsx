import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              New: AI-Powered Solutions
            </div>
            <h1 className="text-gray-900">
              Transform Your Business with Innovation
            </h1>
            <p className="text-gray-600 max-w-lg">
              Empower your team with cutting-edge tools designed to streamline workflows, 
              boost productivity, and drive measurable results. Join thousands of companies 
              already transforming their business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-gray-900">10,000+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-gray-900">4.9/5</div>
                <div className="text-gray-600">Customer Rating</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-gray-900">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl transform rotate-3" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759668358660-0d06064f0f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzYxNTg3NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern workspace"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
