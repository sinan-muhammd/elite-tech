// src/components/CategoryBar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";


const categories = [
  {
    name: "Mobiles & Tablets",
    image: "https://cdn-icons-png.flaticon.com/512/1043/1043900.png",
    path: "/products/Tablets",  
  },
  {
    name: "Fashion",
    image: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    path: "/products/fashion",
  },
  {
    name: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/2891/2891498.png",
    path: "/products/electronics",
  },
  {
    name: "Home & Furniture",
    image: "https://cdn-icons-png.flaticon.com/512/4370/4370207.png",
    path: "/products/Home",
  },
  {
    name: "Sports",
    image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
    path: "/products/Sports",
  },
];

export default function CategoryBar() {
  const location = useLocation();

  return (
    <div className="bg-white shadow-sm border-b border-gray-100 w-full overflow-x-auto">
      <div className="flex justify-start sm:justify-center items-center gap-8 px-6 py-3 min-w-max">
        {categories.map((cat) => {
          const active = location.pathname === cat.path;
          return (
            <Link
              key={cat.name}
              to={cat.path}
              className={`flex flex-col items-center group cursor-pointer ${
                active ? "text-indigo-600" : "text-gray-700"
              }`}
            >
              <div
                className={`h-14 w-14 flex items-center justify-center rounded-full bg-white shadow-sm overflow-hidden transition-all duration-200 ${
                  active ? "border-2 border-indigo-500" : ""
                } group-hover:scale-105`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-10 w-10 object-contain"
                />
              </div>

              <p
                className={`text-sm mt-2 font-extrabold hitespace-nowrap ${
                  active
                    ? "text-indigo-600 font-semibold"
                    : "group-hover:text-indigo-600"
                }`}
              >
                {cat.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
