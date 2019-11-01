// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab (items) {
  //Created Element 
  const tab = document.createElement('div');
  
  //Set up class name
  tab.classList.add("tab");
  
  //Set up text content
  tab.textContent = items;
  
  return tab;
}

const topics = document.querySelector('.topics');
axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(res => {
  console.log(res);
  res.data.topics.forEach(topic => {
    const newTabs = Tab(topic);
    topics.appendChild(newTabs);
  });
})
.catch(err => {
  console.log("The data was not returned", err);
});