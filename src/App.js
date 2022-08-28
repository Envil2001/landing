import { useState } from "react";
import Header from "./components/elements/Header/header";

import { Route, Routes } from "react-router-dom"
import { Home } from "./components/elements/home/home";
import { Team } from "./components/elements/team/team";


import Faq from "./components/elements/faq/faq";
import RealeseNote from "./components/elements/RealeseNote/realese-note";
import Modal from "./components/elements/Modal/Modal";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <div className="App">
        <Header menuActive={menuActive} setMenuActive={setMenuActive} />
        <div className="py-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/release-notes" element={<RealeseNote />} />
          </Routes>
        </div>
      </div>
      <Modal mobileMenuActive={menuActive} setMobileMenuActive={setMenuActive}/>
    </>
  );
}

export default App;
