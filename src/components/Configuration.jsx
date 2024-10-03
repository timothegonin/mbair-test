import React from 'react'
import ProductInfos from './ProductInfos'
import Capacity from './Capacity'

const Configuration = () => {
  return (
    <>
      <ProductInfos/>
      <Capacity capacityType='ram'/>
      <Capacity capacityType='ssd'/>
    </>
  )
}

export default Configuration