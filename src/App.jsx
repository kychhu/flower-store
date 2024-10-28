import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';


const FLOWER_SELECTION = [ 
  {
    id: 1,
    tite: "Daisies",
    price: 12.00,
    imageUsed: "https://assets.americanmeadows.com/media/wysiwyg/d/a/daisy-leucanthemum-shutterstock_153582737.jpg?quality=80&auto=webp&format=pjpg"
  },
  {
    id: 2, 
    title: "Lilies",
    price: 15.99,
    imageUsed: "https://www.extension.iastate.edu/news/files/eo-news/images/asiaticlilies_adobestock_225777932.jpg"
  },
  {
    id: 3, 
    title: "Roses",
    price: 21.99,
    imageUsed: "https://bouqs.com/blog/wp-content/uploads/2018/08/shutterstock_1662182848-min-1080x719.jpg"
  },
  {
    id: 4, 
    title: "Orchids",
    price: 34.99,
    imageUsed: "https://hips.hearstapps.com/hmg-prod/images/blooming-phalaenopsis-orchids-white-purple-pink-royalty-free-image-1728585929.jpg?crop=0.668xw:1.00xh;0.0912xw,0&resize=1120:*"
  },

  {
    id: 5, 
    title: "Tulips",
    price: 17.99,
    imageUsed: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFVU-F3go5NgP_H7N2P-ABBd4uDwc-ijC7mw&s"
  },
  {
    id: 6, 
    title: "Violets",
    price: 23.99,
    imageUsed: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvq2Pp-lt8zUmY_wgovZEeOI-RfJz4857Y0Q&s"
  },
  {
    id: 7, 
    title: "Sunflowers",
    price: 16.99,
    imageUsed: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_EWynWolH_lbRS0hjCMs-NrsS1tfyEGEFqw&s"
  },
  {
    id: 8, 
    title: "Carnations",
    price: 24.99,
    imageUsed: "https://wardsfarmflowers.com/wp-content/uploads/2021/08/Carnations.jpg"
  },

];
// only used to connect components
// import them, then return them
function App() {

  const [add, setAdd] = useState([]);

  const handleAddClick = (flowerId) => {
    if (add.includes(flowerId)) {
      setAdd(add.filter(singleAdd => singleAdd !== flowerId));
    } else {
      setAdd([...add, flowerId]);
    }
  };

  return (
// Gives a background color to the store page!
     <div className="bg-violet-950/[.7] min-h-screen">
{/* imports my Header component in order so that the remaing product listings are not above it*/}
    <Header />
    <div>
    <h1 className="text-white text-center text-4xl font-bold mb-6 mt-8">Selection of Flowers</h1>
    
    <Footer />
    </div>
    </div>

    
  );
}
  // const [flowers, setFlowers] = useState([FLOWER_SELECTION]);

  // const handleAddClick = (flowerId) => {

  //   if(add.includes(flowerId)){

  //   const addCart = add.filter( (singleAdd) => {
  //     return flowerId !== singleAdd;
  //   });
  //   setAdd(addCart);
  //   } else{
  //     setAdd([...add, flowerId]);
  //   }
  // }


// return (
//   <div className="bg-gradient-to-r from-purple-500 to-blue-800 min-h-screen">
//         <h1 className="">Selection of Flowers</h1>

//         <div className="grid grid-cols-3 gap-6">
//           {records.map((singleRecord) => {

//             return (
//               <Album key={singleRecord.id} record={singleRecord} favourites={favs} handleFavClick={handleFavClick}/>
//             )
//           })}
//         </div>
//   </div>
// )
// }


export default App
