import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const marketplaceItems = [
  {
    title: "Phones",
    icon: "📱",
    description: "Latest smartphones and accessories"
  },
  {
    title: "Computers",
    icon: "💻",
    description: "Laptops, desktops, and computer parts"
  },
  {
    title: "Fridges",
    icon: "🧊",
    description: "Refrigerators and cooling systems"
  },
  {
    title: "Electronics",
    icon: "📺",
    description: "TVs, audio systems, and gadgets"
  },
  {
    title: "Accessories",
    icon: "🔌",
    description: "Cables, chargers, and tech accessories"
  },
  {
    title: "Household Appliances",
    icon: "🏠",
    description: "Washers, microwaves, and home essentials"
  }
];

const MarketplaceSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Marketplace</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality products delivered right to your doorstep. Shop with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {marketplaceItems.map((item, index) => (
            <Card 
              key={item.title} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-accent bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <Button variant="cta" size="sm" className="w-full">
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="xl" className="px-12">
            Browse All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;