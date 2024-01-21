import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '243.99px'
}
const slideImages = [
    {
        url: 'https://cf.shopee.vn/file/vn-50009109-bbab7dc40c598d507fd360b44e2c7ff6_xxhdpi',
    },
    {
        url: 'https://cf.shopee.vn/file/vn-50009109-8120b6771d51096450577e1b2c1f5d65_xxhdpi',
    },
    {
        url: 'https://cf.shopee.vn/file/vn-50009109-414abfcecb10a3f94ce98da30aa2cc9c_xxhdpi',
    },
];

const Slideshow = () => {
    return (
        <div className="slide-container w-[800px]">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}
export default Slideshow