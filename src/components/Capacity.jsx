import React, {useEffect, useState} from 'react'
import CapacityWrapper from './CapacityWrapper'
import axios from 'axios'

const Capacity = ({capacityType}) => {

  const [items, setItems] = useState([])
  console.log(items)

  useEffect(() => {
    axios.get(`http://localhost:3030/${capacityType}`)
    .then(res => setItems(res.data))
    .catch(err => console.log(err))
  }, [capacityType])
  

  return (
    <div>{capacityType === 'ram' ? 
      (<CapacityWrapper capacityType={capacityType}>List RAM capacities</CapacityWrapper> ) : 
      (<CapacityWrapper capacityType={capacityType}>List SSD capacities</CapacityWrapper>) 
    }</div>
  )
}

export default Capacity