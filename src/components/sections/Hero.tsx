import ImageCarousel from "../common/ImageCarousel";
import Stat from "../common/Stat";
import { galleryImages } from "../../data/galleryImages";
import type { PageSection } from "../../types";

interface HeroProps {
  onNavigate: (section: PageSection) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const stats = [
    { value: "2+", label: "Jaren Ervaring" },
    { value: "500+", label: "Tevreden Klanten" },
    { value: "100%", label: "Tevredenheid" },
  ];

  return (
    <section
      id="home"
      className="flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 md:min-h-screen"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 flex flex-col items-center gap-8 text-center lg:order-1 lg:items-start lg:text-left">
            <div className="space-y-4 sm:space-y-6 max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Sprankelend Schone Ruimtes,
                <span className="text-blue-600"> Elke Keer</span>
              </h1>
              <p className="text-base sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Professionele schoonmaakdiensten voor uw huis, kantoor en
                commerciële ruimtes. Wij brengen frisheid en netheid in elke
                hoek met oog voor detail en betrouwbare service waarop u kunt
                vertrouwen.
              </p>
            </div>

            {/* Stats */}
            <div className="grid w-full max-w-sm grid-cols-1 gap-6 sm:max-w-none sm:grid-cols-3 sm:gap-8 lg:gap-12">
              {stats.map((stat) => (
                <Stat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative order-1 mb-12 flex flex-col items-center gap-6 lg:order-2 lg:mb-0 lg:items-end">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-none">
              <ImageCarousel
                images={galleryImages}
                className="w-full"
                frameClassName="rounded-2xl shadow-2xl"
                indicatorContainerClassName="mt-3 sm:mt-6"
                showControls={false}
                enableClickNavigation
                autoPlay
                autoPlayInterval={3500}
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              onClick={() => onNavigate("gallery")}
            >
              Bekijk volledige galerij
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
