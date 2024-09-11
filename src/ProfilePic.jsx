import ProfileNav from "./ProfileNav"


function ProfilePic(){
    return(
        <div className="profile-picture">
            <img className="profile-image" src="https://img.itch.zone/aW1nLzEzNzU3OTUwLnBuZw==/original/nnRyIe.png" alt="Profile Picture">
            </img>
            <div className="profile-border"></div>
            {/* <ProfileNav/> */}
        </div>
    )
}

export default ProfilePic