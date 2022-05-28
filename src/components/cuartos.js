import { useEffect, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

import Device from "./dispositivos";
import Post from "./cuarto";
import "./style.css";

function Cuartos() {
  const url =
    "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";

  const [cuartos, setCuartos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((cuartos) => {
        const secret = document.getElementById("secret");
        let id = secret.innerHTML;
        console.log(id);
        setCuartos(cuartos.filter((p) => p.homeId === id));
      });
  }, []);

  const deleteCuarto = (id) => {
    console.log(id);
    let filteredPosts = cuartos.filter((p) => p.name === id);

    const secret = document.getElementById("secret_dos");
    secret.innerHTML = filteredPosts[0].name;

    const containter = document.getElementById("device");
    const root = ReactDOMClient.createRoot(containter);

    root.render(<Device />);
  };

  return (
    <div className="div" id="museos">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <h1>My Rooms</h1>
          <hr></hr>
        </div>
        <div className="col-1"></div>
      </div>
      <p id="secret_dos" className="secret"></p>

      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="row test" id="test">
            {cuartos.map((cuarto) => (
              <Post key={cuarto.id} post={cuarto} onDelete={deleteCuarto} />
            ))}
          </div>
        </div>
        <div id="device"></div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Cuartos;
