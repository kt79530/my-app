import React, { useState } from "react";
import '../css/HoverImage.scss';

const HoverImage = ({ src, alt}) => {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div 
            className="hover-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={"/image/mouset.png"} alt={"클릭"} className="hover-image" />
            {isHovered && <div className="overlay">Click</div>} 
        </div>
    );
};

export default HoverImage;