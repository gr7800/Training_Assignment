import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const SingleProducts = () => {
  const [product, setProduct] = useState({});
  const [loading,setLoading] =useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data)
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false)
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2 className="m-auto text-center w-full">...Loading</h2>
  }

  return (
    <div className="flex justify-center items-center py-5 h-[90vh] bg-slate-300">
      {product?<ProductCard product={product} />:"...Loading"}
    </div>
  )
}

export default SingleProducts