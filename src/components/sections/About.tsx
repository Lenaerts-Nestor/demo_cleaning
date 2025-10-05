export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Over <span className="text-blue-600">Nim Cleaning</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Uw vertrouwde partner voor het creëren van een pristine, gezonde
            omgeving
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-12 lg:mb-14">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&h=600&fit=crop"
                alt="Ons schoonmaakteam"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ons Verhaal
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              Opgericht in{" "}
              <span className="font-semibold text-blue-600">2014</span>, begon
              Nim Cleaning met een eenvoudige missie: het leveren van
              uitzonderlijke schoonmaakdiensten die de verwachtingen
              overtreffen. Wat begon als een klein familiebedrijf is uitgegroeid
              tot een vertrouwde naam in professionele schoonmaakdiensten in de
              hele regio.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              In de afgelopen tien jaar hebben we onze reputatie opgebouwd op
              betrouwbaarheid, aandacht voor detail en een toewijding aan het
              gebruik van milieuvriendelijke producten die veilig zijn voor uw
              gezin, huisdieren en het milieu. Ons team van geschoolde
              professionals behandelt elke ruimte alsof het hun eigen ruimte is.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
              Onze Waarden
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
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
                  <h4 className="font-semibold text-gray-900 mb-1 text-lg sm:text-xl">
                    Kwaliteit Voorop
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    We doen nooit concessies aan de kwaliteit van ons werk. Elk
                    detail is belangrijk voor ons.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
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
                  <h4 className="font-semibold text-gray-900 mb-1 text-lg sm:text-xl">
                    Betrouwbaarheid
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    We komen altijd op tijd en leveren consistente resultaten
                    waarop u kunt vertrouwen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
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
                  <h4 className="font-semibold text-gray-900 mb-1 text-lg sm:text-xl">
                    Milieuvriendelijk
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    We gebruiken milieuvriendelijke producten die uw gezondheid
                    en onze planeet beschermen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
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
                  <h4 className="font-semibold text-gray-900 mb-1 text-lg sm:text-xl">
                    Klanttevredenheid
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Uw tevredenheid is ons succes. We zijn pas tevreden als u
                    dat bent.
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
