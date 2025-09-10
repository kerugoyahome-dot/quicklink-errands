import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border py-4 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-primary">QUICKLINK</span> SERVICES
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#marketplace" className="text-foreground hover:text-primary transition-colors">Marketplace</a>
          <a href="#food" className="text-foreground hover:text-primary transition-colors">Food</a>
          <a href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        <Button variant="outline" size="sm">
          Book Service
        </Button>
      </div>
    </header>
  );
};

export default Header;