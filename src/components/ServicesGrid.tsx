import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Taxi Rides",
    icon: "🚗",
    description: "Reliable transportation anywhere, anytime"
  },
  {
    title: "Grocery Shopping & Delivery",
    icon: "🛒",
    description: "Fresh groceries delivered to your door"
  },
  {
    title: "Laundry & Dry-Cleaning",
    icon: "👕",
    description: "Professional cleaning and pressing services"
  },
  {
    title: "Gift & Parcel Delivery",
    icon: "📦",
    description: "Safe and timely delivery of your packages"
  },
  {
    title: "Utility & Bill Payments",
    icon: "💳",
    description: "Pay your bills without the hassle"
  },
  {
    title: "Prescription Runs",
    icon: "💊",
    description: "Medication pickup and delivery"
  },
  {
    title: "School & Office Errands",
    icon: "🎒",
    description: "Document delivery and office tasks"
  },
  {
    title: "Airport Pickups & Drop-offs",
    icon: "✈️",
    description: "Punctual airport transportation"
  },
  {
    title: "Senior Support & Pet Care",
    icon: "🐕",
    description: "Caring assistance for seniors and pets"
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From everyday errands to special deliveries, we handle it all with care and professionalism
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Request Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl" className="px-12">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;