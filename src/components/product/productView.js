import React from 'react'
import { useLocation } from 'react-router'

export const ProductView = props => {

    const location = useLocation()  
    const { fromNotifications } = location.state
    console.log(fromNotifications);
    return (
        <div>
            {/* <img alt="product" className="imageSize" src={`${this.item.imageUrl}`} /> */}
            <div className='footer'>
                
                {/* <span className="name">{props.item.name}</span>
                <span className="price">{props.item.price} $ </span>
                <span className="description">{props.item.description}</span> */}
            </div>
        </div>
    )
}
