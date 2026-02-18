import React, { useRef, useEffect, useState } from "react";
import "./WeekHome.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "./assets/mylogo.png";
import acc from "./assets/account.png";
import dot from "./assets/dot.png";
import notify from "./assets/notify.png";
import bgImage from "./assets/bg3.png"; 
import bgImage1 from "./assets/bg1.png";
import weekImg from "./assets/circle1.png"; 
import baby from "./assets/baby.png";
import pregnancydata from "./data/pregnancy-data.js";
import yogaImage from "./assets/yoga.png";
import nutritionIcon from "./assets/nutrition.png";
import symptomsBg from "./assets/symptoms-bg.png";
import care from "./assets/care-bg.png";
import food from "./assets/food-bg.png";
import ybg1 from "./assets/ybg1.png";
import ybg2 from "./assets/ybg2.png";
import nutritionIcon1 from "./assets/nutrition1.png";
import nutritionIcon2 from "./assets/nutrition2.png";
import d from "./assets/d.png";
import up from "./assets/up.png";
import sideImg from "./assets/sideImg.png";
import loadImg from "./assets/load.png";
import toolsMainImg from "./assets/toolsMainImg.png";
import toolsImg1 from "./assets/toolsImg1.png";
import toolsImg2 from "./assets/toolsImg2.png";
import toolsImg3 from "./assets/toolsImg3.png";


const TOTAL_WEEKS = 42;
const getWeekMessage = (week) => {
  if (week <= 4) {
    return "Welcome to the world, little one 🌸...!";
  } else if (week <= 12) {
    return "Your Body Is Creating Life..!✨";
  } else if (week <= 20) {
    return "A Tiny Heartbeat Is Growing Stronger 💓";
  } else if (week <= 27) {
    return "Your Baby Can Feel Your Love 🤍";
  } else if (week <= 34) {
    return "You Are Nurturing a Miracle 🌸";
  } else {
    return "Almost There… Your Little One Is Getting Ready 👶✨";
  }
};

