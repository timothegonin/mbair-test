import React from 'react'
import ProductInfos from './ProductInfos'
import Capacity from './Capacity'
import Validation from './Validation'

const Configuration = () => {
  return (
    <>
      <ProductInfos/>
      <Capacity capacityType='ram'/>
      <Capacity capacityType='ssd'/>
      <Validation/>
    </>
  )
}

export default Configuration