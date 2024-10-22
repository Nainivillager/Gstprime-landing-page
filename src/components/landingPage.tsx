import {
  BookOpen,
  ClipboardList,
  FileText,
  ShoppingBag,
  Truck,
  Users,
} from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-blue-600" />,
      title: "Product Management",
      description:
        "Add and manage your product catalog with ease. Set up products once with details like HSN codes, tax rates, and pricing for seamless invoice generation.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Customer & Vendor Management",
      description:
        "Maintain comprehensive databases of your customers and vendors. Includes pre-configured options for cash sales and purchases.",
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Shipping Management",
      description:
        "Handle multiple shipping addresses and details for flexible delivery options. Perfect for businesses with diverse logistics needs.",
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Invoice Generation",
      description:
        "Create professional invoices with automatic calculations for taxes, freight charges, and discounts. Supports multiple invoice types and e-commerce transactions.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Purchase Management",
      description:
        "Book and track all your purchases and expenses. Manage input credits and maintain compliance with GST requirements.",
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-blue-600" />,
      title: "Document Management",
      description:
        "Generate and maintain multiple copies of invoices, credit notes, and debit notes. Cancel or modify documents as needed.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="py-4 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Streamline Your Business Operations
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          GST Prime a comprehensive billing and inventory management solution
          designed for modern businesses. Handle everything from product
          management to invoicing with ease.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Everything You Need to Run Your Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
