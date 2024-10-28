// import React from "react";
// import { Phone, Mail, MessageCircle } from "lucide-react";

// export default function Contact() {
// <div>

//   // const contactOptions = [
//   //   {
//   //     icon: <Phone className="w-6 h-6" />,
//   //     title: "Call Us",
//   //     description: "Speak directly with Us",
//   //     buttonText: "Call Now",
//   //     bgColor: "bg-green-600",
//   //     hoverColor: "hover:bg-green-700",
//   //     href: "tel:780079095",
//   //   },
//   //   {
//   //     icon: <MessageCircle className="w-6 h-6" />,
//   //     title: "WhatsApp",
//   //     description: "Chat with us on WhatsApp",
//   //     buttonText: "Message Us",
//   //     bgColor: "bg-emerald-600",
//   //     hoverColor: "hover:bg-emerald-700",
//   //     href: "https://api.whatsapp.com/send?phone=",
//   //   },
//   //   {
//   //     icon: <Mail className="w-6 h-6" />,
//   //     title: "Email",
//   //     description: "Send us your queries",
//   //     buttonText: "Email Us",
//   //     bgColor: "bg-blue-600",
//   //     hoverColor: "hover:bg-blue-700",
//   //     href: "mailto:amitgupta2131@gmail.com",
//   //   },
//   // ];

// {/* Contact Section */}
// <div className="bg-gray-800 text-white py-16 px-4 rounded-t-lg mx-4 my-4">
//   <div className="max-w-6xl mx-auto">
//     <h2 className="text-3xl font-bold text-center mb-4">
//       Ready to Transform Your Business?
//     </h2>
//     <p className="text-xl text-center mb-12 opacity-90">
//       Choose your preferred way to connect with us
//     </p>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//       {contactOptions.map((option, index) => (
//         <div
//           key={index}
//           className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors"
//         >
//           <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 mb-4">
//             {option.icon}
//           </div>
//           <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
//           <p className="text-gray-400 mb-4">{option.description}</p>
//           <button
//             className={`w-full ${option.bgColor} ${option.hoverColor} text-white px-6 py-2 rounded-lg font-semibold transition-colors `}
//           >
//             <a
//               className="flex items-center justify-center gap-2"
//               href={option.href}
//             >
//               {option.icon}
//               {option.buttonText}
//             </a>
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

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
      bgColor: "bg-gray-50",
      headerColor: "bg-gray-100",
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
      bgColor: "bg-blue-50",
      headerColor: "bg-blue-100",
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
      bgColor: "bg-purple-50",
      headerColor: "bg-purple-100",
      featured: true,
    },
  ];

  return (
    <div className="font-sans md:font-serif animate-fade-in">
      <div className="text-4xl font-bold text-center mb-6 text-gray-900 animate-fade-down">
        Pick Your Perfect Plan
      </div>
      <div className="text-xl text-gray-500 text-center m-2 px-4 md:px-16 animate-fade-up">
        At GST Prime, we simplify your GST-related needs with tailored solutions
        for businesses of all sizes.{" "}
        <div>
          Explore our pricing plans below to find the perfect fit for your
          business.
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 text-3xl text-center font-bold text-purple-600 animate-fade-in relative">
        <div className="relative z-10">Pricing Plans</div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2 z-0">
          <img
            src="/priceLogo.svg"
            alt="Pricing logo"
            className="w-24 sm:w-36 h-20 md:w-48 object-contain mx-auto md:h-24 animate-bounce"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 px-4 py-16 mt-8">
        {pricingData.map((plan) => (
          <div
            key={plan.plan}
            className={`flex flex-col border-2 ${
              plan.featured
                ? "border-purple-400 shadow-purple-200"
                : "border-gray-300"
            } 
              rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden 
              w-full lg:w-1/3 max-w-sm mx-auto hover:scale-105 animate-fade-up transform`}
          >
            {plan.featured && (
              <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
            )}
            <div className={`${plan.headerColor} p-6 text-center`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {plan.plan}
              </h2>
              <h3 className="text-sm text-gray-600 mb-4">{plan.target}</h3>
              <h4
                className={`${
                  plan.featured ? "text-purple-600" : "text-green-600"
                } text-3xl font-bold`}
              >
                {plan.price}
              </h4>
            </div>
            <div className={`flex-grow p-6 space-y-4 ${plan.bgColor}`}>
              {[
                plan.invoices,
                plan.filing,
                plan.mobileSupport,
                plan.mail,
                plan.consultancy,
                plan.other,
              ]
                .filter(Boolean)
                .map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <p>{feature}</p>
                  </div>
                ))}
            </div>
            <div className={`p-6 ${plan.headerColor}`}>
              <button
                className={`w-full py-3 px-4 ${
                  plan.featured
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-green-600 hover:bg-green-700"
                } 
                text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105`}
              >
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-5 mb-8 px-4 animate-fade-up">
        <button
          className="group relative bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold 
          transition-all duration-300 hover:shadow-lg transform hover:scale-105 mb-4 sm:mb-0 overflow-hidden"
        >
          <a
            href="https://www.gstprime.co.in/"
            className="flex items-center justify-center"
          >
            Get Started
            <svg
              className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </button>
        <button
          className="group relative bg-gradient-to-r from-purple-500 to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold 
          transition-all duration-300 hover:shadow-lg transform hover:scale-105 overflow-hidden"
        >
          <a
            href="https://www.gstprime.co.in/"
            className="flex items-center justify-center"
          >
            Subscribe Now
            <svg
              className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </button>
      </div>
    </div>
  );
}
