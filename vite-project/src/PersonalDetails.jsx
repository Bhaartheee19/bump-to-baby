import React, { useState } from "react";
import "./PersonalDetails.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const PersonalDetails = ({  onClose }) => {
  
  const storedUserId = Number(localStorage.getItem("userId"));

  console.log("🧠 userId from localStorage:", storedUserId);

  if (!storedUserId) {
    alert("Please signup or login first");
    return null;
  }

  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [lmp, setLmp] = useState("");
  const [weeks, setWeeks] = useState(null);
  const [dueDate, setDueDate] = useState("");
  


  // ✅ Age calculation
  const calculateAge = (date) => {
    const birthDate = new Date(date);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(Number(age));
  };

  // ✅ Pregnancy calculation
  const calculatePregnancy = (lmpDate) => {
  // 🛑 Step 1: empty check
  if (!lmpDate) {
    console.log("❌ LMP is empty");
    return;
  }

  const lmpObj = new Date(lmpDate);

  // 🛑 Step 2: invalid date check
  if (isNaN(lmpObj.getTime())) {
    console.log("❌ Invalid LMP date:", lmpDate);
    return;
  }

  const today = new Date();

  // ✅ weeks calculation
  const diffTime = today - lmpObj;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const pregnancyWeeks = Math.floor(diffDays / 7);
  setWeeks(pregnancyWeeks);

  // ✅ due date calculation
  const due = new Date(lmpObj);
  due.setDate(due.getDate() + 280);

  const formattedDue = due.toISOString().split("T")[0];
  setDueDate(formattedDue);

  console.log("✅ Due Date:", formattedDue);
};

const navigate = useNavigate();

  

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!lmp || !dueDate) {
    alert("Please select LMP correctly");
    return;
  }


    console.log("🩺 LMP Value:", lmp); 
  const payload = {
    user_id: Number(storedUserId),
    full_name: e.target.name.value,
    dob,
    age: Number(age),
    gender: e.target.gender.value,
    lmp,                     // 🔥 MOST IMPORTANT
    expected_due_date: dueDate
  };

  console.log("📤 Sending to backend:", payload);

  try {
    const res = await axios.post(
      "http://localhost:5000/personal-details",
      payload
    );

    console.log("✅ Backend response:", res.data);

    alert(res.data.message);
    onClose();
    navigate("/week-home");

  } catch (err) {
    console.error("❌ Error:", err.response?.data || err);
    alert(err.response?.data?.error || "Failed to save personal details");
  }
};



  return (
    <div className="modal">
      <h2>Personal Details</h2>

      <form onSubmit={handleSubmit} className="modal-form">
        <input name="name" placeholder="Full Name" required />

        <input
          type="date"
          required
          onChange={(e) => {
            setDob(e.target.value);
            calculateAge(e.target.value);
          }}
        />

        <input value={age} placeholder="Age" readOnly />

        <div className="radio-group">
          <label>
            <input type="radio" name="gender" value="Female" required /> Female
          </label>
        </div>

        <label className="form-label">Last Menstrual Period (LMP)</label>
        <input
          type="date"
          value={lmp}
          onChange={(e) => {
            setLmp(e.target.value);
            calculatePregnancy(e.target.value);
          }}
          required
        />
{weeks !== null && (
  <div className="pregnancy-result">

    {/* Congratulations */}
    <div className="result-box">
      <p className="congrats-text">🎉 Congratulations! You’re on a beautiful journey towards motherhood 💕</p>
    </div>
    
    <div className="result-box">
      <div className="icon">🤰</div>
      <div className="text">
        <span className="value">you're {weeks} weeks pregnant</span>
      </div>
    </div>
  </div>
)}

        <button type="submit">Create account</button>
      </form>
    </div>
  );
};

export default PersonalDetails;
