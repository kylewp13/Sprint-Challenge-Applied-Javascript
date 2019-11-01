// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articles = document.querySelector('.cards-container');

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(res => {
  // console.log(res);
  // console.log(res.data.articles);
  for(let i in res.data.articles) {
    // console.log(i, res.data.articles[i]);
    let array = Object.values(res.data.articles[i]);
    // console.log(array);
    array.forEach(element => {
      const newCard = Card(element);
      articles.appendChild(newCard);
    });
  }
  // response.data.message.forEach(item => {
  //   const newDog = DogCard(item);
  //   entryPoint.appendChild(newDog);
  // });
})
.catch(err => {
  console.log("The data was not returned", err);
});

function Card(arr) {
  //Created Elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');
  
  //Set up for class names
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  
  //Set up for Text Content
  headline.textContent = arr.headline;
  img.src = arr.authorPhoto;
  span.textContent =`By ${arr.authorName}`;
  
  //Append elements
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(span);
  
  return card;
} 