import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import HomePage from "./HomePage";
import WeekHome from "./WeekHome";
import PersonalDetails from "./PersonalDetails";

import YogaPage from "./YogaPage";
import FirstTrimester from "./FirstTrimester";
import SecondTrimester from "./SecondTrimester";
import ThirdTrimester from "./ThirdTrimester";
import HospitalBagChecklist from "./HospitalBagChecklist";
import PartnerInvolvementGuide from "./PartnerInvolvementGuide";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
    }
  }, []);

  // Apply theme
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Routes>
        <Route path="/" element={<HomePage setDarkMode={setDarkMode} darkMode={darkMode} />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/week-home" element={<WeekHome setDarkMode={setDarkMode} darkMode={darkMode} />} />
        <Route path="/yoga" element={<YogaPage />} />
        <Route path="/yoga/first" element={<FirstTrimester />} />
        <Route path="/yoga/second" element={<SecondTrimester />} />
        <Route path="/yoga/third" element={<ThirdTrimester />} />
        <Route path="/partner-involvement" element={<PartnerInvolvementGuide />} />
        <Route path="/hospital-bag" element={<HospitalBagChecklist />} />
      </Routes>
    </div>
  );
}

export default App;
