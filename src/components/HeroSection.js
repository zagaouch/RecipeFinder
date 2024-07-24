import React from 'react';
import CustomImages from './Customimages';
export default function HeroSection(){
    const image = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ]

    return(
        <div className='section hero'>
            <div className='col typography'>
                <h1 className='title'>About recipe finder</h1>
                <p className='info'>ecipe Finder is a versatile app designed to revolutionize your culinary experience. By simply entering the ingredients you have on hand, the app suggests a variety of recipes you can create, minimizing food waste and maximizing creativity in the kitchen. With an extensive database of recipes from around the world, personalized recommendations based on your dietary preferences, and easy-to-follow instructions, Recipe Finder makes cooking both fun and accessible for everyone, from novice cooks to seasoned chefs.</p>
                <button className='btn'>Get started</button>
            </div>
            <div className='col gallery'>
                {image.map((src , index)=> (
                    <CustomImages key = {index} imgSrc={src} pt={"90%"} />
                ))}
                
            </div>
        </div>
    )
}