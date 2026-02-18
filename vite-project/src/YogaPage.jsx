import React from "react";
import { useNavigate } from "react-router-dom";
import "./YogaPage.css";
import yogaImg from "./assets/yoga1.png";
import yoga6 from "./assets/yoga6.png";

function YogaPage() {
  const navigate = useNavigate();

  return (
    <div className="yoga-page"  style={{ backgroundImage: `url(${yoga6})` }}>

      {/* Header */}
      <div className="yoga-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    

      {/* BIG TRIMESTER BUTTONS */}
      <div className="trimester-list">
        

        <button className="trimester-btn1"
          onClick={() => navigate("/yoga/first")}
        >
        1<sup>st</sup> Trimester
        </button>

        <button
          className="trimester-btn2"
          onClick={() => navigate("/yoga/second")}
        >
          2<sup>nd</sup> Trimester
        </button>

        <button
          className="trimester-btn3"
          onClick={() => navigate("/yoga/third")}
        >
          3<sup>rd</sup> Trimester
        </button>

      </div>
    </div>
  );
}

export default YogaPage;
