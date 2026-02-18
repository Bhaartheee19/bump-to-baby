import React from "react";
import { useNavigate } from "react-router-dom";
import "./SecondTrimester.css";

// images (replace with your actual assets)
import yogaImg from "./assets/yoga5.png";
import yogaImg1 from "./assets/yo.png";
import Dirga from "./assets/Dirga.png";
import pranayama2 from "./assets/pranayama2.png";
import shoulder from "./assets/shoulder.png";
import neck from "./assets/neck.png";
import hipcir from "./assets/hipcir.png";
import catcow from "./assets/catcow.png";
import utkatasana from "./assets/utkatasana.png";
import warrior2 from "./assets/warrior2.png";
import Malasana from "./assets/Malasana.png";
import trikonasana from "./assets/trikonasana.png";
import Baddha from "./assets/Baddha.png";
import Goddess from "./assets/god.png";
import thread from "./assets/thread.png";
import side from "./assets/side.png";
import Viparita from "./assets/Viparita.png";



function SecondTrimester() {
  const navigate = useNavigate();

  return (
    <div className="trimester-page1">

      {/* Back Button */}
      <button className="back-btn1" onClick={() => navigate(-1)}>
        <span className="arrow">←</span> Back
      </button>

      {/* Heading */}
      <h2 className="greeting-title1">
        Let's Start 2nd trimester yoga practice.
      </h2>
      <p className="greeting-sub1">
        Building strength, stability & comfort (Weeks 13–27)
      </p>

      {/* Important Reminder */}
      <div className="note-wrapper1">
        <div className="important-note1">
          <h4>⚠️ Important Reminder:</h4>
          <ul>
            <li>Always practice with doctor or midwife approval</li>
            <li>Stop if you feel pain, dizziness, breathlessness, or discomfort</li>
          </ul>
        </div>

        <div className="note-image1">
          <img src={yogaImg} alt="Second trimester yoga" />
        </div>
      </div>

      {/* Guiding Principles */}
      <div className="content-wrapper1">
        <div className="side-image1">
          <img src={yogaImg1} alt="Guiding principles yoga" />
        </div>

        <div className="guiding-box1">
          <h4>Guiding Principles for Second Trimester Yoga</h4>
          <ul>
            <li>Focus on strength, stability & gentle opening</li>
            <li>Avoid deep twists and abdominal compression</li>
            <li>Avoid lying flat on your back for long periods</li>
            <li>Use props: wall, chair, blocks, bolsters</li>
            <li>Move slowly and mindfully</li>
            <li>Modify poses to allow space for the belly</li>
          </ul>
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-heading1">
        <div className="heading-line1">
          <span className="line1"></span>
          <h2>Here You Go</h2>
          <span className="line2"></span>
        </div>
        <p className="divider-sub1">
          Safe & Supportive Practices (Second Trimester)
        </p>
      </div>

      {/* Pranayama */}
      <div className="exercise-section1">
        <h2>1. Breathing Practices (Pranayama)</h2>
      
        <div className="exercise-images1">
          <img src={Dirga} alt="Dirga" />
          <img src={pranayama2} alt="Pranayama" />
        </div>

        <div className="exercise-row1">
          <div className="exercise-card1">
            <h3>Dirga Pranayama (Three-Part Breath)</h3>

            <h4>How to Do</h4>
            <ul>
              <li>Sit comfortably with straight spine</li>
              <li>Inhale into belly → ribs → chest</li>
              <li>Exhale fully in reverse order</li>
            </ul>

            <h4>Duration</h4>
            <ul>
              <li>5–8 slow cycles</li>
            </ul>
            <p>Improves oxygen supply,Calms nervous system,Reduces stress</p>
</div>
          <div className="exercise-card1">
            <h3>Ujjayi Breath (Gentle)</h3>

            <h4>How to Do</h4>
            <ul>
              <li>Breathe slowly through the nose</li>
              <li>Create soft ocean sound in throat</li>
            </ul>

            <h4>Duration</h4>
            <ul>
              <li>1–2 minutes</li>
              </ul>

            
              <p>Improves focus,Builds calm energy,Supports steady movement
            </p>
          </div>
        </div>
      </div>

      {/* Warm Up */}
      <div className="warmup-section1">
  <h2>2. Warm-Up Movements</h2>

  <div className="warmup-grid1">

    <div className="warmup-item1">
      <img src={catcow} alt="Cat Cow" />
      <h4>Cat–Cow</h4>
      <p>8–10 rounds</p>
    </div>

    <div className="warmup-item1">
      <img src={hipcir} alt="Hip Circles" />
      <h4>Hip Circles</h4>
      <p>5 rounds each side</p>
    </div>

    <div className="warmup-item1">
      <img src={shoulder} alt="Shoulder Rolls" />
      <h4>Shoulder Rolls</h4>
      <p>8–10 rounds</p>
    </div>

    <div className="warmup-item1">
      <img src={neck} alt="Neck Rolls" />
      <h4>Neck Rolls</h4>
      <p>5 gentle rounds</p>
    </div>

  </div>
</div>

      
    
    {/* 3. Beneficial Asanas */}
  <h2 className="Beneficial-title">3. Beneficial Asanas</h2>

  {/* A. For Strength & Stability */}
  <h3 className="Beneficial-subtitle">A. For Strength & Stability:</h3>

  <div className="Beneficial-zigzag">

  <div className="zigzag-row">
    <div className="Beneficial-card">
      <h3>Utkatasana (Chair Pose – Supported)</h3>
       
       <h4>How to Do</h4> 
        <ul>
          <li>Stand with feet hip-width apart</li> 
          <li>Bend knees slightly as if sitting</li> 
          <li>Use a wall or chair for support</li> 
        </ul>

       <h4>Duration</h4> 
        <ul> 
          <li>Hold for 3–5 breaths</li> 
        </ul> 
        <p>Strengthens legs,Supports pelvic floor awareness</p>
    </div>
    <div className="zigzag-img"> 
      <img src={utkatasana} alt="utkatasana" /> 
    </div>
  </div>
    

  <div className="zigzag-row">
    <div className="zigzag-img2"> 
      <img src={warrior2} alt="warrior2" /> 
    </div>
    <div className="Beneficial-card">
      <h3>Virabhadrasana II (Warrior II)</h3>
      
       <h4>How to Do</h4> 
       <ul> 
         <li>Step feet wide apart</li>
         <li>Bend front knee, align knee over ankle</li> 
         <li>Keep torso upright</li> 
       </ul> 
       
       <h4>Duration</h4>
       <ul> 
        <li>Hold for 5 breaths each side</li> 
       </ul> 
       <p>Builds leg strength,Improves stamina and confidence</p> 
         </div>
    </div>
  

  <div className="zigzag-row">
    <div className="Beneficial-card">
      <h3>Trikonasana (Triangle Pose – Supported)</h3>
      <h4>How to Do</h4>
       <ul>
         <li>Step feet wide</li> 
         <li>Place lower hand on a block or thigh</li> 
         </ul> 
         <h4>Duration</h4> 
         <ul> 
          <li>Hold for 5 breaths each side</li> 
          </ul> 
        <p>Stretches side body,Strengthens legs and hips</p>
            </div> 
      <div className="zigzag-img2"> 
      <img src={trikonasana} alt="trikonasana" /> 
    </div>
  </div>

  <div className="zigzag-row">
    <div className="zigzag-img"> 
    <img src={Malasana} alt="malasana" />
    </div>
    <div className="Beneficial-card">
      <h3>Malasana (Supported Squat)</h3>
       <h4>How to Do</h4> 
       <ul> 
        <li>Squat with feet wide</li> 
        <li>Place block under hips or heels</li> 
        </ul> 
        <h4>Duration</h4> 
        <ul> 
          <li>Hold for 30–60 seconds</li> 
          </ul>
          <p>Opens hips,Prepares body for childbirth</p> 
             </div> 

    </div>
  </div>

  {/* B. For Hip & Pelvic Opening */}
  <h3 className="Beneficial-subtitle">B. For Hip & Pelvic Opening:</h3>

  <div className="Beneficial-zigzag">
   <div className="zigzag-row">
    <div className="Beneficial-card">
      <h3>Baddha Konasana (Bound Angle Pose)</h3>

      <h4>How to Do</h4>
      <ul>
        <li>Sit on a folded blanket</li>
        <li>Bring soles of feet together</li>
        <li>Optional gentle forward lean</li>
      </ul>

      <h4>Duration</h4>
      <ul>
        <li>1–2 minutes</li>
      </ul>

    <p>Improves pelvic flexibility,Relieves lower back tension</p>
    </div>
    <div className="zigzag-img2"> 
    <img src={Baddha} alt="Baddha" />
    </div>
  </div>
 <div className="zigzag-row">
    <div className="zigzag-img2"> 
    <img src={Goddess} alt="Goddess " />
    </div>
    <div className="Beneficial-card">
      <h3>Goddess Pose (Utkata Konasana)</h3>

      <h4>How to Do</h4>
      <ul>
        <li>Stand wide, toes turned out</li>
        <li>Bend knees gently</li>
      </ul>

      <h4>Duration</h4>
      <ul>
        <li>Hold for 3–5 breaths</li>
      </ul>
      <p>Strengthens inner thighs,Supports pelvic floor strength</p>
    </div>
  </div>
  

  {/* C. For Back Relief */}
  <h3 className="Beneficial-subtitle1">C. For Back Relief:</h3>
<div className="zigzag-row">
 <div className="zigzag-img2"> 
    <img src={catcow} alt="catcow" />
    </div>
    <div className="Beneficial-card">
      <h3>Cat–Cow Pose</h3>

      <h4>Duration</h4>
      <ul>
        <li>8–10 rounds</li>
      </ul>
      <p>Relieves lower back pain,Improves spinal mobility</p>
    </div>
    <div className="Beneficial-card">
      <h3>Thread the Needle</h3>

      <h4>How to Do</h4>
      <ul>
        <li>On hands and knees, slide one arm under the body</li>
      </ul>

      <h4>Duration</h4>
      <ul>
        <li>Hold for 30 seconds each side</li>
      </ul>
      <p>Releases shoulders and upper back</p>
  </div>
  <div className="zigzag-img2"> 
    <img src={thread} alt="thread" />
    </div>
    </div>
    {/*4......*/}
      {/* 4. Relaxation & Rest */}
<div className="relax-section">
  <h2 className="relax-title">4. Relaxation & Rest</h2>

  {/* Images row */}
  <div className="relax-images">
    <img src={side} alt="Side Lying Savasana" />
    <img src={Viparita} alt="Viparita Karani" />
  </div>

  {/* Cards row */}
  <div className="relax-cards">
    {/* Card 1 */}
    <div className="relax-card">
      <h3>Side-Lying Savasana (Left Side)</h3>

      <h4>How to Do</h4>
      <ul>
        <li>Lie on left side</li>
        <li>Use pillows between knees and under head</li>
      </ul>

      <h4>Duration</h4>
      <ul>
        <li>5–7 minutes</li>
      </ul>

      <h4>Benefits</h4>
      <ul>
        <li>Improves circulation</li>
        <li>Deep relaxation</li>
      </ul>
    </div>

    {/* Card 2 */}
    <div className="relax-card">
      <h3>Viparita Karani (Legs Up the Wall – Optional)</h3>

      <h4>Duration</h4>
      <ul>
        <li>1–3 minutes</li>
      </ul>

      <h4>Benefits</h4>
      <ul>
        <li>Reduces leg swelling</li>
        <li>Relieves fatigue</li>
      </ul>
    </div>
  </div>
</div>
{/* Safety & Practice Time Section */}
<div className="practice-row">

  {/* Yoga Practices to Avoid */}
  <div className="practice-card avoid-card">
    <h2>Yoga Practices to Avoid</h2>
    
    <ul>
      <li>Lying flat on the back for long durations</li>
      <li>Deep twists and closed spinal rotations</li>
      <li>Strong abdominal exercises</li>
      <li>Any pose that compresses the belly or restricts breathing</li>
      <li>Balancing poses without support (risk of falling)</li>
      <li>Deep backbends that overstretch the abdomen</li>
      <li>Jumping or fast-paced movements</li>
      <li>Long holds in any pose that cause discomfort</li>
      <li>Sudden position changes (standing to sitting quickly)</li>

      <li>Advanced inversions (unless medically approved)</li>
    </ul>
  </div>

  {/* Recommended Daily Practice Time */}
  <div className="practice-card time-card">
    <h2>Recommended Daily Practice Time:</h2>

    <p><strong>Total Duration:</strong> 20–30 minutes per day</p>

    <p><strong>Ideal Time to Practice:</strong></p>
    <ul>
      <li>Morning – best for energy and freshness</li>
      <li>Early evening – reduces stiffness and fatigue</li>
    </ul>

    <p><strong>Before Practice:</strong></p>
    <ul>
      <li>Practice on an empty stomach, or</li>
      <li>2–3 hours after meals</li>
    </ul>

    <p><strong> Weekly Frequency:</strong></p>
    <ul>
      <li>4–6 days per week</li>
      <li>Rest days are important — listen to your body</li>
    </ul>
  </div>

</div>

      
</div>

</div>
  
  );
}

export default SecondTrimester;
