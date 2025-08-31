import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Wifi, Coffee, Car, Bath } from "lucide-react";
import roomImage from "@/assets/room-standard.jpg";

const FeaturedRooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Standard Double Room",
      image: roomImage,
      sleeps: 2,
      price: "R690",
      amenities: ["Free Wi-Fi", "En-suite bathroom", "TV", "Tea/Coffee"],
      features: [
        { icon: Users, label: "2 guests" },
        { icon: Wifi, label: "Free Wi-Fi" },
        { icon: Bath, label: "En-suite" },
        { icon: Coffee, label: "Tea/Coffee" }
      ]
    },
    {
      id: 2,
      name: "Twin Room",
      image: roomImage,
      sleeps: 2,
      price: "R750",
      amenities: ["Free Wi-Fi", "En-suite bathroom", "TV", "Air conditioning"],
      features: [
        { icon: Users, label: "2 guests" },
        { icon: Wifi, label: "Free Wi-Fi" },
        { icon: Bath, label: "En-suite" },
        { icon: Coffee, label: "Tea/Coffee" }
      ]
    },
    {
      id: 3,
      name: "Self-Catering Unit",
      image: roomImage,
      sleeps: 4,
      price: "R950",
      amenities: ["Kitchenette", "Free Wi-Fi", "Private entrance", "Patio"],
      features: [
        { icon: Users, label: "4 guests" },
        { icon: Wifi, label: "Free Wi-Fi" },
        { icon: Coffee, label: "Kitchenette" },
        { icon: Car, label: "Parking" }
      ]
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Featured Rooms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comfortable and well-appointed rooms, each designed to make your stay memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className="card-gradient shadow-soft hover:shadow-hover transition-spring group overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={`${room.name} at Flamboyant Guesthouse`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-spring"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    Sleeps {room.sleeps}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {room.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <feature.icon className="w-4 h-4 mr-2 text-primary" />
                      {feature.label}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-muted-foreground">From</span>
                    <div className="text-2xl font-bold text-primary">
                      {room.price}
                      <span className="text-sm font-normal text-muted-foreground">/night</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 space-y-2">
                <Button variant="outline" className="w-full" size="sm">
                  View Details
                </Button>
                <Button variant="cta" className="w-full" size="sm">
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Rooms & Rates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;