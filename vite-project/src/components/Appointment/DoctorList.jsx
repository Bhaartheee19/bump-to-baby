import { useNavigate } from "react-router-dom";

import doctor1 from "../../assets/doctors/doctor1.png";
import doctor2 from "../../assets/doctors/doctor2.png";
import doctor3 from "../../assets/doctors/doctor3.png";
const doctors = [
  {
    id: 1,
    name: "Dr. Anitha",
    img: doctor1,
    rating: 4.8,
    reviews: 120,
    clinic: "A Clinic",
  },
  {
    id: 2,
    name: "Dr. Meera",
    img: doctor2,
    rating: 4.9,
    reviews: 95,
    clinic: "B Clinic",
  },
  {
    id: 3,
    name: "Dr. Ravi Kumar",
    img: doctor3,
    rating: 4.7,
    reviews: 110,
    clinic: "A Clinic",
  },
];


export default function DoctorList({ selectedDoctor, onSelectDoctor }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {doctors.map((doc) => (
        <div
          key={doc.id}
          className={`bg-white rounded-2xl shadow-lg p-5 border transition
          ${selectedDoctor?.id === doc.id ? "border-blue-600" : ""}`}
        >
          <img
            src={doc.img}
            alt={doc.name}
            className="w-full h-44 object-cover rounded-xl"
          />

          <h2 className="text-xl font-bold mt-3 text-blue-900">
            {doc.name}
          </h2>

          <p className="text-sm text-gray-600 mt-1">
            ⭐ {doc.rating} ({doc.reviews} reviews) · {doc.clinic}
          </p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => navigate(`/doctor/${doc.id}`)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
            >
              View Profile
            </button>

            <button
              onClick={() => onSelectDoctor(doc)}
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg w-full"
            >
              Book Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
