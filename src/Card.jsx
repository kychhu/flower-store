import React from "react";
// Import icons from the ionicon library we installed using npm
import IonIcon from "@reacticons/ionicons";

function Card({ flower, favourites, handleFavClick }) {
    return (
        // Creation of the card with seperate styling for each section such as the title, image, and price using tailwind!
        // Linked to the flowerdatajson file with their data name getting called example: (flower.id, flower.price, etc)
        <div key={flower.id} className="flex-wrap text-center bg-purple-100 rounded-lg shadow-md overflow-hidden">
            <img src={flower.imageUsed} alt={flower.title} className="w-full h-64 object-cover" />
            <div className="p-2">
                <h3 className="font-bold text-2xl py-5 bg-white border-2 rounded-lg">{flower.title}</h3>
                <p className="font-medium py-5">Cost: ${flower.price}</p>

                {/* Style the button, with a white background having the heart centered */}
                {/* Using imported library from ioncon to make the heart icon, heart is filled vs outline = unfilled heart */}
                {/* When the fav btn is clicked on a certain flower card, the arrow function runs handlefavclick which we defined in the app.jsx to see if it already in the fav list, and adds or removes it */}
                <button
                    className="text-red-500 text-2xl bg-white pt-2 px-3 mr-2 rounded-full justify-center"
                    onClick={() => handleFavClick(flower.id)}>
                    {favourites.includes(flower.id) ? <IonIcon name="heart" /> : <IonIcon name="heart-outline" />}
                </button>
                {/* another btn for a simple add to cart */}
                <button className="font-bold text-lg py-5 px-4 bg-white rounded-lg border-2 border-opacity-70 border-violet-900 hover:text-purple-500">
                    Add to cart!
                </button>
            </div>
        </div>
    );
}
// Exporting it so that we can use this component on other page
export default Card;
