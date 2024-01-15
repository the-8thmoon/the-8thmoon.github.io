import Logo from "./Logo"
import PropTypes from 'prop-types'

function NavBar(){

    const props = {name: "label", target: "", _class:"nav-button"}

    return(
        <nav className="nav-bar">
            <a href="/"><Logo/></a>
            <div className="nav-buttons-container">
                <NavButton label="Home"/>
                <NavButton label="Portfolio" target="/portfolio/"/>
            </div>
            
        </nav>
    )
}

function NavButton(props){
    return(
        <a href={props.target}>
            <div className={props._class}>
            {props.label}
            </div>
        </a>
    )
}

NavButton.PropTypes = {
    _class: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string
}

NavButton.defaultProps = {
    _class: "nav-button",
    target: "/",
    label: "Button"
}

export default NavBar; NavButton