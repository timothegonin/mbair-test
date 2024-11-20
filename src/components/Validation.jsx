import React from 'react'

const Validation = ({setStep,nextLevel}) => {
  const handleNextStep = () => {
    setStep(nextLevel)
  }

  return (
    <div className='col-sm-12 mt-3 d-flex'>
      <div className='ms-auto' style={{borderRadius: "14px"}}>
        <input 
          type="button" 
          value="Valider" 
          className='btn mt-2 btn-success' 
          style={{borderRadius: "7px", width:"200px"}}
          onClick={handleNextStep}
        />
      </div>
    </div>
  )
}

export default Validation