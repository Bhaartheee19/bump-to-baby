import React, { useState, useRef ,useEffect} from "react";
import Modal from "react-modal";
import "./HomePage.css";
import StatsBox from "./StatsBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";



import PersonalDetails from "./PersonalDetails"; 
import d1 from "./assets/d1.png";
import d2 from "./assets/d2.png";
import d3 from "./assets/d3.png";
import d4 from "./assets/d4.png";
import momImage from "./assets/p1.jpg";
import newLogo from "./assets/mylogo1.png";
import doctorImg from "./assets/doctor.png";
import logo from "./assets/mylogo.png";
import tool1 from "./assets/tool1.png";
import tool2 from "./assets/tool2.png";
import tool3 from "./assets/tool3.png";
import tool4 from "./assets/tool4.png";
import tool5 from "./assets/tool5.png";



import { ChevronRight, ChevronLeft } from "lucide-react";

// Required for react-modal
Modal.setAppElement("#root");

const HomePage = () => {

  // 🔹 STATES FIRST
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPersonalForm, setShowPersonalForm] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // 🔹 REFS
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const scrollRef = useRef(null);

  const navigate = useNavigate();

  // 🔹 AUTO SLIDE


  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };


  // ✅ Your pregnancy weeks dataset
  const weeks = [
    { week: 1, icon: "🔍" },
    { week: 2, icon: "🧬" },
    { week: 3, icon: "✂️" },
    { week: 4, icon: "🥚" },
    { week: 5, icon: "🍉" },
    { week: 6, icon: "🐛" },
    { week: 7, icon: "🫐" },
    { week: 8, icon: "🍓" },
    { week: 9, icon: "🥝" },
    { week: 10, icon: "🍆" },
    { week: 11, icon: "🍅" },
    { week: 12, icon: "🥝" },
    { week: 13, icon: "🍊" },
    { week: 14, icon: "🍓" },
    { week: 15, icon: "🍐" },
    { week: 16, icon: "🥑" },
    { week: 17, icon: "🧅" },
    { week: 18, icon: "🥒" },
    { week: 19, icon: "🥭" },
    { week: 20, icon: "🍑" },
    { week: 21, icon: "🍌" },
    { week: 22, icon: "🍉" },
    { week: 23, icon: "🥕" },
    { week: 24, icon: "🌽" },
    { week: 25, icon: "🍆" },
    { week: 26, icon: "🍈" },
    { week: 27, icon: "🥬" },
    { week: 28, icon: "🥦" },
    { week: 29, icon: "🍄" },
    { week: 30, icon: "🥕" },
    { week: 31, icon: "🥥" },
    { week: 32, icon: "🍋" },
    { week: 33, icon: "🍗" },
    { week: 34, icon: "🍍" },
    { week: 35, icon: "🥬" },
    { week: 36, icon: "🥕" },
    { week: 37, icon: "🍊" },
    { week: 38, icon: "🍉" },
    { week: 39, icon: "🍐" },
    { week: 40, icon: "🎃" },
    { week: 41, icon: "🍈" },
    { week: 42, icon: "🍉" },
  ];

  

  return (
    <>
      {/* ================= HOME TOP SECTION ================= */}
    <header className="home-header">
        <div className="logo-section">
           <img src={logo} alt="Bump to Baby Logo" className="logo-img" />
           <h1 className="logo-text">Bump to Baby</h1>
        </div>

      {/* 🌟 NEW NAV MENU ADDED HERE */}
       <nav className="nav-menu">
  <span className="nav-link" onClick={() => homeRef.current.scrollIntoView({ behavior: "smooth" })}>Home</span>
  <span className="nav-link" onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}>About Us</span>
  <span className="nav-link" onClick={() => servicesRef.current.scrollIntoView({ behavior: "smooth" })}>Services</span>

