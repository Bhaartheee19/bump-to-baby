import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PartnerInvolvementGuide.css";

const data = [
  {
    id: 1,
    title: "Emotional Support",
    content: `A partner plays a very important role in helping the mother feel emotionally safe, understood, and supported throughout pregnancy. Emotional changes are natural during this time, and your presence and attitude can make a big difference.

• Listen with empathy and without judgment  
Allow her to express her feelings freely. Avoid interrupting, correcting, or immediately trying to “fix” things. Sometimes, she just needs to be heard and understood.

• Be patient with mood swings and emotional changes  
Hormonal changes can cause sudden shifts in mood. Stay calm, kind, and patient, even when emotions feel intense or confusing.

• Offer reassurance during fear, stress, or anxiety  
Pregnancy can bring worries about health, childbirth, and the future. Gently reassure her, remind her she is not alone, and let her know you are there at every step.

• Appreciate her body and the changes she is going through  
Compliment her, acknowledge her strength, and help her feel confident and valued as her body changes to nurture new life.

• Create a safe and positive emotional environment  
Avoid negative comments, comparisons, criticism, or pressure. Speak respectfully and supportively to help her feel secure and emotionally comfortable.

• Show affection and emotional presence  
Small gestures like kind words, hugs, checking in on her feelings, or spending quality time together can greatly improve her emotional well-being.`
  },
  {
  id: 2,
  title: "Practical Support During Pregnancy",
  content: `Practical support from a partner helps reduce physical strain and mental stress for the mother during pregnancy, allowing her to focus on her health and well-being.

• Help with daily chores  
Assist with household tasks such as cooking, cleaning, laundry, and grocery shopping. Avoid letting her overexert herself, especially as pregnancy progresses.

• Accompany her to doctor visits  
Attend prenatal checkups, scans, and medical appointments whenever possible. This shows emotional support and helps you stay informed about her health and the baby’s development.

• Support healthy eating habits  
Help plan nutritious meals, prepare healthy snacks, and remind her to stay hydrated. Be mindful of her food preferences, cravings, and aversions.

• Manage schedules and reminders  
Help her remember medication timings, supplement intake, lab tests, and scan appointments. Keeping track of important dates reduces mental load.

• Encourage rest and proper sleep  
Ensure she gets enough rest by helping create a calm environment. Encourage short breaks during the day and proper sleep at night.

• Assist with physical comfort  
Help her move comfortably, offer back or leg support, adjust pillows, or provide gentle massages when needed.

• Handle external responsibilities  
Support her by managing work-related tasks, family communications, or errands so she can focus on her health.

• Be observant and proactive  
Notice signs of discomfort, fatigue, or stress and respond promptly. Small actions taken early can prevent bigger issues later.`
},
  {
  id: 3,
  title: "Labour & Delivery Support",
  content: `A partner’s support during labour and delivery plays a crucial role in helping the mother feel safe, confident, and emotionally strong.

• Stay calm and composed  
Labour can be intense and unpredictable. Your calm attitude helps her stay relaxed and reduces fear. Avoid panic, impatience, or negative reactions.

• Encourage breathing and relaxation  
Help her focus on slow, steady breathing during contractions. Gently guide her through breathing techniques or relaxation methods suggested by doctors or prenatal classes.

• Offer emotional reassurance  
Use comforting words like “You’re doing great,” “I’m right here,” and “You’re not alone.” Continuous reassurance can greatly reduce anxiety and stress.

• Provide physical comfort  
Hold her hand, offer a supportive touch, massage her back, or help her change positions if allowed. Small physical gestures can bring great comfort.

• Support her decisions and birth preferences  
Respect her choices regarding pain management, delivery positions, or medical decisions. Help communicate her wishes to healthcare staff if needed.

• Advocate for her needs  
If she feels overwhelmed or unable to speak, calmly communicate her concerns and needs to the medical team.

• Stay fully present  
Avoid distractions and stay focused on her throughout labour. Your presence alone gives her strength and confidence.

• Appreciate her strength  
Remind her how strong and brave she is. Your encouragement can motivate her through even the most challenging moments.`
},

 {
  id: 4,
  title: "Postpartum Support",
  content: `Postpartum support is crucial for the mother’s physical recovery, emotional health, and confidence as she adjusts to life after childbirth. A partner’s involvement during this period can make a significant difference.

• Support physical recovery  
Help her rest and heal after delivery. Encourage proper nutrition, hydration, and follow-up medical visits. Be mindful of pain, fatigue, or discomfort and assist her with movement and daily activities.

• Assist with newborn care  
Share responsibilities such as diaper changes, bathing the baby, soothing, and helping during feeding times. This reduces exhaustion and builds shared bonding with the baby.

• Be attentive to emotional changes  
Hormonal shifts after childbirth can cause mood swings, sadness, or anxiety. Listen patiently, validate her feelings, and avoid dismissing or minimizing her emotions.

• Watch for signs of postpartum depression  
Be alert to prolonged sadness, withdrawal, irritability, or loss of interest. Encourage professional help if needed and reassure her that seeking help is a sign of strength, not weakness.

• Create a calm and supportive environment  
Help maintain a peaceful home atmosphere. Limit unnecessary visitors, manage household tasks, and protect her space and comfort.

• Encourage self-care and rest  
Remind her to rest, eat well, and take short breaks. Support moments where she can focus on herself without guilt.

• Offer reassurance and appreciation  
Acknowledge her efforts and remind her that she is doing her best. Positive words and encouragement help rebuild confidence during this sensitive phase.

• Be present and dependable  
Your consistent presence, patience, and reliability help her feel secure and supported as she transitions into motherhood.`
}
,
 {
  id: 5,
  title: "Encouraging Self-Care",
  content: `Self-care is not a luxury during pregnancy and postpartum—it is essential for the mother’s physical health, emotional balance, and overall well-being. A supportive partner can gently encourage healthy self-care habits without pressure.

• Encourage rest and adequate sleep  
Pregnancy and new motherhood can be physically exhausting. Help her prioritize rest by sharing responsibilities and creating a calm environment that supports proper sleep.

• Support healthy daily routines  
Encourage regular meals, hydration, gentle movement, and relaxation practices. Small consistent habits help maintain energy and emotional stability.

• Respect her need for personal time  
Allow her space to relax, reflect, or simply be alone when needed. Personal time can help reduce stress and restore emotional balance.

• Promote stress-relieving activities  
Support activities she enjoys, such as listening to music, reading, light stretching, meditation, or spending time outdoors.

• Help her avoid guilt around self-care  
Reassure her that taking care of herself is not selfish—it helps her be healthier and more present for the baby.

• Be mindful of emotional burnout  
Check in regularly about how she is feeling mentally and emotionally. Encourage breaks before exhaustion or overwhelm sets in.

• Lead by example  
Practice healthy self-care yourself. When you value rest and well-being, it naturally encourages her to do the same.`
}
,
  {
  id: 6,
  title: "Communication & Understanding",
  content: `Open, respectful communication is the foundation of a strong and supportive partnership during pregnancy and after childbirth. Understanding each other’s feelings and expectations helps reduce stress and strengthens emotional connection.

• Encourage honest and open conversations  
Create a safe space where she feels comfortable sharing thoughts, fears, and needs without judgment or criticism.

• Listen more than you speak  
Sometimes understanding matters more than advice. Listen attentively and acknowledge her feelings before responding.

• Share decisions together  
Involve her in decisions related to healthcare, birth plans, baby care, and family responsibilities. Shared decision-making builds trust and confidence.

• Express your own feelings respectfully  
Communicate your thoughts calmly and honestly. Clear communication prevents misunderstandings and emotional distance.

• Be patient during emotional moments  
Stress and hormonal changes can affect communication. Stay calm, avoid arguments, and revisit discussions when emotions settle.

• Clarify expectations  
Talk openly about roles, responsibilities, and support needs. Clear expectations reduce frustration and confusion.

• Show understanding through actions  
Supportive actions—being present, following through on promises, and offering help—often communicate care more strongly than words.`
}
];

export default function PartnerInvolvementGuide() {
  const [selectedItem, setSelectedItem] = useState(null);
const navigate = useNavigate();
  return (
    <div className="partner-bg">
      <div className="partner-overlay"></div>

      <div className="partner-content">

       <button
          className="nav-back-control"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
        <h1>Partner Involvement Guide</h1>
        <p className="subtitle">
          How to be there for your partner during pregnancy & postpartum
        </p>

        <div className="guide-grid">
          {data.map((item) => (
            <div
              key={item.id}
              className="info-card"
              onClick={() => setSelectedItem(item)}
            >
              <h3>{item.title}</h3>
              <span>+</span>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP */}
      {selectedItem && (
        <div
          className="popup-overlay"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="popup-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>

            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
