import React from "react";
// Importing photo from the assets folder
import flowerfooter from './assets/footer-flowers.png';

// Footer Component
function Footer() {
    return (
        <div className="relative font-sans flex flex-col min-h-screen mt-10">
            {/* Main content area */}
            <div className="flex-grow"></div>

            <div className="relative">
                {/* Image banner, covering the entire footer section */}
                <img src={flowerfooter} alt="Footer Image" className="absolute inset-0 w-full h-50 object-cover bg-violet-950/[.7]" />

            </div>
        </div>
    );
}

export default Footer;
