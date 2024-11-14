import React, {useEffect, useState} from 'react'
import CapacityWrapper from './CapacityWrapper'
import RamCapacities from './RamCapacities'
import axios from 'axios'
import SsdCapacities from './SsdCapacities'
import AlertNotification from './AlertNotification'
import useAndCheckMacBookDetails from '../providers/useAndCheckMacBookDetails'

const Capacity = ({capacityType}) => {

  const [items, setItems] = useState([])
  const [error, setError] = useState(false)
  console.log(items)

  const {handleRamChange, handleSsdChange, productInfos} = useAndCheckMacBookDetails()

  useEffect(() => {
    axios.get(`http://localhost:3030/${capacityType}`)
    .then(res => setItems(res.data))
    .catch(err => setError('Error'))
  }, [capacityType])
  
  if(error) {
    return <AlertNotification/>
  }

  return (
    <div>{capacityType === 'ram' ? 
      (<CapacityWrapper capacityType={capacityType}>
        <select className='form-select form-select-outline w-50' aria-label='Default select' onChange={handleRamChange}>
          {
            items.map(capacity => {
              return (
                <RamCapacities key={capacity.id} option={capacity.option} price={capacity.price}/>
              )
            })
          }
        </select>
      </CapacityWrapper> ) : 
      (<CapacityWrapper capacityType={capacityType}>
        {
          items.map(capacity => {
            return ( 
            <SsdCapacities key={capacity.id} id={capacity.id} label={capacity.label} price={capacity.price} selectedSsd={productInfos.inputSsd} handleSsdChangeFunc={handleSsdChange}/>
          )})
        }
      </CapacityWrapper>) 
    }</div>
  )
}

export default Capacity