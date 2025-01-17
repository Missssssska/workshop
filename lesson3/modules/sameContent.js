import Element from "../constructor/Element.js";

const sameCardData = [
  'Same Card 1',
  'Same Card 2',
  'Same Card 3',
  'Same Card 4',
  'Same Card 5',
]

const sameCards = sameCardData.map(el => new Element('div', 'sameCard', el).get())

const sameContent = new Element('div', 'sameContent', sameCards);

export default sameContent;