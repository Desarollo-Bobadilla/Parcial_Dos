import { useEffect, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

import Cuartos from "./cuartos";
import Post from "./casa";
import "./style.css";

function Casas() {
  const url =
    "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";

  const [casas, setCasas] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((casas) => {
        console.log(casas);
        setCasas(casas);
      });
  }, []);

  const deleteCasas = (id) => {
    let filteredPosts = casas.filter((p) => p.id === id);

    const secret = document.getElementById("secret");
    secret.innerHTML = filteredPosts[0].id;

    const containter = document.getElementById("rooms");
    const root = ReactDOMClient.createRoot(containter);

    root.render(<Cuartos />);
  };

  return (
    <div className="div" id="museos">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <h1>My Spaces</h1>
          <hr></hr>
        </div>
        <div className="col-1"></div>
      </div>
      <p id="secret" className="secret"></p>

      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="row">
            {casas.map((casa) => (
              <Post key={casa.id} post={casa} onDelete={deleteCasas} />
            ))}
          </div>
          <div className="row" id="rooms"></div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Casas;
