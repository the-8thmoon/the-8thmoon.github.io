import ProfileBio from "./ProfileBio"
import ProfilePic from "./ProfilePic"


function Profile(){
    return(
        <div className="profile-header">
            <ProfilePic/>
            <ProfileBio/>
        </div>
    )
}

export default Profile

// function Header() {
//     return (
//         <div className="header">
//             <div className="profile-img-container">
//                 <img src="https://img.itch.zone/aW1nLzEzNzU3OTUwLnBuZw==/original/nnRyIe.png" class="profile-img"></img>
//                     <div className="profile-border">
//                     </div>
//             </div>
//             <div className="profile-text-container">

//                 <h1><span style="color:#fbc531">Alan Brito - Moon Follower</span></h1>
//                 <p>
//                     Hello! My name is Alan, I'm a gamedev enthusiast, trying to do some art along the way.
//                     My main focus is gameplay programmer, I've been using Unity for about <b>5 years</b>. Currently learning Godot.

//                     I consider myself an experimentation expert. I love to delve into diverse gamedev areas, just out of curiosity or to find a way to solve a self-imposed problem.
//                 </p>
//             </div>
//             <div className="profile-nav-container">
//                 <ul className="profile-nav">
//                     <li><a href="https://twitter.com/The_8thMoon"><span className="iconify" data-icon="bxl:twitter"></span></a></li>
//                     <li><a href="https://www.instagram.com/the_8thmoon/"><span className="iconify" data-icon="bxl:instagram-alt"></span></a></li>
//                     <li><a href="https://alanbrito.itch.io/"><span className="iconify" data-icon="cib:itch-io"></span></a></li>
//                     <li><a href="https://github.com/AlanBritoW"><span className="iconify" data-icon="cib:github"></span></a></li>
//                     <li><a href="https://ko-fi.com/the8thmoon"><span className="iconify" data-icon="cib:ko-fi"></span></a></li>

//                 </ul>
//             </div>
//         </div>

//     )
// }
