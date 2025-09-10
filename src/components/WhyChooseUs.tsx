import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Quick response times and efficient service delivery"
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    description: "Competitive rates with transparent pricing"
  },
  {
    icon: "🛡️",
    title: "Trusted & Secure",
    description: "Verified professionals and secure payment options"
  },
  {
    icon: "📞",
    title: "24/7 Support",
    description: "Round-the-clock customer service and assistance"
  },
  {
    icon: "🎯",
    title: "Personalized Service",
    description: "Tailored solutions to meet your specific needs"
  },
  {
    icon: "📊",
    title: "Track Progress",
    description: "Real-time updates on your requests and orders"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">QUICKLINK</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another service provider. We're your reliable partner for all your errands and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title} 
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-l-4 border-l-primary"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;