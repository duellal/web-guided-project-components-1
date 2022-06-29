// TASK 0- Motivate demoing a small makeImage component
//  that takes an { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
const imageData = [
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg' },
]

// The component is an image that takes the raw data
function makeImg({ imageURL }) { //Destructuring - ({imageURL}) element that is passed in 
  const imgElement = document.createElement('img');
  imgElement.style.width = '10em';
  imgElement.src = imageURL; //set image property to be the image we passed in
  return imgElement;
}

//Looped over the data array and invoked the component (makeImg function)
imageData.forEach((imgObj) => {
  // 1) Make an image
  const img = makeImg(imgObj)
  // 2) Attach image to DOM
  document.body.prepend(img);
})


// TASK 1- Import the data we need to "hydrate" our component.
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
//  Destructure `open` and `close` from the constants

import panelData from './data/panelData';
import arrows from './data/constants';


// TASK 2- Verify our imports using log statements
console.log(panelData) // log the panelData
console.log(arrows.open) // log the open arrow
console.log(arrows.close) // log the close arrow


// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.

const accordion = document.querySelector('.accordion');

// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel(/* what data does the panel need? */ { title, content }) {
  // TASK 5- Instantiate all the elements needed for a panel
  //My Code:
  //Not sure if you can add a class this way when creating an Element in the DOM
  // const panel = document.createElement('div.panel')
  // const panelBar = document.createElement('div.panel-bar')
  // const panelContent = document.createElement('div.panel-content')
  // const panelTitle = document.createElement('h3')
  // const panelButtons = document.createElement('div.panel-buttons')
  // const openButton = document.createElement('button.btn-open')
  // const closeButton = document.createElement('button.btn-close')

  //Class Code:
  const panel = document.createElement('div')
  const panelBar = document.createElement('div')
  const panelContent = document.createElement('div')
  const panelTitle = document.createElement('h3')
  const panelButtons = document.createElement('div')
  const openButton = document.createElement('button')
  const closeButton = document.createElement('button')

  // TASK 6- Setup the structure of our elements
  /*
    <div>                   // panel
      <div>                 // panelBar
        <h3></h3>           // panelTitle
        <div>               // panelButtons 
          <button></button> // openButton
          <button></button> // closeButton
        </div>
      </div>
      <div></div>           // panelContent
    </div>
  */

  //My Code:
  // accordion.appendChild(panel);
  // panel.appendChild(panelBar);
  // panelBar.appendChild(panelTitle);
  // panelBar.appendChild(panelButtons);
  // panelButtons.appendChild(openButton);
  // panelButtons.appendChild(closeButton);
  // panel.appendChild(panelContent);

  // Class Code:
  panel.appendChild(panelBar);
  panel.appendChild(panelContent);
  panelBar.appendChild(panelTitle);
  panelBar.appendChild(panelButtons);
  panelButtons.appendChild(openButton);
  panelButtons.appendChild(closeButton);


  // TASK 7- Add proper class names to our elements (See index.html for reference)
  // paying attention to the elements that need to start out hidden

  panel.classList.add('panel');
  panelContent.classList.add('panel-content');
  panelBar.classList.add('panel-bar');
  panelButtons.classList.add('panel-buttons');
  openButton.classList.add('panel-btn-open');
  closeButton.classList.add('panel-btn-close', 'hide-btn');

  // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file

  panelTitle.textContent = title;
  panelContent.textContent = content;
  openButton.textContent = arrows.open;
  closeButton.textContent = arrows.close;

  // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)

  //My Code:
  // openButton.addEventListener('click', (event) => {
  //   event.target.classList.add('hide-btn');
  //   closeButton.classList.remove('hide-btn');
  //   panelContent.classList.add('toggle-on')
  // });

  // closeButton.addEventListener('click', (event) => {
  //   event.target.classList.add('hide-btn');
  //   openButton.classList.remove('hide-btn');
  //   panelContent.classList.remove('toggle-on')
  // })


  //Class Code - more succinct:
  panelButtons.addEventListener('click', event => {
    //name.classList.toggle() API - swapping out the class name when the event happens ('toggling' the class names on and off when the event happens)
    openButton.classList.toggle('hide-btn');
    closeButton.classList.toggle('hide-btn');
    panelContent.classList.toggle('toggle-on');
  })

  // don't forget to return the panel!
  return panel;
}

// //Testing that the makePanel function is currently working properly:
// const test = makePanel({ title: 'Test Title', content: 'Test Content' })


// TASK 10- Loop through the panelData we imported from the data folder
//  creating panels for each content and title and append them to the DOM.
//  We can do this with a single forEach, or with a map and a forEach.

//Creates an array
const panelMap = panelData.map((panelObj) => {
  return makePanel(panelObj)
})

panelMap.forEach((panelElement) => {
  accordion.appendChild(panelElement);
})

// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.
