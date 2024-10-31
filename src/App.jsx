// Webscripting 2 - Assignmnet 1
//Kurtis Nguyen A01325231

//Imports useState that allows functions to updates variables from react
import { useState } from 'react';
// Imports the flowerData going to the JSON folder 
import flowerData from './Flower-data/flowers.json';
// Imports the Header component
import Header from './Header';
// Imports the Card component
import Card from './Card';
// Imports the Footer component
import Footer from './Footer';

//Defines the entire application, 
function App() {

  // Accesses the array of flowers inside the "flowerData" object from your JSON file
  //Set flowers, updates the flower state with using useState to update grab the array of data from the JSON file
  const [flowers, setFlowers] = useState(flowerData.flowerData);
  // useState has no values meaning that there are no favorited items at the moment
  const [favs, setFavs] = useState([]);

  // Handler for adding or removing a flower from favorites
  //handlefavclick is also defined in card.jsx where it has onclick fav or unfav btn, it will set a new fav or not
  const handleFavClick = (flowerId) => {
    if (favs.includes(flowerId)) {
      const newFavs = favs.filter((singleFav) => flowerId !== singleFav);
      // updates favs state with a new list
      setFavs(newFavs);
      // Updates the favourites flower cards and keep the existing cards favourited
    } else {
      setFavs([...favs, flowerId]);
    }
  };

  return (
    // Create a div to style the entire background!
    <div className="bg-violet-950/[.7] min-h-screen">
      {/* Load in the Header, in order */}
      <Header />
      {/*Create a div to style the layout of the cards */}
      <div className="container mx-auto p-5 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start">
        {/* Loops through the flower array */}
        {flowers.map((singleFlower) => (
          //Load in the card component, each card is singleflower.id so each flower card has a unique id
          <Card key={singleFlower.id} flower={singleFlower} favourites={favs} handleFavClick={handleFavClick} />
        ))}
      </div>
      {/* Load in the Footer, in order */}
      <Footer />
    </div>

  );
}

export default App;
