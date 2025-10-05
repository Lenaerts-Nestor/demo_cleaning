import type { GalleryImage } from "../../types";

export default function Gallery() {
  const images: GalleryImage[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
      alt: "Professional team cleaning modern office space",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop",
      alt: "Sparkling clean kitchen with organized countertops",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
      alt: "Modern bathroom with pristine fixtures",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      alt: "Window cleaning of commercial building",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?w=800&h=600&fit=crop",
      alt: "Vacuuming carpet in living room",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1603712725038-3c9e1dcb2f60?w=800&h=600&fit=crop",
      alt: "Professional cleaner organizing workspace",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1580974928064-f0aeef70895a?w=800&h=600&fit=crop",
      alt: "Clean and organized modern apartment",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
      alt: "Eco-friendly cleaning products and supplies",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&h=600&fit=crop",
      alt: "Mopping hardwood floors",
    },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Work Gallery</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            See the difference professional cleaning makes. Browse our portfolio
            of completed projects
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-white text-xs sm:text-sm font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
              {/* Zoom Icon */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 bg-blue-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-sm sm:text-base text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join hundreds of satisfied customers who trust Nim Cleaning for
            their cleaning needs. Get your free quote today and experience the
            difference!
          </p>
          <button
            onClick={() => {
              const quoteSection = document.getElementById("quote");
              quoteSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            Request Your Free Quote
          </button>
        </div>

        {/* Testimonials */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-8 sm:mb-12 px-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md">
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-3 sm:mb-4 italic text-sm sm:text-base leading-relaxed">
                "Nim Cleaning has been taking care of our office for over 2
                years. They're professional, reliable, and always do an
                excellent job. Highly recommended!"
              </p>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                Sarah Johnson
              </p>
              <p className="text-xs sm:text-sm text-gray-500">Business Owner</p>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md">
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-3 sm:mb-4 italic text-sm sm:text-base leading-relaxed">
                "After our home renovation, the place was a mess. Nim Cleaning
                did an amazing post-construction cleanup. They made our house
                look brand new!"
              </p>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                Michael Chen
              </p>
              <p className="text-xs sm:text-sm text-gray-500">Homeowner</p>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md">
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-3 sm:mb-4 italic text-sm sm:text-base leading-relaxed">
                "I love that they use eco-friendly products. My apartment has
                never been cleaner, and I feel good knowing it's safe for my
                kids and pets."
              </p>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                Emily Rodriguez
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Apartment Resident
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