</nav>


      <div className="auth-buttons">
       <button className="login-btn" onClick={() => setIsLoginOpen(true)}>
        Login
       </button>
      </div>
    </header>

      <main ref={homeRef} className="home-content">
         <div className="home-left"> <img src={momImage} className="home-img" alt="Pregnancy" /> 
         </div>
         <div className="home-right">
           <h1 className="welcome-text"> 
            Welcome! <br />
            We're here to support your pregnancy
           </h1>
            <p className="intro-text"> 
            Join <strong>Bump to Baby</strong> in less than a minute and discover why
            expecting parents love our smart, caring pregnancy support. <br /><br/> 
            From daily tips to milestone tracking — everything you need, beautifully in one place. 
            </p> 
           
            {/* ✅ Get Started button */}
            <button className="get-start-btn" onClick={() => setIsSignupOpen(true)}> 
              Get Started → 
            </button> 
            </div>
      </main>
          

      {/* ================= TOOLS SECTION ================= */}
      <section ref={servicesRef} className="tools-section">
        <h2 className="tools-title">Find more tools in our app</h2>
        <p className="tools-subtitle">All pregnancy tools you need</p>

        <div className="tools-container">
          <div className="tool-card"><img src={tool1} /><p>🩺 Symptom Tracking</p></div>
          <div className="tool-card"><img src={tool2} /><p>🔔 Notifications</p></div>
          <div className="tool-card"><img src={tool3} /><p>✔️ Checklist</p></div>
          <div className="tool-card"><img src={tool4} /><p>📈 Progress</p></div>
          <div className="tool-card"><img src={tool5} /><p>📅 Doctor</p></div>
        </div>
      </section>

          {/* ================= WEEK BY WEEK SECTION ================= */}
<section className="weeks-section">
  <h2 className="weeks-title">
    Explore more in your pregnancy week-by-week
  </h2>

  <div className="weeks-wrapper">

    {/* Scroll container */}
    <div
      className="weeks-scroll"
      id="weeksScroll"
      onScroll={() => {
        const scrollBox = document.getElementById("weeksScroll");
        const leftArrow = document.getElementById("leftArrow");
        const rightArrow = document.getElementById("rightArrow");

        // Show LEFT arrow only when not at start
        if (scrollBox.scrollLeft > 10) {
          leftArrow.style.opacity = "1";
          leftArrow.style.pointerEvents = "auto";
        } else {
          leftArrow.style.opacity = "0";
          leftArrow.style.pointerEvents = "none";
        }

        // Hide RIGHT arrow when at end
        if (
          scrollBox.scrollLeft + scrollBox.clientWidth >=
          scrollBox.scrollWidth - 10
        ) {
          rightArrow.style.opacity = "0";
          rightArrow.style.pointerEvents = "none";
        } else {
          rightArrow.style.opacity = "1";
          rightArrow.style.pointerEvents = "auto";
        }
      }}
    >
      {weeks.map((item) => (
  <div
    key={item.week}
    className="week-card"
    onClick={() => setIsLoginOpen(true)}   // ✅ triggers login popup
  >
    <div className="week-icon">{item.icon}</div>
    <p className="week-text">Pregnancy</p>
    <p className="week-number">Week {item.week}</p>
  </div>
))}

    </div>

    {/* LEFT ARROW */}
    <button
      className="scroll-arrow left"
      id="leftArrow"
      style={{ opacity: 0, pointerEvents: "none" }}
      onClick={() => {
        document.getElementById("weeksScroll").scrollLeft -= 200;
      }}
    >
      <ChevronRight className="arrow-icon" style={{ transform: "rotate(180deg)" }} />
    </button>

    {/* RIGHT ARROW */}
    <button
      className="scroll-arrow right"
      id="rightArrow"
      onClick={() => {
        document.getElementById("weeksScroll").scrollLeft += 200;
      }}
    >
      <ChevronRight className="arrow-icon" />
    </button>

  </div>
</section>

    

   {/* --- Doctor Appointment Section --- */}
<section className="doctor-section">

  <div className="doctor-left">
    <h2 className="doctor-title">
      Make An Appointment  
      <br />With A Doctor To Find A  
      <br />Solution To Your Problem
    </h2>

    <p className="doctor-desc">
      Connect with board-certified physicians anytime, anywhere.  
      Our platform lets you consult doctors in real-time and  
      receive expert medical advice instantly.
    </p>

    <button
  className="doctor-btn"
  onClick={() => setIsLoginOpen(true)}
>
  Learn More
</button>


      </div>

  <div className="doctor-right">
    <img src={doctorImg} alt="Doctor" className="doctor-img" />
  </div>

