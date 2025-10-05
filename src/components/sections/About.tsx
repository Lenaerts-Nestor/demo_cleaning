export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Nim Cleaning</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Your trusted partner in creating pristine, healthy environments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          {/* Left Column - Image */}
          <div className="relative px-4 sm:px-8 lg:px-0 mb-12 lg:mb-0">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&h=600&fit=crop"
                alt="Our cleaning team"
                className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-blue-600 text-white p-6 lg:p-8 rounded-xl shadow-xl">
                <p className="text-3xl lg:text-4xl font-bold">10+</p>
                <p className="text-xs lg:text-sm mt-1 whitespace-nowrap">
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Story
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Founded in{" "}
              <span className="font-semibold text-blue-600">2014</span>, Nim
              Cleaning began with a simple mission: to provide exceptional
              cleaning services that exceed expectations. What started as a
              small family business has grown into a trusted name in
              professional cleaning services across the region.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Over the past decade, we've built our reputation on reliability,
              attention to detail, and a commitment to using eco-friendly
              products that are safe for your family, pets, and the environment.
              Our team of trained professionals treats every space as if it were
              their own.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Values
            </h3>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                    Quality First
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    We never compromise on the quality of our work. Every detail
                    matters to us.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                    Reliability
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    We show up on time, every time, and deliver consistent
                    results you can count on.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                    Eco-Friendly
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    We use environmentally safe products that protect your
                    health and our planet.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                    Customer Satisfaction
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Your happiness is our success. We're not satisfied until you
                    are.
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
