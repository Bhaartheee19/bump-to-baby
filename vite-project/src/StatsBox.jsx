import React from "react";
import "./StatsBox.css";

const StatsBox = () => {
  const stats = [
    { number: "5+", label1: "Years of", label2: "Trusted Care" },
    { number: "300+", label1: "Happy", label2: "Pregnant Moms" },
    { number: "20+", label1: "Certified", label2: "Health Experts" },
    { number: "500+", label1: "Satisfied", label2: "Clients" }, 
];


  return (
    <div className="stats-container">
      {stats.map((item, index) => (
        <div className="stats-item" key={index}>
          <span className="stats-number">{item.number}</span>

          <div className="stats-text">
            <div>{item.label1}</div>
            <div>{item.label2}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsBox;

