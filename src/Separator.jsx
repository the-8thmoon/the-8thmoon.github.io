import PropTypes from 'prop-types'


function Separator(props){

    return(
        <div id={props.id} className='separator'>
            <h1>{props.title}</h1>
        </div>
    )

}

Separator.PropTypes={
    title: PropTypes.string,
    id: PropTypes.string
}
Separator.defaultProps = {
    title: "Title",
    id: "id"
}

export default Separator