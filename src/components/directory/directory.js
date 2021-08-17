import React, { Component } from 'react'
import { Cardlist } from '../cardlist/cardlist'


class Directory extends Component {

    constructor(props) {
        super(props)

        this.state = {
            productData: [
                {
                    id: 1,
                    name: 'Brown Brim',
                    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                    price: 25,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam. Proin nibh nisl condimentum id venenatis a condimentum.'
                },
                {
                    id: 2,
                    name: 'Blue Beanie',
                    imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                    price: 18,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam. Proin nibh nisl condimentum id venenatis a condimentum.'
                },
                {
                    id: 3,
                    name: 'Brown Cowboy',
                    imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                    price: 35,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam. Proin nibh nisl condimentum id venenatis a condimentum.'
                },
                {
                    id: 4,
                    name: 'Grey Brim',
                    imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                    price: 25,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam. Proin nibh nisl condimentum id venenatis a condimentum.'
                },
                {
                    id: 5,
                    name: 'Green Beanie',
                    imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                    price: 18,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam. Proin nibh nisl condimentum id venenatis a condimentum.'
                },
                {
                    id: 6,
                    name: 'Palm Tree Cap',
                    imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                    price: 14,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam. Proin nibh nisl condimentum id venenatis a condimentum.'
                },
                {
                    id: 7,
                    name: 'Red Beanie',
                    imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                    price: 18,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam. Proin nibh nisl condimentum id venenatis a condimentum.'
                },
                {
                    id: 8,
                    name: 'Wolf Cap',
                    imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                    price: 14,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam. Proin nibh nisl condimentum id venenatis a condimentum.'
                },
                {
                    id: 9,
                    name: 'Blue Snapback',
                    imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                    price: 16,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam. Proin nibh nisl condimentum id venenatis a condimentum.'
                },
                {
                    id: 10,
                    name: 'Black Jean',
                    imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
                    price: 125,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam. Proin nibh nisl condimentum id venenatis a condimentum.'
                }
            ]
        }

    }


    render() {
        return (
          <Cardlist productData={this.state.productData}></Cardlist>
        )
        
    }
}
export default Directory