</section>
<StatsBox />
{/* ================= DOCTOR APPOINTMENT SECTION (GYNECOLOGY ONLY) ================= */}
<section className="doctor-sec">
  <h2 className="doctor-title">Consult a Women’s Health Specialist</h2>
  <p className="doctor-subtitle">Gynecologists • Obstetricians • Prenatal Experts</p>

  <div className="doctor-grid">
    {[
      {
        name: "Dr.J.Meera Suresh",
        specialty: "Gynecologist & Obstetrician",
        desc: "Expert in prenatal care and women's reproductive health",
        rating: 4.9,
        img:d1
      },
      {
        name: "Dr.M.Priya Raman",
        specialty: "Fertility & IVF Specialist",
        desc: "Specialized in fertility treatments and IVF guidance",
        rating: 4.8,
        img: d2
      },
      {
        name: "Dr. A.Kavitha Senthil",
        specialty: "High-Risk Pregnancy Specialist",
        desc: "Focused on complex pregnancy complications",
        rating: 4.7,
        img: d3
      },
      {
        name: "Dr.  C. Geetha Haripriya",
        specialty: "High-Risk Pregnancy Specialist",
        desc: "Focused on complex pregnancy complications",
        rating: 4.7,
        img:d4
      }
    ].map((doc, index) => (
      <div className="doctor-card new-style" key={index}>
        <img src={doc.img} alt={doc.name} className="doctor-img styled" />

        <div className="doctor-info">
          <h3 className="doctor-name">{doc.name}</h3>
          <p className="doctor-specialty">{doc.specialty}</p>
          <p className="doctor-desc">{doc.desc}</p>

          <div className="doctor-rating">⭐ {doc.rating}</div>

          <button className="doctor-book-btn">Book Appointment</button>
        </div>
      </div>
    ))}
  </div>
</section>
<div className="doctor-info-section">
  <h2>Get to Know Your Doctor & Maternity Guidance</h2>
  <p>
    Learn more about our experienced doctors and receive expert guidance
    throughout your maternity journey. Log in to the website to access
    personalized care, book appointments, track pregnancy progress, and
    get continuous support from trusted specialists.
  </p>
</div>





      {/* MODALS BELOW (unchanged) */}
      <Modal
  isOpen={isLoginOpen}
  onRequestClose={() => setIsLoginOpen(false)}
  className="modal"
  overlayClassName="modal-overlay"
>
  <h2 className="login-title">
    Login to <img src={newLogo} alt="Logo" className="inline-logo" />
  </h2>

  <form
    className="modal-form"
    onSubmit={async (e) => {
      e.preventDefault();

       console.log("🚀 Login button clicked");
       console.log("📤 Sending login:", email, password);


      try {
        const res = await axios.post("http://localhost:5000/login", {
          email,
          password,
        });

        alert(res.data.message);

console.log("Logged user:", res.data.user);

// 🔥 STORE USER ID
localStorage.setItem("userId", res.data.user.id);

// 🔥 NAVIGATE TO WEEK HOME
navigate("/week-home");

setIsLoginOpen(false);

      } catch (err) {
        alert(err.response?.data?.message || "Login failed");
      }
    }}
  >
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />

    <p className="forgot-text">Forgot Password?</p>
   


    <button type="submit" className="submit-btn">
      Login
    </button>

    <p className="signup-inline-text">
      Don’t have an account?
      <span
        className="signup-inline-link"
        onClick={() => {
          setIsLoginOpen(false);
          setIsSignupOpen(true);
        }}
      >
        Sign Up
      </span>
    </p>
  </form>
</Modal>


    <Modal
  isOpen={isSignupOpen}
  onRequestClose={() => setIsSignupOpen(false)}
  className="modal"
  overlayClassName="modal-overlay"
>
  <h2 className="signup-title">
    Sign up to <img src={newLogo} alt="Logo" className="inline-logo" />
  </h2>

  <form
    className="modal-form"
    onSubmit={async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const res = await axios.post("http://localhost:5000/signup", {
      email,
      password,
    });

    alert(res.data.message);

    localStorage.setItem("userId", res.data.userId);
    console.log("✅ userId saved:", res.data.userId);

    // 🔥 FIX ORDER
    setShowPersonalForm(true);

    setTimeout(() => {
      setIsSignupOpen(false);
    }, 100);

  } catch (err) {
    alert(err.response?.data?.message || "Signup failed");
  }
}}
  >
  

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />

    <input
      type="password"
      placeholder="Confirm Password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      required
    />

    <button type="submit" className="submit-btn">
      Next
    </button>
  </form>
</Modal>
{/* PERSONAL DETAILS POPUP */}
{showPersonalForm && (
  <PersonalDetails onClose={() => setShowPersonalForm(false)} />

)}

      {/* ================= FOOTER SECTION ================= */}
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

    </>
  );
};


export default HomePage;


