import React from 'react'
import myPic from '../imageStorage/mjay.jpg'
const AdminCont = ({details, profession}) => {
  return(
    <div class="card-body ">
        <h3 class="card-title">BIOGRAGPHY</h3>
        <div class="card mb-3" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={myPic} class="img-fluid rounded-start change" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">{details}</h3>
                        <h6 class="card-text">{profession}</h6>
                        <p class="card-text">Any fool can write code that a computer can understand. Good programmers write 
                        code that humans can understand. Experience is the name everyone gives to their mistakes so 
                        Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code and
                        Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. therefore Simplicity is the soul of efficiency
                        </p>
                        <p class="card-text text-white "><small class="text-body-secondary" style={{fontWeight:'bold', color:"blue", fontStyle:'italic'}}>Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>               
  )
}

export default AdminCont
