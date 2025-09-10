import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import phoneImg from "@/assets/phone.jpg";
import laptopImg from "@/assets/laptop.jpg";
import fridgeImg from "@/assets/fridge.jpg";

const marketplaceItems = [
  {
    title: "Phones",
    icon: "📱",
    description: "Latest smartphones and accessories",
    price: "$999",
    image: phoneImg
  },
  {
    title: "Computers",
    icon: "💻", 
    description: "Laptops, desktops, and computer parts",
    price: "$1,599",
    image: laptopImg
  },
  {
    title: "Fridges",
    icon: "🧊",
    description: "Refrigerators and cooling systems",
    price: "$899",
    image: fridgeImg
  },
  {
    title: "Electronics",
    icon: "📺",
    description: "TVs, audio systems, and gadgets",
    price: "$599",
    image: phoneImg
  },
  {
    title: "Accessories",
    icon: "🔌",
    description: "Cables, chargers, and tech accessories",
    price: "$29",
    image: phoneImg
  },
  {
    title: "Household Appliances",
    icon: "🏠",
    description: "Washers, microwaves, and home essentials",
    price: "$499",
    image: fridgeImg
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
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {item.description}
                </p>
                <p className="text-2xl font-bold text-primary mb-4">{item.price}</p>
                <Button variant="cta" size="sm" className="w-full">
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="xl" className="px-12">
            <a href="/shop">Browse All Products</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;