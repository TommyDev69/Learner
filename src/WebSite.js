import React from 'react'
import NavHead from './projects/NavHead';
import Caurosel from './projects/Caurosel';
import CardSet from './projects/CardSet';
import AdminPage from './projects/AdminPage';
import Frame from './projects/Frame';
import Sponsorsip from './projects/Sponsorsip';

// import Library from './projects/Library';
function WebSite() {
  return (
    <div>
        <NavHead />         
        <Caurosel />
        <CardSet school2='Machine Learning' school3="A.I Learning" school4='Trading' />
        <AdminPage first="ADMIN PORTFOLIO" second='COMPLAINS' third='UPDATES'  /> 

        <Frame />
        <Sponsorsip />


    </div>
  )
}

export default WebSite;