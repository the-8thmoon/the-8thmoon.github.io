import Elements from "./Elements"
import Profile from "./Profile"
import ProfileNav from "./ProfileNav"


function Body() {
    return (
        <div className="body-page">
            <Profile />
            {/* <ProfileNav/> */}
            <Elements />
        </div>
    )
}

export default Body  
