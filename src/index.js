import * as ReactDOMClient from "react-dom/client";
import Casas from "./components/casas";
import "bootstrap/dist/css/bootstrap.css";

const containter = document.getElementById("root");
const root = ReactDOMClient.createRoot(containter);

root.render(<Casas />);
