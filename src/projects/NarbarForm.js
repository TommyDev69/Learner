import React from 'react'

const NarbarForm = (props) => {
  const {namer} = props
  return (
  
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">{namer}</button>
     </form>
      
    
  )
}

export default NarbarForm 