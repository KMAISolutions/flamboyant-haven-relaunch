import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-guesthouse.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Flamboyant Guesthouse - Beautiful rustic accommodation in Bela-Bela"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow">
            Comfortable, Affordable Stays in the Heart of Bela-Bela
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            A homely guesthouse with rustic finishes, friendly service, and easy access to Bela-Bela's best attractions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Check Availability
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              View Rooms
            </Button>
          </div>

          {/* Quick Info */}
          <div className="mt-12 text-white/80 text-sm">
            <p>📍 5 Flamboyant Street, Bela-Bela, Limpopo • 📞 +27 (0)XX XXX XXXX</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;