const PregnancyWeekRing = ({ week }) => {
  const radius = 120;              // 🔥 BIG SIZE
  const circumference = 2 * Math.PI * radius;
  const progress = (week / TOTAL_WEEKS) * circumference;
 
   
  return (
    <div className="preg-ring">
      <svg viewBox="0 0 400 400" width="400" height="400">
        {/* BACK RING */}
        <circle
          cx="200"
          cy="200"
          r={radius}
          stroke="#eee"
          strokeWidth="16"
          fill="none"
        />

        {/* PROGRESS */}
        <circle
          cx="200"
          cy="200"
          r={radius}
          stroke="url(#grad)"
          strokeWidth="16"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
        />

        <defs>
          <linearGradient id="grad">
            <stop offset="0%" stopColor="#d9ea74" />
            <stop offset="100%" stopColor="#137c2a" />
          </linearGradient>
        </defs>
      </svg>

      {/* CENTER IMAGE */}
      <div className="ring-center">
        <img src={baby} alt="baby" />
      </div>
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */
const WeekHome = ({ darkMode, setDarkMode }) => {
 const handleLogout = () => {
  // Remove stored login data
  localStorage.removeItem("userId");
  localStorage.removeItem("token"); // if you stored token
  localStorage.removeItem("user");  // if used

  // Redirect to home page
  navigate("/");

  // Close menu
  setIsMenuOpen(false);
};

  const weekRef = useRef(null);

  const navigate = useNavigate(); 
  const [week, setWeek] = useState(0);
  const [trimester, setTrimester] = useState("");
  const [daysRemaining, setDaysRemaining] = useState(0);
  const weekData = pregnancydata[week];
  const [userName, setUserName] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const menuRef = useRef(null);
   const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);





  /* 🔗 BACKEND CONNECT */
  useEffect(() => {
  const userId = localStorage.getItem("userId");

  // 🔐 If not logged in → redirect to home
  if (!userId) {
    navigate("/");
    return;
  }


  
  // Fetch user name
  fetch(`http://localhost:5000/user/${userId}`)
    .then(res => res.json())
    .then(data => {
      console.log("Fetched name:", data);
      setUserName(data.full_name || "Mom to be,");
    })
    .catch(err => console.error("User fetch error:", err));

  // Fetch pregnancy status
  fetch(`http://localhost:5000/pregnancy/status/${userId}`)
    .then(res => res.json())
    .then(data => {
      console.log("Week from backend:", data.currentWeek);

      const safeWeek = Math.min(
        Math.max(data.currentWeek || 0, 0),
        TOTAL_WEEKS
      );

      setWeek(safeWeek);
      setTrimester(data.trimester);
      setDaysRemaining(data.daysRemaining);
    })
    .catch(err => console.error("Pregnancy fetch error:", err));

}, [navigate]);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsAccountMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);



  return (
    <div className="page">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">Bump to Baby</span>
        </div>

        <div className="week-wrapper">
          <div className="arrow" onClick={() => scrollWeeks(-200)}>
            &#8249;
          </div>

          <nav className="week-nav" ref={weekRef}>
            {Array.from({ length: TOTAL_WEEKS }, (_, i) => (
              <span key={i} className="week-item">
                Week {i + 1}
              </span>
            ))}
          </nav>

          <div className="arrow" onClick={() => scrollWeeks(200)}>
            &#8250;
          </div>
        </div>

        <div className="account">
          <img src={notify} alt="notify" className="account-img" />
          <img src={acc}  alt="account" className="account-img"  onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}/>
            {isAccountMenuOpen && (
  <div className="dropdown-menu1">
    <p> Edit Personal Details</p>
    <p> View Weekly Progress</p>
    <p> My Saved Yoga Plans</p>
    <p> Medication Reminders</p>
    <p> My Doctor</p>
  </div>
)}

          <div className="menu-container" ref={menuRef}>
  <img
    src={dot}
    alt="menu"
    className="account-img"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  />

  {isMenuOpen && (
    <div className="dropdown-menu">
      <p
  onClick={() => {
    setDarkMode(!darkMode);
    setIsMenuOpen(false);
  }}
>
  {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
</p>
      <p>🌍 Language</p>
      <p>ℹ️ About</p>
      <p onClick={handleLogout} style={{ cursor: "pointer" }}>
  ➡️ Logout
</p>

    </div>
  )}
</div>

        </div>
      </header>

    {/* GREETING */}
<div
  className="greeting-container"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="greeting-box">
   <p className="greeting-desc"><strong>Guiding You Through Motherhood</strong></p>
      <div className="greeting-name">Welcome {userName || "Mom to be,"} !</div>
      <div className="greeting-para">Trace Your Pregnancy Week by Week and find helpful tips for your Journey</div>
      <div className="greeting-but">Here you gooo!</div>
  </div>
</div>

<div className="cont">
  <div className="center-section"
    style={{ backgroundImage: `url(${bgImage1})` }}
    >
<div className="affirmation">
  {getWeekMessage(week)}
</div>
  
    <PregnancyWeekRing week={week} />

    <div
  className="info-circles">
  <div className="info-item week">
    <img src={weekImg} alt="trimester" />
    <div className="info-text">
      <div className="info-value">{trimester}</div>
      <div className="info-label">Trimester</div>
    </div>
  </div>

  <div className="info-item trimester">
    <img src={weekImg} alt="week" />
    <div className="info-text">
      <div className="info-value">{week}</div>
      <div className="info-label">Week</div>
    </div>
  </div>

  <div className="info-item days">
    <img src={weekImg} alt="days" />
    <div className="info-text">
      <div className="info-value">{daysRemaining}</div>
      <div className="info-label">Days to go</div>
    </div>
  </div>
</div>
</div>
<div className="right-panel">
  <div className="panel-box box-1">
    <img src={up} alt="Pregnancy care" />
      <h1 className="box-text">
    "Share your report and receive instant personalized guidance"
  </h1>   
      <img src={loadImg} alt="load visual" className="load-side" />
  </div>

  {/* second container with image */}
  <div className="panel-box box-2">
    <img src={d} alt="Pregnancy care" />
      <img src={sideImg} alt="Side visual" className="img-side" />
  </div>

  <div className="panel-box box-3">
     <img src={toolsMainImg} alt="Tools main" className="img-main" />
       <div className="tools-row">
           
  <img src={toolsImg1} alt="Tool 1" className="tool-img" />
  <img src={toolsImg2} alt="Tool 2" className="tool-img"
  onClick={() => navigate("/hospital-bag")}
      style={{ cursor: "pointer" }} />
  <img src={toolsImg3} alt="Tool 3" className="tool-img"
  onClick={() => navigate("/partner-involvement")}
      style={{ cursor: "pointer" }} />
  </div></div>
</div>

</div>
<div className="week-sections1">

  {/* ROW 1 – Symptoms */}
 <div
  className="week-card1 symptoms-card"
  style={{ backgroundImage: `url(${symptomsBg})` }}
>
  <h2>What’s Happening This Week</h2>

  {Array.isArray(weekData?.Symptoms) ? (
    <ul className="week-content list">
      {weekData.Symptoms.map((symptom, index) => (
        <li key={index}>{symptom}</li>
      ))}
    </ul>
  ) : (
    <p className="week-content">{weekData?.Symptoms}</p>
  )}
</div>


  {/* ROW 2 – Care */}
  <div
  className="week-card1 pre-card"
  style={{ backgroundImage: `url(${care})` }}
>
  <h2>Weekly Pregnancy Care Guide</h2>

  <ul className="week-content list">
    {weekData?.pregnancycare?.map((careItem, index) => (
      <li key={index}>{careItem}</li>
    ))}
  </ul>
</div>

 {/* ROW 3 – Nutrition */}
<div
  className="week-card1 food-card"
  style={{ backgroundImage: `url(${food})` }}
>
  <h2>Healthy Choices for This Week</h2>

  <h5 className="label">
    Focus: {weekData?.food?.Focus}
  </h5>

  <h5 className="label">Foods to Eat:</h5>
  <ul className="week-content list">
    {weekData?.food?.FoodsToEat?.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>

  <h5 className="label">Tips:</h5>
  <ul className="week-content list">
    {weekData?.food?.Tips?.map((tip, index) => (
      <li key={index}>{tip}</li>
    ))}
  </ul>
</div>

</div>

<div className="yoga-guide-wrapper">

  {/* Left side image + label */}
  <div className="yoga-left">
    <div className="yoga-image-circle">
  <img src={yogaImage} alt="Yoga Guide" />
    <img src={ybg1} alt="Doctor" className="second-image" />
    <img src={ybg2} alt="Doctor" className="second-image" />
  </div>


    </div>

  {/* Right side content */}
  <div className="yoga-right">
    <p>
      Gentle yoga to support you through 
      <b> every trimester🤍</b>.
      Helps with breathing, posture, and relaxation.
    </p>

    <button className="yoga-tap"
    
       onClick={() => navigate("/yoga")}
  style={{ cursor: "pointer" }}>let's start!</button>
     
  </div>

</div>
{/* 🍎 Nutrition Guide Section */}
<div className="nutrition-section">

    {/* LEFT : Text box */}
    <div className="nutrition-text-box">

      <p>
        Proper nutrition supports you and your baby through
        <b> every trimester</b>.
        Balanced meals improve energy, digestion, and growth.
      </p>
      <button className="nutri-tap">let's goooo!</button>
    </div>

    {/* RIGHT : Circle Image */}
    <div className="yoga-right1">
    <div className="nutrition-icon">
      <img src={nutritionIcon1} alt="Nutrition Guide" className="third-image" />
      <img src={nutritionIcon2} alt="Nutrition Guide" className="third-image"/>
      <img src={nutritionIcon} alt="Nutrition Guide" />
      </div>
    </div>


</div>

 
<footer className="app-footer">
  <div className="footer-container">

    <div className="footer-column">
      <h4>Bump to Baby</h4>
      <p>About us </p>
      <p>Home</p>
      <p>Services</p>
      <p>Contact Us</p>
    </div>

    <div className="footer-column">
      <h4>For Parents</h4>
      <p>Track Pregnancy</p>
      <p>Baby Growth Tools</p>
      <p>Doctor Appointment</p>
      <p>Health Articles</p>
    </div>

    <div className="footer-column">
      <h4>For Doctors</h4>
      <p>Doctor Login</p>
      <p>Add Clinic</p>
      <p>Manage Appointments</p>
    </div>

    <div className="footer-column">
      <h4>Support</h4>
      <p>Help</p>
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
    </div>

    <div className="footer-column">
      <h4>Social</h4>
      <p>Facebook</p>
      <p>Instagram</p>
      <p>LinkedIn</p>
      <p>YouTube</p>
    </div>

  </div>

  <div className="footer-bottom">
    © {new Date().getFullYear()} Bump to Baby. All rights reserved.
  </div>
</footer>
       </div>
  );
};

export default WeekHome;
