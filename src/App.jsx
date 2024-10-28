import { useEffect, useState } from 'react';

import flowerData from './Flower-data/flowers.json'
import Header from './Header';
import Footer from './Footer';
import IonIcon from '@reacticons/ionicons';


// only used to connect components
// import them, then return them
function App() {
  
  const [flowers, setFlowers] = useState(flowerData.flowerData);

  const[favs, setFavs] = useState([]);

  const handleAddClick = (albumId) => {

    // if this is false, add the item to the favs
    // if not, remove it
    if(favs.includes(albumId)) {

      const newFavs = favs.filter( (singleFav) => {
        return albumId !== singleFav;
      });
      
      setFavs(newFavs);

    } else {
      setFavs([...favs, albumId]);
    }
  }

  return (
// Gives a background color to the store page!
     <div className="bg-violet-950/[.7] min-h-screen">
{/* imports my Header component in order so that the remaing product listings are not above it*/}
    <Header />
    
      {/* <div className="grid grid-cols-3 gap-6">
            {records.map((singleProduct) => {

              return (
                <Flower key={singleProduct.id} flower={singleProduct} favourites={favs} handleAddClick={handleAddClick}/>
              )
            })}
          </div> */}
<Footer />
    
    </div>

    
  );
}


export default App
