import{j as e,P as t,c as a,R as c,A as o}from"./index-SSM8BhOh.js";function l(){return e.jsxs("div",{className:"profile-bio",children:[e.jsxs("h1",{children:["Alan Brito",e.jsx("br",{}),"Moon Follower"]}),e.jsxs("p",{children:["Hello! My name is Alan, I'm a C# developer with vast experience in Game Dev (Unity). ",e.jsx("br",{}),"Currently exploring Web Development via ",e.jsx("b",{children:"ASP.NET"})," and ",e.jsx("b",{children:"React.js"}),".",e.jsx("br",{}),"I like to experiment with different kind of projects, either by curiosity or by solving self-imposed problems"]})]})}function m(){return e.jsxs("div",{className:"profile-picture",children:[e.jsx("img",{className:"profile-image",src:"https://img.itch.zone/aW1nLzEzNzU3OTUwLnBuZw==/original/nnRyIe.png",alt:"Profile Picture"}),e.jsx("div",{className:"profile-border"})]})}function d(){return e.jsxs("div",{className:"profile-header",children:[e.jsx(m,{}),e.jsx(l,{})]})}function g(){return e.jsxs("div",{className:"elements-content",children:[e.jsx(s,{itemTag:e.jsx(n,{}),imageSrc:"https://img.itch.zone/aW1nLzEzMTI1NzcwLnBuZw==/315x250%23c/X0gvNg.png",title:"FreeZE",description:"2D top-down puzzle game, made for a week-long game jam"}),e.jsx(s,{itemTag:e.jsx(n,{}),imageSrc:"https://img.itch.zone/aW1nLzEwOTE1MDEzLnBuZw==/315x250%23c/vN6l%2Bf.png",title:"White Wonders",description:"VN Demo made for a VN focused game jam"}),e.jsx(s,{itemTag:e.jsx(n,{}),imageSrc:"https://img.itch.zone/aW1nLzQ0NTY4NDkucG5n/315x250%23c/jnlez%2F.png",title:"Event Story",description:"3D First Person Point & Click, Text Interactive game, made for a School project"})]})}function s(i){return e.jsxs("div",{className:"item-container",children:[e.jsx("div",{className:"item-thumbnail",children:e.jsxs("div",{className:"item-img",children:[e.jsxs("div",{className:"item-title",children:[i.itemTag,e.jsx("h2",{children:i.title})]}),e.jsx("img",{src:i.imageSrc})]})}),e.jsx("div",{className:"item-info",children:e.jsx("p",{children:i.description})})]})}s.PropTypes={itemTag:t.Tag,title:t.string,imageSrc:t.string,description:t.string};s.defaultProps={title:"Title",imageSrc:"https://via.placeholder.com/250",description:"Description..."};function r(i){return e.jsx("div",{className:"tag",children:i.tag})}r.PropTypes={tag:t.string};r.defaultProps={tag:"Tag"};function n(){return e.jsx(r,{tag:"Game Dev"})}a.createRoot(document.getElementById("root")).render(e.jsxs(c.StrictMode,{children:[e.jsx(o,{}),e.jsx(d,{}),e.jsx(g,{})]}));