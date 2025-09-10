import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const foodItems = [
  {
    title: "Fast Food",
    icon: "🍔",
    description: "Burgers, pizza, and quick meals"
  },
  {
    title: "Drinks & Snacks",
    icon: "🥤",
    description: "Beverages, chips, and light bites"
  },
  {
    title: "Instant Delivery",
    icon: "⚡",
    description: "Ready-to-eat meals in minutes"
  }
];

const FoodDeliverySection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Food <span className="text-accent">Delivery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Craving something delicious? We'll bring it to you fast and fresh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {foodItems.map((item, index) => (
            <Card 
              key={item.title} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-accent bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {item.description}
                </p>
                <Button variant="hero" size="lg" className="w-full">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="xl" className="px-12">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoodDeliverySection;