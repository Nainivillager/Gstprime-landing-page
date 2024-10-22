import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Pricing() {
  const pricingData = [
    {
      plan: "Starter Plan",
      target: "For Freelancers and Small Businesses",
      price: "₹850/month",
      invoices: "Upto 100 GST invoices/month",
      filing: "Filing of quarterly GST returns",
      mobileSupport: "Mobile App access for invoice generation",
      mail: "Email support",
      consultancy: "Basic Consultancy (1 hour/month)",
      other: "",
    },
    {
      plan: "Business Plan",
      target: "Small to Medium Enterprises (SMEs)",
      price: "₹1500/month",
      invoices: "Upto 300 GST invoices/month",
      filing: "Filing of monthly GST returns",
      mobileSupport: "Mobile App access for invoice generation",
      mail: "Priority Email support",
      consultancy: "Consultancy (2 hours/month)",
      other: "Importing invoice data to GST software",
    },
    {
      plan: "Pro Plan",
      target: "Medium to Large Enterprises (SMEs)",
      price: "₹2100/month",
      invoices: "Unlimited GST invoices and filing",
      filing: "Dedicated Tax Champion for personalized assistance",
      mobileSupport: "Mobile App access for invoice generation",
      mail: "24/7 Priority support",
      consultancy: "Advance Consultancy (4 hours/month)",
      other: "Custom-bult solutions for retailers, distributors, and exporters",
    },
  ];

  const contactOptions = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak directly with support team",
      buttonText: "Call Now",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      href: "tel:780079095",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Chat with us on WhatsApp",
      buttonText: "Message Us",
      bgColor: "bg-emerald-600",
      hoverColor: "hover:bg-emerald-700",
      href: "https://api.whatsapp.com/send?phone=15551234567",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Send us your queries",
      buttonText: "Email Us",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      href: "mailto:amitgupta2131@gmail.com",
    },
  ];

  return (
    <div>
      <div className="text-3xl font-bold text-center mb-6 text-gray-900 ">
        Pick Your Perfect Plan
      </div>
      <div className="text-xl text-gray-500  text-center m-2 px-8">
        At GST Prime, we simplify your GST-related needs with tailored solutions
        for businesses of all sizes. Whether you're a freelancer, a growing
        small business, or a large enterprise, our services are designed to
        streamline your GST invoicing, filing, and compliance. Explore our
        pricing plans below to find the perfect fit for your business.
      </div>
      {/* Pricing  Plans Cards*/}
      <div className="container mx-auto px-4 py-4 pb-0  text-3xl text-center font-bold text-green-500 ">
        Pricing Plans
        <div className="animate-bounce-slow pt-1 ">
          <img
            src="/priceLogo.svg"
            alt="Pricing logo"
            className="w-24 sm:w-36 h-20 md:w-48 object-contain mx-auto md:h-24"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 px-4 py-2">
        {pricingData.map((plans) => (
          <div className="flex flex-col border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full lg:w-1/3 max-w-sm mx-auto">
            <div className="bg-gray-100 p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {plans.plan}
              </h2>
              <h3 className="text-sm text-gray-600 mb-4">{plans.target}</h3>
              <h4 className="text-green-600 text-3xl font-bold">
                {plans.price}
              </h4>
            </div>
            <div className="flex-grow p-6 space-y-4">
              <p>{plans.invoices}</p>
              <p>{plans.filing}</p>
              <p>{plans.mobileSupport}</p>
              <p>{plans.mail}</p>
              <p>{plans.consultancy}</p>
              <p>{plans.other}</p>
            </div>
            <div className="p-6 bg-gray-100">
              <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors duration-200">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <div>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Get Started Today!
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-2xl text-gray-600">
            Ready to simplify your GST processes? Select the plan that best
            suits your needs and start your journey with GST Assist.
          </p>
          <div className="mt-6">
            <a
              href="https://www.gstprime.co.in"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 mr-4"
            >
              Start Free Trial
            </a>
          </div>
          <p className="mt-6 text-base text-gray-500">
            Need Help Choosing? Contact our team on{" "}
            <a
              href="tel:780079095"
              className="text-blue-400 hover:text-blue-700"
            >
              Phone &nbsp;
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=15551234567"
              className="text-blue-400 hover:text-green-500"
            >
              Whatsapp{" "}
            </a>
            , for personalized assistance to find the perfect plan for your
            business!
          </p>
        </div>
      </div> */}
      {/* 
      Footer Type Section
      <div className="bg-blue-600 text-white py-16 px-4 rounded-t-lg mx-4 opacity-90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses that trust our platform for their daily
            operations.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div> */}
      {/* Contact Section */}
      <div className="bg-gray-800 text-white py-16 px-4 rounded-t-lg mx-4 my-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-center mb-12 opacity-90">
            Choose your preferred way to connect with us
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-400 mb-4">{option.description}</p>
                <button
                  className={`w-full ${option.bgColor} ${option.hoverColor} text-white px-6 py-2 rounded-lg font-semibold transition-colors `}
                >
                  <a
                    className="flex items-center justify-center gap-2"
                    href={option.href}
                  >
                    {option.icon}
                    {option.buttonText}
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
