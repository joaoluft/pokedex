import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Start, Capture, Profile } from "./Pages";
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
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </PokedexContextProvider>
  );
};
