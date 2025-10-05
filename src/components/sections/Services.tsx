const services = [
  {
    id: 1,
    icon: "🪟",
    title: "Ramen Reinigen",
    description:
      "Kristalheldere ramen van binnen en buiten. Wij reinigen woningen en commerciële ramen van alle formaten, inclusief moeilijk bereikbare plekken.",
  },
  {
    id: 2,
    icon: "🏢",
    title: "Gebouw Reiniging",
    description:
      "Compleet gebouwonderhoud inclusief lobbies, gangen, liften en gemeenschappelijke ruimtes. Perfect voor vastgoedbeheerders en gebouweigenaren.",
  },
  {
    id: 3,
    icon: "🏠",
    title: "Appartement Reiniging",
    description:
      "Grondige reiniging van appartementen en appartementsgebouwen. Ideaal voor verhuis/oplevering situaties of regelmatig onderhoud.",
  },
  {
    id: 4,
    icon: "💼",
    title: "Kantoor Reiniging",
    description:
      "Professionele kantoorschoonmaak inclusief bureaus, vergaderzalen, pauzeruimtes en toiletten. Dagelijks, wekelijks of maandelijks mogelijk.",
  },
  {
    id: 5,
    icon: "✨",
    title: "Grote Schoonmaak",
    description:
      "Intensieve schoonmaakservice die elk hoekje en gaatje behandelt. Perfect voor voorjaarsschoonmaak of voorbereiding op speciale gelegenheden.",
  },
  {
    id: 6,
    icon: "🛋️",
    title: "Tapijt & Stoffering",
    description:
      "Professionele tapijt- en stoffeerreiniging met milieuvriendelijke producten. Verwijdert effectief vlekken, geuren en allergenen.",
  },
  {
    id: 7,
    icon: "🔨",
    title: "Na Verbouwing",
    description:
      "Gespecialiseerde reiniging voor na verbouwing of renovatieprojecten. Wij verwijderen stof, puin en alle afwerking.",
  },
  {
    id: 8,
    icon: "🏪",
    title: "Commerciële Ruimtes",
    description:
      "Op maat gemaakte schoonmaakoplossingen voor winkels, restaurants, sportscholen en andere commerciële vestigingen.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Onze <span className="text-blue-600">Diensten</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uitgebreide schoonmaakoplossingen op maat voor uw specifieke
            behoeften
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-10 sm:p-12 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
