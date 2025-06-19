import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import LobbyPage from "../pages/LobbyPage";
import { Route, Routes } from "react-router-dom";
import { ProjectsPage } from "../pages/ProjectsPage/ProjectsPage";
 
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LobbyPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      {/* Añade más rutas si las necesitas */}
    </Routes>
  );
};
