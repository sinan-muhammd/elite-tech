import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSearch } from "./SearchContext";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useSearch();
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://backend-elite-1.onrender.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !category ||
      product.category
        .toLowerCase()
        .includes(category.replace("-", " ").toLowerCase());

    return matchesSearch && matchesCategory;
  });

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await axios.delete(`https://backend-elite-1.onrender.com/products/${id}`);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      alert("Product deleted!");
    } catch (error) {
      alert("Failed to delete!");
    }
  };

  if (loading) return <h2 className="text-center mt-10">Loading...</h2>;

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        🛍️ Our Products
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
          >
            {/* PRODUCT IMAGE CLICKABLE */}
            <div
              className="relative cursor-pointer overflow-hidden rounded-t-3xl"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover rounded-t-3xl transform transition-all duration-500 hover:scale-110"
              />

              {/* CATEGORY BADGE */}
              <span className="absolute top-3 left-3 bg-white text-gray-800 px-3 py-1 text-xs font-semibold rounded-full shadow">
                {product.category}
              </span>
            </div>

            <div className="p-5">
              <h2 className="text-lg font-bold text-gray-800">
                {product.name}
              </h2>

              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {product.description}
              </p>

              {/* <div className="flex justify-between items-center mt-5"> */}
                {/* VIEW BUTTON */}
                {/* <Link
                  to={`/product/${product.id}`}
                  className="px-4 py-2 font-medium bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow"
                >
                  Add
                </Link> */}

                {/* EDIT BUTTON */}
                {/* <Link
                  to={`/edit/${product.id}`}
                  className="px-4 py-2 font-medium bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 shadow"
                >
                  Edit */}
                {/* </Link>  */}
                {/* DELETE BUTTON */}
                {/* <button
                  onClick={() => handleDelete(product.id)}
                  className="px-4 py-2 font-medium bg-red-600 text-white rounded-xl hover:bg-red-700 shadow"
                >
                  Delete
                </button>
              </div> */}
            </div>
          </div>
        ))}

      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center mt-10 text-gray-500 text-lg">
          No products found.
        </p>
      )}
    </div>
  );
}

export default Home;
