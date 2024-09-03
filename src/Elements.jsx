import PropTypes from 'prop-types'
import Separator from './Separator';

import React, {useState, useEffect} from "react";

const response = await fetch("assets/data.json");
const data = await response.json();

console.log(data)

function Elements(){


    // const items = data.map(item => item["items"].map((value,index) => <Item itemTag={<Tag tag={value.tag}/>} imageSrc={value.img} title={value.title} description={value.description}/>))

    // const values = items.map((value,index) => <Item itemTag={<Tag tag={value.tag}/>} imageSrc={value.img} title={value.title} description={value.description}/>)
    
    return(
        <>
        {
            data.map(element =>
                <div>
                <Separator title={element["title"]}/>
                <div className="elements-content">
                {element["items"].map(value => <Item itemTag={<Tag tag={value.tag}/>} imageSrc={value.img} title={value.title} info={value.info}/>)
                }
                </div>
                </div>
            )
        }
        </>
        // <div id="Projects" className="elements-content">
        //     {values}
        //     {/* <Item itemTag={<GameDevTag/>} 
        //           imageSrc="https://img.itch.zone/aW1nLzEzMTI1NzcwLnBuZw==/315x250%23c/X0gvNg.png"
        //           title="FreeZE"
        //           description="2D top-down puzzle game, made for a week-long game jam"
        //     />
        //     <Item itemTag={<GameDevTag/>} 
        //           imageSrc="https://img.itch.zone/aW1nLzEwOTE1MDEzLnBuZw==/315x250%23c/vN6l%2Bf.png"
        //           title="White Wonders"
        //           description="VN Demo made for a VN focused game jam"
        //     />
        //     <Item itemTag={<GameDevTag/>} 
        //           imageSrc="https://img.itch.zone/aW1nLzQ0NTY4NDkucG5n/315x250%23c/jnlez%2F.png"
        //           title="Event Story"
        //           description="3D First Person Point & Click, Text Interactive game, made for a School project"
        //     /> */}
                
        // </div>
    )
}

export function Item(props){
    
    
    const info = props.info;
    const description = info["description"];
    const sections = info["sections"];
    const elements = sections.map(section => 
        section.hasOwnProperty("content") ?
            <SimpleSection  title={section.title} content={section.content}/> : <NestedSection title={section.title} list={section.list}/>)
            
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() =>{
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })

    function handleResize(){
        setWidth(window.innerWidth);
    }

            
    useEffect(() => {
        const itemImgHeight = document.getElementsByClassName("item-img").item(0).clientHeight;
        const itemTitleHeight = document.getElementsByClassName("item-title").item(0).clientHeight;
        const infoContainers = document.getElementsByClassName("item-info");
        const height = itemImgHeight - itemTitleHeight;
        for (var i = 0; i < infoContainers.length; i++)
        {
            if (width > 768)
                infoContainers[i].setAttribute("style", "height:"+height.toString()+"px");
            else
                infoContainers[i].setAttribute("style", "height: auto");

        }
    }, [width])

    return(
        <div className="item-container">
            <div className='item-img-container'>
                <div className="item-img">                                                                                                                                                                                                                                                                                                            
                        <img src={props.imageSrc}></img>
                </div>    
            </div>
            <div className='item-info-container'>
                <div className="item-title">
                    <h2>{props.title}</h2>
                    {props.itemTag}
                </div>
                <div className="item-info">
                    <p>{description}</p>
                    {elements}
                    {/* <p>{props.description}</p> */}
                </div>
            </div>
        </div>
    )
}

Item.PropTypes = {
    itemTag: PropTypes.Tag,
    title: PropTypes.string,
    imageSrc: PropTypes.string,
    info: PropTypes.json,
    href: PropTypes.string
}
Item.defaultProps = {
    title: "Title",
    imageSrc: "https://via.placeholder.com/250",
    info: {},
    href: ""
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


function SectionTitle(props){
    return(
        <h3>{props.title}</h3>
    )
}

function SimpleSection(props){
    return(
        <div className='info-section'>
            <SectionTitle title={props.title}/>
            <p>{props.content}</p>
        </div>
    )
}

function NestedSection(props){
    return(
        <div className='info-section'>
            <SectionTitle title={props.title}/>
            <ListSection list={props.list}/>
        </div>
    )
}

function ListSection(props){

    const items = props.list;
    const elements = items.map((item,index) => item.hasOwnProperty("list") ? <>
        <li key={index}><b>{item["item"].split(":")[0]+":"}</b>{item["item"].split(":")[1]}</li> 
        <ListSection list={item["list"]}/>
        </> : 
        <li key={index}><b>{item["item"].split(":")[0]+":"}</b>{item["item"].split(":")[1]}</li>)

    return(
        <ul className='list-section'>
            {elements}
        </ul>
    )
}

SimpleSection.PropTypes = {
    title: PropTypes.string,
    content: PropTypes.string
}

SimpleSection.defaultProps = {
    title: "",
    content: ""
}


// function ItemList(props){
//     const title = props.title;
//     const items = props.items.map((item, index) => <BulletPoint p />
//     return(
//         <></>
//     )
// }


// function BulletPoint(props){
//     return(
//         <li><b>{props.left}:</b> {props.right}</li>
//     )
// }


// BulletPoint.PropTypes = {
//     left: PropTypes.string,
//     right: PropTypes.string
// }

// BulletPoint.defaultProps = {
//     left: "",
//     right: ""
// }


export default Elements