import { useNavigate } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition">
      <div className="flex gap-4">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-24 h-24 rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="text-xl font-bold text-blue-900">{doctor.name}</h3>
          <p className="text-gray-600">{doctor.specialization}</p>
          <p className="text-sm mt-1">Experience: {doctor.experience}</p>
          <p className="text-sm">Clinic: {doctor.clinic}</p>
          <p className="text-sm font-semibold mt-1">₹{doctor.fee}</p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => navigate(`/doctor/${doctor.id}`)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              View Profile
            </button>

            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
