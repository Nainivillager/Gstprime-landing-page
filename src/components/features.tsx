import {
  Receipt,
  Boxes,
  LayoutDashboard,
  TrendingUp,
  PieChart,
  CreditCard,
} from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: (
        <Receipt className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:text-blue-700" />
      ),
      title: "GST Invoices for Both Product and Services",
      description:
        "Generate and manage invoices effortlessly for both products and services, ensuring seamless transactions and accurate record-keeping.",
    },
    {
      icon: (
        <Boxes className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:text-blue-700" />
      ),
      title: "Inventory Management",
      description:
        "Keep track of inventory levels with our robust stock management system, helping you maintain optimal stock levels and avoid shortages or overstock.",
    },
    {
      icon: (
        <LayoutDashboard className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:text-blue-700" />
      ),
      title: "Simple One Shot Business Dashboard",
      description:
        "Access all your critical business data in one concise dashboard, providing a clear overview of your financial health and operations at a glance.",
    },
    {
      icon: (
        <CreditCard className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:text-blue-700" />
      ),
      title: "Credit and Debit Vouchers",
      description:
        "Easily create and manage credit and debit vouchers, streamlining your financial transactions and maintaining accurate records.",
    },
    {
      icon: (
        <TrendingUp className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:text-blue-700" />
      ),
      title: "B2B Sale and Purchase Reports",
      description:
        "Generate comprehensive B2B sale and purchase reports, providing detailed insights into your business transactions and helping with strategic decision-making",
    },
    {
      icon: (
        <PieChart className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:text-blue-700" />
      ),
      title: "Simple Accounting Reports",
      description:
        "Access straightforward accounting reports that simplify financial analysis, making it easier to understand your business's financial position.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="py-4 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Streamline Your Business Operations with{" "}
          <span className="text-yellow-300">GST </span>
          <span className="text-red-600">Prime</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
          At GST Prime we assist businesses to become GST compliant and file
          periodic returns with the help of our Tax Champions. We provide
          solution for GST invoicing, return filing, consultancy, importing
          invoice data to GST software and other accounting and IT needs for
          your business.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <a href="https://www.gstprime.co.in/">Get Started</a>
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
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center mb-4 space-x-3">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-105">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
