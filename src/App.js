import "./App.scss";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div>
      <Header />
      <SearchResults />
    </div>
  );
}

export default App;

// onclick save data.id of event into ID state
// run ID through API
// save API (will be an oject) into ticket state
// display info on screen

// PSUEDOCODE

//initialize firebase
// Create state items to hold data from the API and user input X
// Create a component to display the information X
// Create a component to hold userinput using "getDatabase" method X
// Create a function to make the API call with the correct search parameters X
// Userinput is linked to API call where user selects which items get added to the list X
// This data is then sent to firebase X
// Display the list the user makes as a public list O
// Complete published lists page broken down by price O
// Create a function to handle the remove, getDatabase and reference. getDatabase and reference would allow for the user to delete items from the list X firebase O display on page
// Error handling where if the user enters an invalid concert/show an alert pops up and if the user enters a negative budget O

// STRETCH GOALS:
// Profanity API to allow appropiate names for the list
// Sorting and filtering search results
// Add a chart to show cost trends across multiple lists
// Pagination for search results
// Allow for the private list to be authenticated through google
