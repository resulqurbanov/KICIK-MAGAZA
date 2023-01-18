import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link} from "react-router-dom";
import "./App.css";

function App() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/categories`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
    <Helmet>
      <title>Mehsullar</title>
    </Helmet>
      {products.map((element) => {
        return (
          <>
            <div>
              <h1>{element.id}</h1>
              <h1>{element.description}</h1>
              <h1>{element.name}</h1>
              <Link to={`/about/${element.id}`}>buyyyyyyyyyyyyy</Link>
            </div>
          </>
        );
      })}
    </>
  );
}

export default App;
