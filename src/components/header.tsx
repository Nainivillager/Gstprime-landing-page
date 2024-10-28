import { Phone, Mail } from "lucide-react";

export default function Header() {
  const contactOptions = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Now",
      href: "tel:780079095",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      href: "mailto:amitgupta2131@gmail.com",
    },
  ];

  return (
    <header className="bg-gray-50 shadow-md rounded-b-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-12 w-auto" src="logo.png" alt="Logo" />
          </div>

          {/* Contact Icons */}
          <div className="flex items-center gap-4">
            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.href}
                className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 relative group"
              >
                <span className="text-gray-600 group-hover:text-gray-900">
                  {option.icon}
                </span>

                {/* Tooltip */}
                <span className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                  {option.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
