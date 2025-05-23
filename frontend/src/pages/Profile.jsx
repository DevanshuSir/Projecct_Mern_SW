import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div>
      <div>
        <div className="max-w-sm mx-auto mt-15 mb-15 bg-gray-300 rounded-xl shadow-lg p-6 text-center space-y-4">
          <div className="space-y-3">
            <img
              src={""}
              alt="Profile"
              className="w-24 h-24 mx-auto rounded-full  border-4 border-blue-950 object-cover"
            />
            <h2 className="text-lg font-semibold">name</h2>
          </div>

          <div className="text-center">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Upload Profile Picture
            </label>
            <div className="flex items-center justify-center gap-3">
              <label className="cursor-pointer inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200">
                Choose File
                <input
                  type="file"
                  name="profilePic"
                  accept="image/*"
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Upload
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Update
            </button>
          </div>
        </div>

        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={handleLogout}
        >
          Log-Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
