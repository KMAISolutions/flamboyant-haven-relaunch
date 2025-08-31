import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after 3 seconds
      setTimeout(() => setShowTooltip(true), 3000);
      // Hide tooltip after 8 seconds
      setTimeout(() => setShowTooltip(false), 8000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+27XXXXXXXXX"; // Replace with actual number
    const message = "Hi! I'm interested in booking a room at Flamboyant Guesthouse. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-background shadow-hover rounded-lg p-3 max-w-xs animate-fade-in">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">
                Need help booking?
              </p>
              <p className="text-xs text-muted-foreground">
                Chat with us on WhatsApp for instant assistance!
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 -mt-1 -mr-1"
              onClick={() => setShowTooltip(false)}
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
          <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-background transform rotate-45 border-r border-b border-border"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white shadow-hover hover:shadow-glow transition-spring rounded-full w-14 h-14 p-0 animate-scale-in"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Pulse Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
    </div>
  );
};

export default WhatsAppFloat;