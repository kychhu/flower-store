import React from "react";
// Importing flower footer img from the assets folder
import flowerfooter from './assets/footer-flowers.png';

// Footer Component
function Footer() {
    return (
        <div className="relative font-sans flex flex-col">
            {/* Image banner, covering the entire footer section */}
            <img src={flowerfooter} alt="Footer Image" className="w-full h-32 object-cover" />
        </div>
    );
}
// Exporting it so that we can use this component on other page
export default Footer;
