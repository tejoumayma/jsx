import React from "react";

const ProfilePhoto = () => {
  return (
    <div>
      <img
        src="./profil.jpg"
        alt="photo"
        className="rounded img-thumbnail  shadow-lg p-3 mb-5 bg-body-tertiary rounded"
        style={{ width: " 25%" }}
      />
    </div>
  );
};

export default ProfilePhoto;
