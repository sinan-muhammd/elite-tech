import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const JoltCollections = () => {
  const navigate = useNavigate();
  const [collections, setCollections] = React.useState([]);

  React.useEffect(() => {
    const fetchTopCats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/products");

        const cats = res.data.reduce((acc, p) => {
          const c = p.category?.trim();
          if (c) acc[c] = (acc[c] || 0) + 1;
          return acc;
        }, {});

        const sortedCats = Object.entries(cats)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6);

        // 🔥 Online Images (replace local images)
        const imgs = [
          "https://i.pinimg.com/1200x/44/b4/85/44b48547e9b9bc11fc239b28ff127185.jpg", // shoes
          "https://i.pinimg.com/736x/3f/38/0f/3f380f1974debc7b760f689fcdb1948d.jpg", // jacket
          "https://i.pinimg.com/736x/49/00/bf/4900bf9f52cc4028460dd668965e3760.jpg", // bag
          "https://i.pinimg.com/736x/04/fe/40/04fe409f15e9d741bc017075d8e4031c.jpg", // hat
          "https://i.pinimg.com/1200x/cc/18/64/cc1864e92476d46a27ace17dac61dc41.jpg", // fashion
          "https://i.pinimg.com/736x/99/37/41/9937417a6efe2ea205b855d9730950ff.jpg", // extra
        ];

        setCollections(
          sortedCats.map(([title], i) => ({
            title,
            path: `/products/${title.toLowerCase().replace(/\s+/g, '-')}`,
            image: imgs[i] || imgs[0],
          }))
        );

      } catch (e) {
        console.error("Error fetching categories:", e);
      }
    };

    fetchTopCats();
  }, []);

  return (
    <section className="bg-white py-20 px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-[2px] bg-red-600"></div>
              <span className="text-red-600 font-bold uppercase text-xs tracking-widest">
                Featured Categories
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
              Mission Collections
            </h2>
          </div>

          <button
            onClick={() => navigate("/products/all")}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black border-b border-transparent hover:border-black pb-1 transition"
          >
            Explore All
            <ArrowRight size={16} />
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="group relative h-[280px] md:h-[320px] bg-gray-100 overflow-hidden cursor-pointer rounded-xl"
            >
              
              {/* IMAGE */}
              <div className="w-full h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x800?text=No+Image";
                  }}
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>

              {/* TEXT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <span className="text-white/60 text-[10px] uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition">
                  Project {index + 1}
                </span>

                <h3 className="text-white text-2xl md:text-3xl font-extrabold uppercase tracking-wide transition-transform duration-500 group-hover:scale-110">
                  {item.title}
                </h3>

                <div className="w-6 h-[2px] bg-red-600 mt-3 opacity-0 group-hover:opacity-100 group-hover:w-12 transition-all duration-500"></div>

                <span className="text-white/80 text-xs mt-4 opacity-0 group-hover:opacity-100 transition">
                  Explore →
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JoltCollections;