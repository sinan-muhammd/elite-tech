import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "COLLECTION",
      links: [
        { name: "SHOP ALL", path: "/products/all" },
        { name: "PERFORMANCE", path: "/products/performance" },
        { name: "LIFESTYLE", path: "/products/lifestyle" },
        { name: "ACCESSORIES", path: "/products/accessories" },
        { name: "NEW ARRIVAL", path: "/products/new" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { name: "SUPPORT CENTER", path: "/support" },
        { name: "SELF SERVICE", path: "/service" },
        { name: "WARRANTY", path: "/warranty" },
        { name: "SIZE GUIDE", path: "/size-guide" },
        { name: "REFUNDS", path: "/refunds" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { name: "ABOUT US", path: "/about" },
        { name: "CAREERS", path: "/careers" },
        { name: "PRESS", path: "/press" },
        { name: "SUSTAINABILITY", path: "/sustainability" },
        { name: "PROJECTS", path: "/projects" },
      ],
    },
  ];

  return (
    <footer className="bg-white text-black pt-24 pb-12 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Info */}
          <div className="flex flex-col items-start gap-8">
            <Link to="/" className="text-3xl font-black tracking-tighter flex items-center gap-1">
              JOLT<span className="text-red-600 block w-2 h-2 bg-red-600 rounded-full mt-2"></span>
            </Link>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs uppercase tracking-wider">
              Performance-driven sports gear designed for the modern-day athlete. Push your boundaries and achieve greatness with the Project.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, idx) => (
                <div key={idx} className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
                  <Icon size={18} strokeWidth={2.5} />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Navigation */}
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-10">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-xs font-black uppercase tracking-widest hover:text-red-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            © {currentYear} JOLT SPORT PROJECT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-10">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((policy) => (
              <span key={policy} className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-black cursor-pointer transition-colors">
                {policy}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
