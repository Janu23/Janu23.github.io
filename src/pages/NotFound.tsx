
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="grid-bg min-h-screen flex items-center justify-center font-mono">
      <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-md w-full">
        <h1 className="text-6xl font-bold mb-4 text-center">404</h1>
        <p className="text-xl text-center mb-6">Página não encontrada</p>
        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
