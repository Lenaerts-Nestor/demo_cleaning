import type { PageSection } from "../../types";
import Button from "../common/Button";

interface HeroProps {
  onNavigate: (section: PageSection) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="pt-24 pb-12 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Sparkling Clean Spaces,
              <span className="text-blue-600"> Every Time</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Professional cleaning services for your home, office, and
              commercial spaces. We bring freshness and cleanliness to every
              corner with attention to detail and reliable service you can
              trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <Button onClick={() => onNavigate("quote")} variant="primary">
                Get Free Quote
              </Button>
              <Button onClick={() => onNavigate("services")} variant="outline">
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">
                  10+
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Years Experience
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">
                  500+
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Happy Clients
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">
                  100%
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
                alt="Professional cleaning services"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute bottom-2 left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                <div className="bg-blue-100 p-2 lg:p-3 rounded-full flex-shrink-0">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base">
                    Eco-Friendly
                  </p>
                  <p className="text-xs sm:text-xs lg:text-sm text-gray-600">
                    Green Products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
