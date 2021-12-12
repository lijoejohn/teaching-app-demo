import { BrowserRouter } from "react-router-dom";
import Routers from "./routers";
import "./App.css";
function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
