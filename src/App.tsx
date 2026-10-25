
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./hooks/useLanguage";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const App = () => (
  <LanguageProvider>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </LanguageProvider>
);

export default App;
