
import React from 'react'
import './cardlist.css';
import { Card } from '../card/card'
export const Cardlist = props => (
    <div className="cardlist">
        {
            props.productData.map(item => (
                <Card key={item.id} item={item} />
            ))
        }
    </div>
)

