import React from 'react'
import LandingAdmin from '../components/organims/LandingAdmin'
import HeaderAdmin from '../components/organims/HeaderAdmin'

function HomeAdmin() {
  return (
    <>  
      <main className=''>
        <HeaderAdmin/>
        <div className='pt-28'>
          <LandingAdmin/>
        </div>
      </main>
    </>
  )
}

export default HomeAdmin