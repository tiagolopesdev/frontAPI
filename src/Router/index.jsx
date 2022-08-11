import { ReactNode, useContext } from "react";
import { BrowserRouter , Navigate, Route, Routes } from "react-router-dom";

import { AddRestaurante } from "../pages/AddAndGetRestaurante";
import { AddUsuario } from "../pages/AddUsuario";
import { AddVotos } from "../pages/AddVotos";

/**
 * Manage the app routes and
 * allow to navigate to private pages
 * @returns 
 */
export function Routers() {
//   const Private = ({ children }) => {
//     const { authenticated, loading } = useContext(AuthContext);
//     if (loading) {
//       return <div>Carregando...</div>
//     }    
//     if (!authenticated) {
//       return <Navigate to="login" />
//     }
//     return children;
//   }
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddRestaurante />} />
          <Route path="/addusuario" element={<AddUsuario />} />
          <Route path="/addvotos" element={<AddVotos />} />
          {/* <Route path="/rankingdia" element={<AddAndGetRestaurante />} />
          <Route path="/restaurantevencedor" element={<AddAndGetRestaurante />} />           */}
        </Routes>     
    </BrowserRouter>
  );
}