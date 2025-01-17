import Element from "../constructor/Element.js";
import content from "./content.js";
import sameCard from "./sameContent.js";


const arr =[
    content.get(),
    sameCard.get()
]
console.log(arr)

const body = new Element('div', 'body', arr);

export default body;