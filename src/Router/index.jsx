import { ReactNode, useContext } from "react";
import { BrowserRouter , Navigate, Route, Routes } from "react-router-dom";

import { GetRestauranteVencedor } from "../pages/RankingDay";
import { AddRestaurante } from "../pages/AddAndGetRestaurante";
import { AddUsuario } from "../pages/AddUsuario";
import { AddVotos } from "../pages/AddVotos";
import { VotosDia } from "../pages/VotosDia";

/**
 * Manage the app routes and
 * allow to navigate to private pages
 * @returns 
 */
export function Routers() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddRestaurante />} />
          <Route path="/votosDia" element={<VotosDia/>}/>
          <Route path="/getRestauranteVencedor" element={<GetRestauranteVencedor/>}/>
          <Route path="/addusuario" element={<AddUsuario />} />
          <Route path="/addvotos" element={<AddVotos />} />
        </Routes>     
    </BrowserRouter>
  );
}