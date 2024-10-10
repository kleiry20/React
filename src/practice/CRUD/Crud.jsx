import { useState, useEffect } from "react";
import "./index.css";

export function Crud() {
  const [data, setData] = useState();

  const url = "https://dummyjson.com/products";

  async function getData() {
    try {
      const request = await fetch(url);
      const response = await request.json();

      setData(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>Crud app</div>
      <br />
      <div style={{ textAlign: "center" }}>
        <label htmlFor="">Add/List New Product: </label>
        <input style={{ width: "60%" }} type="text" />
        <button>submit</button>
      </div>
      <br />
      <ol>
        {data &&
          data.products.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </li>
          ))}
      </ol>
    </>
  );
}
