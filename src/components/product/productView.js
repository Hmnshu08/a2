import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useLocation } from 'react-router'
import { useParams } from "react-router-dom";
// import SHOP_DATA from '../../pages/Data/shop.data'
import { Row, Col, Image, PageHeader, Statistic, Typography } from "antd";
const { Paragraph } = Typography

function ProductView() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const { id } = useParams();
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(res.data);
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          {/* <li>id: {product.id}</li> */}
          <Image width={300} src={product.image}></Image>
        </Col>
        <Col span={12}>
          <PageHeader title={product.title} />
          <Statistic value={product.price} prefix="$"></Statistic>
          <Paragraph>{product.description}</Paragraph>
        </Col>
      </Row>
    </div>
  );
}
export default ProductView;

// export const ProductView = props => {

//     // const location = useLocation()
//     // const { fromNotifications } = location.state
//     // console.log(fromNotifications);
//     // console.log(props.item.id);
//     const productId = props.match.params.id;
//     console.log(productId);
//     return (
//         <div>
//             {/* <img alt="product" className="imageSize" src={`${this.item.imageUrl}`} /> */}
//             <div className='footer'>

//                 {/* <span className="name">{props.item.name}</span>
//                 <span className="price">{props.item.price} $ </span>
//                 <span className="description">{props.item.description}</span> */}
//             </div>
//         </div>
//     )
// }
