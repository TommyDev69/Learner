import React, { Component } from 'react'
import AdminCont from './AdminCont'
class AdminPage extends Component {
  render() {
    const {first, second, third} = this.props
    return (
        <div class="card text-center mt-4 cardet"  style={{width:'96%', marginLeft:'2%'}}>
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                       <p class="nav-link active text" aria-current="true" href="#">{first}</p>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text text-dark" href="#">{second}</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text text-dark">{third}</a>
                    </li>
                </ul>
            </div>
          <AdminCont details='AJAGBE ADETOMIWA MAKANJUOLA' profession='Software developer'/>
      </div>
    )
  }
}

export default AdminPage