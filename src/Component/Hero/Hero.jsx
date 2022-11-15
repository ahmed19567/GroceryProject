import React from 'react'
import './hero.css'
function Hero() {
    return (
        <div className='hero_wrapper'>
            <div className="hero">
            <div className="hero_section1">
                <h1>Welcome to Produce E-commerce</h1>
                <p className='p1'>Lorem ipsum dolor sit, amet consectetur adipisicing 
                    elit. Sapiente libero veritatis distinctio, odit repudiandae 
                    amet vitae impedit saepe fugit at placeat? Magnam expedita voluptatum 
                    quia minus amet ipsa illum saepe!</p>
                <button><p>Learn More</p></button>
                <span className='spn'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem debitis perferendis <br/> provident optio corrupti sunt. Expedita mollitia reiciendis commodi corporis odio <br/> nostrum aperiam sunt!</span>
                <div className="quantity_product">
                    <div className="produt_wrap">
                        <h2>20</h2>
                        <span>Total Products</span>
                    </div>
                    <div className="produt_wrap">
                         <h2>1+</h2>
                        <span>Happy Customers</span>
                    </div>
                </div>
            </div>
            <div className="hero_section2">
            <img src="https://cdn.pixabay.com/photo/2013/07/13/01/22/vegetables-155616_1280.png" alt=""/>
              </div>

            </div>
        </div>
    )
}

export default Hero
