import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { useParams } from 'react-router-dom';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';

const Product = () => {
  const {all_prodduct}= useContext(ShopContext);
  const {productId} = useParams();
  const product = all_prodduct.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <Product Display product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
