import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      date: "March 2024",
      rating: 5,
      text: "Absolutely lovely guesthouse! The rooms were spotless, staff incredibly friendly, and the location perfect for exploring Bela-Bela. Will definitely be back!"
    },
    {
      id: 2,
      name: "Mike van der Merwe",
      date: "February 2024",
      rating: 5,
      text: "Great value for money. The self-catering unit was well-equipped and the braai area made for a perfect evening. Highly recommend for families."
    },
    {
      id: 3,
      name: "Linda Mthembu",
      date: "January 2024",
      rating: 4,
      text: "Clean, comfortable accommodation with excellent service. The pool area is lovely and the Wi-Fi worked perfectly throughout our stay."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-1">
              {renderStars(4)}
            </div>
            <span className="ml-2 text-lg font-semibold text-foreground">4.5/5</span>
            <span className="ml-2 text-muted-foreground">Based on 127 reviews</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read what our guests have to say about their experience at Flamboyant Guesthouse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="card-gradient shadow-soft hover:shadow-hover transition-spring"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Also featured on:</span>
            <span className="font-semibold">Booking.com</span>
            <span>•</span>
            <span className="font-semibold">TripAdvisor</span>
            <span>•</span>
            <span className="font-semibold">Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;