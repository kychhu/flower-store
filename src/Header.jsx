import React from "react";
// This is to import photo from going back into the assest folder
import flowerBanner from './assets/flower-banner.jpg';

// This is the creation of my Header Component that consists of a creating a intro banner that has Header text and short sentence to introduce to my store
function Header() {
    //The functon of header uses jsx to type html & tailwind to style a header text and paragraphs

    return (


        <div class="relative font-sans before:absolute before:w-full before:h-60 before:inset-0 before:bg-black before:opacity-50 before:z-10">
            {/* Displays the image banner making it absolute */}
            <img src={flowerBanner} alt="Banner Image" class="absolute inset-0 w-full h-60 object-cover" />

            <div class="min-h-[150px] relative z-50 h-60 max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6"> 
                <h2 class="sm:text-4xl text-2xl font-bold mb-6">Welcome to the Flower Store!</h2>
                <p class="sm:text-lg text-base text-center text-gray-200">Find a beautiful bouquets today for your love ones!</p>


            </div>
        </div>

    );
};

export default Header
