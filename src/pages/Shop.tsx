import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import phoneImg from "@/assets/phone.jpg";
import laptopImg from "@/assets/laptop.jpg";
import fridgeImg from "@/assets/fridge.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import burgerImg from "@/assets/burger.jpg";
import drinksImg from "@/assets/drinks.jpg";

const products = [
  { id: 1, name: "iPhone 15 Pro", price: 999, category: "Electronics", image: phoneImg },
  { id: 2, name: "MacBook Pro", price: 1599, category: "Electronics", image: laptopImg },
  { id: 3, name: "Samsung Fridge", price: 899, category: "Appliances", image: fridgeImg },
  { id: 4, name: "Margherita Pizza", price: 12, category: "Food", image: pizzaImg },
  { id: 5, name: "Classic Burger", price: 8, category: "Food", image: burgerImg },
  { id: 6, name: "Cold Drinks", price: 3, category: "Food", image: drinksImg },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handlePayment = (method) => {
    alert(`Payment of $${getTotalPrice()} initiated via ${method}. You will be redirected to payment gateway.`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-primary">QUICKLINK</span> SHOP
          </h1>
          <Button variant="outline" onClick={() => setShowCheckout(!showCheckout)}>
            Cart ({cart.length})
          </Button>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Products Section */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-4">Products & Services</h2>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="appliances">Appliances</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-2">{product.category}</p>
                    <p className="text-2xl font-bold text-primary mb-4">${product.price}</p>
                    <Button 
                      className="w-full"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Checkout Section */}
          {showCheckout && (
            <div className="w-full lg:w-96">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Checkout</h3>
                  
                  {cart.length === 0 ? (
                    <p className="text-muted-foreground">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="space-y-2 mb-4">
                        {cart.map((item, index) => (
                          <div key={index} className="flex justify-between">
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t pt-4 mb-4">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total:</span>
                          <span>${getTotalPrice()}</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Enter your name" />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="Enter your phone" />
                        </div>
                        
                        <div>
                          <Label htmlFor="address">Delivery Address</Label>
                          <Input id="address" placeholder="Enter delivery address" />
                        </div>

                        <div className="space-y-2">
                          <Label>Payment Method</Label>
                          <Button 
                            variant="outline" 
                            className="w-full mb-2"
                            onClick={() => handlePayment("M-Pesa")}
                          >
                            Pay with M-Pesa
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full mb-2"
                            onClick={() => handlePayment("Card")}
                          >
                            Pay with Card
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => handlePayment("Cash on Delivery")}
                          >
                            Cash on Delivery
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;