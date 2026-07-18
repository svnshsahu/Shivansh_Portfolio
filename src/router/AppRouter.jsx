import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import ProjectDetails from "../pages/ProjectDetails.jsx";
import NotFound from "../pages/NotFound.jsx";

import Curr from "../currency/curr.jsx";
import Weather from "../weather/Weather.jsx";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:slug" element={<ProjectDetails />} />
       <Route path="/project/:slug/currency" element={<Curr />} />
       <Route path="/project/:slug/weather" element={<Weather />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
