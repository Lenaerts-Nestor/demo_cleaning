import ImageCarousel from "../common/ImageCarousel";
import { galleryImages } from "../../data/galleryImages";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-32 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ons <span className="text-blue-600">Werk</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Zie het verschil dat professionele schoonmaak maakt
          </p>
        </div>

        {/* Carousel - Smaller Container */}
        <div className="relative mx-auto !max-w-xl px-2 sm:px-0">
          <ImageCarousel
            images={galleryImages}
            frameClassName="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
