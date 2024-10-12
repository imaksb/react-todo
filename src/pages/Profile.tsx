import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const isAuthenticated = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      const loadProfile = () => {
        const fakeProfile: UserProfile = {
          firstName: "Admin",
          lastName: "Admin",
          email: "admin@admin.com",
          birthDate: "1990-01-01",
        };
        setProfile(fakeProfile);
      };

      loadProfile();
    }
  }, [isAuthenticated, navigate]);

  if (!profile) {
    return <div>Завантаження...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Профіль користувача</h1>
      <div className="mb-4">
        <p className="font-semibold">Ім'я:</p>
        <p>{profile.firstName}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Прізвище:</p>
        <p>{profile.lastName}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Електронна пошта:</p>
        <p>{profile.email}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Дата народження:</p>
        <p>{profile.birthDate}</p>
      </div>
    </div>
  );
};

export default Profile;
