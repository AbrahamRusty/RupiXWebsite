import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Gift, Percent, Calendar, Star } from "lucide-react";

export function MieYaminRegister() {
  const [isLogin, setIsLogin] = useState(false);

  const benefits = [
    { icon: Percent, text: "Weekly discounts up to 20%" },
    { icon: Gift, text: "Special birthday vouchers" },
    { icon: Calendar, text: "Early access to new menu" },
    { icon: Star, text: "Loyalty points for every purchase" },
  ];

  return (
    <section id="register" className="py-24 bg-gradient-to-br from-[#FF8B6A] via-[#FF7A59] to-[#FF6B4A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFD89C] rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full mb-6">
            Loyalty Program
          </div>
          <h2 className="text-white text-4xl lg:text-5xl mb-6">Become a Loyal Customer</h2>
          <p className="text-white/90 text-lg">
            Join our loyalty program to enjoy exclusive benefits and rewards
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-white text-2xl mb-8">Member Benefits:</h3>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-center gap-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-[#FF8B6A]" size={24} />
                  </div>
                  <p className="text-white text-lg">{benefit.text}</p>
                </div>
              );
            })}
          </div>

          {/* Registration Form */}
          <Card className="border-0 shadow-2xl">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl">{isLogin ? "Welcome Back" : "Join Us Today"}</CardTitle>
              <CardDescription className="text-base">
                {isLogin 
                  ? "Login to access your exclusive benefits" 
                  : "Create your account and start earning rewards"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input 
                    id="fullname" 
                    placeholder="Enter your full name"
                    className="h-12 rounded-xl border-gray-200"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="h-12 rounded-xl border-gray-200"
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp Number</Label>
                  <Input 
                    id="whatsapp" 
                    type="tel" 
                    placeholder="0812-3456-7890"
                    className="h-12 rounded-xl border-gray-200"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password"
                  className="h-12 rounded-xl border-gray-200"
                />
              </div>

              <Button className="w-full h-12 bg-[#FF8B6A] hover:bg-[#FF7A59] text-white rounded-xl text-lg mt-2">
                {isLogin ? "Login" : "Register Now"}
              </Button>

              <div className="text-center pt-2">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#FF8B6A] hover:underline"
                >
                  {isLogin 
                    ? "Don't have an account? Register here" 
                    : "Already have an account? Login here"}
                </button>
              </div>

              <p className="text-gray-500 text-sm text-center pt-2">
                By {isLogin ? "logging in" : "registering"}, you agree to our Terms & Conditions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
