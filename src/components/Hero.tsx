import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background to-secondary py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-up">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-primary">QUICKLINK</span>
              <span className="text-foreground"> SERVICES</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-2">
              Errand Runners
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-accent">
              "Your Time, Our Priority"
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mb-8">
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                <span>Fast & Reliable</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                <span>Affordable</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                <span>Trusted</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success">✓</span>
                <span>Personalized</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Button variant="hero" size="lg" className="w-full">
              Book a Service
            </Button>
            <Button variant="cta" size="lg" className="w-full">
              Shop Products
            </Button>
            <Button variant="hero" size="lg" className="w-full">
              Order Food
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              View Services
            </Button>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-2">Contact Us:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-lg">
              <a href="tel:0111679286" className="text-primary font-semibold hover:text-primary-hover">
                📱 0111679286
              </a>
              <a href="tel:0717562660" className="text-primary font-semibold hover:text-primary-hover">
                📱 0717562660
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;