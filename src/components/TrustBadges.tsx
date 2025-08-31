import { Shield, MapPin, Wifi, Car } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Clean & Comfortable",
      description: "Spotless rooms with quality amenities"
    },
    {
      icon: MapPin,
      title: "Great Location",
      description: "Heart of Bela-Bela, close to attractions"
    },
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      description: "High-speed internet throughout"
    },
    {
      icon: Car,
      title: "Secure Parking",
      description: "Safe, covered parking available"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-spring"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-smooth">
                <badge.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {badge.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;