import React from "react";
import { useNavigate } from "react-router-dom";
import "./FirstTrimester.css";
import yogaImg from "./assets/yoga2.png";
import yogaImg1 from "./assets/yoga3.png";
import image1 from "./assets/pranayama1.png";
import image2 from "./assets/pranayama2.png";
import image3 from "./assets/pranayama3.png";
import neckRollImg from "./assets/neck.png";
import shoulderRollImg from "./assets/shoulder.png";
import ankleImg from "./assets/ankle.png";
import catCowImg from "./assets/catcow.png";
import balasana from "./assets/balasana.png";
import Supta from "./assets/Supta.png";
import Viparita from "./assets/Viparita.png";
import tadasanaImg from"./assets/tadasana.png";
import utkatasanaImg from "./assets/utkatasana.png";
import malasanaImg from "./assets/malasana.png";
import bhujangasanaImg from "./assets/bhujangasana.png";

function FirstTrimester() {
  const navigate = useNavigate();

  return (
    <div className="trimester-page">

      {/* TOP RIGHT BACK BUTTON */}
      <button className="back-button" onClick={() => navigate(-1)}>
        <span className="arrow">←</span>
        Back
      </button>
  
  <h2 className="greeting-title">
     Your 1st trimester yoga practice starts here.
  </h2>
  <p className="greeting-sub">
   Gentle movements. Deep breaths. Quiet strength.  </p>

    <div className="note-wrapper">
      {/* your content */}
    <div className="important-note">
  <h4>⚠️ Important Note:</h4>
  <ul>
    <li>Always consult your doctor or midwife before starting yoga, especially if:</li>
    <li>You have a high-risk pregnancy</li>
    <li>You have a history of miscarriage</li>
    <li>You are new to yoga</li>
    <li>You experience pain, dizziness, or bleeding</li>
  </ul>
</div>
 <div className="note-image">
    <img src={yogaImg} alt="Pregnancy yoga guidance" />
  </div>
</div>

<div className="first-wrapper">
  {/* LEFT SIDE IMAGE */}
  <div className="side-image">
    <img src={yogaImg1} alt="Pregnancy Yoga Illustration" />
  </div>

  {/* RIGHT SIDE CONTENT */}
  
  <div className="guiding-box">
    <h4>Guiding Principles for First Trimester Yoga:</h4>
    <ul>
      <li>Focus on gentle movement, grounding, and relaxation</li>
      <li>Avoid overheating; practice in a cool, well-ventilated space</li>
      <li>Listen closely to your body—rest whenever needed</li>
      <li>Avoid deep twists, strong core work, and abdominal compression</li>
      <li>Do not overstretch; pregnancy hormones loosen ligaments</li>
    </ul>
  </div>
<div className="daily-practice">
  <h3>Recommended Daily Practice Time</h3>

  <ul>
    <li>15–20 minutes per day</li>
    <li>Practice on an empty stomach</li>
    <li>Preferably morning or early evening</li>
  </ul>
</div>
</div>

<div className="section-heading">
  <div className="heading-line">
    <span className="line1"></span>
    <h2>Here You Go</h2>
    <span className="line2"></span>
  </div>

  <p className="divider-sub">
    Safe, Gentle &amp; Supportive Practices (Weeks 1–12)
  </p>
</div>
<div className="content-wrapper">
<div className="exercise-section">
  <h2>1. Breathing & Centering (Pranayama)</h2>
  <div className="exercise-images">
  <img src={image1} alt="Pranayama 1" />
  <img src={image2} alt="Pranayama 2" />
  <img src={image3} alt="Pranayama 3" />
</div>

<div className="exercise-row">
  {/* Deep Belly Breathing */}
  <div className="exercise-card">
    <h3>A. Deep Belly Breathing</h3>

    <div className="exercise-sub">
      <h4>How to Do</h4>
      <ul>
        <li>Sit comfortably with your spine straight</li>
        <li>Place one or both hands on your belly</li>
        <li>Inhale slowly through the nose, allowing the belly to expand</li>
        <li>Exhale gently, letting the belly relax</li>
        <li>Keep your shoulders relaxed and breath soft</li>
      </ul>
    </div>

    <div className="exercise-sub">
      <h4>Duration</h4>
      <p>5–10 slow breaths. Repeat 2–3 times a day if needed</p>
    </div>

    <div className="exercise-sub">
      <h4>Benefits</h4>
      <ul>
        <li>Reduces stress and anxiety</li>
        <li>Helps manage nausea</li>
        <li>Improves oxygen flow to mother and baby</li>
      </ul>
    </div>
  </div>

  {/* Equal Breathing */}
  <div className="exercise-card">
    <h3>B. Equal Breathing (Sama Vritti)</h3>

    <div className="exercise-sub">
      <h4>How to Do</h4>
      <ul>
        <li>Inhale through the nose for 4 counts</li>
        <li>Exhale through the nose for 4 counts</li>
        <li>Keep the breath smooth, steady, and relaxed</li>
        <li>Maintain a calm posture</li>
      </ul>
    </div>

    <div className="exercise-sub">
      <h4>Duration</h4>
      <p>5–8 rounds</p>
    </div>

    <div className="exercise-sub">
      <h4>Benefits</h4>
      <ul>
        <li>Balances the nervous system</li>
        <li>Improves focus and emotional stability</li>
        <li>Promotes a sense of calm and control</li>
      </ul>
    </div>
    </div>
    
  </div>
 <div className="warmup-section">

  <h2 className="warmup-title">2. Gentle Warm-Up Movements</h2>

  <div className="warmup-cross">

    {/* 1 */}
    <div className="warmup-card">
      <h3>Neck Rolls</h3>
      <h4>How to Do</h4>
      <ul>
        <li>Slowly roll the head in gentle circles</li>
      </ul>
      <h4>Duration</h4>
      <p>5 circles each side</p>
      <h4>Benefits</h4>
      <ul>
        <li>Relieves neck stiffness and tension</li>
      </ul>
    </div>

    <div className="warmup-img">
      <img src={neckRollImg} alt="Neck Rolls" />
    </div>

    {/* 2 */}
    <div className="warmup-img">
      <img src={shoulderRollImg} alt="Shoulder Rolls" />
    </div>

    <div className="warmup-card">
      <h3>Shoulder Rolls</h3>
      <h4>How to Do</h4>
      <ul>
        <li>Roll shoulders forward and backward slowly</li>
      </ul>
      <h4>Duration</h4>
      <p>5–10 rounds</p>
      <h4>Benefits</h4>
      <ul>
        <li>Releases upper-body tension</li>
        <li>Improves posture</li>
      </ul>
    </div>

    {/* 3 */}
    <div className="warmup-card">
      <h3>Ankle Circles</h3>
      <h4>How to Do</h4>
      <ul>
        <li>Sit comfortably and rotate ankles</li>
      </ul>
      <h4>Duration</h4>
      <p>10 rounds each ankle</p>
      <h4>Benefits</h4>
      <ul>
        <li>Improves blood circulation</li>
        <li>Reduces swelling in feet</li>
      </ul>
    </div>

    <div className="warmup-img">
      <img src={ankleImg} alt="Ankle Circles" />
    </div>

    {/* 4 */}
    <div className="warmup-img">
      <img src={catCowImg} alt="Cat Cow Pose" />
    </div>

    <div className="warmup-card">
      <h3>Cat–Cow Pose</h3>
      <h4>How to Do</h4>
      <ul>
        <li>Come onto hands and knees</li>
        <li>Inhale, arch the back (Cow)</li>
        <li>Exhale, round the spine (Cat)</li>
      </ul>
      <h4>Rounds</h4>
      <p>5–8 slow rounds</p>
      <h4>Benefits</h4>
      <ul>
        <li>Relieves back pain</li>
        <li>Improves spinal flexibility</li>
        <li>Aids digestion</li>
      </ul>
    </div>
</div>
</div>
<div className="asana-section">
  <h2 className="asana-title">3. Safe & Beneficial Asanas</h2>
     <div className="asana-image-row">
      
    <img src={balasana} alt="Balasana" />
    <img src={Supta} alt="Supta Baddha Konasana" />
    <img src={Viparita} alt="viparita karani" />
  </div>

  <div className="asana-grid">

    <div className="asana-card">
      <h3>Balasana (Child’s Pose – Wide Knee)</h3>

      <h4>How to Do</h4>
      <ul>
        <li>Kneel with knees wide apart</li>
        <li>Lower hips back and rest torso forward</li>
        <li>Support head with block or blanket</li>
      </ul>

      <h4>Duration</h4>
      <p>1–2 minutes</p>

      <h4>Benefits</h4>
      <ul>
        <li>Relieves fatigue</li>
        <li>Calms nervous system</li>
        <li>Stretches back gently</li>
      </ul>
    </div>

    <div className="asana-card">
      <h3>Supta Baddha Konasana (Supported)</h3>

      <h4>How to Do</h4>
      <ul>
        <li>Lie back with pillows or bolsters</li>
        <li>Soles of feet together</li>
        <li>Support knees with cushions</li>
      </ul>

      <h4>Duration</h4>
      <p>2–3 minutes</p>

      <h4>Benefits</h4>
      <ul>
        <li>Opens hips gently</li>
        <li>Deep relaxation</li>
        <li>Improves circulation</li>
      </ul>
    </div>

    <div className="asana-card">
      <h3>Viparita Karani (Gentle)</h3>

      <h4>How to Do</h4>
      <ul>
        <li>Legs resting against wall</li>
        <li>Support hips with cushion</li>
      </ul>

      <h4>Duration</h4>
      <p>1–3 minutes</p>

      <h4>Benefits</h4>
      <ul>
        <li>Reduces leg swelling</li>
        <li>Relieves tiredness</li>
        <li>Improves blood flow</li>
      </ul>
    </div>

    <div className="asana-cross">

  {/* Row 1 */}
  <div className="asana-row">
    <div className="asana-img">
      <img src={tadasanaImg} alt="Tadasana" />
    </div>

    <div className="asana-card1">
      <h3>Tadasana (Mountain Pose)</h3>

      <h4>How to Do</h4>
      <ul>
        <li>Stand tall, feet hip-width</li>
        <li>Relax shoulders, spine straight</li>
      </ul>

      <h4>Duration</h4>
      <p>5–8 breaths</p>

      <h4>Benefits</h4>
      <ul>
        <li>Improves posture</li>
        <li>Enhances balance</li>
      </ul>
    </div>
  </div>

  {/* Row 2 (reverse) */}
  <div className="asana-row reverse">
    <div className="asana-img">
      <img src={utkatasanaImg} alt="Utkatasana" />
    </div>

    <div className="asana-card1">
      <h3>Utkatasana (Chair Pose – Gentle)</h3>

      <h4>How to Do</h4>
      <ul>
        <li>Bend knees slightly</li>
        <li>Chest open, spine straight</li>
      </ul>

      <h4>Duration</h4>
      <p>3–5 breaths</p>

      <h4>Benefits</h4>
      <ul>
        <li>Strengthens legs</li>
        <li>Improves stability</li>
      </ul>
    </div>
  </div>

  {/* Row 3 */}
  <div className="asana-row">
    <div className="asana-img">
      <img src={malasanaImg} alt="Malasana" />
    </div>

    <div className="asana-card1">
      <h3>Malasana (Supported Squat)</h3>

      <h4>How to Do</h4>
      <ul>
        <li>Squat with feet wide</li>
        <li>Support heels with blocks</li>
      </ul>

      <h4>Duration</h4>
      <p>20–30 seconds</p>

      <h4>Benefits</h4>
      <ul>
        <li>Opens hips gently</li>
        <li>Improves pelvic flexibility</li>
      </ul>
    </div>
  </div>

  {/* Row 4 (reverse) */}
  <div className="asana-row reverse">
    <div className="asana-img1">
      <img src={bhujangasanaImg} alt="Bhujangasana" />
    </div>

    <div className="asana-card1">
      <h3>Bhujangasana (Low Cobra – Optional)</h3>

      <h4>How to Do</h4>
      <ul>
        <li>Lie on stomach</li>
        <li>Lift chest gently while inhaling</li>
      </ul>

      <h4>Duration</h4>
      <p>3–5 breaths</p>

      <h4>Benefits</h4>
      <ul>
        <li>Strengthens spine</li>
        <li>Reduces back discomfort</li>
      </ul>
    </div>
  </div>
</div>
</div>
</div>

</div>
</div></div>
  );
}

export default FirstTrimester;

