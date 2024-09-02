import PropTypes from 'prop-types'


function Separator(props){

    return(
        <div id={props.title} className='separator'>
            <h1>{props.title}</h1>
        </div>
    )

}

Separator.PropTypes={
    title: PropTypes.string
}
Separator.defaultProps = {
    title: "Title"
}

export default Separator