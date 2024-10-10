import React, {useEffect, useState} from 'react'
import CapacityWrapper from './CapacityWrapper'
import RamCapacities from './RamCapacities'
import axios from 'axios'
import SsdCapacities from './SsdCapacities'

const Capacity = ({capacityType}) => {

  const [items, setItems] = useState([])
  const [ssd, setSsd] = useState(0)
  console.log(items)

  const handleSsdChange = (e) => {
    setSsd(+e.target.value)
  }

  useEffect(() => {
    axios.get(`http://localhost:3030/${capacityType}`)
    .then(res => setItems(res.data))
    .catch(err => console.log(err))
  }, [capacityType])
  

  return (
    <div>{capacityType === 'ram' ? 
      (<CapacityWrapper capacityType={capacityType}>
        <select className='form-select form-select-outline w-50' aria-label='Default select' onChange={(() => {})}>
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
            <SsdCapacities key={capacity.id} id={capacity.id} label={capacity.label} price={capacity.price} selectedSsd={ssd} handleSsdChangeFunc={handleSsdChange}/>
          )})
        }
      </CapacityWrapper>) 
    }</div>
  )
}

export default Capacity