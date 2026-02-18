import React from "react";
import { useNavigate } from "react-router-dom";
import "./ThirdTrimester.css";


import intro from "./assets/third.png";
import guid from "./assets/guid.png";
import deep from "./assets/deep.png";
import golden from "./assets/golden.png";
import bee from "./assets/bee.png";
import neck from "./assets/neck.png";
import shoulder from "./assets/shoulder.png";
import ankle from "./assets/ankle.png";
import pelvic from "./assets/pelvic.png";
import mala from "./assets/Mala.png";
import baddha from "./assets/Baddha.png";
import catcow from "./assets/catcow.png";
import pelvic1 from "./assets/tilt.png";
import goddess from "./assets/god.png";
import sidelying from "./assets/side.png";




function ThirdTrimester() {
  const navigate = useNavigate();

  return (
    <div className="third-container">

      {/* Back Button */}
      <button className="third-back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Title */}
      <h1 className="third-title">
        Safe and Supportive Yoga for the Final Phase of Pregnancy
      </h1>
      <p className="third-intro">
        In the third trimester, yoga focuses on labor preparation, pelvic
        support, comfort, and calming the mind. Movements should be slow,
        supported, and intentional.(Weeks 28–40)
      </p>

      {/* Important Reminder */}
      <div className="third-wrapper">
      <div className="third-warning-box">
        <h2>⚠️ Important Reminder</h2>
        <ul>
          <li>Consult your doctor or midwife</li>
          <li>Only gentle, slow movements</li>
          <li>Avoid lying flat on your back</li>
          <li>Use props: pillows, blocks, chairs, wall</li>
          <li>Practice in a cool, ventilated room</li>
          <li>Stop if pain, dizziness, or discomfort occurs</li>
          <li>Yoga is for support, not performance</li>
        </ul>
      </div>
      <div className="third-image">
        <img src={intro} alt="third trimester yoga" />
        </div>
      </div>


      {/* Guiding Principles */}
      <div className="third-wrapper">
        <div className="third-image">
        <img src={guid} alt="guid yoga" />
        </div>
      <div className="third-section">
        <h2>Guiding Principles</h2>
        <ul>
          <li>Comfort, space, and relaxation</li>
          <li>Slow and mindful movement</li>
          <li>Generous use of props</li>
          <li>Breathing and pelvic opening</li>
          <li>Rest whenever needed</li>
        </ul>
      </div>
      <div className="third-time-box">
        <h2>Recommended Practice Time</h2>
        <ul>
          <li>20–30 minutes per day</li>
          <li>10–15 min movement</li>
          <li>10–15 min breathing & relaxation</li>
          <li>Morning – best for energy and freshness</li>
          <li>Early evening</li>
        </ul>
      </div>
      </div>

      

      <div className="third-section1">
  <h2>Breathing Practices</h2>

  <div className="third-card-grid">

    {/* ROW 1 – Images */}
    <div className="third-image-row">
      <img src={deep} alt="deep yoga" />
      <img src={golden} alt="golden yoga" />
      <img src={bee} alt="bee yoga" />
    </div>

    {/* ROW 2 – Cards */}
    <div className="third-card-row">
      <div className="third-card">
        <h3>Deep Belly Breathing</h3>
        <h4>How to Do:</h4>
        <ul>
          <li>Sit comfortably or side-lying</li>
          <li>Place hands on belly and ribs</li>
          <li>Inhale slowly through the nose</li>
          <li>Exhale gently through the mouth</li>
        </ul>

        <h4>Duration:</h4>
        <ul><li>5–10 breaths</li></ul>

        <h4>Benefits:</h4>
        <ul>
          <li>Calms nervous system</li>
          <li>Improves oxygen flow</li>
          <li>Reduces anxiety</li>
        </ul>
      </div>

      <div className="third-card">
        <h3>Golden Thread Breath</h3>
        <h4>How to Do:</h4>
        <ul>
          <li>Inhale through the nose</li>
          <li>Exhale slowly through pursed lips</li>
        </ul>

        <h4>Duration:</h4>
        <ul><li>5 rounds</li></ul>

        <h4>Benefits:</h4>
        <ul>
          <li>Helps manage contractions</li>
          <li>Builds patience for labor</li>
        </ul>
      </div>

      <div className="third-card">
        <h3>Bhramari (Humming Bee)</h3>
        <h4>How to Do:</h4>
        <ul>
          <li>Inhale deeply</li>
          <li>Exhale with a soft “mmm” sound</li>
        </ul>

        <h4>Duration:</h4>
        <ul><li>5 rounds</li></ul>

        <h4>Benefits:</h4>
        <ul>
          <li>Relaxes the mind</li>
          <li>Soothes baby</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    {/* Warm-Up */}
<div className="third-warmup">
  <h2>Gentle Warm-Up</h2>

  <div className="third-warmup-row">
    <div className="third-warmup-card">
      <img src={neck} alt="Neck Rolls" />
      <h4>Neck Rolls</h4>
      <p>5 rounds</p>
    </div>

    <div className="third-warmup-card">
      <img src={shoulder} alt="Shoulder Rolls" />
      <h4>Shoulder Rolls</h4>
      <p>5 rounds</p>
    </div>

    <div className="third-warmup-card">
      <img src={ankle} alt="Ankle Circles" />
      <h4>Ankle Circles</h4>
      <p>5 each side</p>
    </div>

    <div className="third-warmup-card">
      <img src={pelvic} alt="Pelvic Circles" />
      <h4>Pelvic Circles</h4>
      <p>5 rounds</p>
    </div>

    <div className="third-warmup-card">
      <img src={catcow} alt="Cat Cow Pose" />
      <h4>Cat–Cow</h4>
      <p>5 gentle rounds</p>
    </div>
  </div>
</div>


      {/* Asanas */}
      <div className="tt-asana-section">

      <h2 className="tt-asana-title">
        🌼 Safe & Beneficial Asanas
      </h2>

      {/* 1. Supported Malasana */}
      <div className="tt-zigzag-row">
        <div className="tt-asana-card">
          <h3>Supported Malasana (Squat)</h3>
          <h4>How to Do:</h4>
          <ul>
            <li>Feet wide, toes slightly out</li>
            <li>Use blocks or stool under hips</li>
            <li>Hold wall or chair for support</li>
          </ul>
          <p><strong>Duration:</strong> 30–60 seconds</p>
          <p className="tt-benefit">
           <strong> Opens pelvic outlet, prepares body for labor, strengthens legs</strong>
          </p>
        </div>
        <img src={mala} alt="Supported Malasana" />
      </div>

      {/* 2. Baddha Konasana */}
      <div className="tt-zigzag-row reverse">
        <img src={baddha} alt="Baddha Konasana" />
        <div className="tt-asana-card">
          <h3>Baddha Konasana (Supported)</h3>
          <h4>How to Do:</h4>
          <ul>
            <li>Sit on a folded blanket</li>
            <li>Soles of feet together</li>
            <li>Support knees with cushions</li>
          </ul>
          <p><strong>Duration:</strong> 1–2 minutes</p>
          <p className="tt-benefit">
           <strong> Opens hips, improves pelvic flexibility</strong>
          </p>
        </div>
      </div>

      {/* 3. Cat–Cow */}
      <div className="tt-zigzag-row">
        <div className="tt-asana-card">
          <h3>Cat–Cow (Gentle)</h3>
          <h4>How to Do:</h4>
          <ul>
            <li>On hands and knees</li>
            <li>Inhale: lift chest slightly</li>
            <li>Exhale: round the spine</li>
          </ul>
          <p><strong>Rounds:</strong> 5</p>
          <p className="tt-benefit">
            <strong>Reduces lower back pain, encourages optimal baby position</strong>
          </p>
        </div>
        <img src={catcow} alt="Cat Cow Pose" />
      </div>

      {/* 4. Pelvic Tilts */}
      <div className="tt-zigzag-row reverse">
        <img src={pelvic1} alt="Pelvic Tilts" />
        <div className="tt-asana-card">
          <h3>Pelvic Tilts</h3>
          <h4>How to Do:</h4>
          <ul>
            <li>Standing or on all fours</li>
            <li>Gently tilt pelvis forward and back</li>
          </ul>
          <p><strong>Duration:</strong> 5–10 rounds</p>
          <p className="tt-benefit">
            <strong>Relieves pelvic pressure, eases lower back tension</strong>
          </p>
        </div>
      </div>

      {/* 5. Goddess Pose */}
      <div className="tt-zigzag-row">
        <div className="tt-asana-card">
          <h3>Goddess Pose (Gentle)</h3>
          <h4>How to Do:</h4>
          <ul>
            <li>Wide stance, knees bent</li>
            <li>Hands at heart center</li>
          </ul>
          <p><strong>Hold:</strong> 3–5 breaths</p>
          <p className="tt-benefit">
            <strong>Strengthens thighs, improves endurance for labor</strong>
          </p>
        </div>
        <img src={goddess} alt="Goddess Pose" />
      </div>

      {/* 6. Side-Lying Rest */}
      <div className="tt-zigzag-row reverse">
        <img src={sidelying} alt="Side Lying Rest" />
        <div className="tt-asana-card">
          <h3>Side-Lying Rest (Left Side)</h3>
          <h4>How to Do:</h4>
          <ul>
            <li>Lie on left side</li>
            <li>Pillow between knees</li>
            <li>Pillow under head and belly</li>
          </ul>
          <p><strong>Duration:</strong> 5–10 minutes</p>
          <p className="tt-benefit">
           <strong> Improves circulation, deep relaxation, best resting position</strong>
          </p>
        </div>
      </div>

    </div>

     <div className="third-warning-row">

  {/* Avoid */}
  <div className="third-danger-box">
    <h3>❌ Yoga Practices to Avoid</h3>
    <ul>
      <li>Lying flat on the back</li>
      <li>Deep twists or backbends</li>
      <li>Strong abdominal work</li>
      <li>Fast or jumping movements</li>
      <li>Hot yoga</li>
      <li>Advanced inversions</li>
    </ul>
  </div>

  {/* Stop */}
  <div className="third-stop-box">
    <h3>🛑 Stop Immediately If You Feel</h3>
    <ul>
      <li>Sharp pain or pelvic pressure</li>
      <li>Dizziness or breathlessness</li>
      <li>Fluid leakage</li>
      <li>Reduced fetal movement</li>
    </ul>
  </div>

</div>


    </div>
  );
}

export default ThirdTrimester;
