import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">QUICKLINK</span> SERVICES
            </h3>
            <p className="text-muted mb-4">
              "Let Us Run the Errands, While You Run the World!"
            </p>
            <div className="text-accent font-semibold">
              "Your Time, Our Priority"
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-2">
              <div>
                <a href="tel:0111679286" className="hover:text-accent transition-colors">
                  📱 0111679286
                </a>
              </div>
              <div>
                <a href="tel:0717562660" className="hover:text-accent transition-colors">
                  📱 0717562660
                </a>
              </div>
              <div>
                <a href="mailto:info@quicklinkservices.com" className="hover:text-accent transition-colors">
                  📧 info@quicklinkservices.com
                </a>
              </div>
              <div className="text-muted">
                Serving: [Your Town/Region]
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <div className="space-y-2">
              <div><a href="#services" className="hover:text-accent transition-colors">Services</a></div>
              <div><a href="#marketplace" className="hover:text-accent transition-colors">Marketplace</a></div>
              <div><a href="#food" className="hover:text-accent transition-colors">Food Delivery</a></div>
              <div><a href="#contact" className="hover:text-accent transition-colors">Contact</a></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-muted pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted text-sm">
                © 2024 QUICKLINK SERVICES. All rights reserved.
              </p>
            </div>
            
            {/* Admin Button - Right aligned and sticky */}
            <div className="fixed bottom-4 right-4 md:static md:bottom-auto md:right-auto z-50">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-background text-foreground border-accent hover:bg-accent hover:text-accent-foreground shadow-lg"
              >
                Admin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;