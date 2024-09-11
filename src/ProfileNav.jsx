import PropTypes from 'prop-types'

function ProfileNav() {
    return (
        // <div className="links-header">
            <div className="links-container">
                <LinkButton href="https://github.com/AlanBritoW" icon="cib:github"/>
                <LinkButton href="https://discordapp.com/users/515378681070354452" icon="bi:discord"/>
                <LinkButton href="https://alanbrito.itch.io/" icon="cib:itch-io"/>
                <LinkButton href="mailto: the8thmoon.follower@gmail.com" icon="simple-icons:gmail"/>
            </div>
        // </div>
    )
}


function LinkButton(props) {
    return (
        <a className="link-button" href={props.href}>
                <span className="iconify" data-icon={props.icon}>
                </span>
        </a>
                // <div className="link-button">
        // </div>
    )
}

LinkButton.PropTypes = {
    href: PropTypes.string,
    icon: PropTypes.string
}

LinkButton.defaultProps = {
    href: "",
    icon: ""
}

export default ProfileNav