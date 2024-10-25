import React, {useState} from 'react'
import { MacBookContext } from './context' 


const MacBookProviders = (props) => {

  const initialState = {
    macBookAirPrice: 1199.0,
    capacityRam:'8 Go',
    capacitySsd:'256 Go',
    ram: 0,
  }

  const [productInfos, setProductInfos] = useState(initialState)

  const handleRamChange = (event) => {
    const ramCapacity = parseInt(event.target.value)
    setProductInfos((prevState) => ({
      ...prevState,
      ram: ramCapacity
    }))
  }

  const subTotal = productInfos.macBookAirPrice + productInfos.ram

  const value = {subTotal,handleRamChange,productInfos}

  return (
    <MacBookContext.Provider value={value} {...props} />
  )
}

export default MacBookProviders