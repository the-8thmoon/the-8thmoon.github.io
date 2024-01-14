import PropTypes from 'prop-types'


function NavButton(props){
    return(
        <div className='nav-button'>
            <a href={props.target}>{props.label}</a>
        </div>
    )
}

NavButton.PropTypes = {
    target: PropTypes.string,
    label: PropTypes.string
}

export default NavButton