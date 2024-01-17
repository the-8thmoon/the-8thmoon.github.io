import PropTypes from 'prop-types'

function Elements(){
    return(
        <div className="elements-content">
            <Item itemTag={<GameDevTag/>} 
                  imageSrc="https://img.itch.zone/aW1nLzEzMTI1NzcwLnBuZw==/315x250%23c/X0gvNg.png"
                  title="FreeZE"
                  description="2D top-down puzzle game, made for a week-long game jam"
            />
            <Item itemTag={<GameDevTag/>} 
                  imageSrc="https://img.itch.zone/aW1nLzEwOTE1MDEzLnBuZw==/315x250%23c/vN6l%2Bf.png"
                  title="White Wonders"
                  description="VN Demo made for a VN focused game jam"
            />
            <Item itemTag={<GameDevTag/>} 
                  imageSrc="https://img.itch.zone/aW1nLzQ0NTY4NDkucG5n/315x250%23c/jnlez%2F.png"
                  title="Event Story"
                  description="3D First Person Point & Click, Text Interactive game, made for a School project"
            />
                
        </div>
    )
}

export function Item(props){
    return(
        <div className="item-container">
            <div className="item-thumbnail">
                <div className="item-img">
                    <div className="item-title">
                        {props.itemTag}
                        <h2>{props.title}</h2>
                    </div>
                    <img src={props.imageSrc}></img>
                </div>
            </div>
            <div className="item-info">
                <p>{props.description}</p>
            </div>

        </div>
    )
}

Item.PropTypes = {
    itemTag: PropTypes.Tag,
    title: PropTypes.string,
    imageSrc: PropTypes.string,
    description: PropTypes.string
}
Item.defaultProps = {
    title: "Title",
    imageSrc: "https://via.placeholder.com/250",
    description: "Description..."
}



function Tag(props){
    return(
        <div className="tag">
            {props.tag}
        </div>
    )
}

Tag.PropTypes = {
    tag: PropTypes.string
}
Tag.defaultProps = {
    tag: "Tag"
}

function GameDevTag(){
    return(
        <Tag tag="Game Dev"/>
    )
}


export default Elements