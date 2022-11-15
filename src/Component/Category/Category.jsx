import React from 'react'
import {Link} from 'react-router-dom'
import './category.css'

function Category() {
    return (
        <div className='category_wrapper'>
            <div className="category">
                <h3>Shop by product</h3>
                <div className="category_wrap">

               
                <div className="category_container">
                    <div className="image">
                    <img src="https://cdn.pixabay.com/photo/2014/12/21/23/34/cherry-575547_1280.png" alt=""/>
                     </div>
                    <p className='p'>Fruits</p>
                </div>
                <div className="category_container">
                    <div className="image">
                        <img src="https://www.dole.com/-/media/project/dole/produce-images/headers/dole-produce-veg-medley.png?rev=e9e55201dbc6451e91cfd7d73d7cdb06&hash=CC1AFA2C5EC625A80EA224E1232FE39B" alt=""/>
                     </div>
                    <p className='p'>Vegetables</p>
                </div>
                <div className="category_container">
                    <div className="image">
                        <img src="https://media.istockphoto.com/photos/glass-of-milk-picture-id1206080627?k=20&m=1206080627&s=612x612&w=0&h=NfdmNI8WYa5Kd7zMCqpZ8hFkakQCWzkv9aD9r5yhdRw=" alt=""/>
                      </div>
                    <p className='p'>Dairy</p>
                </div>
                <div className="category_container">
                    <div className="image">
                        <img src="https://www.halalmeat.delivery/wp-content/uploads/2019/12/meat-2.png" alt=""/>
                      </div>
                    <p className='p'>Meat</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Category
