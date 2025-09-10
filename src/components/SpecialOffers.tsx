import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const offers = [
  {
    title: "Corporate Packages",
    icon: "🏢",
    description: "Bulk services for businesses",
    highlight: "Up to 30% OFF"
  },
  {
    title: "Household Plans",
    icon: "🏠",
    description: "Monthly recurring services",
    highlight: "Save 25%"
  },
  {
    title: "Product Discounts",
    icon: "💎",
    description: "Special deals on electronics",
    highlight: "Limited Time"
  },
  {
    title: "Food Combos",
    icon: "🍽️",
    description: "Meal deals and bundles",
    highlight: "Best Value"
  }
];

const SpecialOffers = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Special</span> <span className="text-accent">Offers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our exclusive deals and packages designed to save you money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {offers.map((offer, index) => (
            <Card 
              key={offer.title} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-card border-2 hover:border-accent relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold">
                {offer.highlight}
              </div>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {offer.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {offer.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="xl" className="px-12">
            View All Offers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;