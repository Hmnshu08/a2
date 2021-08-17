import React from 'react'
import { Link, Router } from 'react-router-dom';
import { Button, Space } from 'antd';
import './card.css';
export const Card = props => {
    return (
        <div className="card-container">
            <img alt="product" className="imageSize" src={`${props.item.imageUrl}`} />

            <div className='footer'>
                <span className="name">{props.item.name}</span>
                <span className="price">{props.item.price} $ </span>
            </div>
            <Space size={100}>
                <Button type="primary">Buy</Button>
                <Link className="ant-btn ant-btn-primary" 
                // to={`product/productView/${props.item.id}`}
                to={{
                    pathname: `product/productView/${props.item.id}`,
                    state: {
                      fromNotifications: true,
                    },
                  }}
                >View</Link>
            </Space>



        </div>
    )
}
