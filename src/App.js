import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Start } from "./Pages/Start";
import { Capture } from "./Pages/Capture";
import { PokedexContextProvider } from "./Contexts/PokedexContextProvider";
import { UserContextProvider } from "./Contexts/UserContextProvider";

export const App = () => {
  return (
    <PokedexContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/capture" element={<Capture />} />
            <Route path="/profile" element={<h1> profile </h1>} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </PokedexContextProvider>
  );
};
