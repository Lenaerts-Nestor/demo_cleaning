import type { Service } from "../../types";

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: "Window Cleaning",
      description:
        "Crystal-clear windows inside and out. We clean residential and commercial windows of all sizes, including hard-to-reach areas.",
      icon: "🪟",
    },
    {
      id: 2,
      title: "Building Cleaning",
      description:
        "Complete building maintenance including lobbies, corridors, elevators, and common areas. Perfect for property managers and building owners.",
      icon: "🏢",
    },
    {
      id: 3,
      title: "Apartment Cleaning",
      description:
        "Thorough cleaning of apartments and condos. Ideal for move-in/move-out situations or regular maintenance cleaning.",
      icon: "🏠",
    },
    {
      id: 4,
      title: "Office Cleaning",
      description:
        "Professional office cleaning services including desks, conference rooms, break rooms, and restrooms. Daily, weekly, or monthly options.",
      icon: "💼",
    },
    {
      id: 5,
      title: "Deep Cleaning",
      description:
        "Intensive cleaning service that covers every nook and cranny. Perfect for spring cleaning or preparing for special occasions.",
      icon: "✨",
    },
    {
      id: 6,
      title: "Carpet & Upholstery",
      description:
        "Professional carpet and upholstery cleaning using eco-friendly products. Remove stains, odors, and allergens effectively.",
      icon: "🛋️",
    },
    {
      id: 7,
      title: "Post-Construction",
      description:
        "Specialized cleaning for post-construction or renovation projects. We handle dust, debris, and all finishing touches.",
      icon: "🔨",
    },
    {
      id: 8,
      title: "Commercial Spaces",
      description:
        "Customized cleaning solutions for retail stores, restaurants, gyms, and other commercial establishments.",
      icon: "🏪",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Comprehensive cleaning solutions tailored to meet your specific
            needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-blue-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="text-center text-white mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Why Choose Nim Cleaning?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto px-4">
              We go beyond basic cleaning to deliver exceptional results every
              time
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                Insured & Bonded
              </h4>
              <p className="text-blue-100 text-xs sm:text-sm px-2">
                Fully insured for your peace of mind
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white"
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
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                Flexible Scheduling
              </h4>
              <p className="text-blue-100 text-xs sm:text-sm px-2">
                We work around your schedule
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                Trained Professionals
              </h4>
              <p className="text-blue-100 text-xs sm:text-sm px-2">
                Experienced and vetted team members
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">
                Satisfaction Guaranteed
              </h4>
              <p className="text-blue-100 text-xs sm:text-sm px-2">
                Not happy? We'll make it right
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
