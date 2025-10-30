import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Increase productivity by up to 40%",
  "Reduce operational costs significantly",
  "Streamline complex workflows",
  "Scale effortlessly as you grow",
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1716703742287-2b06c3c6d81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjE1NjEwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-600">250%</div>
              <div className="text-gray-600">ROI Average</div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              About Us
            </div>
            <h2 className="text-gray-900">
              Built for teams that want to move faster
            </h2>
            <p className="text-gray-600">
              We understand the challenges modern businesses face. That's why we've 
              created a platform that combines powerful features with an intuitive 
              interface, helping teams achieve more in less time.
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0" size={20} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
