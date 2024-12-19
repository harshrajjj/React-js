// function customRender(reactElement,container){

//     // code is not good bcz attribute have to set manually so if many attribute will be there then it become worst so hum yha loop lga k isko better kar sakte hai
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute("target",reactElement.props.target)
//     container.appendChild(domElement)
// }

function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        domElement.setAttributes(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}


// tree graph of element  react k andar v kux asa he bnta hai
const reactElement = {
    type : 'a',
    props : {
        href: 'http://google.com',
        target : '_blank'
    },
    children : 'click me to visit google'
}

const mainContainer = document.querySelector("#root")

customRender(reactElement,mainContainer);