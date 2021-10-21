const body = document.body;

const div = document.createElement('div');
div.className = 'container'


const heading1 = document.createElement('h3')
heading1.className = 'heading'
heading1.innerText = 'Soupe à l’oignon'


const p1 = document.createElement('p')
p1.className = 'paragraph'

p1.textContent = "This is a traditional French soup made of onions and beef stock, usually served with croutons and melted cheese on top.The soup’ s unique flavor comes from the caramelization of the onions "

const img1 = document.createElement('img')
img1.className = 'images'
img1.setAttribute('src', 'https://www.expatica.com/app/uploads/sites/5/2014/05/french-onion-soup.jpg');


div.appendChild(heading1)
div.appendChild(p1);
div.appendChild(img1);
body.appendChild(div)


const div2 = document.createElement('div');
div2.className = "container"
const heading2 = document.createElement('h3')
heading2.className = 'heading'

heading2.innerText = "Coq au vin"
const p2 = document.createElement('p')
p2.className = 'paragraph'

p2.innerText = "The dish sees chicken braised with wine, mushrooms, salty pork or bacon (lardons), mushrooms, onions, garlic and sometimes even a drop of brandy. Although the name translates as ‘rooster in wine’ – the braising is ideal for tougher birds – the recipe usually uses chicken or capon. The wine is typically Burgundy, although regional variations of the dish exist across France that use local wines."



const img2 = document.createElement('img')
img2.className = "images"
img2.src = './images/Coq-au-vin.jpg'

div.appendChild(heading2);
div.appendChild(p2);
div.appendChild(img2);
body.appendChild(div);