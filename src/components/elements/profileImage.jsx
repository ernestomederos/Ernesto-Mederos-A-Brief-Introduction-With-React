import React from "react";
import ProfilePic from "../../assets/images/profile-pic.png";
function ProfileImage() {
    return (
        <img data-aos="fade-zoom-in" src={ProfilePic} className="profile-image" height="250px" alt="profile-image" />
    )
}

export default ProfileImage;