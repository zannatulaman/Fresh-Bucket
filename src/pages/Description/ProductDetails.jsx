import Home from "./Home";
import Details from "./Details";
import Product from "./Product";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  //   console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/get/product/${id}`)
      .then((res) => setProduct(res.data.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log("product", product);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <Home product={product}></Home>
      <Details></Details>
      <Product></Product>
    </div>
  );
};

export default ProductDetails;
