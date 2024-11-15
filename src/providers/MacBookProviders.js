import React, {useState} from 'react'
import { formatSsdString } from "../utilities"
import { MacBookContext } from './context' 


const MacBookProviders = (props) => {

  const initialState = {
    macBookAirPrice: 1199.0,
    capacityRam:'8 Go',
    capacitySsd:'256 Go',
    ram: 0,
    ssd: 0,
    inputSsd: 0,
  }

  const [productInfos, setProductInfos] = useState(initialState)

  const handleRamChange = (event) => {
    const ramCapacity = parseInt(event.target.value)
    const ramOption = event.target.options[event.target.selectedIndex].text
    const ramQuantity = ramOption.substring(0, ramOption.indexOf("Go") + 2)

    setProductInfos((prevState) => ({
      ...prevState,
      capacityRam: ramQuantity,
      ram: ramCapacity
    }))
  }

  const handleSsdChange = (event) => {
    const ssdCapacity = parseInt(event.target.value)
    const ssdId = event.target.id
    const formatedSsdString = formatSsdString(ssdId)
    setProductInfos((prevState) => ({
      ...prevState,
      capacitySsd: formatedSsdString,
      ssd: ssdCapacity,
      inputSsd: ssdCapacity
    }))
  }

  const subTotal = productInfos.macBookAirPrice + (productInfos.ram + productInfos.ssd)

  const value = {subTotal,handleRamChange,handleSsdChange,productInfos}

  return (
    <MacBookContext.Provider value={value} {...props} />
  )
}

export default MacBookProviders