import React from 'react'
import macbookAir from '../images/macbook-air.jpeg'
import useAndCheckMacBookDetails from '../providers/useAndCheckMacBookDetails'

const ProductInfos = () => {
  const {productInfos} = useAndCheckMacBookDetails()
  return (
    <>
      <div className="col-md-6 mt-3">
        <div className='bg-white p-3 d-flex flex-column' style={{borderRadius: '14px'}}>
          <div className='text-center mt-4'>
            <img 
              src={macbookAir}
              alt="macbookAir"
              className='img-fluid'
              width="350"
            />
          </div>
          <h5 className='mt-4'>MacBook Air - Gris sidéral</h5>
          <h4 className='green'>1199,00 €</h4>
        </div>
      </div>
      <div className="col-md-6 mt-3">
      <div className='bg-white p-3 d-flex flex-column' style={{borderRadius: '14px'}}>
          <h3>Personnalisez votre MacBook Air - Gris sidéral</h3>
          <ul className='list-unstyled'>
            <li>Puce Apple M1 avec CPU 8 coeurs, Neutral Engine 16 coeurs</li>
            <li>{productInfos.capacityRam} de mémoire unifiée</li>
            <li>SSD de {productInfos.capacitySsd}</li>
            <li>Ecran Retina 15 pouces avec True Tone</li>
            <li>Deux ports Thunderbolt/USB 4</li>
            <li>Adaptateur USB-C 30 W</li>
            <li>Magic Keuboard rétroéclairé avec Touch ID - Français</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProductInfos