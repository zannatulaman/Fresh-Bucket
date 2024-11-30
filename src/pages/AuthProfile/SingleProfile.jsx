import { FaRegUser } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";

const SingleProfile = () => {
          const [isActiveButton, setIsActiveButton]=useState(false);



  return (
    <div className="profile">
      <div className="auth-wrapper">
        <div className="auth-form">
          <div className="d-flex align-center flex-gap-10">
            <img
              src="https://s3-alpha-sig.figma.com/img/66f5/3a1f/f627a86c924360d22d7555d4cb40d56b?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GjKj~ZKluXfJ5cLwUXtBPEjbVhc9Arx0V28qjwRfVrA1tXMbKO3KBbNXc2~KW42MC~D~LmcW36KNmf4DDi9ZUe6mA7LMYXeYEVzyKZtRbW4YdRBLOxbu5m8l5eaAt6SIWza7Mi0USYUU3TQe-cZppAyZ-XFzcfeKTKN6hpbgliJa1wA20a7JO9bqu~CJwiwK5ulKRMxAT-IiO3-0I3WogAOLhlz7vaHO21UCYn9iRcK-WN1ugd3-EaGABJsgMu8WBag8q4XSvteXvMv9aS3~P2s5-IWSU2u7-bmUZ13Q99qBTITvz0tmEJCl~zprqTOUmZL41ZzgmKZXPuha6uG~ZQ__"
              alt="gentle-man"
            />
            <div className="profile-details">
              <h2>Tahsan Rahman Khan</h2>
              <p>tahsan@gmail.com</p>
            </div>
          </div>
          <button className="secondary-btn mt-20">
            <FaRegUser /> Basic Information
          </button>
          <button className="secondary-btn mt-20">
            <CiMenuBurger />
            Order List
          </button>
          <div className="profile-information d-flex align-center justify-between">
            <h2>Personal Information</h2>
            <button className="secondary-btn mt-20">
              <FaEdit />
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfile;
