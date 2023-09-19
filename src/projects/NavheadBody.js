import React from 'react'

function NavheadBody() {

  return (
    <div className="offcanvas offcanvas-top bg-dark" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
            <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <h4 className='text-light text-center'>20, OLORUNSOGO STREET, OFF ERUNWON ROAD, ERIGO, IJEBU-ODE OGUNSTATE, NIGERIA,</h4>
        </div>
    </div>
  )
}

export default NavheadBody