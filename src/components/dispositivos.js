import { useEffect, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

import Post from "./cuarto";

function Device() {
  const url =
    "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";

  const [cuartos, setCuartos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((cuartos) => {
        const secret = document.getElementById("secret");
        const secret_dos = document.getElementById("secret_dos");
        let id = secret.innerHTML;
        let id_dos = secret_dos.innerHTML;
        console.log(id, id_dos);
        setCuartos(
          cuartos.filter((p) => (p.homeId === id) & (p.name === id_dos))
        );
      });
  }, []);

  return (
    <div className="div" id="museos">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <h1>Device</h1>
          <hr></hr>
        </div>
        <div className="col-1"></div>
      </div>
      <p id="secret_dos" className="secret"></p>

      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="row test" id="test">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              {cuartos.map((cuarto) =>
                cuarto.devices.map((d) => (
                  <tbody>
                    <tr key={d.id}>
                      <td>{d.id}</td>
                      <td>{d.name}</td>
                      <td>{d.desired.value}</td>
                    </tr>
                  </tbody>
                ))
              )}
            </table>
          </div>
        </div>
        <div id="device"></div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Device;
