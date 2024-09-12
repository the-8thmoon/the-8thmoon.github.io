import Logo from "./Logo"
import PropTypes from 'prop-types'

import data from '../public/data.json'

function NavBar(){

    const props = {name: "label", target: "", _class:"nav-button"}

    return(
        <nav className="header">
            <div className="nav-bar">
                <a href="/"><Logo/></a>
                <div className="nav-buttons-container">
                    {
                        data.map(element => <NavButton label={element["id"]} target={"#"+element["id"]}/>)
                    }
                </div>
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

export default NavBar