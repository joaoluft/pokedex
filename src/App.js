import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Start } from "./Pages/Start";
import { Capture } from "./Pages/Capture";
import { PokedexContextProvider } from "./Contexts/PokedexContextProvider";

export const App = () => {
  return (
    <PokedexContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/capture" element={<Capture />} />
          <Route path="/profile" element={<h1> profile </h1>} />
        </Routes>
      </BrowserRouter>
    </PokedexContextProvider>
  );
}

