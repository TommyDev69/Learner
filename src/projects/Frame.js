import React from 'react'
import Playant from '../imageStorage/How Life Will Look Like In 2050.mp4';
import MapLocatiiions from '../imageStorage/maplocation.png'
function Frame() {
  return (
    <div className=' container-md-fluid mt-3' >
      <div className='row' >

          <div className='col-6'>
            <iframe src={`${Playant}`} style={{ width: "95%", marginLeft: '25px', height: '320px' }} title="Embedded youtube" />
          </div>

          <div className='col-6'>
            <img src={MapLocatiiions} alt='..' style={{ width: "95%", height: '320px' }} />
          </div>
       
      </div>
    </div>
  )
}

export default Frame