import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Isport from "../components/isport/Isport";
import NoPage from "../components/NoPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/icode-az-site" element={<Home />}/>
      <Route path="/icode-az-site/isports" element={<Isport />} />
      <Route path="/isports" element={<Isport />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default Router;
