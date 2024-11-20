"use client"
// slider.tsx
import { useEffect, useState } from "react";
import Image from "next/image";
import Pic1 from "../../public/image/pic1.jpg";
import Pic2 from "../../public/image/pic2.jpg";
import Pic3 from "../../public/image/pic3.jpg";
import Pic4 from "../../public/image/pic4.jpg";
import Pic5 from "../../public/image/pic5.jpg";
import Pic6 from "../../public/image/pic6.jpg";
import Pic7 from "../../public/image/pic7.jpg";
import Pic8 from "../../public/image/pic8.jpg";

const images = [
    [Pic1, Pic2],
    [Pic3, Pic4],
    [Pic5, Pic6],
    [Pic7, Pic8],
];

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Automatically cycle through slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 4000); // Slide interval in milliseconds (4 seconds)

        return () => clearInterval(interval);
    }, []);

    // Manual navigation handler
    const handleNavigationClick = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slider">
            <div className="slides" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
                {images.map((pair, index) => (
                    <div className="slide" key={index}>
                        <Image src={pair[0]} alt={`pic${index * 2 + 1}`} width={1000} height={1000} />
                        <Image src={pair[1]} alt={`pic${index * 2 + 2}`} width={1000} height={1000} />
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="navigation">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`line ${currentSlide === index ? "active" : ""}`}
                        onClick={() => handleNavigationClick(index)}
                    ></div>
                ))}
            </div>
            <hr/>
        </div>
    );
}

export default Slider;
