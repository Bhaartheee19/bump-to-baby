import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import doctor1 from "../assets/doctors/doctor1.png";
import doctor2 from "../assets/doctors/doctor2.png";
import doctor3 from "../assets/doctors/doctor3.png";


const doctors = [
  {
    id: 1,
    name: "Dr. Anitha Guruswami",
    specialization: "Gynecologist",
    experience: "8+ Years Experience",
    fee: 800,
    image: doctor1,
    about:
      "Expert in pregnancy care, infertility treatment and complete women health management.",
    specialties: [
      "Pregnancy Care",
      "PCOS Treatment",
      "Infertility Support",
      "Women Wellness"
    ],
    review:
      "Dr. Anitha is very kind and explains everything clearly. Highly recommended for pregnancy care."
  },
  {
    id: 2,
    name: "Dr. Meera Yasukawa",
    specialization: "Pediatrician",
    experience: "6+ Years Experience",
    fee: 1000,
    image: doctor2,
    about:
      "Specialist in newborn care, child nutrition, vaccination and growth monitoring.",
    specialties: [
      "Newborn Care",
      "Vaccination",
      "Child Nutrition",
      "Growth Tracking"
    ],
    review:
      "Very friendly doctor. My baby is very comfortable during checkups."
  },
  {
  id: 3,
  name: "Dr. Ravi Kumar",
  specialization: "Dermatologist",
  experience: "10+ Years Experience",
  fee: 900,
  image: doctor3,
  about:
    "Expert in skin allergy treatment, acne care, pigmentation and advanced dermatology procedures for all age groups.",
  specialties: [
    "Skin Allergy Treatment",
    "Acne & Scar Care",
    "Pigmentation Treatment",
    "Hair Fall Treatment",
    "General Dermatology"
  ],
  review:
    "Treatment was excellent. My skin improved a lot within a few weeks. Highly recommended dermatologist."
},

];


export default function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = doctors.find((d) => d.id === Number(id));

  if (!doctor) return <div className="p-10">Doctor not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-8 grid md:grid-cols-3 gap-10">
        
        {/* Left - Image */}
        <div className="flex flex-col items-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
          <h2 className="mt-4 text-2xl font-bold text-blue-900 text-center">
            {doctor.name}
          </h2>
          <p className="text-gray-600">{doctor.specialization}</p>
          <p className="text-blue-700 font-semibold mt-2">₹{doctor.fee} / Visit</p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white py-2 rounded-lg font-semibold"
          >
            Book Appointment
          </button>
        </div>

        {/* Right - Details */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Experience */}
          <div>
            <h3 className="text-xl font-bold text-gray-800">Experience</h3>
            <p className="text-gray-600 mt-2">{doctor.experience}</p>
            <p className="text-gray-600">{doctor.about}</p>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-xl font-bold text-gray-800">Specialties</h3>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              {doctor.specialties.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-xl font-bold text-gray-800">Patient Review</h3>
            <div className="flex items-center mt-2">
              {"★★★★★"}
            </div>
            <p className="text-gray-600 mt-2 italic">"{doctor.review}"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

