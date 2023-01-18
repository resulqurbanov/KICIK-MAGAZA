import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

function Mehsul() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/categories/${id}`)
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <div>
        <Helmet>
            <title>{products.name}</title>
        </Helmet>
      <h1>{products.id}</h1>
      <h1>{products.description}</h1>
      <h1>{products.name}</h1>
      <Link to={`/`}>buyyyyyyyyyyyyy</Link>
    </div>
  );
}

export default Mehsul;
