import type { PageSection } from "../../types";
import logo from "../../assets/Nim Cleaning.jpg";

interface NavigationProps {
  activeSection: PageSection;
  onNavigate: (section: PageSection) => void;
}

export default function Navigation({
  activeSection,
  onNavigate,
}: NavigationProps) {
  const navItems: { label: string; section: PageSection }[] = [
    { label: "Home", section: "home" },
    { label: "About Us", section: "about" },
    { label: "Services", section: "services" },
    { label: "Gallery", section: "gallery" },
    { label: "Get a Quote", section: "quote" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer logo-container gap-3"
            onClick={() => onNavigate("home")}
          >
            <img
              src={logo}
              alt="Nim Cleaning Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 object-cover rounded-lg mix-blend-multiply"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-600 leading-tight">
                Nim Cleaning
              </h1>
              <p className="text-xs text-gray-600">
                Your Trusted Cleaning Partner
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => onNavigate(item.section)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.section
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                const mobileMenu = document.getElementById("mobile-menu");
                if (mobileMenu) {
                  mobileMenu.classList.toggle("hidden");
                }
              }}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => {
                onNavigate(item.section);
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className={`block w-full text-left px-3 py-2 text-base font-medium ${
                activeSection === item.section
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
