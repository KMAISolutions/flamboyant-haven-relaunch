import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ImageCarousel from "@/components/ImageCarousel";

const Gallery = () => {
  const roomsData = [
    {
      title: "Room 1",
      subtitle: "Standard Double Room",
      images: [
        "/src/assets/room-standard.jpg",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "Room 2",
      subtitle: "Budget Twin Room",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "Room 3",
      subtitle: "Standard Quadruple Room",
      images: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "Room 4",
      subtitle: "Standard Double Room",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "Room 5",
      subtitle: "Standard Double Room",
      images: [
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "Room 6",
      subtitle: "Standard Double Room",
      images: [
        "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
      ]
    }
  ];

  const outsideAreas = [
    {
      title: "Night View",
      images: [
        "/src/assets/hero-guesthouse.jpg",
        "https://images.unsplash.com/photo-1520637836862-4d197d17c13a?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "Front View",
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "Pool & Braai Area",
      images: [
        "/src/assets/pool-braai.jpg",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "Garden & Outdoor Seating",
      images: [
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "Off-Street Parking",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "The Deck",
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
      ]
    }
  ];

  const extensionData = [
    {
      title: "X1 Self-Catering Unit",
      subtitle: "Sleeps up to 8 guests in 4 bedrooms",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "X2 Self-Catering Unit",
      subtitle: "Private unit with queen bed, en-suite & kitchenette",
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "X3 Self-Catering Unit",
      subtitle: "Private unit with queen bed, en-suite & kitchenette",
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comfortable rooms, beautiful outdoor spaces, and self-catering units at Flamboyant Guesthouse
            </p>
          </div>
        </section>

        {/* Rooms Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Guest Rooms</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {roomsData.map((room, index) => (
                <ImageCarousel
                  key={index}
                  title={room.title}
                  subtitle={room.subtitle}
                  images={room.images}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Outside Areas Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Outdoor Spaces</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {outsideAreas.map((area, index) => (
                <ImageCarousel
                  key={index}
                  title={area.title}
                  images={area.images}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Extension Units Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Self-Catering Units</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {extensionData.map((unit, index) => (
                <ImageCarousel
                  key={index}
                  title={unit.title}
                  subtitle={unit.subtitle}
                  images={unit.images}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Gallery;