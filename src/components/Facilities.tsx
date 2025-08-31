import { Waves, Flame, Wifi, Car, TreePine, Globe } from "lucide-react";
import poolImage from "@/assets/pool-braai.jpg";

const Facilities = () => {
  const facilities = [
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Refreshing pool area for relaxation"
    },
    {
      icon: Flame,
      title: "Braai Area",
      description: "Traditional South African BBQ facilities"
    },
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      description: "High-speed internet throughout the property"
    },
    {
      icon: Car,
      title: "Secure Parking",
      description: "Safe parking for all guests"
    },
    {
      icon: TreePine,
      title: "Garden & Courtyard",
      description: "Beautiful landscaped outdoor spaces"
    },
    {
      icon: Globe,
      title: "Multilingual Staff",
      description: "English, Afrikaans, and local languages"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Facilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enjoy our range of amenities designed to make your stay comfortable and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-soft hover:shadow-hover transition-spring group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <facility.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {facility.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Facilities Image */}
          <div className="relative">
            <img
              src={poolImage}
              alt="Pool and braai facilities at Flamboyant Guesthouse"
              className="w-full h-96 object-cover rounded-lg shadow-soft"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;