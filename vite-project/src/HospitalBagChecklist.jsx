import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HospitalBagChecklist.css";

function HospitalBagChecklist() {
   const navigate = useNavigate();

   const [checkedItems, setCheckedItems] = useState({});
    useEffect(() => {
         const saved = localStorage.getItem("hospitalBagChecklist");
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, []);

    const handleCheck = (key) => {
    setCheckedItems((prev) => {
      const updated = {
        ...prev,
        [key]: !prev[key],
      };

      localStorage.setItem(
        "hospitalBagChecklist",
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  return (
  
     <div className="hospital-bag-page">
        <button className="back-btn" onClick={() => navigate(-1)}>
  ⬅ Back to Home
</button>
    <div className="hospital-bag">

      <div className="title">
        <h1>👜 Hospital Bag Checklist</h1>
      <p>Hospital bag should be ready by Week 36 itself </p></div>

      <div className="bag-grid">
      <div className="bag-card">
        <h3 className="section-title">🤰 Mommy – Before Delivery(labour time & hospital stay)</h3>
        <ul className="checklist">
  <li>
    <input
      type="checkbox"
      checked={checkedItems["mom_nightwear"] || false}
      onChange={() => handleCheck("mom_nightwear")}
    />
    Maternity nightwear
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["mom_feeding_bra"] || false}
      onChange={() => handleCheck("mom_feeding_bra")}
    />
    Feeding bras
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["mom_underwear"] || false}
      onChange={() => handleCheck("mom_underwear")}
    />
    Soft cotton underwear
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["mom_maternity_pads"] || false}
      onChange={() => handleCheck("mom_maternity_pads")}
    />
    Maternity pads / adult diapers
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["mom_id_docs"] || false}
      onChange={() => handleCheck("mom_id_docs")}
    />
    ID proof & insurance documents
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["mom_medical_reports"] || false}
      onChange={() => handleCheck("mom_medical_reports")}
    />
    All medical reports & scan files
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["mom_skincare"] || false}
      onChange={() => handleCheck("mom_skincare")}
    />
    Skincare Essentials
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["mom_slippers"] || false}
      onChange={() => handleCheck("mom_slippers")}
    />
    Slippers
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["mom_hair_accessories"] || false}
      onChange={() => handleCheck("mom_hair_accessories")}
    />
    Hair tie / clips
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["mom_lip_balm"] || false}
      onChange={() => handleCheck("mom_lip_balm")}
    />
    Lip balm (dry lips romba common)
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["mom_water_bottle"] || false}
      onChange={() => handleCheck("mom_water_bottle")}
    />
    Water bottle
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["mom_phone_charger"] || false}
      onChange={() => handleCheck("mom_phone_charger")}
    />
    Phone & charger
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["mom_breastfeeding_pillow"] || false}
      onChange={() => handleCheck("mom_breastfeeding_pillow")}
    />
    Breastfeeding Pillow
  </li>
</ul>

      </div>

      <div className="bag-card">
        <h3 className="section-title">🤱 Mommy – After Delivery(Post-delivery comfort & recovery)</h3>
        <ul className="checklist">
  <li>
    <input
      type="checkbox"
      checked={checkedItems["after_extra_nightwear"] || false}
      onChange={() => handleCheck("after_extra_nightwear")}
    />
    Extra nightwear (easy feeding type)
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["after_nursing_pads"] || false}
      onChange={() => handleCheck("after_nursing_pads")}
    />
    Nursing bra pads
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["after_abdominal_binder"] || false}
      onChange={() => handleCheck("after_abdominal_binder")}
    />
    Abdominal binder (if doctor suggest)
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["after_shawl"] || false}
      onChange={() => handleCheck("after_shawl")}
    />
    Warm shawl / dupatta
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["after_toiletries"] || false}
      onChange={() => handleCheck("after_toiletries")}
    />
    Toiletries (toothbrush, face wash, shampoo)
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["after_moisturizer"] || false}
      onChange={() => handleCheck("after_moisturizer")}
    />
    Moisturizer / nipple cream
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["after_towel"] || false}
      onChange={() => handleCheck("after_towel")}
    />
    Towel & napkin
  </li>

  <li>
    <input
      type="checkbox"
      checked={checkedItems["after_small_pillow"] || false}
      onChange={() => handleCheck("after_small_pillow")}
    />
    Small pillow (optional but useful)
  </li>
</ul>

      </div>
</div>
 <div className="bag-grid">
      <div className="bag-card">
        <h3 className="section-title">👶 Baby Essentials(Newborn essentials only)</h3>
        <ul className="checklist">
          <li><input type="checkbox" /> Newborn clothes(5-7 sets)</li>
          <li><input type="checkbox" /> Swaddle or Soft cotton Blanket</li>
          <li><input type="checkbox" /> Baby cap</li>
          <li><input type="checkbox" /> Socks & mittens</li>
          <li><input type="checkbox" /> Diapers (newborn size)</li>
          <li><input type="checkbox" /> Baby wipes</li>
          <li><input type="checkbox" /> Baby towel</li>
          <li><input type="checkbox" /> Baby Lotion & Diaper Rash Cream</li>
          <li><input type="checkbox" /> Baby Carry Nest</li>
        </ul>
      </div>
 
      <div className="bag-card">
        <h3 className="section-title">👨‍👩‍👧 For Attender</h3>
        <ul className="checklist">
          <li><input type="checkbox" /> Extra dress(1–2 sets)</li>
          <li><input type="checkbox" /> Snacks / dry fruits</li>
          <li><input type="checkbox" /> Phone charger / power bank</li>
          <li><input type="checkbox" /> ID proof</li>
          <li><input type="checkbox" /> Cash & ATM card</li>
          <li><input type="checkbox" /> Small pillow or bedsheet (optional)e</li>
          <li><input type="checkbox" /> Water bottle</li>

        </ul>
      </div>
</div></div>
    </div>
  );
}

export default HospitalBagChecklist;
