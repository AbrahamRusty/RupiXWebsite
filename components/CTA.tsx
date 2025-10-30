import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-white">
            Ready to transform your business?
          </h2>
          <p className="text-blue-100 text-xl">
            Join thousands of companies already using our platform to streamline 
            their operations and drive growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
          <p className="text-blue-100">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
