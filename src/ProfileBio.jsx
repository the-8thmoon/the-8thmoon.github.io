import ProfileNav from "./ProfileNav"


function ProfileBio(){
    return(
        <div className="profile-bio">
            <h1>Alan Brito - Moon Follower</h1>
                <p>
                     Hallo! I'm Alan. I'm an enthusiastic <b>Game Developer</b> based in Santiago, Chile.<br></br>
                     I like to experiment with different kinds of projects covering diverse areas of game development, but I specialize mostly in <b>Gameplay Programming</b>.<br></br>
                     My focus is to deliver functional and (somewhat) visually pleasing creations and experiences.

                </p>
                <ProfileNav/>
        </div>
    )
}

export default ProfileBio