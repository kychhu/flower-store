import React from "react";
// Here we import icons from the ionicon library so that we can implement it into our favorites effect
import IonIcon from "@reacticons/ionicons";

function Card({ product, favourites, handleFavClick }) {
    return (
        // Notice the tailwind styling that allows us to design our cards
        // Example, shadow-md gives us a shadow to play with
        // product.id helps us keep track of which product is which, allowing us to display the right items
        <div key={product.id} className="flex-wrap text-center bg-pink-100 rounded-lg shadow-md overflow-hidden">
            {/* much in the same vein, product.image lets us go back to the product.json file to find the corresponding image */}
            <img src={product.image} className='w-full h-64 object-cover' />
            <div className="p-2">
                {/* This is also showcased in....product.name */}
                <h3 className="font-bold text-2xl py-5 bg-white border-2 rounded-lg">{product.name}</h3>
                {/* product.description */}
                <p className="font-semibold bg-white border-2 rounded-lg py-7">Description: {product.description}</p>
                {/* product.price */}
                <p className="font-medium  py-5">Cost: {product.price}</p>
                {/* and again, in product.id */}

                {/* onClick is an event handler */}
                {/* It then runs a check to see whether the item has been favorited or unfavorited */}
                <button className="text-red-500 text-2xl bg-white pt-2 px-3 mr-2 rounded-full justify-center" onClick={() => {
                    handleFavClick(product.id)
                }} >
                    {/* Notice how we also use ionicon icons in this file to utilize their icon library */}
                    {/* Not only do we use the hearted outline, but we also incorporate the filled in one to indicate that the item has been favorited */}
                    {/* This checks if the current array contains the id of the current product */}
                    {/* "?" signifies whether its true */}
                    {/* if it's false, ":" signifies what will happen next (which is change it to the outlined heart) */}
                    {favourites.includes(product.id) ? <IonIcon name="heart" /> : <IonIcon name="heart-outline" />}
                </button>
                {/* Adding an additional button with tailwind styling to Add items to order */}
                <button className="font-bold text-lg py-5 px-4 bg-white rounded-lg border-2 border-opacity-50 border-violet-500 hover:text-red-600">Add to order</button>
            </div>
        </div>
    );
}

// Exporting it so that we can use this component on other pages if necessary
export default Card;