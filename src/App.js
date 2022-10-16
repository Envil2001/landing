import { useState } from "react";
import Header from "./components/elements/Header/header";

import { Route, Routes } from "react-router-dom"


import Footer from "./components/elements/Footer/footer";
import Burger from "./components/UI/BurgerMenu/Burger";
import Home from "./components/elements/home/home";
import Team from "./components/elements/team/team";
import Faq from "./components/elements/faq/faq";
import RealeseNote from "./components/elements/RealeseNote/realese-note";
import ForAds from "./components/elements/forAds/forAds";
import ForDevelopers from "./components/elements/forDevelopers/forDevelopers";



function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>

      <Header menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className="py-28">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/release-notes" element={<RealeseNote />} />
          <Route path="/for-advertisers" element={<ForAds />} />
          <Route path="/for-game-developers" element={<ForDevelopers />} />
        </Routes>
      </div>
      <Footer />
      <Burger mobileMenuActive={menuActive} setMobileMenuActive={setMenuActive} />

      
    </>
  );
}

export default App;
