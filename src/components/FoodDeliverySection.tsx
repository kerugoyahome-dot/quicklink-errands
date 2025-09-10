import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import pizzaImg from "@/assets/pizza.jpg";
import burgerImg from "@/assets/burger.jpg";
import drinksImg from "@/assets/drinks.jpg";

const foodItems = [
  {
    title: "Fast Food",
    icon: "🍔",
    description: "Burgers, fries, and quick meals",
    price: "$8.99",
    image: burgerImg
  },
  {
    title: "Drinks & Snacks",
    icon: "🥤",
    description: "Beverages, chips, and light bites",
    price: "$3.49",
    image: drinksImg
  },
  {
    title: "Pizza",
    icon: "🍕",
    description: "Hot, fresh pizza delivered fast",
    price: "$12.99",
    image: pizzaImg
  },
  {
    title: "Local Cuisine",
    icon: "🍽️",
    description: "Traditional dishes from local restaurants",
    price: "$15.99",
    image: burgerImg
  },
  {
    title: "Desserts",
    icon: "🍰",
    description: "Cakes, ice cream, and sweet treats",
    price: "$5.99",
    image: pizzaImg
  },
  {
    title: "Healthy Options",
    icon: "🥗",
    description: "Salads, smoothies, and nutritious meals",
    price: "$9.99",
    image: drinksImg
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {foodItems.map((item, index) => (
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