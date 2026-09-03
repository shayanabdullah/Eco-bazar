import {
  Leaf,
  Headphones,
  Smile,
  ClipboardCheck,
  Truck,
  Package,
  Check,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Testimonials from "../components/home/Testimonials";
import Sponser from "../components/home/Sponser";


const socialIcons = [
  {
    label: "Facebook",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    label: "Twitter",
    path: "M22 5.92a8.19 8.19 0 01-2.36.65 4.12 4.12 0 001.8-2.27 8.22 8.22 0 01-2.6 1 4.1 4.1 0 00-7 3.74A11.65 11.65 0 013 4.9a4.1 4.1 0 001.27 5.47 4.07 4.07 0 01-1.86-.51v.05a4.1 4.1 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.11 4.11 0 003.83 2.85A8.23 8.23 0 012 18.57 11.6 11.6 0 008.29 20.4c7.55 0 11.68-6.25 11.68-11.68 0-.18 0-.36-.01-.53A8.34 8.34 0 0022 5.92z",
  },
  {
    label: "Pinterest",
    path: "M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.03-.655 2.568-.994 3.995-.283 1.195.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.137.893 2.738a.36.36 0 01.083.345c-.09.375-.293 1.199-.334 1.363-.052.222-.174.269-.401.162-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.749-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z",
  },
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6 6 0 100 12 6 6 0 000-12zm0 9.891a3.891 3.891 0 110-7.783 3.891 3.891 0 010 7.783zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
];

import heroImage from "../assets/images/about-hero.webp"
import featureImage from "../assets/images/about-feature.webp";
import deliveryImage from "../assets/images/about-delivery.webp";
import team1 from "../assets/images/team-1.webp";
import team2 from "../assets/images/team-2.webp";
import team3 from "../assets/images/team-4.webp";
import team4 from "../assets/images/team-5.webp";


const features = [
  { icon: Leaf, title: "100% Organic food", subtitle: "100% healthy & Fresh food." },
  { icon: Headphones, title: "Great Support 24/7", subtitle: "Instant access to Contact" },
  { icon: Smile, title: "Customer Feedback", subtitle: "Our happy customer" },
  { icon: ClipboardCheck, title: "100% Sucure Payment", subtitle: "We ensure your money is save" },
  { icon: Truck, title: "Free Shipping", subtitle: "Free shipping with discount" },
  { icon: Package, title: "100% Organic Food", subtitle: "100% healthy & Fresh food." },
];

const checklist = [
  "Sed in metus pellentesque.",
  "Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.",
  "Maecenas ut nunc fringilla erat varius.",
];

const team = [
  {
    name: "Jenny Wilson",
    role: "Ceo & Founder",
    image: team1,
  },
  {
    name: "Jane Cooper",
    role: "Worker",
    image: team2,
  },
  {
    name: "Cody Fisher",
    role: "Security Guard",
    image: team3,
  },
  {
    name: "Robert Fox",
    role: "Senior Farmer Manager",
    image: team4,
  },
];

export default function About() {
  return (
    <div className="bg-white font-poppins">
      <div className="max-w-330 mx-auto px-4 md:px-6">
        {/* Hero intro */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-14 md:py-20">
          <div>
            <h1 className="text-3xl md:text-heading-01 font-bold text-gray-9 leading-tight  mb-5">
              100% Trusted
              <br />
              Organic Food Store
            </h1>
            <p className="text-base leading-relaxed text-gray-500 max-w-120">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet
              ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac
              lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non
              massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis
              congue vitae.
            </p>
          </div>
          <img
            src={heroImage}
            alt="Farmer holding a basket of fresh vegetables"
            className="w-full rounded-lg object-cover object-center"
          />
        </section>
      </div>

      {/* Feature section */}
      <section className="bg-gradient-to-l from-[#FAFAFA] via-[#FFFFFF] to-[#FFFFFF] flex flex-col md:flex-row gap-x-20 font-poppins px-4 md:px-0 ">
          <img
            src={featureImage}
            alt="Farmer with a basket of vegetables"
            className=" md:max-w-1/2 w-full h-full object-cover"
          />
       <div className="w-full md:max-w-2/5 ">
 
          <div className="px-4 md:px-10 py-14 md:py-16">
            <h2 className="text-3xl md:text-heading-01 font-semibold text-gray-9 leading-tight mb-4">
              100% Trusted
              <br />
              Organic Food Store
            </h2>
            <p className="text-base leading-relaxed text-gray-500 max-w-130 mb-8">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla
              et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla
              eu eros consequat tortor tincidunt feugiat.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-19 h-19 shrink-0 rounded-full bg-[#00B712]/10 text-[#00B712] flex items-center justify-center">
                      <Icon className="w-10 h-10" />
                    </span>
                    <div>
                      <p className="font-semibold text-lg text-gray-900">
                        {feature.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
     
       </div>
      </section>

      <div className="max-w-330 mx-auto px-4">
        {/* Delivery section */}
        <section className="flex flex-col md:flex-row justify-between gap-10 items-center pt-14 md:pt-20 font-poppins">
          <div className="max-w-[550px]">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-9 leading-tight mb-5">
              We Delivered, You
              <br />
              Enjoy Your Order.
            </h2>
            <p className="text-base leading-relaxed text-gray-6 mb-6 pr-20">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices
              consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac
              mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget
              elementum.
            </p>

            <ul className="space-y-3 mb-8">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 shrink-0 rounded-full bg-[#00B712]/20 text-white flex items-center justify-center">
                    <Check className="w-3 h-3 text-hard-primary" />
                  </span>
                  <span className="text-sm text-gray-6">{item}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="flex items-center gap-2 bg-[#00B712] hover:bg-[#00A010] text-white text-base font-medium rounded-full px-6 h-12 transition-colors"
            >
              Shop Now  
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <img
            src={deliveryImage}
            alt="Delivery courier holding a crate of groceries"
            className="w-[895px]! rounded-lg object-cover"
          />
        </section>
      </div>

      {/* Our Awesome Team */}
      <section className="bg-gradient-to-b from-[#F2F2F2] via-[#FFFFFF] to-[#FFFFFF] py-14 md:py-20">
        <div className="max-w-330  mx-auto px-4 md:px-0">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-9 mb-3">
              Our Awesome Team
            </h2>
            <p className="text-base text-gray-6">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla
              et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.
            </p>
          </div>

          <div className="relative flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous"
              className="hidden md:flex w-9 h-9 shrink-0 rounded-full bg-white  border border-gray-200 items-center justify-center text-gray-9 hover:text-gray-8 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 flex-1">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="group bg-white border border-gray-100 rounded-lg overflow-hidden"  
                >
                  <div className="relative">
                    <img src={member.image} alt={member.name} className="w-full  object-cover" />
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-gray-9/50 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-300">
                      {socialIcons.map((icon, iconIdx) => (
                        <span
                          key={icon.label}
                          className={`p-2.5 hover:bg-primary text-white rounded-full flex items-center justify-center cursor-pointer`}
                          aria-label={icon.label}
                        >
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d={icon.path} />
                          </svg>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-lg text-gray-9">
                      {member.name}
                    </p>
                    <p className="text-sm text-gray-5 mt-0.5">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              aria-label="Next"
              className="hidden md:flex w-9 h-9 shrink-0 rounded-full bg-white  border border-gray-200 items-center justify-center text-gray-9 hover:text-gray-8 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    <div className="bg-white">
        <Testimonials/>
      <Sponser/>
    </div>
    </div>
  );
}