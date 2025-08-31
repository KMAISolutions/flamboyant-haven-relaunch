import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Car, Camera } from "lucide-react";

const Location = () => {
  const attractions = [
    {
      name: "Warmbaths Forever Resort",
      distance: "2.5 km",
      time: "5 min drive",
      description: "Hot springs and water activities"
    },
    {
      name: "Mabalingwe Nature Reserve",
      distance: "8 km",
      time: "12 min drive", 
      description: "Game viewing and hiking trails"
    },
    {
      name: "Aventura Warmbaths",
      distance: "3 km",
      time: "6 min drive",
      description: "Family resort with hot springs"
    },
    {
      name: "Bela-Bela Golf Club",
      distance: "4 km",
      time: "8 min drive",
      description: "18-hole championship golf course"
    }
  ];

  return (
    <section id="location" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Perfect Location in Bela-Bela
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Centrally located with easy access to Bela-Bela's top attractions, hot springs, and outdoor activities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg h-64 flex items-center justify-center mb-4">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-primary" />
                    <p className="text-sm">Interactive Map</p>
                    <p className="text-xs">Google Maps integration</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-foreground">Flamboyant Guesthouse</p>
                  <p className="text-muted-foreground">5 Flamboyant Street</p>
                  <p className="text-muted-foreground">Bela-Bela, Limpopo, South Africa</p>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Car className="w-4 h-4 mr-2" />
                    Directions
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Camera className="w-4 h-4 mr-2" />
                    Street View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Attractions */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Things to Do Nearby
            </h3>
            <div className="space-y-4">
              {attractions.map((attraction, index) => (
                <Card key={index} className="shadow-soft hover:shadow-hover transition-spring">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {attraction.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {attraction.description}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {attraction.distance}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {attraction.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-background/80 backdrop-blur-sm rounded-lg shadow-soft">
              <h4 className="font-semibold text-foreground mb-3">Getting Here</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>From Johannesburg:</strong> 1 hour 20 minutes via N1 North</p>
                <p><strong>From Pretoria:</strong> 1 hour via N1 North</p>
                <p><strong>From OR Tambo Airport:</strong> 1 hour 40 minutes</p>
              </div>
              <Button variant="outline" size="sm" className="mt-4">
                Download Local Guide PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;